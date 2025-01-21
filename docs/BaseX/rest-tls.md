---
id: rest-tls
title: Rest Api TLS 무시
---
## Rest Api TLS 무시
### 1. Test Code
<div style={{marginLeft:'-1rem'}}>
```bash
import java.net.*;
import java.util.Base64;
import java.io.*;
import javax.net.ssl.*;

public class Test3 {
    public static void main(String[] args) throws Exception {
        disableSSLCertificateChecking();

        URL url = new URL("https://{host}:8984/rest?query=collection('vdb_0/log4j2_local.xml')//property[@name='pattern']/text()");

        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");

        String user = "admin";
        String pw = "admin";
        String encoded = Base64.getEncoder().encodeToString((user + ":" + pw).getBytes());
        conn.setRequestProperty("Authorization", "Basic " + encoded);

        int responseCode = conn.getResponseCode();
        System.out.println("HTTP response: " + responseCode);

        if (responseCode == HttpURLConnection.HTTP_OK) { // Check for successful response
            InputStreamReader in = new InputStreamReader(conn.getInputStream());
            BufferedReader reader = new BufferedReader(in);
            String inputLine;
            StringBuilder response = new StringBuilder();

            while ((inputLine = reader.readLine()) != null) {
                response.append(inputLine);
            }

            reader.close();
            conn.disconnect();

            System.out.println("XQuery Response: ");
            System.out.println(response.toString());
        } else {
            System.out.println("Failed to get response");
            conn.disconnect();
        }
    }

    // Disable SSL verification
    private static void disableSSLCertificateChecking() {
        try {
            TrustManager[] trustAllCertificates = new TrustManager[]{
                new X509TrustManager() {
                    public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                        return null;
                    }

                    public void checkClientTrusted(
                            java.security.cert.X509Certificate[] certs, String authType) {
                    }

                    public void checkServerTrusted(
                            java.security.cert.X509Certificate[] certs, String authType) {
                    }
                }
            };

            SSLContext sc = SSLContext.getInstance("TLS");
            sc.init(null, trustAllCertificates, new java.security.SecureRandom());
            HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());

            HttpsURLConnection.setDefaultHostnameVerifier((hostname, session) -> true);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

```
</div>