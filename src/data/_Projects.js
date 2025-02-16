import React from "react";
import figma_dashboard from '../../static/img/blog/figma_dashboard.png';
import figma_invoice from '../../static/img/blog/figma_invoice.png';
import figma_receipt from '../../static/img/blog/figma_receipt.png';

import budgets from '../../static/img/blog/budget.png';
import budget_detail from '../../static/img/blog/budget_detail.png';
import invoice from '../../static/img/blog/invoice.png';

const projects = [

  {
    category: "Blog",
    title: "Blog",
    slug: "#blog",
    imageUrl: "img/blog/blog_main.png",
    analyze1:"",
    subtitle:
      "회사 업무 중 이전에 사용한 기술을 다시 활용해야 할 때마다 검색에 많은 시간이 걸렸습니다. 이를 줄이고 업무 효율을 높이기 위해  블로그에 기록하여 시간을 효과적으로 활용하기 위해 시작하였습니다. ",
    period: "January 2025 to Present",
    tech: "Docusaurus 3.5.2, ReactJS",
    description: (
      <>
       <p>
          <a href="https://docusaurus.io/" target="_blank">
            Docusaurus 3.5.2
          </a>{" "}
          와{" "}
          <a href="https://reactjs.org/" target="_blank">
            ReactJS
          </a>
          를 사용하여 개발을 진행하고 있습니다.
          2025년 01월에 시작하여 현재까지 커스터 마이징을 지속적으로 진행하고 있습니다.
        </p>
       
        <p>
          <a>이 블로그는 Evan Tay 소스를 커스터 마이징하여 개발 되었습니다.</a>
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/ilgwang",
      },
    
    ],
  },

  {
    category: "DHPP(Data Hub Platfrom Paraguay)",
    title: "DHPP(Data Hub Platfrom Paraguay) ",
    slug: "#hbs",
    subtitle: "",
    period: "2024.12 ~ ",
    tech: "Figma",
    analyze:"Database 분석",
    analyzeDescription:(
        <>
            <p>
                분석 단계에서 가장 큰 고민은 내가 파악한 내용을 효과적으로 공유하는 방법이었다. 처음에는 문서로 작성하려 했지만, 직관성이 부족했다.
                그래서 직접 보면서 설명할 수 있도록 간단한 웹을 만들어 공유하는 것이 더 효과적이라고 생각하였습니다.
            </p>
            <p>
                개발시 우선적으로 고민한 내용이 개발에 많은 시간이 들어가면 안되는 거였다. 그래서 선택한 것이 Express - Node.js 였다. 
            </p>
        </>
    ),

    analyzeSample:[
      <>
          <img  src={budgets} style={{ width: '30%',height: 'auto',marginLeft: '0.4rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'  }}  />
          <img  src={budget_detail} style={{ width: '30%',height: 'auto',marginLeft: '1rem',  borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
          <img  src={invoice} style={{ width: '30%',height: '5.3rem', marginLeft: '1rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
      </>
    ],

    uiux:"화면 설계",
    uiuxDescription:(
      <>
          <p>
            기존에는 화면 설계 시 주로 PPT를 활용해 왔다. 
            그러나 이번 프로젝트에서는 보다 효율적인 작업이 가능한 Figma가 더 적합하다고 판단하여 이를 도입하게 되었다.
          </p>
          <p>
            Figma는 실시간 협업이 가능하고, 직관적인 UI 설계 및 빠른 피드백 반영이 가능하다는 강점이 있다. 
            이를 통해 화면 설계 과정이 더욱 신속하고 원활하게 진행될 수 있다고 판단하였다. 
          </p>
          
      </>
    ),
    
    uiuxSample: [
        <>
            <img  src={figma_dashboard} style={{ width: '30%',height: '6rem',marginLeft: '1.3rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'  }}  />
            <img  src={figma_invoice} style={{ width: '30%',height: '6rem',marginLeft: '1rem',  borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
            <img  src={figma_receipt} style={{ width: '30%',height: '6rem',marginLeft: '1rem',  borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
        </>
    ],
    description: (
      <>
      
      </>
    ),
 
  },

  // {
  //   category: "Open Source Tool",
  //   title: "Mongo-Action",
  //   slug: "#mongo-action",
  //   imageUrl: "img/projects/mongo-action.png",
  //   subtitle: "A  Github action which creates a mongo Docker container.",
  //   period: "March 2020",
  //   tech: "GitHub Action, NodeJS, Docker",
  //   description: (
  //     <>
  //       <p>
  //         mongo-action is a Github Action which creates a mongo Docker container
  //         using the official{" "}
  //         <a href="https://hub.docker.com/_/mongo">Dockerhub image</a>. The
  //         MongoDB instance's port will be exposed to other containers and also
  //         to the host running the Github Workflow.
  //       </p>
  //       <p>
  //         <a
  //           href="https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg"
  //           title="mongo-action CI"
  //         >
  //           <img src="https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg" />
  //         </a>
  //       </p>
  //       <p>
  //         I created this Github Action to learn more about Continuous
  //         Integration tooling, and to simplify automated testing for my own{" "}
  //         <a href="https://github.com/DigiPie/mocha-chai-mongoose">
  //           Node-ExpressJS-Mongoose
  //         </a>{" "}
  //         project.
  //       </p>
  //       <p>
  //         By using this Github Action, there is no longer a need to provision a
  //         test database on MongoDB Atlas or elsewhere. Furthermore, each test
  //         will run on a fresh, isolated copy of a MongoDB instance.
  //       </p>
  //       <p>
  //         I submitted this to the{" "}
  //         <a href="https://githubhackathon.com/">
  //           Github Hackathon for Github Actions
  //         </a>
  //         .
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/mongo-action",
  //     },
  //     {
  //       name: "GitHub Marketplace",
  //       link: "https://github.com/marketplace/actions/mongo-action",
  //     },
  //   ],
  // },

  // {
  //   category: "Website",
  //   title: "Google Developer Student Club NUS",
  //   slug: "#dsc-nus",
  //   imageUrl: "img/projects/dscnustech.png",
  //   subtitle:
  //     "DSC NUS tech team's website for workshop registration and materials.",
  //   period: "January to March 2020",
  //   tech: "Jekyll, Bootstrap, Github pages",
  //   team: [
  //     {
  //       name: "Andre Wong",
  //       link: "https://github.com/AndreWongZH/",
  //     },
  //     {
  //       name: "Evan Tay",
  //       link: "https://github.com/DigiPie/",
  //     },
  //     {
  //       name: "Melodies Sim",
  //       link: "https://github.com/Happytreat/",
  //     },
  //   ],
  //   description: (
  //     <>
  //       <p>
  //         Developer Student Club, National University of Singapore is made up of
  //         people from diverse backgrounds, majors, years of study, genders and
  //         races. We come together to push our mission of #techforgood.
  //       </p>
  //       <p>
  //         The Technology team is responsible for the execution of DSC-NUS
  //         workshops and thematic tech events. I co-lead the team as the Deputy
  //         Head of Technology.
  //       </p>
  //       <p>
  //         We created this website to act as a one-stop portal for NUS students
  //         to find out more about our workshops, register for them, and access
  //         past workshop materials.
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/dscnustech/dscnustech.github.io",
  //     },
  //     {
  //       name: "Website",
  //       link: "https://dscnustech.github.io/",
  //     },
  //   ],
  // },

  // {
  //   category: "Project",
  //   title: "DigiCourse",
  //   slug: "#digicourse",
  //   imageUrl: "img/projects/digicourse.png",
  //   subtitle: "A full-stack course platform with forum and enrolment features.",
  //   period: "September to November 2019",
  //   tech: "NodeJS, ExpressJS, PostgreSQL, Herokuapp",
  //   team: [
  //     {
  //       name: "Bryan Koh",
  //       link: "https://github.com/awarenessxz/",
  //     },
  //     {
  //       name: "Evan Tay",
  //       link: "https://github.com/DigiPie/",
  //     },
  //     {
  //       name: "Jacqueline Cheong",
  //       link: "https://github.com/Aquarinte/",
  //     },
  //     {
  //       name: "Lee Tze Ting",
  //       link: "https://github.com/halcyoneee/",
  //     },
  //   ],
  //   description: (
  //     <>
  //       <p>
  //         A course management platform where student-teacher interactions can
  //         take place seamlessly online.
  //       </p>
  //       <p>
  //         We worked on DigiCourse under National University of Singapore's{" "}
  //         <a href="https://nusmods.com/modules/CS2102/database-systems">
  //           CS2102: Database Systems
  //         </a>
  //         . It is a database-centric project which features two major
  //         components, a course enrolment system, and a forum system.
  //       </p>
  //       <p>
  //         DigiCourse is continuously deployed from Github to Herokuapp, with the
  //         aid of Heroku build-packs such as the{" "}
  //         <a href="https://github.com/DigiPie/psql-heroku-buildpack">
  //           psql-heroku-buildpack
  //         </a>
  //         . I wrote this build pack to automate the execution of a PostgreSQL
  //         setup script file on deployment to Heroku.
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/DigiCourse",
  //     },
  //   ],
  // },
  
  // {
  //   category: "Project",
  //   title: "Dynalite",
  //   slug: "#dynalite",
  //   imageUrl: "img/projects/dynalite.png",
  //   subtitle:
  //     "A full-stack Internet-of-Things occupancy visualisation application.",
  //   period: "September to November 2019",
  //   tech: "Raspberry-Pi, Python, COAP, NodeJS, ExpressJS, PostgreSQL, ReactJS, Docker",
  //   team: [
  //     {
  //       name: "Evan Tay",
  //       link: "https://github.com/DigiPie/",
  //     },
  //     {
  //       name: "Joyce Yeo",
  //       link: "https://github.com/pikulet/",
  //     },
  //     {
  //       name: "Matthew Lee",
  //       link: "https://github.com/crazoter/",
  //     },
  //     {
  //       name: "Melodies Sim",
  //       link: "https://github.com/Happytreat/",
  //     },
  //   ],
  //   description: (
  //     <>
  //       <p>
  //         Dynalite is an Internet-of-Things application which performs dynamic
  //         visualisation of room occupancy.
  //       </p>
  //       <p>
  //         We worked on Dynalite under National University of Singapore's{" "}
  //         <a href="https://nusmods.com/modules/CS3103/computer-networks-practice">
  //           CS3103: Computer Networks Practice
  //         </a>
  //         . It is an Internet-of-Things application which performs dynamic
  //         visualisation of room occupancy.
  //       </p>
  //       <p>
  //         Dynalite was built using 3 Docker containers and 1 Raspberry Pi. The
  //         RPi reads light data and sends it via COAP to the first Docker
  //         container containing a backend NodeJS-ExpressJS web server.
  //       </p>
  //       <p>
  //         The backend server authenticates and stores the measurements into a
  //         PostgreSQL database stored in the second Docker container.
  //       </p>
  //       <p>
  //         The backend server also provides a HTTP REST API which is used by a
  //         frontend React web server in the third Docker container.
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/dynalite",
  //     },
  //     {
  //       name: "Presentation Slides (PDF)",
  //       link: "https://evantay.com/pdf/dynalite.pdf",
  //     },
  //   ],
  // },

  // {
  //   category: "Open Source Tool",
  //   title: "psql-heroku-buildpack",
  //   slug: "#psql-heroku-buildpack",
  //   subtitle:
  //     "A Heroku buildpack which executes a PostgreSQL script file on deployment.",
  //   period: "September 2019",
  //   tech: "Herokuapp, PostgreSQL",
  //   description: (
  //     <>
  //       <p>
  //         psql-heroku-buildpack is a buildpack which executes a PostgreSQL
  //         script file on deployment to Heroku.
  //       </p>
  //       <p>
  //         I developed this buildpack while working on DigiCourse, a full-stack
  //         application built on PostgreSQL. I wrote this build pack to automate
  //         the execution of a PostgreSQL setup script file in the Git repo on
  //         deployment to Heroku from Github.
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/psql-heroku-buildpack",
  //     },
  //   ],
  //   bgColor: "alternate",
  // },

  // {
  //   category: "Project",
  //   title: "BrainTrain",
  //   slug: "#braintrain",
  //   imageUrl: "img/projects/braintrain.png",
  //   subtitle:
  //     "A spaced-repetition flashcard desktop application built in Java and JUnit5.",
  //   period: "March to April 2019",
  //   tech: "Java, JUnit5, JavaFx, OpenCSV",
  //   team: [
  //     {
  //       name: "Evan Tay",
  //       link: "https://github.com/DigiPie/",
  //     },
  //     {
  //       name: "Eugene Foo",
  //       link: "https://github.com/eugenefdw/",
  //     },
  //     {
  //       name: "Lee Tze Ting",
  //       link: "https://github.com/halcyoneee/",
  //     },
  //   ],
  //   description: (
  //     <>
  //       <p>
  //         BrainTrain is a spaced-repetition flashcard application which makes
  //         memorizing easy and effective. With BrainTrain’s{" "}
  //         <a href="https://www.theguardian.com/education/2016/jan/23/spaced-repetition-a-hack-to-make-your-brain-store-information">
  //           Spaced Repetition System (SRS)
  //         </a>{" "}
  //         optimizing your flashcard revision intervals, you will be able to
  //         learn more in less time.
  //       </p>
  //       <p>
  //         <a
  //           href="https://travis-ci.org/CS2103-AY1819S2-W14-1/main"
  //           title="Build status"
  //         >
  //           <img src="https://travis-ci.org/CS2103-AY1819S2-W14-1/main.svg?branch=master" />
  //         </a>{" "}
  //         <a
  //           href="https://ci.appveyor.com/project/eugenefdw/main"
  //           title="Build status"
  //         >
  //           <img src="https://ci.appveyor.com/api/projects/status/vl6bo937loonr7x3?svg=true" />
  //         </a>{" "}
  //         <a
  //           href="https://coveralls.io/github/CS2103-AY1819S2-W14-1/main?branch=master"
  //           title="Coverage status"
  //         >
  //           <img src="https://coveralls.io/repos/github/CS2103-AY1819S2-W14-1/main/badge.svg?branch=master" />
  //         </a>{" "}
  //       </p>
  //       <p>
  //         We worked on BrainTrain under National University of Singapore's{" "}
  //         <a href="https://nusmods.com/modules/CS2103T/software-engineering">
  //           CS2103T: Software Engineering
  //         </a>
  //         . My primary responsibility was to design and develop the Card
  //         Management System. My secondary responsibility was to act as the
  //         project’s documentation lead. To find out more, view my{" "}
  //         <a href="https://digipie.github.io/BrainTrain/team/digipie.html">
  //           project portfolio page
  //         </a>
  //         .
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/BrainTrain",
  //     },
  //     {
  //       name: "Project documentation",
  //       link: "https://digipie.github.io/BrainTrain/index.html",
  //     },
  //     {
  //       name: "Project portfolio page",
  //       link: "https://digipie.github.io/BrainTrain/team/digipie.html",
  //     },
  //   ],
  // },

  // {
  //   category: "KT AICC",
  //   title: "KT AICC",
  //   slug: "#glory",
  //   subtitle:
  //     "KT AICC 관리자 포털 통계 화면 UIUX 개발",
  //   period: "2022-01 ~ 2022-03",
  //   tech: "Java, Spring Boot",
  
  //   description: (
  //     <>
  //       <p>
  //         회사에 취업하여 처음 맡은 프로젝트 였습니다. 모듈화가 잘 되어 있는 프로젝트 였고, 소스에 대한 파악이 잘 이르어 졌으면 정말 간단한
  //         작업 이었습니다. 
  //       </p>
  //       <p>
  //         We worked on this project under National University of Singapore's{" "}
  //         <a href="http://nusskylab-dev.comp.nus.edu.sg/">
  //           CP2106: Independent Software Development Project (Orbital){" "}
  //         </a>
  //         . This module was conducted during the summer break.
  //       </p>
  //       <p>
  //         We were one of the top 11 out of 211 teams which received an award
  //         (Honorable Mention), and a Google Chromecast each from Google
  //         Singapore.
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/Glory",
  //     },
  //     {
  //       name: "Itch.io (Download and Play)",
  //       link: "https://digipie.itch.io/glory",
  //     },
  //   ],
  // },
];

export default projects;
