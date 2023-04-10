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
                    <a href="#" className="nav">Projects</a>
                    <a href="#resume" className="nav">Work</a><br/> 
                    <a href="#contactme" className="nav">Contact</a><br/>
            </div>

            <span className={clicked ? "circle2":"circle"}>
            </span>

            <div className="main_content">
                <div className="intro">
                    <h1 className="headline">
                        Hi! I'm <span className="E">E</span>
                        <span className="S">s</span>
                        <span className="A">a</span>
                        <span className="U">u</span>,<br/> 
                        A Software Developer.

                        <div className="circle_anim">
                        </div>
                        
                    </h1><br/>
                    
                    <h2 className="subheading">Passionate Developer based in Canada</h2><br/>

                    <a href="https://github.com/codehoover" target="_blank" className="git"><Image src={clicked ?  "/github_white.png" : "/github.png"} width={40} height={40} alt="github link"/></a>
                    <a href="https://www.linkedin.com/in/esau-rahim-b7905b139/" target="_blank" className="linkedin"><Image src={clicked ? "/linkedin_white.png" : "/linkedin.png"} width={40} height={40} alt="linkedin profile link"/></a>
                    

                </div>

                <div className="arrow">
                    <span style={clicked ? {borderBottom:"10px solid white", borderRight:"10px solid white"}: {borderBottom:"10px solid black", borderRight:"10px solid black"} }></span>
                    <span style={clicked ? {borderBottom:"10px solid white", borderRight:"10px solid white"}: {borderBottom:"10px solid black", borderRight:"10px solid black"} }></span>
                    <span style={clicked ? {borderBottom:"10px solid white", borderRight:"10px solid white"}: {borderBottom:"10px solid black", borderRight:"10px solid black"} }></span>
                </div>

                <button className="toggle" onClick={()=> setClicked(current=> !current)}>
                    <Image src={clicked ? "/light_mode.png" : "/dark_mode.png"}
                    width={25}
                    height={25}
                    alt="light/dark mode toggle"/>
                </button>

                <div id="aboutme">

                    <h1 className="headline">
                        <span className="green">A</span>
                        bo
                        <span className="yellow">u</span>t 
                        M<span className="red">e</span>
                    </h1>

                    <div className="aboutme_body">
                        <h2>Dedicated developer based in Canada</h2>
                        <p className="bio">
                            Hi, welcome to my portfolio! My name is Esau and I'm a FullStack Developer located in Canada. I am a recent Computer Science Graduate (BsC. Comp Sci Hons) from Toronto Metropolitan University (formerly Ryerson University) .<br/><br/>

                            I regard myself as a well organized, problem solver with a results oriented approach.<br/><br/>

                            Outside of programming I am a movie connoisseur, sports enthusiast and avid supporter of the Toronto Raptors.
                            If you would like to see my past awards in athletics as well as academics please see <a href="#">Awards</a>. <br/>
                            <br/><br/>
                        </p><br/>

                    </div>
                    
                </div>


                <div id="resume">
                    <h1 className="headline"><span className="blue">S</span>kill<span className="yellow">s</span> <span className="green">a</span>nd <span className="red">E</span>xp<span className="blue">e</span>ri<span className="green">e</span>nc<span className="yellow">e</span></h1>

                    <div>
                        <Image className="card" src="/nellie.jpg" width={100} height={100} alt="nellie"/>
                        <Image className="card" src="/tmu.jpg" width={100} height={100} alt="tmu"/>
                    </div>
                    Here are a few languages and technologies I use:
                    <div>
                            <ul className="stack">
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
                    
                    <p style={{paddingBottom:"15px"}}>Grab a copy of my cv!</p>
                    <a href="/Resume_EsauRahim.pdf" className={clicked ? "button_dark":"button_sub"} download>Downloadable CV</a>
                    
                </div>
                
                <div id="contactme">
                    <div className="contactme_header">
                        <h1 className="headline">Cont<span className="green">a</span>ct M<span className="red">e</span></h1>
                        <Image className="team_icon" src="/team.png" width={70} height={70} alt="team icon"/>
                    </div>
                    
                    <p>I'm interested in work opportunities and connecting with likeminded individuals.
                        If you have any questions regarding my portfolio or want to connect feel free to reach me below!
                    </p>

                    <form className="fillable">
                        <input className="name" placeholder="Name"></input>
                        <input className="email" placeholder="Email"></input>
                        <input className="subject" placeholder="Subject"></input>
                        <textarea className="message" placeholder="Message"></textarea><br/>
                        <button className={clicked ? "button_dark":"button_sub"}>S e n d !</button>
                    </form>
                </div>

                <div className="location">
                    <p>Esau Rahim</p>
                    <p>Location 1: Winnipeg, Manitoba, Canada</p>
                    <p>Location 2: Toronto, Ontario, Canada</p> <br/>
                    <p>email: esaurahim@gmail.com</p>
                </div>

                <div id="Blog">

                    <h1 className="headline">Blog</h1>
                    <p>Here are some how-tos and explanations on features and functions I implemented into my webpage!</p>
                    <div className="blog_card_holder">
                        <a className="blog_card" href="#Blog">
                            <h4 className="tagline_features">Features & Functions</h4>
                            <Image className="card_image"src="/dark_mode.png" height={40} width={40} alt="dark mode image"/>
                            <h3 className="title"> Dark/light mode</h3> 
                            <p className="description"> Learn how to easily create dark and light themes for your webpage!</p>
                        </a>

                        <a className="blog_card" href="#Blog">
                            <h4 className="tagline_features">Features & Functions</h4>
                            <h3 className="title"> Hiding Nav Bar</h3>
                            <p className="description"> How I created a hiding Navigation Bar for my webpage</p>
                        </a>
                    </div>


                </div>

                <div className="footer">
                    <p>Designed & Built by Esau Rahim</p>
                </div>
            </div>
        </div>
    );
}
