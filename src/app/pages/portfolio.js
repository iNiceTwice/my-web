import React,{useState,useEffect} from 'react';
import Nav from "../components/Nav"
import ProjectView from '../components/ProjectView';
import {Grid,Typography} from "@material-ui/core"
import axios from "axios"

const portfolio = () => {
    
    const [data,setData] = useState([])

    const getProjects = async () => {

        const response = await axios.get("http://localhost:3000/api/projects")
        setData(await response.data)
    }
    useEffect( () => {
        getProjects()
    }, [])

    return ( 
        <div className="h-100" style={{overflow:"auto", backgroundColor:"#1c1c1c", color:"#f8f9fa"}}>
            <Nav />
            <section 
                className="mt-5 flex-center"  
                style={{width:"80%",margin:"auto"}}
            >
                  <Grid 
                    className="my-5"
                    container
                    direction="column"
                    justify="center"
                    alignItems="center" 
                >
                    <Grid item>
                        <Typography style={{fontWeight:300,fontFamily:"Open Sans"}} align="center" component="h3" variant="h3">
                             Portfolio
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    className="mb-5"
                    container
                    direction="column"
                >
                    <Grid item>
                        <div style={{borderTopLeftRadius: ".25rem"}} id="trapezoid"></div>
                        <div style={{
                            width:"100%",
                            height: "2px",
                            backgroundColor:"#f7f7f7"
                        }}></div>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="center"
                    spacing={4}
                >
                    {
                        data.map((project, i)=>(
                            <Grid key={i} item xs={12} md={6}>
                                <ProjectView
                                    title={project.title} 
                                    text={project.text}
                                    tech={project.tech} 
                                    link={project.link} 
                                    img={project.img}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </section>
        </div>
     );
}
 
export default portfolio;