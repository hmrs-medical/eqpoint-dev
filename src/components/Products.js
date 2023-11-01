import Navbar from "./Navbar";
import "../assets/css/product.css";
import { useEffect, useState } from "react";
import db from "./config_flies/firebase";
import { collection, getDocs } from "firebase/firestore";
const products = {};

function Products() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [items, setItems] = useState([]);
  const prodCategories = ["bloodbank", "laboratory", "research", "coldchain"];
  const minimize = function () {
    setIsExpanded(true);
  };
  useEffect(() => {
    prodCategories.forEach((category) => {
      let arr = (async () => {
        const querySnapshot = await getDocs(collection(db, category));
        const arr = [];
        let index = 0;
        querySnapshot.forEach((doc) => {
          arr[index] = doc.data();
          arr[index].id = doc.id;
          index++;
        });
        return arr;
      })();
      arr.then((arr) => {
        products[category] = [...arr];
      });
    });
  }, []);

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
            setItems(products.bloodbank);
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
          onClick={(e) => {
            minimize();
            setItems(products.laboratory);
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
            setItems(products.research);
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
            setItems(products.coldchain);
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
        {items.map((product) => (
          <a
            className="product-item"
            key={product.id}
            href={product.brochureUrl}
          >
            <div
              style={{
                height: "inherit",
                backgroundImage: `url(${product.imgUrl})`,
                backgroundSize: "cover",
              }}
            >
              {/* <img height="100%" width="100%" src={product.imgUrl}></img> */}
              <div className="product-title">{product.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Products;
