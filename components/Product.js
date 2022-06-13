import { useState, useRef } from "react";
import * as axios from 'axios';


function Product(props) {
  const [message, setMessage] = useState('');
  const {
    id,
    name,
    size,
    image,
    slug,
    price,
    stock,
    category,
    measurement,
    weight,
  } = props;

  const product ={"name": name, "price": price,"product_id":id}
  const submitContact = async (event) => {
    event.preventDefault();
    const userInfo ={fullName: event.target.first.value, address: event.target.address.value, email: event.target.email.value, product: props};
    await axios.post("https://order-five.vercel.app/api/order",{"address":userInfo.address,"customer": userInfo.fullName,"product": product });
    setMessage(`hello ${userInfo.product.price}`);
  };

  function order(address,product,customer,email){
    const order= fetch("https://order-five.vercel.app/api/order", {
      method: "POST",
      headers: {"Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"product":product, "address": address, "customer": customer, "email":email }),
      
       
    })
    return order.order_id;

  }

  const checkout= async (event) => {
    const userInfo ={fullName: event.target.first.value, address: event.target.address.value, email: event.target.email.value};  
  axios.post("https://payment-ecru.vercel.app/create-checkout-session", {name,price})

      .then(res => {
        console.log(res);
        const {data} = res;
        window.location = data?.url;
        order(userInfo.address,product,userInfo.fullName,userInfo.email)
      })
      .catch(e => {
        console.error(e.error)
      })
  }

  const handleNewOrder = async (e) => {
    setMessage(<form onSubmit={checkout}>
    <label>Full name:</label>
    <div><input className="border mb-1 border-black w-2/9 font-bold" type="text" required id="first" name="first" /></div>
    <div><label >Address:</label></div>
    <input className="border mb-1 border-black w-2/9 font-bold" type="text" required id="address" name="address" />
    <div><label >Email:</label></div>
    <input className="border mb-1 border-black w-2/9 font-bold" type="Email" required id="email" name="email" />
    <div><button className="border p-1 mb-1 border-black w-2/9 shadow-offset-black font-bold rounded bg-yellow-200 hover:bg-yellow-50"  type="submit">Checkout</button></div>
  </form>);

  };


  return (
    <div className="container mx-auto px-6">
      <div className="md:flex md:items-center">
        <div className="w-full h-64 md:w-1/2 lg:h-96 ">
          <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={image} alt="" />
        </div>
        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 lg:py-12">
          <h3 className="text-3xl leading-7 mb-2 font-bold uppercase lg:text-5xl">
            {name}
          </h3>
          <span className="text-2xl leading-7 font-bold mt-3">
            ${price}
          </span>
          <div className="mt-12 flex flex-row justify-between ">
            {stock === 0 ? <>Out of stock</> :
            <button
              className="border p-2 mb-8 border-black shadow-offset-lime w-2/3 font-bold"
              onClick={(e) => handleNewOrder(e)}
            >
              Buy
            </button>
            }
            
          </div>
          
          <div>
            <span className="text-red-600 leading-7 font-bold mt-3">
              {message}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-16 md:w-2/3">
        <h3 className="text-gray-600 text-2xl font-medium">Category</h3>
        {category}
      </div>
    </div>
  );
}

export default Product;
