import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks/customAppHooks'

function Home() {
  const products = useAppSelector((state) => state.productReducer);
  
  const[customers, setCustomers] = useState([]);

  console.log(customers)
  
     //fetch customers after the first render
     useEffect(() => { fetchCustomers(); }, [])

     //creating a function fetchCustomers to save customers data into customers state
      const fetchCustomers = () => {
          fetch('https://vast-wave-18172.herokuapp.com/api/v1/products')
          .then(response => {
              if(response.ok) {
                  return response.json(); 
              } else {
                  throw new Error
              }
          })
          .then(responseData => setCustomers(responseData.content))
          .catch(err => console.error(err))
      }

  return (
    <div>
      Home page for products
    </div>
  )
}

export default Home