import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Vinicius's portfolio" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Introduction</h2>
                </header>
                <p>
                  A passionate full stack web developer who is always curious
                  about learning new technologies. Bachelor of Science in Computer Science, currently working as Tech Lead at VML Brazil. 
                  <br></br>
                  In my software development career I've had worked with different technologies like Python 
                  (Flask and Django), Node.js, Java (JSF and Spring), AngularJS, Angular, React, Gatsby, Vue, 
                  Wordpress and Adobe Experience Manager.
                </p>
                {/* <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul> */}
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>
                <a className="icon major style1 fas fa-film" href="https://github.com/viniscr/movies-finder-frontend"><span></span></a>
                <h3>The Movie Finder</h3>
                <p>
                  Wep App built in ReactJS to see upcoming movies, search for movies in general, and see their details.
                </p>
              </li>
              <li>
                <a className="icon major style3 fab fa-instagram" href="https://github.com/viniscr/instaclone"><span></span></a>
                <h3>Instaclone</h3>
                <p>
                  Simple project build with React Native which recreate Instagram's feed
                </p>
              </li>
              <li>
                <a className="icon major style5 fas fa-code" href="https://github.com/viniscr/aircnc-frontend"><span></span></a>
                <h3>AirCNC</h3>
                <p>
                  ReactJS application for the frontend of AirCNC, an app to share places of your company with developers that need spaces to work.
                </p>
              </li>
            </ul>
            
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Skills</h2>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fab fa-html5"></span>
                <strong>HTML5</strong>
              </li>
              <li className="style2">
                <span className="icon fab fa-css3-alt"></span>
                <strong>CSS</strong>
              </li>
              <li className="style3">
                <span className="icon fab fa-js-square"></span>
                <strong>JS</strong>
              </li>
              <li className="style4">
                <span className="icon fab fa-react"></span>
                <strong>React</strong>
              </li>
              <li className="style5">
                <span className="icon fas fa-user-astronaut"></span>
                <strong>Gatsby</strong>
              </li>
            </ul>
            <p className="content">
              I'm a computer science graduated student at Faculdade de Ciências Aplicadas
              e Sociais de Petrolina in Brazil. I started my developer carreer as an intern
              in Java Web Development, using technologies like Java Server Faces, Primefaces,
              JPA and Hibernate. After the internship I dedicated my time on learning AngularJS 
              and then Angular to built componentized web apps. My first job as a developer was
              to work on development of web applications using AngularJS in a project and also 
              Angular on other recent projects in the front-end. As backend technologies we used 
              Flask on the older projects and migrated to Django on the recent projects to built REST API's.
              Now, working as a Full Stack Developer at Arctouch I'm focusing on learning React.js and Node.js
              that are our mainly used technologies. As a consequence I discovered Gatsby which is based on react
              and as a personal project to fix my knowlodge I built this page using a Gatsby template.
            </p>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Experience</h2>
              <div style={{textAlign: "left"}}>
                <h3>
                  <i className="fas fa-hashtag" style={{marginRight: "10px"}}></i>
                  <b>Tech Lead at VML (2022 - present)</b>
                </h3>
                <p style={{textAlign: "justify"}}>
                  On this position I'm responsible for the architecture of Web solutions based in Adobe Experience Manager (AEM) 
                  for US clients and local brazilian clientes. Working as a tech lead, I'm the technical reference working together
                  with the client to turn their business needs into real features on their products.
                </p>
                <h3>
                  <i className="fas fa-hashtag" style={{marginRight: "10px"}}></i>
                  <b>Software Architect at Compass.uol (2021 - 2022)</b>
                </h3>
                <p style={{textAlign: "justify"}}>
                  On this position I was in charge of architecting Web solutions based in Adobe Experience Manager (AEM) 
                  for the biggest telecom company in Brazil. Moreover, I also worked a Tech Lead of the squad, being the 
                  technical reference for the other devs. Besides the development work, I was also reponsible for conducting technical interviews and evaluating 
                  candidates for the company's open roles.
                </p>
                <h3>
                  <i className="fas fa-hashtag" style={{marginRight: "10px"}}></i>
                  <b>Full Stack Developer at Arctouch (2019 - 2021)</b>
                </h3>
                <p style={{textAlign: "justify"}}>
                  On this position I worked on development of web applications for big clients around the world. 
                  Our applications were mainly developed using React.js and Angular on the front-end and Node.js on the back-end. 
                  I've also worked developing some banner projects where I built templates in HTML5, CSS and JavaScript to upload 
                  on DoubleClick Studio for marketing campaingns of the agency.
                </p>
                <h3>
                  <i className="fas fa-hashtag" style={{marginRight: "10px"}}></i>
                  <b>Full Stack Developer at Agrosatelite (2018 - 2019)</b>
                </h3>
                <p style={{textAlign: "justify"}}>
                  On this position I worked on development of web applications for territorial intelligence using the Angular
                  framework to create frontend components and Python frameworks like Flask and Django for creating API's to 
                  serve data in the backend. 
                </p>
              </div>
            </header>
        
        
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
