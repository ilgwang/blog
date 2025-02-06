---
id: localhost-ssl
title: localhost ssl 생성
---

## Tomcat localhost ssl 생성 및 적용


### 1. jks 파일 생성 경로로 이동
<div style={{marginLeft:'1.5rem'}}>
```bash
etc/pki/tls/certs
```
</div>
### 2. jks 파일 생성
<div style={{marginLeft:'1.5rem'}}>
```bash
keytool -genkeypair -alias basex -keyalg RSA -keystore 인증서명.jks -validity 365 -keysize 2048
```
</div>

### 3. server.xml 설정 추가
<div style={{marginLeft:'1.5rem'}}>
```bash
 <Connector port="443" protocol="org.apache.coyote.http11.Http11NioProtocol"
    SSLEnabled="true"
    maxThreads="150"
    scheme="https"
    secure="true"
    keystoreFile="/etc/pki/tls/certs/인증서명.jks"
    keystorePass="인증서 비밀번호"
    clientAuth="false"
    sslProtocol="TLS"
/>
```
</div>