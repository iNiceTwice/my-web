import React, {useState} from 'react';
import { Grid, TextField, Button } from "@material-ui/core"
import { useFormik } from "formik"
import * as yup from "yup"
import axios from "axios"
import Message from '../components/Message';

const validationSchema = yup.object().shape({
    name: yup.string().required("Este campo es obligatorio."),
    email:yup.string().email("Introduzca un email válido.").required("Este campo es obligatorio."),
    text:yup.string().max(50).required("Este campo es obligatorio.")
})

const Contact = () => {

    const [status,setStatus] = useState(0)
    const [spinner,setSpinner] = useState(false)
    const [isDisabled,setIsDisabled] = useState(false)

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            text:""
        },
        onSubmit:(values)=>{
            setSpinner(true)
            try{
                axios.post("http://localhost:3000/api/send-email",{
                    name:values.name,
                    email:values.email,
                    text: values.text
                }).then(data=>{ 
                    setStatus(data.status)
                    setIsDisabled(true)
                })
            }catch(err){
                console.log(err)
            }
        },
        validationSchema: validationSchema
    })
    
    return ( 
        <div style={{width:"100vw"}}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center" 
            >
                <Grid style={{width:"80%"}}>
                    <div className="w-100 d-flex align-items-center">
                        <span style={{width:"100%",height:"2px"}} className="ml-2 mr-4 pal-bg-3"></span>
                        <h1 style={{fontSize:30}} className="font-thin">Contacto</h1>
                        <span style={{width:"100%",height:"2px"}} className="mr-2 ml-4 pal-bg-3"></span>
                    </div>
                </Grid>
                    <Grid
                        item xs={12}
                        style={{width:"65%"}}
                    >
                    {(spinner && status == 0) ? 
                        <div className="spinner">
                            <div className="rect1 "></div>
                            <div className="rect2 mx-1"></div>
                            <div className="rect3 "></div>
                            <div className="rect4 mx-1"></div>
                            <div className="rect5 "></div>
                        </div>
                            :
                        null
                    }
                    {(status>=200 && status<=299) ? 
                        <Message className="my-3" mode="success" title="Bien!">
                            tu mensaje se envió correctamente.
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
                   
                    <form
                        className="mt-3"
                        onSubmit={formik.handleSubmit}
                    >
                        <TextField
                            className="mb-3"
                            fullWidth
                            label="Nombre"
                            variant="outlined"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            name="email"
                            className="mb-3"
                            fullWidth
                            label="Email"
                            variant="outlined"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            name="text"
                            className="mb-3"
                            fullWidth
                            label="Mensaje"
                            variant="outlined"
                            multiline
                            rows={10}
                            value={formik.values.text}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.text && Boolean(formik.errors.text)}
                            helperText={formik.touched.text && formik.errors.text}
                        />
                        <span style={{cursor:"not-allowed"}}>
                            <Button
                                id="submitButton"
                                className="pal-bg-1"
                                variant="contained" 
                                color="primary"
                                size="large"
                                type="submit"
                                disabled={isDisabled}
                                fullWidth
                            >
                                {isDisabled ? "Gracias!" : "Enviar"}
                            </Button>
                        </span>
                    </form>
                </Grid>
            </Grid>
        </div> 
    );
}
 
export default Contact;