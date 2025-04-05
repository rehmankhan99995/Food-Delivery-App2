import express from 'express'
import cors from 'cors'



// app config
const app = express()
const port= 4000

// middleware
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Sever Started on http://localhost:${port}`)
})
//mongodb+srv://rehman00004khan:0999999@cluster0.tfa0q.mongodb.net/?