//this is a express server statar
// old  code
import express from 'express';
const app = express()
const port =process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("request ip", req.ip);
  res.send('Hello World he!' + new Date().toString() );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})