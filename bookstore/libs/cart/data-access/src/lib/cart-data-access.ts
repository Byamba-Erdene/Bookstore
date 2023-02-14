import {ICart} from "@bookstore/shared-models"

export async function checkout(cart:ICart){
  const data = await fetch('/api/checkout',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(cart)
  })
  
  return data.json()
}
