import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import videoBackground from '../../static/img/background.mp4';
import { MyInfo } from "./Info/myInfo";
import { History } from "./Info/history";
import { Skill } from "./Info/skill";
import arrowRight from '../../static/img/blog/arrowRight.png';
import arrowLeft from '../../static/img/blog/arrowLeft.png';

function Home() {
  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);
  const [currentStep, setCurrentStep] = useState(0);  // 0: MyInfo, 1: History, 2: Skill

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  const handleArrowRightClick = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1); 
    }
  };

  const handleArrowLeftClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);  
    }
  };

  return (
    <Layout title="Home">
      <header>
        <div style={{ position: 'relative' }}>
          <div className={styles.videoContainer}>
            <video className={styles.videoStyle} src={videoBackground} autoPlay loop muted />
          </div>

          {currentStep === 0 && (
            <div className={styles.myInfoContainer}>
              <MyInfo />
            </div>
          )}

          {/* 오른쪽 화살표 클릭 시 다음 컴포넌트로 이동 */}
          <div className={styles.styleArrow} onClick={handleArrowRightClick}>
            <img 
              src={arrowRight} 
              className={styles.arrowImg} 
              alt="Arrow" 
              style={{ filter: 'invert(100%) brightness(100%)' }} 
            />
          </div>

          {/* 왼쪽 화살표 클릭 시 이전 컴포넌트로 이동 */}
          <div className={styles.styleArrow2} onClick={handleArrowLeftClick}>
            <img 
              src={arrowLeft} 
              className={styles.arrowImg} 
              alt="Arrow" 
              style={{ filter: 'invert(100%) brightness(100%)' }} 
            />
          </div>

          {currentStep === 1 && (
            <div className={styles.myInfoContainer2} style={{ width: '54.5rem', height: '33.5rem' }}>
              <History />
            </div>
          )}

          {currentStep === 2 && (
            <div className={styles.myInfoContainer2} style={{ width: '54.5rem', height: '33.5rem' }}>
              <Skill />
            </div>
          )}
        </div>
      </header>

      <main id="main" ref={mainRef} hidden={isLoading}>
      </main>
    </Layout>
  );
}

export default Home;
