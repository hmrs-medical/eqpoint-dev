import Navbar from "./Navbar";
import Home from "./pages/home";
// import Footer from "./footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  // useEffect(() => {
  //   async function fetchData(element) {
  //     const querySnapshot = await getDocs(collection(db, element));
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
  //   function getData() {
  //     prodSubCategory.forEach(async (subcategory) => {
  //       const arr = await fetchData(subcategory);
  //       products[subcategory] = [...arr];
  //     });
  //   }
  //   getData();
  // }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route
          path="products/bloodbank"
          element={<Products minimize={true} category={"bloodbank"} />}
        />
        <Route
          path="products/coldchain"
          element={<Products minimize={true} category={"coldchain"} />}
        />
        <Route
          path="products/laboratory"
          element={<Products minimize={true} category={"laboratory"} />}
        />
        <Route
          path="products/research"
          element={<Products minimize={true} category={"research"} />}
        />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
