import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import index from "./index.module.css";

function Home() {
  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

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
          <div className={index.indexHome} >
              <h3>Daily Schedule</h3>
              <div>
                  <ul>
                      <li className={index.schedule}>
                          <div className={index.scheduleHeader}>기상 및 작업 준비</div>
                          <div className={index.scheduleBody}>5:00 am ~ 05:20 am</div>
                          <div className={index.verticalLine}></div> 
                      </li>
                      <li className={index.schedule}>
                          <div className={index.scheduleHeader}>홈 트레이닝</div>
                          <div className={index.scheduleBody}>05:20 am ~ 06:00 am</div>
                          <div className={index.verticalLine2}></div> 
                      </li>
                      <li className={index.schedule}>
                          <div className={index.scheduleHeader}>자기 개발 진행</div>
                          <div className={index.scheduleBody}>06:00 am ~ 08:00 am</div>
                          <div className={index.verticalLine3}></div> 
                      </li>
                      <li className={index.schedule}>
                          <div className={index.scheduleHeader}>출근 준비</div>
                          <div className={index.scheduleBody}>08:00 am ~ 08:20 am</div>
                          <div className={index.verticalLine4}></div> 
                      </li>
                      <li className={index.schedule}>
                          <div className={index.scheduleHeader}>출근 및 회사 업무 진행</div>
                          <div className={index.scheduleBody}>09:00 am ~ </div>
                          <div className={index.verticalLine5}></div> 
                      </li>
                  </ul>
              </div>
          </div>
      </header>
      <main id="main" ref={mainRef} hidden={isLoading}>
      </main>
    </Layout>
  );
}

export default Home;