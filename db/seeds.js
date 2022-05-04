import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import productData from './data/products.js'
import Product from '../models/product.js'
import userData from './data/users.js'
import User from '../models/user.js'

const seedDatabase = async () => {
  try {
    // connect to db
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log(' DB connected in seeds')

    // drop the db
    await mongoose.connection.db.dropDatabase()
    console.log(' DB dropped')

    const user = await User.create(userData)
 
    const productWithOwner = productData.map(prod => {
      return { ...prod, owner: user[0]._id }
    })

    const products = await Product.create(productWithOwner)
    console.log(` DB seeded with ${products.length} products & ${user.length} users`)



    // close the connection
    await mongoose.connection.close()
    console.log('COMPLETED')

  } catch (err) {
    console.log(err)
  }
}
seedDatabase()