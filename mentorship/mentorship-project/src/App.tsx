import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product/Product";
function App() {
  const [count, setCount] = useState(0);
  function fetchProductsHandler() {
    fetch("https://localhost:8000/api/products", {
      method: "GET",
      headers: {
        mode: "cors",
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTAzNzIxMzcsImV4cCI6MTY5MDM3NTczNywicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiaW9uc2VyZW1ldEBnbWFpbC5jb20ifQ.hkBKiMuVSZrvt3Lde8rGXhmwDwq3pKdkDvbGOCB2V_UOnFaP0F_p0DtRHHxhB3mRVzpHVHSHRatCvD4CY18bUFjOOnXqwvBbz4TbfTnnAT4FGjUjCiETaPSce_r6DsqX_2XVNtwjPqSXQPBpLHiOy9X1WsyHqi9W7z1Znvb6OzxrJ4TAoXNbLWlx-vi5vnnl-fhp0mQa_mrCkUfx6FiHAWHDNgpjtjKVwQ-KaJdNwwz4yxjKdRFzZ_87MXP46yz1GZ2pa0lYnLUk9Su58ebQjbmw2biDw8X4BRj5z5q0UU_S6EFKMrGZdkbjBV_lSBfXFnHa2GUk1ytn4X_QNkt9MA",
      },
    }).then((res) => console.log(res.json));
  }
  const dummyProducts = [
    {
      id: 1,
      category: "Produs1",
      name: "",
      description: "2021-05-18",
      image_path: "",
      price: 100,
      discount_percent: 10,
    },
    {
      id: 6,
      category: "Produs6",
      name: "",
      description: "descriere",
      image_path: "",
      price: 100,
      discount_percent: 10,
    },
    {
      id: 2,
      category: "Produs2",
      name: "",
      description: "descriere",
      image_path: "",
      price: 100,
      discount_percent: 10,
    },
  ];
  return (
    <>
      {/* <ProductList props={dummyProducts} /> */}
      <Product product={dummyProducts}></Product>
      <button onClick={fetchProductsHandler}></button>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
