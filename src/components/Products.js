import Navbar from "./Navbar";
import "../assets/css/product.css";
import { useEffect, useState } from "react";
import db from "./config_flies/firebase";
import { collection, getDocs } from "firebase/firestore";
import { products }  from "./config_flies/products";

function Products(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [items,setItems] = useState([]);
  // const [items,setItems] = useState([]);

  const allProducts = {};
  let clicked = false;

  const minimize = function () {
    setIsExpanded(true);
  };
  // useEffect(() => {
  //   async function fetchData(category) {
  //     const querySnapshot = await getDocs(collection(db, category));
  //     const docs = querySnapshot.docs;
  //     let arr = [];
  //     let index = 0;
  //     for (let doc of docs) {
  //       arr[index] = doc.data();
  //       arr[index].id = doc.id;
  //       index++;
  //     }
  //     return arr;
  //   }
  //   async function getData() {
  //     allProducts.bloodbank = await fetchData("bloodbank");
  //     // allProducts.laboratory = await fetchData("Processing");
  //     // allProducts.research = await fetchData("Storage");
  //     // allProducts.coldchain = await fetchData("Issue");
      
  //   }

  //   (async()=>{
  //     await getData();
  //     if(props.minimize){
  //       minimize();
  //       // setItems(products[props.category]);
  //       setCategories(products[props.category]);
  //     }
  //   })()
   
  // }, []);

  const getData = async function(category){

        console.log(category)
        const querySnapshot = await getDocs(collection(db, category));
        const docs = querySnapshot.docs;
        let arr = [];
        let index = 0;
        for (let doc of docs) {
          arr[index] = doc.data();
          arr[index].id = doc.id;
          index++;
        }
        return arr;
  }

  return (
    <div className="root">
      <Navbar />
      <div
        className={
          isExpanded ? "product-categories minimize" : "product-categories"
        }
      >
        <div
          id="bloodbank"
          onClick={() => {
            minimize();
            setCategories(products.bloodbank);
          }}
          className="category-item blood-bank"
        >
          <div className="item-info">
            <h1>Bloodbank Equipments/Consumables</h1>
            <p>Sample information about the category Item</p>
          </div>
        </div>
        <div
          id="laboratory"
          onClick={() => {
            minimize();
            setCategories(products.laboratory);
          }}
          className="category-item laboratory"
        >
          <div className="item-info">
            <h1>Laboratory Equipments/Consumables</h1>
            <p>Sample information about the category Item</p>
          </div>
        </div>
        <div
          id="research"
          onClick={() => {
            minimize();
            setCategories(products.research);
          }}
          className="category-item research"
        >
          <div className="item-info">
            <h1>Research Equipments/Consumables</h1>
            <p>Sample information about the category Item</p>
          </div>
        </div>
        <div
          id="coldchain"
          onClick={() => {
            minimize();
            setCategories(products.coldchain);
          }}
          className="category-item cold-chain"
        >
          <div className="item-info">
            <h1>Cold chain management Solutions</h1>
            <p>Sample information about the category Item</p>
          </div>
        </div>
      </div>
      <div className="products-display">
        {categories.map((subcategory) => (
            <div className="product-category" 
            onClick={
              async()=>{
                const arr = await getData(subcategory);
                setItems(arr);
                clicked = true;
              }
            }>
              <h2>{subcategory}</h2>
              {/* {clicked?:""} */}
              <div className="product-category-display">
                {items.map((item)=>(
                <div className="product-item">
                  <div className="product-item-img">
                  </div>
                  <div className="product-item-info">
                    <div>{item.title}</div>
                    <div>{item.companyName}</div>
                    <a className="brochure" href={item.brochureUrl}></a>
                  </div>
                </div>
              ))}
              </div>
              
              
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default Products;
