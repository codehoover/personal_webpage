import { Content } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Main() {
    const [clicked, setClicked] = useState(false);

    const [hState, sethState] = useState("top");

    useEffect(() => {
        var lastVal = 0;
        window.onscroll = function () {
        let y = window.scrollY;
        if (y > lastVal) {
            sethState("down");
        }
        if (y < lastVal) {
            sethState("up");
        }
        if (y === 0) {
            sethState("top");
        }
        lastVal = y;
        };
    }, []);


    return (
        
        
        <div className={clicked ? "dark-mode" : "body"}>
            
            <div className={"headbar" + hState} >
                    <a href="#aboutme" className="nav" >About Me</a><br/>
                    <a href="#contactme" className="nav">Contact</a><br/>
                    <a href="#resume" className="nav">Resume</a><br/>
                    <a href="#" className="nav">Projects</a> 
            </div>

            <span className={clicked ? "circle2":"circle"}>
            </span>

            <div className="intro">
                <h1 className="headline">
                    Hi! I'm <span className="E">E</span>
                    <span className="S">s</span>
                    <span className="A">a</span>
                    <span className="U">u</span>,<br/> 
                    A Software Developer.
                </h1><br/>
                
                <h2 className="subheading">Passionate Developer based in Canada</h2><br/>

                <a href="https://github.com/codehoover" target="_blank" className="git"><Image src={clicked ?  "/github_white.png" : "/github.png"} width={40} height={40}/></a>
                <a href="https://www.linkedin.com/in/esau-rahim-b7905b139/" target="_blank" className="linkedin"><Image src={clicked ? "/linkedin_white.png" : "/linkedin.png"} width={40} height={40}/></a>
            </div>

            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <button className="toggle" onClick={()=> setClicked(current=> !current)}>
                <Image src={clicked ? "/light_mode.png" : "/dark_mode.png"}
                width={25}
                height={25}/>
            </button>

            <div id="aboutme">

                <h1 className="headline">About Me</h1>
                <h2>Dedicated developer based in Canada</h2>
                <p>
                    Hi, welcome to my portfolio! My name is Esau and I'm a FullStack Developer located in Canada. Computer Science Graduate (BsC. Comp Sci) from Toronto Metropolitan University
                    (formerly Ryerson University).<br/><br/>

                    Sports enthusiast and avid supporter of the Toronto Raptors.
                    I have a history of competing and excelling in both individual as well as team based athletics (see awards). <br/>
                    Well organized, problem solver with a results oriented approach.<br/><br/>

                    Here are a few languages and technologies I use:

                </p><br/>
                <div className="stack">
                    <ul>
                        <li>Reactjs</li>
                        <li>Nodejs</li>
                        <li>Expressjs</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>Python</li>
                        <li>Javascript/HTML/CSS</li>
                        <li>Java</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
            </div>


            <div id="resume">
                <h1>Skills and Experience</h1>
                <span className="card"></span>
                <a href="/Resume_EsauRahim.pdf" className="cv" download>Downloadable CV</a>
            </div>
            
            <div id="contactme">
                <div className="contactme_header">
                    <h1 style={{display:'inline-block'}}>Contact Me</h1>
                    <Image className="team_icon" src="/team.png" width={50} height={50}/>
                </div>
                
                <p>I'm interested in freelance opportunities and connecting with likeminded individuals.
                    If you have an questions regarding my portfolio or want to connect feel free to reach me below!
                </p>

                <form className="fillable">
                    <input className="name" placeholder="Name"></input>
                    <input className="email" placeholder="Email"></input>
                    <input className="subject" placeholder="Subject"></input>
                    <textarea className="message" placeholder="Message"></textarea><br/>
                    <button className="form_sub">S e n d !</button>
                </form>
            </div>

            <div className="location">
                <p>Esau Rahim</p>
                <p>Remote, Canada</p> <br/>
                <p>email: esaurahim@gmail.com</p>
            </div>




        </div>
    );
}
