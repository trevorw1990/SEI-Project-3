import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import { addComment, addProduct, deleteComment, deleteProduct, getAllProducts, updateProduct } from '../controllers/products.js'
import { addItemToBasket, addArt, deleteBasket, getBasket, getUserProfile, removeItemFromBasket, removeArt, getItemProfile } from '../controllers/users.js'
import { secureRoute } from './secureRoute.js'


const router = express.Router()

router.route('/products')
  .get(getAllProducts)
  .post(secureRoute, addProduct)

//Delete function set to use params for Frond end. Can always change to send Json ID.
router.route('/products/:id')
  .delete(secureRoute, deleteProduct)
  .put(secureRoute, updateProduct)
  
router.route('/basket')
  .post(secureRoute, addItemToBasket)
  .delete(secureRoute, removeItemFromBasket)

router.route('/products/:id/comments')
  .post(secureRoute, addComment)

router.route('/products/:id/comments/:commentId')
  .delete(secureRoute, deleteComment)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile')
  .get(secureRoute, getUserProfile)
  .post(secureRoute, addArt)
  .delete(secureRoute, removeArt)

router.route('/profile/arts')
  .get(secureRoute, getItemProfile)

router.route('/profile/basket')
  .get(secureRoute, getBasket)
router.route('/profile/basket/:id')
  .delete(secureRoute, deleteBasket)

export default router