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


    //handles form submission
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
          name: event.target.name.value,
          email: event.target.email.value,
          subject: event.target.subject.value,
          message: event.target.message.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/form'
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Form submitted: ${result.data}`)
      }

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
                        <p>
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
                    


                    <form className="fillable" onSubmit={handleSubmit}>
                        <p>I'm interested in work opportunities and connecting with likeminded individuals.
                            If you have any questions regarding my portfolio or want to connect feel free to reach me below!
                        </p><br/>
                        <input className="name" id="name" placeholder="Name" required minLength={4}/>
                        <input className="email" id="email" placeholder="Email" required minLength={8}/>
                        <input className="subject" id="subject" placeholder="Subject" required minLength={1}/>
                        <textarea className="message" id="message" placeholder="Message" required minLength={10}/><br/>
                        <button className={clicked ? "button_dark":"button_sub"} type="submit" >S e n d !</button>

                    </form>

                </div>

                <div id="projects">                    
                    <div className="Project">
                        <h1 className="headline">Projects</h1>
                    </div>
                        <br/><p>Here are some things I've created!</p><br/>
                        
                        <div className="project_card">
                            <div className="card_inner">

                            </div>
                        </div>
                        <div className="project_card"></div>

                </div>

            </div>

            <footer className="footer">
                    <p>Designed & Built by Esau Rahim</p>
            </footer>

        </div>
    );
}
