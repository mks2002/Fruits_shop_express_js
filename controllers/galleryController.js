import { join } from 'path'
const galleryController = (req, res) => {
   res.sendFile(join(process.cwd(), 'views', 'gallery.html'))
}

export { galleryController }