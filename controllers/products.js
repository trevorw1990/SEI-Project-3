// import model
import Product from '../models/product.js'

// INDEX ROUTE
export const getAllProducts = async (_req, res) => {
  const products = await Product.find()
  return res.status(200).json(products)
}
//Add product
export const addProduct = async (req, res) => {
  try {
    const productWithOwner = { ...req.body, owner: req.currentUser._id }
    const addProduct = await Product.create(productWithOwner)
    return res.status(201).json(addProduct)

  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

//Remove Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const productToDelete = await Product.findById(id)
    if (!productToDelete) throw new Error()
    if (!productToDelete.owner.equals(req.currentUser._id)) throw new Error('Unauthorized')
    await productToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

//Update Product 

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const productToUpdate = await Product.findByIdAndUpdate(id, req.body, { new: true })
    if (!productToUpdate) throw new Error()
    return res.status(200).json(productToUpdate)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not found' })
  }
}
// ADD COMMENT
export const addComment = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) throw new Error('No show found')
    const commentToAdd = { ...req.body, owner: req.currentUser._id }

    product.comments.push(commentToAdd)

    await product.save()

    return res.status(200).json(product)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

// DELETE COMMENT
export const deleteComment = async (req, res) => {
  try {
    const { id, commentId } = req.params

    const show = await Product.findById(id)
    if (!show) throw new Error('Show not found')

    const commentToDelete = show.comments.id(commentId)

    if (!commentToDelete) throw new Error('Comment not found')

    await commentToDelete.remove()
    await show.save()

    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err })
  }
}

