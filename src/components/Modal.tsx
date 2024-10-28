import React from "react";

import CloseIcon from "@mui/icons-material/Close";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Grid2,
  Button,
} from "@mui/material";
import LabeledInput from "./LabeledInput";
import { Product, ModalProps } from "../interfaces/interface";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions";

export const Modal: React.FC<ModalProps> = ({
  openModal,
  setOpenModal,
  currentProduct,
  setCurrentProduct,
  productData,
}) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentProduct) {
      setCurrentProduct({
        ...currentProduct,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = (currentProduct: Product | undefined) => {
    const updatedProductData = productData.map((product: Product) =>
      currentProduct && product.name === currentProduct.name
        ? currentProduct
        : product
    );
    dispatch(setProducts(updatedProductData));
    handleClose();
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      PaperProps={{
        style: {
          width: "600px",
          maxWidth: "90%",
        },
      }}
    >
      <DialogTitle>Edit Product</DialogTitle>
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
        style={{ position: "absolute", right: 12, top: 15 }}
      >
        <CloseIcon />
      </IconButton>
      <div className="description">{currentProduct && currentProduct.name}</div>
      <DialogContent style={{ overflow: "hidden" }}>
        {currentProduct && (
          <Grid2 container spacing={2}>
            <LabeledInput
              label="Category"
              value={currentProduct.category}
              onChange={handleChange}
              name="category"
            />
            <LabeledInput
              label="Price"
              value={currentProduct.price}
              onChange={handleChange}
              name="price"
            />
            <LabeledInput
              label="Quantity"
              value={currentProduct.quantity}
              onChange={handleChange}
              name="quantity"
            />
            <LabeledInput
              label="Value"
              value={currentProduct.value}
              onChange={handleChange}
              name="value"
            />
          </Grid2>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleSave(currentProduct)} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
