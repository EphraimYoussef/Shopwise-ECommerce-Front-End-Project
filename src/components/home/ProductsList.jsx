import ProductCard from '@/atoms/ProductCard'
import React from 'react'

const ProductsList = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json()
  return (
    <div id='products' className='flex flex-col justify-between items-center w-full px-12 py-20 gap-5 max-md:px-0'>
        <p className='font-bold text-4xl w-full text-center max-md:text-2xl'>Exclusive Products</p>
        <div className='border border-rose-500 w-16'></div>
        <div className='grid grid-cols-4 gap-[50px] pt-5 max-xl:grid-cols-2 max-md:grid-cols-1'>
          {
            products.map((product)=>{
              return <ProductCard item={product}/>
            })
          }
        </div>
    </div>
  )
}

export default ProductsList
