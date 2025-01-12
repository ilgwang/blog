import React from "react";
import myInfo from "../history.module.css";  // CSS 모듈 import
import profile from '../../../static/img/blog/profile.jpg';
import githubImage from '../../../static/img/blog/githubImage.png';
import docusaurusImage from '../../../static/img/blog/docusaurus.png';

const History = () => {
  return (
    <div className={myInfo.backgroundColor}>
        <div>
            <h2 className={myInfo.headFont}>EXPERIENCE <span className={myInfo.headFontwidth}>총 3년 1개월</span></h2>
        </div>
        <div className={myInfo.container}>
            <div className={myInfo.box}>
                <div className={myInfo.profileContainer}>
                    <h3 className={myInfo.historyDateColor}>2022.01 ~ 2023.05 <span className={myInfo.historyCompanyName}>&nbsp;&nbsp;&nbsp;&nbsp;MJIT</span></h3>
                </div>
                <div className={myInfo.companyWork}>
                    <ul >
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
