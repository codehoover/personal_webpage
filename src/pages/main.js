import Image from "next/image";
import { useEffect, useState } from "react";
import {useForm, ValidationError } from '@formspree/react';
import Nellie from "../Work_description/Nellie";
import Tmu from "../Work_description/Tmu"
import Tmu2 from "../Work_description/Tmu2";
import Tmu3 from "../Work_description/Tmu3";
import Wip from "../Section/WIP";
import WIP from "@/Section/WIP";

export default function Main() {

    const[nellieState, setNellie] = useState(false);
    const[tmuState,setTmu] = useState(false);
    const[tmu2State,setTmu2] = useState(false);
    const[tmu3State,setTmu3] = useState(false);

    const handleNellie = () =>{
        setNellie(true);
        setTmu(false);
        setTmu2(false);
        setTmu3(false);
    }
    const handleTMU = () =>{
        setNellie(false);
        setTmu(true);
        setTmu2(false);
        setTmu3(false);
    }
    const handleTMU2 = () =>{
        setNellie(false);
        setTmu(false);
        setTmu2(true);
        setTmu3(false);
    }
    const handleTMU3 = () =>{
        setNellie(false);
        setTmu(false);
        setTmu2(false);
        setTmu3(true);
    }

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

    function Contactform(){
        const [state,handleSubmit] = useForm('mjvdnbol');
        if(state.succeeded){
            return <p>Thanks for reaching out!</p>
        }
        return(
            <form className="fillable" onSubmit={handleSubmit}>
            <p>I'm interested in work opportunities and connecting with likeminded individuals.
            If you have any questions regarding my portfolio or want to connect feel free to reach me below!
            </p><br/>

            <input name="Name" className="name" type="text" placeholder="Name"/>
            <input
                className="email"
                type="email" 
                name="email"
                placeholder="Email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <input className="subject" type="text" name="subject" placeholder="Subject"/>
            <textarea
                id="message"
                name="message"
                className="message"
                placeholder="Message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <br></br>
            <button type="submit" className={clicked ? "button_dark":"button_sub"} disabled={state.submitting}>
            S e n d !
            </button>
            </form>
        );
    };

    function changeBackground2(e){
        e.target.style.transform = "rotate(-360deg)";
        e.target.style.transition = "1s";

    }

    function changeBackground(e){
        e.target.style.transform = "rotate(360deg)";
        e.target.style.transition = "1s";
    }

    const [isHovering, setIsHovering] = useState(false);

    const handleOnClick = () =>{
        setIsHovering(true);
    }
    const handleMouseOut = () =>{
        setIsHovering(false);
    }



    return (
        
        
        <div className={clicked ? "dark-mode" : "body"}>
        
            <div className={"headbar" + hState} >
                <div className="navlogo">
                <a href="#" className="homenav"><Image src="/ER_logo_L.png" width={100} height={100} alt="Esau Rahim home menu"/></a>
                </div>

                <div className="navmenu">
                <a href="#aboutme" className="nav" >About Me</a>
                <a href="#resume" className="nav">Work</a>
                <a href="#contactme" className="nav">Contact</a>
                <a href="#projects" className="nav">Projects</a>
                </div>

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
                        <Image src={clicked ? "/ER_logo_D.png" : "/ER_logo_L.png"} width={600} height={600} alt="Esau logo" priority={true}/>
                    </div>

                </div>

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

                    <h2>Dedicated developer based in Canada</h2><br/>

                    <div className="aboutme_body">
                        <div className="aboutme_desc">
                            <p>
                                Hi, welcome to my portfolio! My name is Esau and I'm a FullStack Developer located in Canada. I am a recent Computer Science Graduate (BsC. Comp Sci Hons) from Toronto Metropolitan University (formerly Ryerson University).<br/><br/>
                                Motivated and skilled software developer with 1 year of full-stack experience using React.js, Node.js, Express.js, and Strapi. Proficient in Python, HTML, JavaScript, and CSS with 4 years of experience developing research studies. Highly adept at utilizing WordPress and AEM to create and manage web pages. A proactive team player experienced in Agile Scrum environments.<br/><br/>

                                I regard myself as a well organized, problem solver with a results oriented approach.<br/><br/>

                                Outside of programming I am a movie connoisseur, sports enthusiast and avid supporter of the Toronto Raptors!
                                If you would like to see my past awards in athletics as well as academics please see <a href="#">Awards</a>. <br/>
                                <br/><br/>
                            </p>
                        </div>
{/* 
                            <p className="aboutme_img">
                                function about_me() &#123;<br/> 
                                &nbsp; var name = 'Esau'; <br/>
                                &nbsp; const location = 'Canada'; <br/>
                                &nbsp; var university = 'Toronto Metropolitan University';<br/>
                                &nbsp; var bane_of_my_existence = 'Toronto Raptors'; <br/>
                                &#125;<br/><br/>
                                function awards() &#123;<br/>
                                
                                &#125;<br/> 
                                <span className="caret_anim">&#95;</span> 
                            </p> */}
                    </div>
                    
                </div>

                <div id="resume" className="container">
                    <h1 className="subheadline"><span className="blue">S</span>kill<span className="yellow">s</span> <span className="green">a</span>nd <span className="red">E</span>xp<span className="blue">e</span>ri<span className="green">e</span>nc<span className="yellow">e</span></h1>
                    <h3>Where I've worked</h3>
                    <div className="timeline">
                        <div className="panel">
                            <button className="tab-1" onClick={handleNellie}>Nellie Health</button>
                            <button className="tab-1" onClick={handleTMU}>TMU</button>
                            <button className="tab-1" onClick={handleTMU2}>TMU</button>
                            <button className="tab-1" onClick={handleTMU3}>TMU</button>
                        </div>
                        {nellieState && <Nellie/>}
                        {tmuState && <Tmu/>}
                        {tmu2State && <Tmu2/> }
                        {tmu3State && <Tmu3/>}

                        
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
                        <div className="center-circle"  >
                            <Image src="/code.svg" height={50} width={50} alt="code image" onMouseOver={changeBackground} onMouseOut={changeBackground2}/>
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
                    <Contactform />
                    

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
                                                
                                            </div>

                                            <div className="project_link">
                                                <a href="https://github.com/codehoover/ecom_page" target="_blank">
                                                    <Image src={"/link_light.png"} width={25} height={25} alt="project link"/>
                                                </a>
                                            </div>
                                        </div>

                                        <h3 className="project_title"> Astro Athletics</h3>

                                        <p className="project_body"> Astro Athletics is a clothing brand/ecommerce site. It is still currently in the works!</p>

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
                                                <a href="#" target="_blank">
                                                    <Image src={"/link_light.png"} width={25} height={25} alt="project link"/>
                                                </a>
                                            </div>
                                        </div>

                                        <h3 className="project_title"> More projects coming soon!</h3>

                                        <p className="project_body"> </p>

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
