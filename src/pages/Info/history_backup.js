import React from "react";
import myInfo from "../history.module.css";  // CSS 모듈 import
import profile from '../../../static/img/blog/profile.jpg';
import githubImage from '../../../static/img/blog/githubImage.png';
import docusaurusImage from '../../../static/img/blog/docusaurus.png';

const History = () => {
  return (
    <div className={myInfo.backgroundColor}>
        <div>
            <h4 className={myInfo.headFont}>EXPERIENCE <span className={myInfo.headFontwidth}>총 3년 1개월</span></h4>
        </div>
        <div className={myInfo.container}>
            <div className={myInfo.box}>
                <div className={myInfo.profileContainer}>
                    <h4 className={myInfo.historyDateColor}>2024.02 ~  
                        <span className={myInfo.historyCompanyName}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Archys
                        </span> 
                    </h4>
                    <span className={myInfo.workDays3}>재직중</span>
                </div>
                <div className={myInfo.companyWork}>
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

                <div className={myInfo.profileContainer2}>
                    <h4 className={myInfo.historyDateColor}>2023.06 ~ 2024.01 <span className={myInfo.historyCompanyName}>&nbsp;&nbsp;&nbsp;&nbsp;NEXT CORE</span> </h4>
                    <span className={myInfo.workDays2}>0년 8개월</span>
                </div>
                <div className={myInfo.companyWork}>
                    <ul className={myInfo.ulPosition}>
                        <li>SKT Flow NMS WEB 시스템 고도화</li>
                        <li>NMS WEB 시스템 유지보스</li>
                        <li>현대커머셜 지게차 렌탈 WEB 시스템 구축 참여</li>
                        <li>강남구청 반지하 주택 침수방지 WEB 시스템 구축</li>
                        <li>Skill Keywords</li>
                        <span className={myInfo.skillKeyword}>Java</span>
                        <span className={myInfo.skillKeyword}>Spring</span>
                        <span className={myInfo.skillKeyword}>MySql</span>
                        <span className={myInfo.skillKeyword}>InteliJ</span>
                        <span className={myInfo.skillKeyword}>Trino</span>
                        <span className={myInfo.skillKeyword}>Impla</span>
                    </ul>
                </div>

                <div className={myInfo.profileContainer3}>
                    <h4 className={myInfo.historyDateColor}>2022.01 ~ 2023.05 <span className={myInfo.historyCompanyName}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MJIT</span></h4>
                    <span className={myInfo.workDays}>1년 4개월</span>
                </div>
                <div className={myInfo.companyWork}>
                    <ul className={myInfo.ulPosition2}>
                        <li>포니정 장학재단 관리자 포털 고도화</li>
                        <li>KT AICC API GATEWAY 운영</li>
                        <li>KT AICC 관리자 포털 운영</li>
                        <li>KT AICC 관리자 포털 통계 고도화 UIUX 개발</li>
                        <li>Skill Keywords</li>
                        <span className={myInfo.skillKeyword}>Java</span>
                        <span className={myInfo.skillKeyword}>Spring Boot</span>
                        <span className={myInfo.skillKeyword}>PostgreSql</span>
                        <span className={myInfo.skillKeyword}>Visual Studio Code</span>
                    </ul>
                </div>
                
            </div>
            <div className={myInfo.box}>

            </div>
        </div>
    </div>
  );
};

export { History };
