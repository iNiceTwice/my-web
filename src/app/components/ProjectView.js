import React from 'react';


const ProjectView = ({title,text,img,link,tech}) => {
    return ( 
        <div
            className="w-100"
        >
            <a href={link}>
                <span className="project-prev">
                    <h1>{title}</h1>
                    <p>
                        {text}
                        <br/>
                        <br/>
                        {tech}
                    </p>
                    <img style={{height:"auto",width:"100%",zIndex:"0"}} src={img}/>
                </span>
            </a>
        </div>
     );
}
 
export default ProjectView;
