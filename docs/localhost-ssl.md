---
id: localhost-ssl
title: localhost ssl 생성
---

### Tomcat localhost ssl 생성 및 적용


### 1. /etc/pki/tls/certs 경로로 이동
### 2. keytool -genkey -alias tomcat -keyalg RSA -keystore /etc/pki/tls/certs/인증서명.jks 
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