---
id: hive
title: Apache Hive
---

## hive 설치 및 셋팅

### 1. hive 3.1.3 다운로드
<div style={{marginLeft:'3.5rem'}}>
```bash
wget https://archive.apache.org/dist/hive/hive-3.1.3/apache-hive-3.1.3-bin.tar.gz
```
</div>
<div style={{marginLeft:'3.5rem'}}>
```bash
tar -vxzf apache-hive-3.1.3-bin.tar.gz
```
</div>

### 2. 환경변수 설정
<div style={{marginLeft:'3.5rem'}}>
```bash
vi /etc/profile 
```
</div>
<div style={{marginLeft:'3.5rem'}}>
```bash
export HIVE_HOME="/usr/local/hadoop/hive/apache-hive-3.1.3-bin"
export PATH=$PATH:$HIVE_HOME/bin
```
</div>

### 3. HDFS와 hive의 상호작용을 위한 설정
<div style={{marginLeft:'3.5rem'}}>
```bash
vi $HIVE_HOME/bin/hive-config.sh 
```
</div>
<div style={{marginLeft:'3.5rem'}}>
```bash
export HADOOP_HOME=/usr/local/hadoop//hadoop-3.3.4 
```
</div>

### 4. property 추가
<ul style={{marginLeft:'3rem'}}>
    <li>cd $HIVE_HOME/conf</li>
    <li>mv hive-default.xml.template hive-site.xml </li>
    <li>vi hive-site.xml </li>
</ul>
<div style={{marginLeft:'3.5rem'}}>
```bash
<property>
    <name>system:java.io.tmpdir</name> 
    <value>/tmp/hive/java</value> 
</property> 
<property> 
  <name>system:user.name</name> 
  <value>${user.name}</value> 
</property>
```
</div>

### 5. javax.jdo 수정
<ul style={{marginLeft:'3rem'}}>
    <li>vi $HIVE_HOME/conf/hive-site.xml</li>
    <li>파일 내에서  /ConnectionURL 검색</li>
    <li>value 값 수정</li>
    <li>hive 설치 경로에 따라 derby:/ 경로는 유동적으로 변경</li>
</ul>
<div style={{marginLeft:'3.5rem'}}>
```bash
jdbc:derby:/usr/local/hadoop/hive/apache-hive-3.1.3-bin/metastore_db;databaseName=metastore_db;create=true 
```
</div>

### 6. vi $HIVE_HOME/conf/hive-site.xml 파일 내 특수문자가 있는 부분 삭제
<ul style={{marginLeft:'3rem'}}>
    <li>/&#8; 로 검색 후 찾아서 해당 부분 삭제</li>
</ul>

### 7. derby database 시작
<ul style={{marginLeft:'3rem'}}>
    <li>$HIVE_HOME/bin/schematool -initSchema -dbType derby</li>
    <li>rm -rf $HIVE_HOME/metastore_db # 하이브 종료</li>
</ul>
<div style={{marginLeft:'3.5rem'}}>
```bash
$HIVE_HOME/bin/schematool -initSchema -dbType derby
```
</div>

### 8. 샘플 데이터 다운로드
<ul style={{marginLeft:'3rem'}}>
    <li>wget https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/samples/features.zip</li>
    <li>unzip features.zip</li>
    <li>head features.txt</li>
</ul>
<div style={{marginLeft:'3.5rem'}}>
```bash
wget https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/samples/features.zip
```
</div>

### 9. HADOOP_CLASSPATH 속성 추가
<ul style={{marginLeft:'3rem'}}>
    <li>vi /etc/profile</li>
    <li>export HADOOP_CLASSPATH=$(hadoop classpath)</li>
    <li>source /etc/profile</li>
</ul>
<div style={{marginLeft:'3.5rem'}}>
```bash
export HADOOP_CLASSPATH=$(hadoop classpath)
```
</div>

### 10. mapred-site.xml 수정
<ul style={{marginLeft:'3rem'}}>
    <li>echo HADOOP_CLASSPATH 출력 된 결과를 복사</li>
    <li>vi $HADOOP_HOME/etc/hadoop/mapred-site.xml</li>
</ul>
<div style={{marginLeft:'3.5rem'}}>
```bash
<property> 
    <name>mapreduce.application.classpath</name>
    <value>{복사한 값 추가}</value> 
</property>
```
</div>

### 11. hive 실행 후 테이블 생성
<ul style={{marginLeft:'3rem'}}>
    <li>hive (hive 접속)</li>
</ul>
<div style={{marginLeft:'3.5rem'}}>
```bash
CREATE TABLE hive_features
    (feature_id             BIGINT,
    feature_name            STRING ,
    feature_class           STRING ,
    state_alpha             STRING,
    prim_lat_dec            DOUBLE ,
    prim_long_dec           DOUBLE ,
    elev_in_ft              BIGINT)
    ROW FORMAT DELIMITED
    FIELDS TERMINATED BY '|'
    LINES TERMINATED BY '\n';
```
</div>

### 12 샘플 데이터 로드
<div style={{marginLeft:'3.5rem'}}>
```bash
LOAD DATA
    LOCAL
    INPATH './features.txt'
    OVERWRITE
    INTO TABLE hive_features;
```
</div>

### 13. 쿼리 실행
<div style={{marginLeft:'3.5rem'}}>
```bash
SELECT * FROM hive_features;
SELECT state_alpha, COUNT(*) FROM hive_features GROUP BY state_alpha;
```
</div>

### 14. hdfs 안전모드 해재
<div style={{marginLeft:'3.5rem'}}>
```bash
hdfs dfsadmin -safemode leave
```
</div>
### 15. hive 9083 포트 실행
<div style={{marginLeft:'3.5rem'}}>
```bash
hive --service metastore &
```
</div>