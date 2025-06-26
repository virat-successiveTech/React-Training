'use client';

import { useParams } from 'next/navigation';
import products from '../../product';// adjust the path if needed


export default function ProductDetail() {
  const params = useParams();
 const idn = params.id;
  return (
    <div>
        
       <div> Name  :  {products[idn].name}</div> 
       <div>Description : {products[idn].description} </div> 
       <div> Category : {products[idn].category}</div>
        <div>Price : {products[idn].price}</div>
        <div>Brand : {products[idn].brand}</div>
        <div>Stock : {products[idn].stock}</div>
        <div>Rating : {products[idn].rating} </div>
    </div>
  )
}
