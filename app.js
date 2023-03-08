import express from "express";
const app = express()
const port = process.env.PORT || '3000'

import web from './routes/web.js'
import { join } from 'path'
app.use(express.static(join(process.cwd(), 'public')))

app.use('', web)
app.listen(port, () => {
   console.log(`Server listening at http://localhost:${port}`)
})