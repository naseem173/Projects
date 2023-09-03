//Inputing Libraries that we installed using npm

const express = require("express")
const app = express()
const bcrypt = require("bcrypt") //importing bcrypt package
const { name } = require("ejs")
const { log } = require("console")



const users =[]

app.use(express.urlencoded({extended:false}))

app.post("/register", async (req, res) => {
  try{
    const hashPassword = await bcrypt.hash()(req.body.password)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.hashPassword,
    })
    res.redirect("/login")
  } catch (e) {
    console.log(e);
    res.redirect('/register')
  }
})

//Routers


app.get('/', (req, res) => {
  res.render("index.ejs")
})

app.get('/login', (req, res) => {
  res.render("login.ejs")
})

app.get('/register', (req, res) => {
  res.render("register.ejs")
})

//end Router

console.log(users); //display users
app.listen(3000)
