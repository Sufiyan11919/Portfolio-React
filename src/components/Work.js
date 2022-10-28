import React from 'react'
import "./style.css"
const Work = () => {
  return (
        <section className="main">
          <div className="MainContainer-work">
              <section id="my-work" className="main works">
                  <div className="work-image" id="work-one">
                      <h4 className="bottom-left">weather-dashboard</h4>
                      <a href="https://sufiyan11919.github.io/Server-Side-APIs-Challenge-Weather-Dashboard/" >
                          <img src="https://raw.githubusercontent.com/Sufiyan11919/Server-Side-APIs-Challenge-Weather-Dashboard/main/screenshots/Screenshot%20(190).png"  alt="project1" />
                      </a>
                  </div>  

                      <div className="work-image">
                          <h4 className="bottom-left">E-commerce</h4>
                          <a href="https://github.com/Sufiyan11919/Group-Project-2" >
                              <img src="https://raw.githubusercontent.com/Sufiyan11919/Group-Project-2/main/screenshots/Screenshot%20(122).png"  alt="project2" />
                          </a>
                      </div>



                      <div className="work-image">
                          <h4 className="bottom-left">code-quizz</h4>
                          <a href="https://sufiyan11919.github.io/CODE-quizzz/" >
                              <img src="https://raw.githubusercontent.com/Sufiyan11919/CODE-quizzz/main/screenshots/Screenshot%20(146).png"  alt="project3" />
                          </a>
                      </div>

                      <div className="work-image">
                          <h4 className="bottom-left">team-profile-generator</h4>
                          <a href="https://github.com/Sufiyan11919/Team-Profile-Generator" >
                              <img src="https://raw.githubusercontent.com/Sufiyan11919/Team-Profile-Generator/main/screenshots/Screenshot%20(203).png"  alt="project4" />
                          </a>
                      </div>
                      
                 
              </section>
          </div>
        </section>   
  
  )
}

export default Work