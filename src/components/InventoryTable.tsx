import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  IconButton,
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
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions";
import { RootState } from "../redux/store";
import { Modal } from "../components/Modal";

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

const InventoryTable: React.FC<ProductTableProps> = ({ isUserPresent }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [disabledEditIcons, setDisabledEditIcons] = useState<{
    [key: number]: boolean;
  }>({});
  const [crossedEyeIcons, setCrossedEyeIcons] = useState<{
    [key: number]: boolean;
  }>({});
  const productData: Product[] = useSelector(
    (state: RootState) => state.productData
  );
  const [disabledRows, setDisabledRows] = useState<boolean[]>(
    Array(productData.length).fill(false)
  );
  const dispatch = useDispatch();

  const handleEditIcon = (product: Product) => {
    setCurrentProduct(product);
    setOpenModal(true);
  };

  const handleDeleteIcon = (index: number) => {
    const updatedProductData = productData.filter((_, i) => i !== index);
    dispatch(setProducts(updatedProductData));
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

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        productData={productData}
      />
    </>
  );
};

export default InventoryTable;
