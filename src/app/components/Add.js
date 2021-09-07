import React, { useState } from 'react';
import { Grid, TextField, Button } from "@material-ui/core"
import * as yup from "yup"
import axios from "axios"
import { useFormik } from "formik"
import Message from "./Message"

const projectSchema = yup.object().shape({
    title:yup.string().required("Este campo es obligatorio."),
    img:yup.string().required("Este campo es obligatorio."),
    link:yup.string().required("Este campo es obligatorio."),
    tech:yup.string().required("Este campo es obligatorio."),
    text:yup.string().required("Este campo es obligatorio.")
})

const Add = () => {

    const [status, setStatus] = useState(0)

    const formik = useFormik({
        initialValues:{
            title:"",
            img:"",
            link:"",
            tech:"",
            text:""
        },
        onSubmit:(values)=>{
            try{
                axios.post("http://localhost:3000/api/projects",{
                    title:values.title,
                    img:values.img,
                    link:values.link,
                    tech: values.tech,
                    text: values.text
                }).then(data=>{ 
                    setStatus(data.status)
                })
            }catch(err){
                console.log(err)
            }
        },
        validationSchema: projectSchema
    })
    return ( 
        <div className="flex-center h-100" style={{overflow:"auto", backgroundColor:"#1c1c1c", color:"#f8f9fa"}}>

            <form className="w-100 m-5" onSubmit={formik.handleSubmit}>
                <Grid
                    container
                    justify="center"
                    align="center"
                    direction="column"
                    spacing={4}
                >
                    <Grid item>
                        <h1 className="font-bold">Add a project bro.</h1>
                    </Grid>
                    <Grid item>
                        {(status>=200 && status<=299) ? 
                            <Message className="my-3" mode="success" title="Bien!">
                                tu proyecto se publico correctamente.
                            </Message>
                                : 
                            null
                        }
                        {(status>=400) ? 
                            <Message className="my-3" title="Ups!" mode="error">
                                algo salió mal, intenta nuevamente.
                            </Message>
                                : 
                            null
                        }
                    </Grid>
                    <Grid item>
                        <TextField 
                            label="Title"
                            fullWidth
                            variant="outlined"
                            id="title"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            label="Image url"
                            fullWidth
                            variant="outlined"
                            id="img"
                            name="img"
                            value={formik.values.img}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.img && Boolean(formik.errors.img)}
                            helperText={formik.touched.img && formik.errors.img}
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            label="Project link"
                            fullWidth
                            variant="outlined"
                            id="link"
                            name="link"
                            value={formik.values.link}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.link && Boolean(formik.errors.link)}
                            helperText={formik.touched.link && formik.errors.link}
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            label="Tech"
                            fullWidth
                            variant="outlined"
                            id="tech"
                            name="tech"
                            value={formik.values.tech}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.tech && Boolean(formik.errors.tech)}
                            helperText={formik.touched.tech && formik.errors.tech}
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            label="Text"
                            multiline
                            rows={10}
                            fullWidth
                            variant="outlined"
                            id="text"
                            name="text"
                            value={formik.values.text}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.text && Boolean(formik.errors.text)}
                            helperText={formik.touched.text && formik.errors.text}
                        />
                    </Grid>
                    <Grid item>
                        <Button 
                            className="pal-bg-1"
                            variant="contained" 
                            color="primary"
                            size="large"
                            fullWidth
                            type="submit"
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
     );
}
 
export default Add;