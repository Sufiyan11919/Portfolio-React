import React from 'react'
import "./style.css"
const About = () => {
  return (
    <section className="main">
        <div className="mainContainer" id="mainContainer">
            <div className="Info" id="info">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In vero quidem est architecto veniam, voluptate molestias facere sequi itaque magnam? Ipsam nihil eum eius maiores sed exercitationem. Delectus consectetur, atque odit alias rerum asperiores nam hic dolorum vero quas iure soluta voluptatum officiis error minima! Iure rerum ea ipsum aspernatur, soluta voluptates ducimus sit harum maiores vero iusto sed doloremque, debitis facere pariatur sunt deserunt asperiores sequi similique quod quidem fugit explicabo deleniti! Quia reprehenderit quos quasi recusandae? Quae necessitatibus voluptas corrupti veritatis at deserunt, porro eos mollitia cumque molestias ex officiis velit earum ad ipsum quam sequi officia dicta commodi recusandae nihil dolor sint omnis esse. Saepe voluptate suscipit harum illum aspernatur corporis tempore, eum iste magni repudiandae quia iusto minima minus, a officiis provident, ipsam voluptatem vel quas perspiciatis nihil omnis debitis. Quis placeat fugit voluptas voluptates nostrum molestiae assumenda quibusdam temporibus facilis obcaecati fugiat, adipisci illum enim?</p>
                <h1>My Skills</h1>
                <div className="skillsCont">
                    HTML: 
                    <div className="skillsHTML"></div>
                    CSS: 
                    <div className="skillsCSS"></div>
                    JavaScript: 
                    <div className="skillsJavaScript"></div>
                    jQuery: 
                    <div className="skillsJquery"></div>
                    Bootstrap: 
                    <div className="skillsBootstrap"></div>
                    Python: 
                    <div className="skillsPython"></div>

                </div>  
            </div>
        </div>
    </section>   

  )
}

export default About