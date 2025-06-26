"use client"
// import products from "../product"
import Link from "next/link"
import products from "../product"

const pro = ()=>
{
    return(
    
            <div>
            {products.map((item,index)=>
            (
                <div>
                <Link href={`/assignment-3/question-6/${index+1}`}>{products[index].name}</Link>
                </div>
            ))}
            </div>

        
    )
}
export default pro;