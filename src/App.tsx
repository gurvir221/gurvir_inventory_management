import React, { useEffect, useState } from "react";
import NavBar from "../src/components/NavBar";
import InventoryData from "./components/InventoryData";
import InventoryTable from "./components/InventoryTable";
import { getData } from "./api";
import { Product } from "./interfaces/interface";
import "./App.css";

function App() {
  const [isUserPresent, setIsUserPresent] = useState<boolean>(false);
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    getData().then((data) => setProductData(data));
  }, []);

  return (
    <>
      <div className="heading">
        <h1 style={{ color: "white" }}>Inventory Stats</h1>
        <NavBar
          isUserPresent={isUserPresent}
          setIsUserPresent={setIsUserPresent}
        />
      </div>
      <InventoryData productData={productData} />
      <InventoryTable
        isUserPresent={isUserPresent}
        productData={productData}
        setProductData={setProductData}
      />
    </>
  );
}

export default App;
