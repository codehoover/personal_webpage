import Image from "next/image";
import { useEffect, useState } from "react";

const initValues = {
    name:"",
    email:"",
    subject:"",
    message:"",
}
const initState = {values: initValues}

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

    // form validation
    

    const [state, setState] = useState(initState);
    const {values} = state;

    function changeBackground(e){
        e.target.style.background = 'red';

    }



    return (
        
        
        <div className={clicked ? "dark-mode" : "body"}>
        
            <div className={"headbar" + hState} >
                    <a href="#aboutme" className="nav" >About Me</a>
                    <a href="#resume" className="nav">Work</a>
                    <a href="#contactme" className="nav">Contact</a>
                    <a href="#projects" className="nav">Projects</a>
            </div>

            <span className={clicked ? "circle2":"circle"}>
            </span>

            <div className="main_content">

                <div id="particle-conatiner">
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                </div>

                <div id="landing_page">

                    <div>
                    <h1 className="headline">
                        Hi! I'm <span className="E">E</span>
                        <span className="S">s</span>
                        <span className="A">a</span>
                        <span className="U">u</span>,<br/> 
                        A Software Developer.                      
                    </h1>

                                        
                    <h2 className="subheading">Passionate Developer based in Canada</h2><br/>

                    <a href="https://github.com/codehoover" target="_blank" className="git"><Image src={clicked ?  "/github_white.png" : "/github.png"} width={40} height={40} alt="github link"/></a>
                    <a href="https://www.linkedin.com/in/esau-rahim-b7905b139/" target="_blank" className="linkedin"><Image src={clicked ? "/linkedin_white.png" : "/linkedin.png"} width={40} height={40} alt="linkedin profile link"/></a>

                    </div>
    
                    <div className="logo">
                        <h2>  "L O G O" </h2>
                    </div>

                </div>

                {/* <div className="arrow">
                    <span style={clicked ? {borderBottom:"10px solid white", borderRight:"10px solid white"}: {borderBottom:"10px solid black", borderRight:"10px solid black"} }></span>
                    <span style={clicked ? {borderBottom:"10px solid white", borderRight:"10px solid white"}: {borderBottom:"10px solid black", borderRight:"10px solid black"} }></span>
                    <span style={clicked ? {borderBottom:"10px solid white", borderRight:"10px solid white"}: {borderBottom:"10px solid black", borderRight:"10px solid black"} }></span>
                </div> */}

                <button className="toggle" onClick={()=> setClicked(current=> !current)}>
                    <Image src={clicked ? "/light_mode.png" : "/dark_mode.png"}
                    width={25}
                    height={25}
                    alt="light/dark mode toggle"/>
                </button>

                <div id="aboutme" className="container">

                    <h1 className="subheadline">
                        <span className="green">A</span>
                        bo
                        <span className="yellow">u</span>t 
                        M<span className="red">e</span>
                    </h1>

                    <div className="aboutme_body">
                        <h2>Dedicated developer based in Canada</h2>
                        <p>
                            Hi, welcome to my portfolio! My name is Esau and I'm a FullStack Developer located in Canada. I am a recent Computer Science Graduate (BsC. Comp Sci Hons) from Toronto Metropolitan University (formerly Ryerson University) .<br/><br/>

                            I regard myself as a well organized, problem solver with a results oriented approach.<br/><br/>

                            Outside of programming I am a movie connoisseur, sports enthusiast and avid supporter of the Toronto Raptors!
                            If you would like to see my past awards in athletics as well as academics please see <a href="#">Awards</a>. <br/>
                            <br/><br/>
                        </p><br/>

                    </div>
                    
                </div>

                <div id="resume" className="container">
                    <h1 className="subheadline"><span className="blue">S</span>kill<span className="yellow">s</span> <span className="green">a</span>nd <span className="red">E</span>xp<span className="blue">e</span>ri<span className="green">e</span>nc<span className="yellow">e</span></h1>

                    <div className="timeline">
                        <span className="holder"> 
                            <Image src="/nellie.jpg" width={50} height={50} alt="nellie"/>
                        </span>

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

                    <div className="orbit-container">
                        <div className="center-circle" onMouseOver={changeBackground}>
                            <Image src="/code.svg" height={50} width={50} alt="code image"/>
                        </div>
                        <div className="inner-orbit">
                            <span className="inner-orbit-circle"> <Image src="/reactjs-icon.svg" width={40} height={40}/></span>
                        </div>
                        <div className="middle-orbit">
                            <span className="middle-orbit-circle"> <Image src="/html.svg" width={40} height={40}/></span>
                            <span > <Image src="/js.svg" width={40} height={40}/></span>
                            <span > <Image src="/css3.svg" width={40} height={40}/></span>
                        </div>
                        <div className="outer-orbit">
                            <span className="outer-orbit-circle"> <Image src="/python.svg" width={50} height={50}/></span>
                            <span > <Image src="/nodejs.svg" width={40} height={40} /></span>
                            <span > <Image src="/expressjs.svg" width={40} height={40}/></span>
                        </div>
                    </div>
                    
                    <p style={{marginBottom:"20px"}}>Grab a copy of my cv!</p>
                    <div>
                        
                    <a href="/Resume_EsauRahim.pdf" className={clicked ? "button_dark":"button_sub"} target="_blank">Downloadable CV</a>
                    </div>

                </div>

                
                <div id="contactme" className="container">                    
                    <div className="contactme_header">
                        <h1 className="subheadline">Cont<span className="green">a</span>ct M<span className="red">e</span></h1>
                    </div>
                    

                    <form className="fillable" >
                        <p>I'm interested in work opportunities and connecting with likeminded individuals.
                            If you have any questions regarding my portfolio or want to connect feel free to reach me below!
                        </p><br/>
                        <input className="name" id="name" placeholder="Name"  required minLength={4}/>
                        <input className="email" id="email" placeholder="Email" required minLength={8}/>
                        <input className="subject" id="subject" placeholder="Subject" required minLength={1}/>
                        <textarea className="message" id="message" placeholder="Message" required minLength={10}/><br/>
                        <button className={clicked ? "button_dark":"button_sub"} type="submit"  >S e n d !</button>

                    </form>

                </div>

                <div id="projects">                    
                    <div className="Project">
                        <h1 className="headline">Projects</h1>
                    </div>

                        <br/><p>Here are some things I've created!</p><br/>
                        
                        <div className="proj-grid-holder">
                            <div className="project_grid">

                                <div className="project_card">
                                <div className="pro_bg"></div>
                                    <div className="card_inner">

                                        <div className="project_header">
                                            <div className="project_folder">
                                                <Image src={"/web_light.png"} width={50} height={50} alt="project link"/>
                                            </div>

                                            <div className="project_link">
                                                <a href="https://github.com/codehoover/plantdb" target="_blank">
                                                    <Image src={ "/link_light.png"} width={25} height={25} alt="project link"/>
                                                </a>
                                            </div>
                                        </div>

                                        <h3 className="project_title"> Plantdb</h3><br/>

                                        <p className="project_body"> Built a CRUD application using Next.js and Postgresql. Deployed on Vercel</p><br/>

                                    </div>
                                </div>

                                <div className="project_card">
                                    <div className="pro_bg"></div>
                                    <div className="card_inner">

                                        <div className="project_header" >
                                            <a className="project_folder" href="https://purpl.netlify.app/" target="_blank">
                                                <Image src={"/web_light.png"} width={50} height={50} alt="project link"/>
                                            </a>

                                            <div className="project_link">
                                                <a href="https://github.com/codehoover/Weather_app" target="_blank">
                                                    <Image src={"/link_light.png"} width={25} height={25} alt="project link"/>
                                                </a>
                                            </div>
                                        </div>

                                        <h3 className="project_title"> Weather App </h3><br/>

                                        <p className="project_body"> Created an application in HTML, CSS, and JavaScript which pulls data from the openweather API to display the current weather of a select city.</p>


                                    </div>
                                </div>

                                <div className="project_card">
                                    <div className="pro_bg"></div>
                                    <div className="card_inner">

                                        <div className="project_header">
                                            <div className="project_folder">
                                                <Image src={"/web_light.png"} width={50} height={50} alt="project link"/>
                                            </div>

                                            <div className="project_link">
                                                <a href="https://github.com/codehoover/plantdb" target="_blank">
                                                    <Image src={"/link_light.png"} width={25} height={25} alt="project link"/>
                                                </a>
                                            </div>
                                        </div>

                                        <h3 className="project_title"> title</h3>

                                        <p className="project_body"> Description</p>

                                    </div>
                                </div>
                                
                                <div className="project_card">
                                    <div className="pro_bg"></div>
                                    <div className="card_inner">

                                        <div className="project_header">
                                            <div className="project_folder">
                                                <Image src={"/web_light.png"} width={50} height={50} alt="project link"/>
                                            </div>

                                            <div className="project_link">
                                                <a href="https://github.com/codehoover/plantdb" target="_blank">
                                                    <Image src={"/link_light.png"} width={25} height={25} alt="project link"/>
                                                </a>
                                            </div>
                                        </div>

                                        <h3 className="project_title"> title</h3>

                                        <p className="project_body"> Description</p>

                                    </div>
                                </div>
                            
                        </div>


                    </div>
                </div>

            </div>

            <footer className="footer">
                    <p>Designed & Built by Esau Rahim</p>
            </footer>

        </div>
    );
}
