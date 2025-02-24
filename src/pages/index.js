
import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import index from "./index.module.css";
import githubImage from '../../static/img/blog/githubImage.png';
import gmailImage from '../../static/img/blog/gmail-icon-free-png.webp';
import myInfoImage from '../../static/img/blog/myInfoImage.png';
import { Link } from 'react-router-dom';
import mermaid from 'mermaid';

function Home() {
    const mainRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(1536);
    const [bannerHeight, setBannerHeight] = useState(256);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [careerDuration, setCareerDuration] = useState("");

    useEffect(() => {
        const tempHeaderHeight = Math.max(384, window.innerHeight);
        setHeaderHeight(tempHeaderHeight);
        setBannerHeight(Math.max(256, tempHeaderHeight / 2));
        setIsLoading(false);
        if (mainRef.current) {
            mainRef.current.hidden = false;
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000 * 60 * 60 * 12);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const startDate = new Date(2022, 0, 1); // 2022년 1월 1일
        const today = new Date();

        const diffYears = today.getFullYear() - startDate.getFullYear();
        const diffMonths = today.getMonth() - startDate.getMonth();

        let years = diffYears;
        let months = diffMonths;

        if (diffMonths < 0) {
            years -= 1;
            months += 12;
        }

        setCareerDuration(`${years}년 ${months}개월`);
    }, []);


    useEffect(() => {
        if (typeof window !== 'undefined') {
        mermaid.initialize({ startOnLoad: true });
        }
    }, []);


  return (
    <Layout title="Home">
      <header>
        <div className={index.multi_bg_example}>
            <div className={index.indexHome} >
                <h3>Daily Schedule</h3>
                <div>
                    <ul>
                        <li className={index.schedule}>
                            <div className={index.scheduleHeader}>기상</div>
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
            <div className={index.calendarIcon}>
                <div>
                    안녕하세요. <br/><span id={index.profileName}> 최일광</span> 입니다.
                </div>
                <div>
                    주니어 웹 개발자로서 끊임없이 배우고 성장하고 있습니다. 
                </div>
                <div className={index.githubImage}>
                    <a href="https://github.com/ilgwang" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <img src={githubImage} className={index.profileStyle} />
                    </a>
                    <a href="mailto:ig95@gmail.com" title="Gmail">
                        <img src={gmailImage} className={index.profileStyle2} />
                    </a>
                    <Link to="/docs">
                        <img src={myInfoImage} className={index.profileStyle3} />
                    </Link>
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <div style={{fontSize:'23px',fontWeight:'bold'}}>{currentTime.toLocaleDateString().replace(/\.$/, "")} 현재</div>
                    <div style={{position:'relative',left:'39%',top:'-1.1rem',fontSize:'15px',fontWeight:'bold'}}>경력: {careerDuration}</div>
                </div>

            </div>
          </div>
      </header>
      <main id="main" ref={mainRef} hidden={isLoading}>
      </main>
    </Layout>
  );
}

export default Home;