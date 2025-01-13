import React from "react";
import myInfo from "../myInfo.module.css";  // CSS 모듈 import
import profile from '../../../static/img/blog/profile.jpg';
import githubImage from '../../../static/img/blog/githubImage.png';
import docusaurusImage from '../../../static/img/blog/docusaurus.png';
import history from "../history.module.css";

const History = () => {
  return (
    <div>
      <div className={myInfo.container}>
        <div >
            <div className={myInfo.box}>
                <h4 className={history.headFont}>EXPERIENCE <span className={history.headFontwidth}>총 3년 1개월</span></h4>
            </div>
            <div className={history.profileContainer}>
                <h4 className={history.historyDateColor}>2024.02 ~  
                    <span className={history.historyCompanyName}>Archys</span> 
                </h4>
                <span className={history.workDays3}>재직중</span>
               
            </div>
        </div>
        <div className={myInfo.divider}></div>
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }} className={myInfo.profileBackground}>
               
                <div style={{ marginLeft: '50px',marginTop:'40px' }} >
                    <div >TTT</div>
                </div>
            </div>
                <div >
                    <div className={history.companyWork}>
                        <ul >
                            <li>SKB Flow NMS 유지보스 및 고도화</li>
                            <li>Billing 시스템 QoS 개발</li>
                            <li>KETI 신원정보 관리 WEB 시스템 고도화</li>
                            <li>파라과이 축산 분야 데이터허브 플랫폼 구축 참여중</li>
                            <li>Skill Keywords</li>
                            <span className={myInfo.skillKeyword}>Java</span>
                            <span className={myInfo.skillKeyword}>Linux</span>
                            <span className={myInfo.skillKeyword}>Hive</span>
                            <span className={myInfo.skillKeyword}>Trino</span>
                            <span className={myInfo.skillKeyword}>hadoop</span>
                            <span className={myInfo.skillKeyword}>golang</span>
                        </ul>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  );
};

export { History };
