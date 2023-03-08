import { join } from 'path'
const contactController = (req, res) => {
   res.sendFile(join(process.cwd(), 'views', 'contact.html'))
}

export { contactController }