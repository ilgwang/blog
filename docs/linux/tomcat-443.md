---
id: tomcat-443
title: root 이외의 계정으로 1024 포트 기동
---
## root 이외의 계정으로 1024 포트 기동

### 1. root 이외의 계정으로 java -version 접근시 에러 발생 
<div style={{marginLeft:'1.5rem'}}>
```bash
java: error while loading shared libraries: libjli.so: cannot open shared object file: No such file or directory
sslProtocol="TLS"
/>
```
</div>

### 2. which java
### 3. setcap 
<div style={{marginLeft:'1.5rem'}}>
```bash
setcap 'cap_net_bind_service=+ep' $(readlink -f $(which java))
```
</div>

### 4. getcap
<div style={{marginLeft:'1.5rem'}}>
```bash
getcap  $(readlink -f $(which java))
```
</div>

### 5. java.conf 파일 설정 (vi /etc/ld.so.conf.d/java.conf)
<div style={{marginLeft:'1.5rem'}}>
아래 내용 복사 후 추가
```bash
/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.322.b06-11.el8.x86_64/lib/amd64/jli
```
</div>

### 6. ldconfig 
<div style={{marginLeft:'1.5rem'}}>
위에 수정 내용 서버에 적용
</div>

