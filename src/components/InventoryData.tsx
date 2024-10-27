import React from "react";
import Grid from "@mui/material/Grid";
import { ProductDataProps } from "../interfaces/interface";
import { StatCard } from "./StatCard";
import "../styles/InventoryData.scss";

const InventoryData: React.FC<ProductDataProps> = ({ productData }) => {
  const totalProduct = productData ? productData.length : 0;

  const totalStoreValue =
    productData &&
    productData
      .reduce(
        (total, product) =>
          total + parseFloat(product.value.replace(/[^0-9.-]+/g, "")),
        0
      )
      .toFixed(2);

  const outOfStocks = productData.filter(
    (product) => product.quantity === 0
  ).length;

  const noOfCategory = new Set(productData.map((product) => product.category))
    .size;

  const cardMap = {
    "Total Product:": totalProduct,
    "Total Store Value:": totalStoreValue,
    "Out of Stocks:": outOfStocks,
    "No of category:": noOfCategory,
  };

  return (
    <div className="inventory-data">
      <Grid container spacing={2}>
        {Object.entries(cardMap).map(([title, value]) => (
          <Grid key={title} item xs={12} sm={6} md={3}>
            <StatCard title={title} value={value} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default InventoryData;
