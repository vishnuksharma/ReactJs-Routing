import React, { Component } from 'react';
import './About.css';
import birdImg from './../../images/myself.jpg';
class About extends Component{

        render(){
            return (
                <div className="about-component container-fluid bg-1">
                    <h1>Who Am I?</h1>
                    <img className="myself img-circle img-responsive" src={birdImg} alt="Bird" />
                    <h3>I'm an Full-Stack Software Engineer</h3>
                </div>
            );
        }
}

export default About;