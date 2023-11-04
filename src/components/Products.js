import Navbar from "./Navbar";
import "../assets/css/product.css";
import { useEffect, useState } from "react";
import db from "./config_flies/firebase";
import { collection, getDocs } from "firebase/firestore";
import { prodCategory } from "./config_flies/products";
import { prodSubCategory } from "./config_flies/products";
const displayProds = {};

function Products(props) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [categories, setCategories] = useState([]);

  const minimize = function () {
    setIsExpanded(false);
  };

  useEffect(() => {
    console.log("useEffect");
    if (props.minimize) {
      setTimeout(() => {
        setCategories(prodCategory[props.category]);
        minimize();
      }, 200);
    }
    async function fetchData(element) {
      const querySnapshot = await getDocs(collection(db, element));
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
    function getData() {
      prodSubCategory.forEach(async (subcategory) => {
        const arr = await fetchData(subcategory);
        displayProds[subcategory] = arr;
      });
    }
    getData();
  }, []);
  return (
    <div className="root">
      <Navbar />
      <div
        className={
          !isExpanded ? "product-categories minimize" : "product-categories"
        }
      >
        <div
          id="bloodbank"
          onClick={() => {
            setCategories(prodCategory.bloodbank);
            if (isExpanded) {
              minimize();
            }
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
            setCategories(prodCategory.laboratory);
            if (isExpanded) {
              minimize();
            }
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
            setCategories(prodCategory.research);
            if (isExpanded) {
              minimize();
            }
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
            setCategories(prodCategory.coldchain);
            if (isExpanded) {
              minimize();
            }
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
          <div className="product-category">
            <h2 className="product-subcategory">{subcategory}</h2>
            <div className="product-category-display">
              {console.log(displayProds)}
              {displayProds[subcategory].map((item) => (
                <a
                  key={item.id}
                  className="product-item-brochure"
                  href={item.brochureUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    style={{ backgroundImage: `url(${item.imgUrl})` }}
                    className="product-item"
                  >
                    <div className="product-item-info">
                      <div className="product-item-name">{item.title}</div>
                      <div className="product-item-company">{item.company}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
