import { useState, useEffect } from "react";
import Link from "next/link";
import UserIcon from "./ui/user";
import ShoppingCartIcon from "./ui/shoppingcart";
import FavoriteIcon from "./ui/favorite";
import { useRouter } from "next/router";
function Layout({ children }) {
  const [session, setSession] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  const handleOpen = () => setCartOpen(!cartOpen);
  const [haveProducts, setHaveProducts] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const router = useRouter();
  return (
    
    <div className="">
      <header>
        
        <div className="px-20 py-3 bg-green-700">
          <div className="flex items-center justify-between">
            <div className="w-full text-red-700 md:text-left text-2xl font-semibold">
            <a href="/"><img src="https://www.rabbitmart.com/wp-content/uploads/2021/11/Asset-4.png"style={{height: '3em', objectFit:'contain'}} width={130} alt="" /></a>
            </div>
            <div className="flex items-center justify-end w-full lg:w-2/5 lg:justify-around"> 
             <a href="/search"><button className="border p-1 mb-1 border-black w-2/9 shadow-offset-black font-bold rounded-full bg-yellow-300 hover:bg-yellow-200" >search</button></a>
              
             
            </div>
          </div>
          <nav
            className={`${menuOpen ? "" : "hidden"
              } sm:flex sm:justify-center sm:items-center mt-4 `}
          >
          </nav>
        </div>
      </header>
      <main className="my-8 content">{children}</main>
    </div>
  );
}

export default Layout;
