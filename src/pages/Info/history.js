import React from "react";
import myInfo from "../myInfo.module.css";  
import history from "../history.module.css";


const History = () => {
  return (
    <div>
      <div className={myInfo.container}>
        <div style={{ width: '13.5rem'}}>
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
            <div style={{ width: '35rem',height: '25rem'}} >
                <div style={{ display: 'flex', alignItems: 'center' }} className={myInfo.profileBackground}></div>
                <div>
                    <div className={history.companyWork} >
                        <ul>
                            <li>SKB Flow NMS 시스템의 안정적인 운영을 위해 유지보수 작업 수행</li>
                            <li>Billing 시스템의 QoS 기능을 개발</li>
                            <li>KETI 신원정보 관리 WEB 시스템의 기능 고도화 작업을 통해 사용자 경험을 개선</li>
                            <li>파라과이 축산 분야의 데이터 허브 플랫폼 구축 프로젝트에 참여, 데이터 통합 및 분석 작업 진행</li>

                            <li className={history.skillSet3}>Skill Keywords</li>
                            <span className={history.skillKeyword7}></span>
                            <span className={history.skillKeyword8}></span>
                            <span className={history.skillKeyword9}></span>
                        </ul>
                    </div>
                    <div className={history.companyWork2}>
                        <ul className={history.ulPosition}>
                            <li>SKT Flow NMS WEB 시스템의 성능과 안정성을 향상시키기 위한 고도화 작업을 수행</li>
                            <li>NMS WEB 시스템의 안정적인 서비스 제공을 위해 유지보수 및 최적화 작업을 지속적으로 수행</li>
                            <li>현대커머셜의 지게차 렌탈 WEB 시스템 구축 프로젝트에 참여</li>
                            <li>강남구청의 반지하 주택 침수 방지를 위한 WEB 모니터링 시스템 구축</li>
                            <li className={history.skillSet2}>Skill Keywords</li>
                            <span className={history.skillKeyword4}></span>
                            <span className={history.skillKeyword5}></span>
                            <span className={history.skillKeyword6}></span>
                        </ul>
                    </div>

                    <div className={history.companyWork3}>
                        <ul className={history.ulPosition2}>
                            <li className={history.liPosition}>포니정 장학재단 관리자 포털 기능 개선 및 사용자 경험과 효율성을  위한 고도화 작업을 성공적으로 수행</li>
                            <li className={history.liPosition}>KT AICC API Gateway에서 제공하는 다양한 API의 검증과 연동 작업을 수행</li>
                            <li className={history.liPosition}>KT AICC 관리자 포털의 기능 개선 및 운영상의 효율성을 극대화하기 위한 유지보수 업무 수행</li>
                            <li className={history.liPosition}>KT AICC 관리자 포털의 통계 UI/UX로 재구성하여 데이터 분석과 시각화를 통해 사용자 편의성을 향상</li>
                            <li className={history.skillSet}>Skill Keywords</li>
                            <span className={history.skillKeyword1}></span>
                            <span className={history.skillKeyword2}></span>
                            <span className={history.skillKeyword3}></span>
                        </ul>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  );
};

export { History };
