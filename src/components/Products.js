import Navbar from "./Navbar";
import "../assets/css/product.css"
import { useState } from "react";
import { products } from "./config_flies/products";

function Products(){
    const [isExpanded,setIsExpanded] = useState(false);
    let ctgproducts = [];
    const minimize = function(e){
        setIsExpanded(true);
        if(e.target.id == 'bloodbank'){
            ctgproducts = [...products.bloodbank];
        }
        else if(e.target.id == 'laboratory'){
            ctgproducts = [...products.laboratory];
        }
        else if(e.target.id == 'research'){
            ctgproducts = [...products.research];
        }
        else{
            ctgproducts = [...products.coldchain];
        }
        console.log(ctgproducts)
    }
    

    return(
        <div className="root">
            <Navbar/>
           <div className={isExpanded?"product-categories minimize":"product-categories"} >
                <div className="category-item blood-bank">
                    <div className="item-info">
                        <h1>Bloodbank Equipments/Consumables</h1>
                        <p>Sample information about the category Item</p>
                        <button onClick={minimize} id="bloodbank" className="minimize-btn">View Products</button>
                    </div>
                </div>
                <div className="category-item laboratory">
                    <div className="item-info">
                        <h1>Laboratory Equipments/Consumables</h1>
                        <p>Sample information about the category Item</p>
                        <button onClick={minimize} id="laboratory" className="minimize-btn">View Products</button>
                    </div>
                    
                </div>
                <div className="category-item research">
                    <div className="item-info">
                        <h1>Research Equipments/Consumables</h1>
                        <p>Sample information about the category Item</p>
                        <button onClick={minimize} id="research" className="minimize-btn">View Products</button>
                    </div>
                    
                </div>
                <div className="category-item cold-chain">
                    <div className="item-info">
                        <h1>Cold chain management Solutions</h1>
                        <p>Sample information about the category Item</p>
                        <button onClick={minimize} id="coldchain" className="minimize-btn">View Products</button>
                    </div>
                    
                </div>
            </div>
            <div className="products-display">
                {ctgproducts.map((product)=>
                    <div className="product-item">
                        <a href={product.brochureUrl}>
                            <img height='inherit' width='inherit' src={product.imgUrl}></img>
                            <h3 className="product-title">{product.title}</h3>
                        </a>
                    </div>
                   
                )}
            </div>
        </div>
    )
}

export default Products;