import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from "react-router-dom"
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductsDisplay from '../Components/ProductDisplay/ProductsDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find(e => e.id === Number(productId))
  return (
    <div>
      <BreadCrums product={product} />
      <ProductsDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product