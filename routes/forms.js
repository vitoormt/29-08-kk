module.exports=(app)=>{
    app.get("/formulario",(req,res)=>{
        res.render("formulario.ejs")
    })

    app.post('/formulario',(req,res)=>{
        var dados = await req.body
        res.send(dados)
    })
}