import React from "react";
import profile from '../../../static/img/blog/profile.jpg';
import githubImage from '../../../static/img/blog/githubImage.png';
import docusaurusImage from '../../../static/img/blog/docusaurus.png';
import myInfo from "../myInfo.module.css";  
import skill from "../skill.modules.css";
import javaImage from '../../../static/img/blog/java.png';
import springBootImage from '../../../static/img/blog/springBoot.png';
import pgsqlImage from '../../../static/img/blog/pgsql.png';
import springImage from '../../../static/img/blog/spring.png';
import mysqlImage from '../../../static/img/blog/mysql.png';
import trinoImage from '../../../static/img/blog/trino.png';
import linuxImage from '../../../static/img/blog/linux.png';
import nodejsImage from '../../../static/img/blog/nodejs.png';
import hadoopImage from '../../../static/img/blog/hadoop.png';
import hiveImage from '../../../static/img/blog/hive.png';

const Skill = () => {
  return (
    <div>
      <div className={myInfo.container}>
        <div style={{ width: '13rem'}}>
            <div className={myInfo.box2}>
                <h3 className={skill.headFont}>Skils </h3>
            </div>
            <div className={skill.profileContainer}>
                <h5 className={skill.skillDateColor}>3년차</h5>
            </div>

            <div className={skill.profileContainer2}>
                <h5 className={skill.skillDateColor}>2년차
                </h5>
            </div>
            <div className={skill.profileContainer3}>
                <h4 className={skill.skillDateColor}>1년차</h4>
            </div>

        </div>
        <div className={skill.divider}></div>
            <div style={{ width: '30rem',height: '25rem'}} >
                <div style={{ display: 'flex', alignItems: 'center' }} ></div>
                <div>
                    <div className={skill.companyWork} >
                        <span>
                            <img src={linuxImage}  className={skill.linuxImageStyle} />
                        </span>
                        <span >
                            <img src={nodejsImage}  className={skill.mysqlImageStyle} />
                        </span>
                        <span >
                            <img src={hadoopImage}  className={skill.hdfsImageStyle} />
                        </span>
                        <span >
                            <img src={hiveImage}  className={skill.hiveStyleImage} />
                        </span>
                        <ul className={skill.ulPositionStyle}>
                            <li>기본적인 시스템 개발과 배포를 독립적으로 수행할 수 있습니다.</li>
                            <li>필요한 기술을 빠르게 학습하여 실무에 적용할 수 있습니다.</li>
                            <li>주어진 개발 도구와 기술 스택을 활용해 효율적으로 작업을 수행할 수 있습니다.</li>
                        </ul>
                    </div>

                    <div className={skill.companyWork}>
                        <span>
                            <img src={springImage}  className={skill.springImageStyle} />
                        </span>
                        <span >
                            <img src={mysqlImage}  className={skill.mysqlImageStyle} />
                        </span>
                        <span >
                            <img src={trinoImage}  className={skill.trinoImageStyle} />
                        </span>
                        <ul className={skill.ulPositionStyle}>
                            <li>해당 스킬을 사용했을 때, 추가적인 교육 없이 업무를 신속하게 수행할 수 있습니다.</li>
                            <li>기본적인 문법과 개발 도구에 대한 숙련도가 있습니다.</li>
                        </ul>

                    </div>

                    <div className={skill.companyWork3}>
                        <span>
                            <img src={javaImage}  className={skill.javaImageStyle} />
                        </span>
                        <span >
                            <img src={springBootImage}  className={skill.javaImageStyle} />
                        </span>
                        <span >
                            <img src={pgsqlImage}  className={skill.pgsqlImageStyle} />
                        </span>
                        
                        <ul className={skill.ulPositionStyle}>
                            <li>해당 스킬을 사용했을 때, 추가적인 교육 없이 즉시 업무를 수행할 수 있습니다.</li>
                            <li>필요한 개발 환경을 스스로 설정할 수 있습니다.</li>
                        </ul>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  );
};

export { Skill };
