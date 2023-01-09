import { Link } from 'react-router-dom'

import Product from './Product'
import {products} from '../data/data'

const Products = () => {
  return (
    <div className='grid grid-cols-1 gap-5 py-5 md:grid-cols-3 px-7'>
        {products.map(item => (
            <Product key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Products