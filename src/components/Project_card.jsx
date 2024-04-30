import Image from "next/image";

export default function Project_Card({link,code_link,title,desc}){
    return(

        <div className="project_card">
        <div className="pro_bg"></div>
        <div className="card_inner">

            <div className="project_header" >
                <a className="project_folder" href={link} target="_blank">
                    <Image src={"/web_light.png"} width={50} height={50} alt="project link"/>
                </a>

                <div className="project_link">
                    <a href={code_link} target="_blank">
                        <Image src={"/link_light.png"} width={25} height={25} alt="project link"/>
                    </a>
                </div>
            </div>

            <h3 className="project_title"> {title} </h3><br/>

            <p className="project_body"> {desc} </p>


        </div>
    </div>

    )
}