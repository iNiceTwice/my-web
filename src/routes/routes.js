const express = require("express")
const router = express.Router()
const transporter = require("../server/config/mailer")
const { gmail_user, gmail_priv} = require("../../keys")
const {check} = require("express-validator")
const { validationResult } = require("express-validator")
const db = require("../models/PROJECTS_DB")

router.get("/api/projects", async (req,res)=>{
    const projects = await db.find()
    res.send(projects)

})

router.post("/api/projects", async (req,res)=>{
    const projects = new db(req.body)
    await projects.save()
    res.json({msg:"proyecto creado exitosamente."})

})

router.post("/api/send-email",[

        check("name", "Ingresa tu nombre").not().isEmpty(),
        check("text", "Ingresa tu mensaje").not().isEmpty(),
        check("email", "Ingresa un email válido").isEmail()

    ],(req,res)=>{
        console.log(req.body)
        const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({errores:errors.array()})
            }

        const {name,email,text} = req.body

        transporter.sendMail({
            from: gmail_user , // sender address
            to: gmail_priv, // list of receivers
            subject: "Mensaje de tu pagina web", // Subject line
            html: `<h2>${name} de ${email}<h2><br/><p>${text}</p>`
        },(error,info)=>{
            if(error){
                res.status(500).send(error.message)
            }else{
                console.log("Email enviado")
                res.status(200).jsonp(req.body)
            }
        });
})

export default router