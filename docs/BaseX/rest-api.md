---
id: rest-api
title: Rest Api
---
## Rest Api
### 1. Test Code
<div style={{marginLeft:'-1rem'}}>
```bash
import javax.net.ssl.*;
import java.io.*;
import java.security.*;
import java.security.cert.*;
import java.net.*;
import java.util.Base64;

public class TestTLS {
    public static void main(String[] args) throws Exception {
        // JKS 경로 및 비밀번호 설정
        String keystorePath = "path/to/your/keystore.jks"; // JKS 경로
        String keystorePassword = "your_keystore_password"; // JKS 비밀번호
        enableCertificateValidation(keystorePath, keystorePassword);

        URL url = new URL("https://{host}:8984/rest?query=collection('vdb_0/log4j2_local.xml')//property[@name='pattern']/text()");
        HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
        conn.setRequestMethod("GET");

        String user = "admin";
        String pw = "admin";
        String encoded = Base64.getEncoder().encodeToString((user + ":" + pw).getBytes());
        conn.setRequestProperty("Authorization", "Basic " + encoded);

        int responseCode = conn.getResponseCode();
        System.out.println("HTTP response: " + responseCode);

        if (responseCode == HttpURLConnection.HTTP_OK) {
            InputStreamReader in = new InputStreamReader(conn.getInputStream());
            BufferedReader reader = new BufferedReader(in);
            String inputLine;
            StringBuilder response = new StringBuilder();
            while ((inputLine = reader.readLine()) != null) {
                response.append(inputLine);
            }
            reader.close();
            System.out.println("Response: " + response.toString());
        } else {
            System.out.println("Failed to get response");
        }
        conn.disconnect();
    }

    private static void enableCertificateValidation(String keystorePath, String keystorePassword) {
        try {
            KeyStore keyStore = KeyStore.getInstance("JKS");
            FileInputStream fis = new FileInputStream(keystorePath);
            keyStore.load(fis, keystorePassword.toCharArray());
            fis.close();

            TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
            trustManagerFactory.init(keyStore);

            SSLContext sc = SSLContext.getInstance("TLS");
            sc.init(null, trustManagerFactory.getTrustManagers(), new SecureRandom());
            HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());

            HttpsURLConnection.setDefaultHostnameVerifier((hostname, session) -> {
                return hostname.equals(session.getPeerHost());
            });

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

```
</div>