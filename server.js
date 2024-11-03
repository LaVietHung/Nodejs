const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 6000
app.use(bodyParser.json())
app.get('/', (req, res) => {
    console.log("client doing call a api")
  res.send('Hello World!')
})
app.get('/Hung', (req, res) => {
  console.log("client doing call a api")
res.json({message:'Hello World!1111111'})
})


app.post('/information', (req, res) => {
  const {email, password} = req.body
  if(!email || !password){
    return res.json({
      message:"email or password is required",
    })
  }

  if(Number(password) === 123456789){
      return res.json({
        message:"login success",
      })
  }
  return res.json({
    message: "login fail",
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})