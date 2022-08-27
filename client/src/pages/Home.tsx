import React, { useState } from 'react'
import { useAppSelector } from '../redux/hooks/customAppHooks'

function Home() {
  const products = useAppSelector((state) => state.productReducer);
  console.log(products)

  return (
    <div>
      Home page for products
    </div>
  )
}

export default Home