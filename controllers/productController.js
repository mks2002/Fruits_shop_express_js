import { join } from 'path'
const productController = (req, res) => {
   res.sendFile(join(process.cwd(), 'views', 'product.html'))
}

export { productController }