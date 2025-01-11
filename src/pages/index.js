import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import videoBackground from '../../static/img/background.mp4';
import { MyInfo } from "./Info/myInfo";

function Home() {
  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);
  const [isModalOpen, setIsModalOpen] = useState(false);  

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);


  return (
    <Layout title="Home">
      <header>
          <div>
            <div className={styles.videoContainer}>
                <video className={styles.videoStyle} src={videoBackground} autoPlay loop muted />
            </div>
            <div className={styles.myInfoContainer}>
                <MyInfo />
            </div>
        </div>
      </header>


      <main id="main" ref={mainRef} hidden={isLoading}>
      </main>
    </Layout>
  );
}

export default Home;
