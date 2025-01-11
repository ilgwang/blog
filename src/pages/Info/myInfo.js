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
                <span>서울특별시 송파구</span>
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
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
            <div style={{ textAlign: 'right', position: 'relative' }}>
              <div className={myInfo.circle}></div>
              <div className={myInfo.styleContent}>
                <div>능동적인 학습 자세</div>
                <div>스터디와 프로젝트를 통한 학습</div>
              </div>
            </div>
            <div style={{ textAlign: 'right', position: 'relative' }}>
              <div className={myInfo.circle1}></div>
              <div className={myInfo.styleContent}>
                <div>능동적인 학습 자세</div>
                <div>스터디와 프로젝트를 통한 학습</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export { MyInfo };
