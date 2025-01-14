import React from "react";
import profile from '../../../static/img/blog/profile.jpg';
import githubImage from '../../../static/img/blog/githubImage.png';
import docusaurusImage from '../../../static/img/blog/docusaurus.png';
import myInfo from "../myInfo.module.css";  
import history from "../history.module.css";

const History = () => {
  return (
    <div>
      <div className={myInfo.container}>
        <div style={{ width: '15rem'}}>
            <div className={myInfo.box2}>
                <h4 className={history.headFont}>EXPERIENCE <span className={history.headFontwidth}>총 3년 1개월</span></h4>
            </div>
            <div className={history.profileContainer}>
                <h5 className={history.historyDateColor}>2024.02 ~
                    {/* <span className={history.historyCompanyName}>Archys</span>  */}
                </h5>
            </div>

            <div className={history.profileContainer2}>
                <h5 className={history.historyDateColor}>2023.06 ~ 2024.01 
                    {/* <span className={history.historyCompanyName2}>NEXT CORE</span>  */}
                </h5>
            </div>
            <div className={history.profileContainer3}>
                <h4 className={history.historyDateColor}>2022.01 ~ 2023.05 </h4>
                    {/* <span className={history.historyCompanyName3}>MJIT</span> */}
            </div>

        </div>
        <div className={history.divider}></div>
            <div style={{ width: '30rem',height: '25rem'}} >
                <div style={{ display: 'flex', alignItems: 'center' }} className={myInfo.profileBackground}></div>
                <div>
                    <div className={history.companyWork} >
                        <ul>
                            <li>SKB Flow NMS 유지보스 및 고도화</li>
                            <li>Billing 시스템 QoS 개발</li>
                            <li>KETI 신원정보 관리 WEB 시스템 고도화</li>
                            <li>파라과이 축산 분야 데이터허브 플랫폼 구축 참여중</li>
                            <li>Skill Keywords</li>
                            <span className={history.skillKeyword}>Java</span>
                            <span className={history.skillKeyword}>Linux</span>
                            <span className={history.skillKeyword}>Hive</span>
                            <span className={history.skillKeyword}>Trino</span>
                            <span className={history.skillKeyword}>hadoop</span>
                            <span className={history.skillKeyword}>golang</span>
                        </ul>
                    </div>
                    <div className={history.companyWork2}>
                        <ul className={history.ulPosition}>
                            <li>SKT Flow NMS WEB 시스템 고도화</li>
                            <li>NMS WEB 시스템 유지보스</li>
                            <li>현대커머셜 지게차 렌탈 WEB 시스템 구축 참여</li>
                            <li>강남구청 반지하 주택 침수방지 WEB 시스템 구축</li>
                            <li>Skill Keywords</li>
                            <span className={history.skillKeyword}>Java</span>
                            <span className={history.skillKeyword}>Spring</span>
                            <span className={history.skillKeyword}>MySql</span>
                            <span className={history.skillKeyword}>InteliJ</span>
                            <span className={history.skillKeyword}>Trino</span>
                            <span className={history.skillKeyword}>Impla</span>
                        </ul>
                    </div>

                    <div className={history.companyWork3}>
                        <ul className={history.ulPosition2}>
                            <li>포니정 장학재단 관리자 포털 고도화</li>
                            <li>KT AICC API GATEWAY 운영</li>
                            <li>KT AICC 관리자 포털 운영</li>
                            <li>KT AICC 관리자 포털 통계 고도화 UIUX 개발</li>
                            <li>Skill Keywords</li>
                            <span className={history.skillKeyword}>Java</span>
                            <span className={history.skillKeyword}>Spring Boot</span>
                            <span className={history.skillKeyword}>PostgreSql</span>
                            <span className={history.skillKeyword}>Visual Studio Code</span>
                        </ul>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  );
};

export { History };
