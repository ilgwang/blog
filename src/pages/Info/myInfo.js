import React from "react";
import myInfo from "../myInfo.module.css";  // CSS 모듈 import
import profile from '../../../static/img/blog/profile.jpg';
import githubImage from '../../../static/img/blog/githubImage.png';
import docusaurusImage from '../../../static/img/blog/docusaurus.png';

const MyInfo = () => {
  return (
    <div>
      <div className={myInfo.container}>
        <div className={myInfo.box}>
            <div className={myInfo.profileContainer}>
                <img src={profile} alt="Profile" className={myInfo.profileStyle} />
            </div>
            <div className={myInfo.infoItem}>
                <span>이름</span>
                <span>최일광</span>
            </div>
            <div className={myInfo.infoItem}>
                <span>주소</span>
                <span>서울 송파구</span>
            </div>
            <div className={myInfo.infoItem}>
                <span>이메일</span>
                <span>ig95@dgu.ac.kr</span>
            </div>
            <div className={myInfo.infoItem}>
                <span>전화번호</span>
                <span>010-3043-8987</span>
            </div>
        </div>
        <div className={myInfo.divider}></div>
        <div className={myInfo.box}>
          <div style={{ display: 'flex', alignItems: 'center' }} className={myInfo.profileBackground}>
              <div className={myInfo.githubImage}>
                  <img src={githubImage}  className={myInfo.profileStyle} />
              </div>
              <div style={{ marginLeft: '50px' }} >
                  <div className={myInfo.gitlabStyle}>Github</div>
                  <div className={myInfo.gitlabStyle}>https://example.com</div>
              </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop:'0.5rem' }} className={myInfo.profileBackground}>
              <div className={myInfo.githubImage}>
                  <img src={docusaurusImage}  className={myInfo.docusaurusImageStyle} />
              </div>
              <div style={{ marginLeft: '50px' }} >
                  <div className={myInfo.gitlabStyle}>Blog</div>
                  <div className={myInfo.gitlabStyle}>https://example.com</div>
              </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
            {/* 첫 번째 줄 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              {/* 첫 번째 항목 */}
              <div style={{ textAlign: 'right', position: 'relative' }}>
                <div className={myInfo.circle}></div>
                <div className={myInfo.styleContent}>
                  <div className={myInfo.styleFont}>꾸준한 학습</div>
                  <div className={myInfo.fontStyleSize}>1일 1잔디</div>
                </div>
              </div>

              {/* 두 번째 항목 */}
              <div style={{ textAlign: 'left', position: 'relative' }}>
                <div className={myInfo.circle1}></div>
                <div className={myInfo.styleContent1}>
                  <div className={myInfo.styleFont}>꾸준한 운동</div>
                  <div className={myInfo.fontStyleSize}>매주 1회 풋살 경기</div>
                </div>
              </div>
            </div>

            {/* 두 번째 줄 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              {/* 세 번째 항목 */}
              <div style={{ textAlign: 'right', position: 'relative' }}>
                <div className={myInfo.circle2}></div>
                <div className={myInfo.styleContent2}>
                  <div className={myInfo.styleFont}>꾸준한 기록</div>
                  <div className={myInfo.fontStyleSize}>테크 블로그 작성</div>
                </div>
              </div>

              {/* 네 번째 항목 */}
              <div style={{ textAlign: 'left', position: 'relative' }}>
                <div className={myInfo.circle3}></div>
                <div className={myInfo.styleContent3}>
                  <div className={myInfo.styleFont}>계획적 개발</div>
                  <div className={myInfo.fontStyleSize}>노션을 통한 일정 관리</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MyInfo };
