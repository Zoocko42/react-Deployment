import React from 'react';
import profilePicTemp from './assets/profilePicTemp.png'

export default function AboutMe() {
    return(
        <article id='aboutArticle'>
            <h3 id='aboutHead'>About Me</h3>
            <img src={profilePicTemp} alt='A picture of Zac Schneider, a bearded person with a lopsided smile wearing a grey-and-black hoodie over a flannel-patterned shirt.'></img>
            <p>I am an Atlanta-born programmer and graduate of the Georgia Tech Full-Stack Flex coding bootcamp,
            proficient with Javascript, HTML, and CSS as well as the coding technologies React, React Hooks, Handlebars, MySQL, 
            and MongoDB. Due to the ever-changing nature of the field I subscribe to an agile, tech-agnostic methodology for my 
            coding; any technology that will do the job best is the one I prefer to use. As a result I am also a quick study of 
            new or required tech for any position.</p>
            <br></br>
            <p>In addition to my coding work I also co-host the podcast, <a target="_blank" href='https://linktr.ee/thenerdshitpod'>"Nerd $hit!"</a> along with Sam Wilson
            and Lyz Tory
            </p>
        </article>
    )
}