import { useState, useEffect } from "react";
import Link from "next/link";
import UserIcon from "./ui/user";
import ShoppingCartIcon from "./ui/shoppingcart";
import FavoriteIcon from "./ui/favorite";
import { useRouter } from "next/router";

const [shipment, setShipment] = useState();
const Track= async (event) =>{
    const id = event.target.shipment;
    fetch(`http://localhost:5005/api/shipping/${id}`, {
      method: "GET",
      headers: {"Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Content-Type": "application/json",
      }, 
    }).then(res => console.log(res))
    setMessage("")
}


return(
<>
<form onSubmit={Track}>
<div><input className="border mb-1 border-black w-2/9 font-bold" type="text" required id="shipment" name="shipment" />enter shipment id </div>
<div><button className="border p-1 mb-1 border-black w-2/9 shadow-offset-black font-bold rounded bg-yellow-200 hover:bg-yellow-50" type="submit">Track Order</button></div>
</form>
{shipment?.status}
</>)

