import React, { useEffect, useState } from "react";
import NavBar from "../src/components/NavBar";
import InventoryData from "./components/InventoryData";
import InventoryTable from "./components/InventoryTable";
import { Product } from "./interfaces/interface";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/asyncActions";

function App() {
  const dispatch: any = useDispatch();
  const [isUserPresent, setIsUserPresent] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="heading">
        <h1 style={{ color: "white" }}>Inventory Stats</h1>
        <NavBar
          isUserPresent={isUserPresent}
          setIsUserPresent={setIsUserPresent}
        />
      </div>
      <InventoryData />
      <InventoryTable isUserPresent={isUserPresent} />
    </>
  );
}

export default App;
