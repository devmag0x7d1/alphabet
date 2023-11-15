const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.post("/sign-up", (req, res) => {
  const { nickname, password, role } = req.body

  if (!nickname || !password || !role) {
    res.sendStatus(400)
    return
  }

  res.cookie("nickname", nickname, { httpOnly: true, maxAge: 60000 })
  res.cookie("password", password, { httpOnly: true, maxAge: 60000 })
  res.cookie("role", role, { httpOnly: true, maxAge: 60000 })
  res.sendStatus(200)
})

app.delete("/sign-out", (_, res) => {
  res.clearCookie("nickname")
  res.clearCookie("password")
  res.clearCookie("role")
  res.sendStatus(200)
})

app.get("/auth", (req, res) => {
  const { nickname, password, role } = req.cookies

  if (!nickname || !password || !role) {
    res.sendStatus(400)
    return
  }

  res.status(200).json({ nickname, password, role })
})

app.listen(3000, () => {
  console.log("Server listen on port \":3000\"")
})
