import React from 'react'
import { useAppSelector } from '../redux/hooks/customAppHooks'

function Home() {
  const products = useAppSelector((state) => state.productReducer);

  return (
    <div>
      Home page for products
    </div>
  )
}

export default Home