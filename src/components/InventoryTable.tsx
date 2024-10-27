import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid2,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import "../styles/InventoryTable.scss";
import { ProductTableProps, Product } from "../interfaces/interface";
import { styled } from "@mui/material/styles";

const IconWrapper = styled("div")<{ marked: boolean }>(({ marked }) => ({
  position: "relative",
  display: "inline-block",
  "&::after": marked
    ? {
        content: '""',
        position: "absolute",
        left: 0,
        top: "50%",
        width: "100%",
        height: "2px",
        backgroundColor: "purple", // Line color
        transform: "translateY(-50%) rotate(45deg)", // Adjust the line position
      }
    : {},
}));

const InventoryTable: React.FC<ProductTableProps> = ({
  isUserPresent,
  productData,
  setProductData,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [disabledEditIcons, setDisabledEditIcons] = useState<{
    [key: number]: boolean;
  }>({});
  const [crossedEyeIcons, setCrossedEyeIcons] = useState<{
    [key: number]: boolean;
  }>({});
  const [disabledRows, setDisabledRows] = useState<boolean[]>(
    Array(productData.length).fill(false)
  );

  const handleEditIcon = (product: Product) => {
    setCurrentProduct(product);
    setOpenModal(true);
  };

  const handleSave = () => {
    if (currentProduct) {
      setProductData(
        (prevData) =>
          prevData &&
          prevData.map((product) =>
            product.name === currentProduct.name ? currentProduct : product
          )
      );
      handleClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentProduct) {
      setCurrentProduct({
        ...currentProduct,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleDeleteIcon = (index: number) => {
    const updatedProductData = productData.filter((_, i) => i !== index);
    setProductData(updatedProductData);
  };

  const handleDisableIcon = (index: number) => {
    setDisabledEditIcons((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));

    setDisabledRows((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    handleEyeIconClick(index);
  };

  const handleEyeIconClick = (index: number) => {
    setCrossedEyeIcons((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle marking for this row
    }));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table style={{ backgroundColor: "navajowhite" }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <span
                  style={{
                    color: "yellow",
                    backgroundColor: "black",
                    borderRadius: 4,
                    padding: "4px 8px",
                  }}
                >
                  Name
                </span>
              </TableCell>
              <TableCell>
                <span
                  style={{
                    color: "yellow",
                    backgroundColor: "black",
                    borderRadius: 4,
                    padding: "4px 8px",
                  }}
                >
                  Category
                </span>
              </TableCell>
              <TableCell>
                <span
                  style={{
                    color: "yellow",
                    backgroundColor: "black",
                    borderRadius: 4,
                    padding: "4px 8px",
                  }}
                >
                  Price
                </span>
              </TableCell>
              <TableCell>
                <span
                  style={{
                    color: "yellow",
                    backgroundColor: "black",
                    borderRadius: 4,
                    padding: "4px 8px",
                  }}
                >
                  Quantity
                </span>
              </TableCell>
              <TableCell>
                <span
                  style={{
                    color: "yellow",
                    backgroundColor: "black",
                    borderRadius: 4,
                    padding: "4px 8px",
                  }}
                >
                  Value
                </span>
              </TableCell>
              <TableCell>
                <span
                  style={{
                    color: "yellow",
                    backgroundColor: "black",
                    borderRadius: 4,
                    padding: "4px 8px",
                  }}
                >
                  Action
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productData &&
              productData.map((product: Product, index) => (
                <TableRow>
                  <TableCell>
                    {disabledRows[index] ? (
                      <Typography variant="body2" color="text.secondary">
                        {product.name}
                      </Typography>
                    ) : (
                      product.name
                    )}
                  </TableCell>
                  <TableCell>
                    {disabledRows[index] ? (
                      <Typography variant="body2" color="text.secondary">
                        {product.category}
                      </Typography>
                    ) : (
                      product.category
                    )}
                  </TableCell>
                  <TableCell>
                    {disabledRows[index] ? (
                      <Typography variant="body2" color="text.secondary">
                        {product.price}
                      </Typography>
                    ) : (
                      product.price
                    )}
                  </TableCell>
                  <TableCell>
                    {disabledRows[index] ? (
                      <Typography variant="body2" color="text.secondary">
                        {product.quantity}
                      </Typography>
                    ) : (
                      product.quantity
                    )}
                  </TableCell>
                  <TableCell>
                    {disabledRows[index] ? (
                      <Typography variant="body2" color="text.secondary">
                        {product.value}
                      </Typography>
                    ) : (
                      product.value
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleEditIcon(product)}
                      disabled={isUserPresent || disabledEditIcons[index]}
                    >
                      <EditIcon
                        sx={{
                          color:
                            isUserPresent || disabledEditIcons[index]
                              ? "gray"
                              : "green",
                        }}
                      />
                    </IconButton>
                    <IconWrapper
                      marked={!isUserPresent && crossedEyeIcons[index]}
                    >
                      <IconButton
                        onClick={() => handleDisableIcon(index)}
                        disabled={isUserPresent}
                      >
                        <VisibilityIcon
                          style={{ color: isUserPresent ? "gray" : "purple" }}
                        />
                      </IconButton>
                    </IconWrapper>
                    <IconButton
                      onClick={() => handleDeleteIcon(index)}
                      disabled={isUserPresent}
                    >
                      <DeleteIcon
                        style={{ color: isUserPresent ? "gray" : "red" }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

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
        <div className="description">
          {currentProduct && currentProduct.name}
        </div>
        <DialogContent style={{ overflow: "hidden" }}>
          {currentProduct && (
            <Grid2 container spacing={2}>
              <Grid2 component="div">
                <Typography variant="subtitle2" gutterBottom>
                  Category
                </Typography>
                <TextField
                  fullWidth
                  label={currentProduct.category}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 component="div">
                <Typography variant="subtitle2" gutterBottom>
                  Price
                </Typography>
                <TextField
                  fullWidth
                  label={currentProduct.price}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 component="div">
                <Typography variant="subtitle2" gutterBottom>
                  Quantity
                </Typography>
                <TextField
                  fullWidth
                  label={currentProduct.quantity}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 component="div">
                <Typography variant="subtitle2" gutterBottom>
                  Value
                </Typography>
                <TextField
                  fullWidth
                  label={currentProduct.value}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid2>
            </Grid2>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default InventoryTable;
