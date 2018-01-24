import React, {Component} from 'react';
import './Services.css';
import lapyImg from './../../images/cd.png';

class Services extends Component {
    render(){
        return (
            <div className="services-component bg-service text-justify">
            <div className="container-fluid">
                <h2 className="text-left">Skills &amp; Competencies </h2>
                <div className="row"><div className="line"></div></div>
        
                <p>Holding <kbd> 7+ years</kbd>  of experience in Web Application Development with JAVA/J2EE, User Interface, Creative design, Project management. Excellent Comprehensive knowledge on  HTML programming ,CSS,  JavaScript, Jquery coding, HTML5 and CSS3 and Responsive Web Development concepts. Willingness to work with emerging alternative technologies.</p>
                <p>&nbsp;</p>
        
                <p>I have been developing websites since 2010. Over the years I have learned and worked with many languages, frameworks and different applications. Some of them I have only dabbled in while others I have all but mastered! Below you can look at the languages I have used in my career and just how proficient I have become.</p>
                <p>&nbsp;</p>
                <div className="skills">
                    <div className="front-skill">
                        <h3 className="text-capitalize"><code>Front-End Skills:</code></h3>
                        <div className="row">
                        <div className="col-sm-10 col-centered">
                            <div className="row">
                                <div className="col-sm-3"><kbd>HTML/HTML5</kbd></div>
                                <div className="col-sm-3">Dojo</div>
                                <div className="col-sm-3"><kbd>JavaScript</kbd></div>
                                <div className="col-sm-3">CSS</div>
                                <div className="col-sm-3">SCSS</div>
                                <div className="col-sm-3"><kbd>CSS3</kbd></div> 
                                <div className="col-sm-3">JSON</div>                                                              
                                <div className="col-sm-3"><kbd>React</kbd></div>
                                <div className="col-sm-3"><kbd>Angular</kbd></div>
                                <div className="col-sm-3">jQuery</div>
                                <div className="col-sm-3">Ajax</div>                                
                                <div className="col-sm-3">Responsive Web Development</div>
                                <div className="col-sm-3">Bootstrap</div>
                                <div className="col-sm-3">GIT/SVN</div>
                                <div className="col-sm-3">GitHub</div>
                                <div className="col-sm-3">Handlebarsjs</div>
                                <div className="col-sm-3">Analytics</div>
                                <div className="col-sm-3">Web Development</div>
                                <div className="col-sm-3">Front-End Developement</div>
                                <div className="col-sm-3">User Interface</div>
                                <div className="col-sm-3">Object-oriented JavaScript</div>
                                <div className="col-sm-3">Jquery Frameworks</div>
                                <div className="col-sm-3">UI Architecture</div>
                                <div className="col-sm-3">Semantic markup</div>
                                <div className="col-sm-3">W3C Validation</div>
                                <div className="col-sm-3">Pixel-Perfect hand coding</div>
                                <div className="col-sm-3">Page load optimization</div>
                                <div className="col-sm-3">Dynamic/Static pages</div>
                                <div className="col-sm-3">SASS / LESS CSS</div>
                                <div className="col-sm-3">Google API's</div>
                                <div className="col-sm-3">Facebook API's</div>
                                <div className="col-sm-3">Twitter API's</div>
                                <div className="col-sm-3">DOM</div>
                                <div className="col-sm-3">Cross Browser Compatibility</div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className="backend-skill">
                       <h3 className="text-capitalize"><code>back-End Skills:</code></h3>
                       <div className="row">
                        <div className="col-sm-10 col-centered">
                        <div className="row">
                            <div className="col-sm-3"><kbd>JAVA/J2EE</kbd></div>
                            <div className="col-sm-3">Spring MVC</div>
                            <div className="col-sm-3">Hibernate/JPA</div>
                            <div className="col-sm-3">JSP</div>
                            <div className="col-sm-3">J2EE Design Patterns</div>
                            <div className="col-sm-3">MySQL</div>
                            <div className="col-sm-3">XML</div>
                            <div className="col-sm-3">PHP MVC</div>
                            <div className="col-sm-3">WordPress</div>
                            <div className="col-sm-3">SDLC</div>
                            <div className="col-sm-3">TDD</div>
                            <div className="col-sm-3">Debugging</div>
                            <div className="col-sm-3">Firebug</div>
                            <div className="col-sm-3">Fiddler</div>
                            <div className="col-sm-3">FTP</div>
                            <div className="col-sm-3">Agile methodology</div>
                            <div className="col-sm-3">Quick learner</div>
                            <div className="col-sm-3">Unit Testing</div>
                            <div className="col-sm-3">REST API</div>
                            <div className="col-sm-3">Rally/JIRA/WIKI/Basecamp</div>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div className="text-center">
                    <img alt="" className="img-responsive dandcoder" src={lapyImg} />
                </div>
                <h2 className="text-center">I'm Coder and I love Coding</h2>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p className="text-center">
                    <span>My Code</span> 
                    <span className="slash">=</span> 
                    <span>My Responsibility</span> 
                    <span className="slash">=</span> 
                    <span>My Business Card!</span>
                </p>
            </div>
        </div>
        );
    }
}

export default Services;