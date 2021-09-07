import React from 'react';
import {Grid,Paper, Typography, Chip, Tooltip} from "@material-ui/core"
import ScrollButton from "../components/ScrollButton"
import Nav from "../components/Nav"
import Contact from "../components/Contact"
import {Code, GitHub, LinkedIn, MailOutline, Folder, Brush, Storage} from '@material-ui/icons';

const About = () => {
    return ( 
        <div style={{backgroundColor:"#1c1c1c", color:"#f8f9fa"}}>
            <Nav/>
            <section className="about-sections flex-center pal-bg-2 flex-column">
                <div className="flex-center text-center px-5 flex-column">
                    <div className="flex-center flex-column">
                        <h1 className="font-bold" style={{fontSize:60}}>Hey! Soy <span className="pal-1">Martín </span><br/>Bienvenido a mi sitio web</h1>
                        <p className="font-thin text-center" style={{fontSize:24}}>
                            Pemíteme contarte un poco sobre mí y mis habilidades como Desarrollador Web.
                        </p>
                    </div>
                    <ScrollButton link="#about"/>   
                </div>
           </section>
            <section id="about" className="about-sections flex-center">
                <div className=" flex-center flex-column">
                    <h1 style={{fontSize:30}} className="font-thin">Sobre mí</h1>
                    <div style={{width:"80%"}} className="d-flex align-items-center">
                        <span style={{width:"100%",height:"2px"}} className="mr-4 pal-bg-3"></span>
                        <img className="pfp" alt="Foto de perfil Martin Planiscig" src={"/img/pfp.jpg"}/>
                        <span style={{width:"100%",height:"2px"}} className="ml-4 pal-bg-3"></span>
                    </div>
                    <Paper 
                        style={{width:"80%",borderRadius:"12px"}} elevation={3} 
                        className="about-card"
                    >
                        <p style={{fontSize:24}} className="font-thin mb-4 justify-content-start mx-3 flex-wrap">"Me considero una persona creativa, con gustos clásicos y minimalistas para la mayoria de las cosas, no soy el típico perfeccionista más bien, encuentro placer en los trabajos bien hechos y cuando no, siempre estoy dispuesto a aprender y a mejorar todo lo que me proponga."
                        </p>    
                    </Paper>
                    <ScrollButton link="#skills"/>
                </div>
            </section>
            <section id="skills" className="about-sections flex-center">
                 <div style={{width:"80%"}} className="d-flex align-items-center">
                    <span style={{width:"100%",height:"2px"}} className="ml-2 mr-4 pal-bg-3"></span>
                    <h1 style={{fontSize:30}} className="font-thin">Skills</h1>
                    <span style={{width:"100%",height:"2px"}} className="mr-2 ml-4 pal-bg-3"></span>
                </div>
            
                <Grid 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center" 
                    className=" align-items-stretch"
                    style={{width:"80%"}}
                >
                    <Grid
                        className="d-flex align-items-stretch"
                        item md={4} xs={12}
                    >
                        <Paper
                            variant="outlined"
                            style={{borderRadius:"12px", border: "1px solid #f7f7f7"}} className="pal-bg-2 pal-3 m-2 p-5 text-center flex-column"
                        >
                            <Brush className="pal-1" style={{transform: "scale(1.8)"}} />
                            <h2>Design</h2>
                            <p>Elegante y sencillo es el sello de mis diseños, tanto para el desarrollo como en la vida.</p>
                             <h3 className="pal-1">
                                <em>Skills:</em>
                            </h3>
                            <p className="font-thin">
                                HTML5, CSS3, ReactJS, EJS, Responsive Design
                            </p>
                           <h3 className="pal-1">
                                <em>Tools:</em>
                            </h3>
                            <p className="font-thin">
                                Photoshop <br/>
                                Figma<br/>
                                Canvas<br/>
                            </p>
                        </Paper>     
                    </Grid>
                    <Grid
                        className="d-flex align-items-stretch"
                        item md={4} xs={12}
                    >
                        <Paper
                            variant="outlined"
                            style={{borderRadius:"12px",border:"1px solid #f7f7f7"}} 
                            className="pal-bg-2 pal-3 m-2 text-center p-5  flex-column"
                        >
                            <Code className="pal-1" style={{transform: "scale(1.8)"}} />
                            <h2>Front-end</h2>
                            <p>
                                Con ReactJS disfruto darle forma a mis ideas y poder darles vida en el navegador.
                            </p>
                             <h3 className="pal-1">
                                <em>Skills:</em>
                            </h3>
                            <p className="font-thin">
                                HTML5, CSS3, ReactJS, EJS, Responsive Design
                            </p>
                             <h3 className="pal-1">
                                <em>Tools:</em>
                            </h3>
                            <p className="font-thin">
                                Visual Studio Code <br/>
                                Git <br/>
                                Boostrap<br/>
                                Material UI<br/>
                            </p>
                        </Paper>     
                    </Grid>
                    <Grid 
                        item md={4} xs={12}
                        className="d-flex align-items-stretch"
                    >
                        <Paper
                            variant="outlined"
                            style={{borderRadius:"12px", border:"1px solid #f7f7f7"}} 
                            className="pal-bg-2 pal-3 m-2 text-center p-5 flex-column"
                        >
                            <Storage className="pal-1" style={{transform: "scale(1.8)"}} />
                            <h2>Back-end</h2>
                            <p>
                                Los datos son la base de todo proyecto, a pesar de mi inclinación al front-end, me he instruido con ciertas herramientas para darle a mis trabajos mucha más profundidad.
                            </p>
                            <h3 className="pal-1">
                                <em>Skills:</em>
                            </h3>
                             <p className="font-thin">
                               NodeJS, Express, MongoDB, API REST, CRUD, Web Sockets, Mongoose
                            </p>
                             <h3 className="pal-1">
                                <em>Tools:</em>
                            </h3>
                            <p className="font-thin">
                                Visual Studio Code <br/>
                                Git <br/>
                                MongoDB Atlas<br/>
                                NPM<br/>
                                Webpack<br/>
                            </p>
                        </Paper>     
                    </Grid>
                    <ScrollButton link="#cv"/>
                </Grid>
            </section>
            <section id="cv" className="about-sections flex-center">
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    direction="column"
                    style={{width:"80%"}}
                >
                    <Grid
                        item xs={12}
                        className="w-100 flex-center"
                    >
                        <div className="w-100 d-flex align-items-center">
                            <span style={{width:"100%",height:"2px"}} className="ml-2 mr-4 pal-bg-3"></span>
                            <h1 style={{fontSize:30}} className="font-thin">Curriculum</h1>
                            <span style={{width:"100%",height:"2px"}} className="mr-2 ml-4 pal-bg-3"></span>
                        </div>
                        <a className="mt-3" target="_blank" href="https://drive.google.com/file/d/12SyZvUB5y2_-GUN0NuEZEE4y5hCII6vj/view?usp=sharing">
                            <img alt="curriculum" src={"img/cv-preview.jpg"} height="500" width="500" className="cv-preview my-5" />
                        </a>
                    </Grid>
                    <ScrollButton link="#contact"/>
                </Grid>
            </section>
            <section id="contact" className="about-sections flex-center">
               <Contact/>
            </section>
            <hr style={{width:"80%", opacity:0.8}}/>
            <footer id="footer" className="flex-center">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center" 
                    style={{height:"30rem"}}
                    className="mx-4"
                    spacing={2}
                >
                    <Grid
                        item
                        className="flex-center flex-column"
                    >
                        <img style={{height:"4rem"}} src={"/img/mas.svg"} />
                        <h2 style={{opacity:0.8}} className="font-bold"> Developer in development.</h2>                       
                    </Grid>
                    <Grid 
                        item
                    >
                        <div className="flex-center flex-row social-links">
                            <a href="https://www.linkedin.com/in/mart%C3%ADn-planiscig-2aa187159/" target="_blank">
                                <LinkedIn style={{transform: "scale(1.8)"}} />
                            </a>
                            <a href="https://github.com/iNiceTwice" target="_blank">
                                <GitHub className="mx-4" style={{transform: "scale(1.7)"}} />
                            </a>
                            <a href="mailto:planiscig.martin@gmail.com" target="_blank">
                                <MailOutline style={{transform: "scale(1.8)"}} />
                            </a>
                            <a href="/portfolio" target="_blank">
                                <Folder className="ml-4" style={{transform: "scale(1.8)"}} />
                            </a>
                        
                        </div>
                        <Grid item>
                            <h4 
                                className="font-thin" 
                                style={{opacity:0.8}}
                            >
                                Web desarrollada por  mí © Martín Planiscig
                            </h4>
                            <div className="flex-center flex-row">
                                <h6 style={{opacity:0.8}} >made with</h6>
                                <i 
                                    style={{opacity:0.8, fontSize:"2rem"}}  className=" mx-3 devicon-materialui-plain">
                                </i>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </footer>
        </div>
    );
}

 
export default About;