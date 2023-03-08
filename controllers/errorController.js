import { join } from 'path'
const errorController = (req, res) => {
   res.sendFile(join(process.cwd(), 'views', 'error.html'))
}

export { errorController }