import { TextField, Button } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { productContext } from "../../../Context/ProductContext";

const initObj = {
  title: "",
  type: "",
  description: "",
  price: "",
  img1: "",
  img2: "",
  img3: "",
};

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [inpValues, setInpValues] = useState(initObj);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
    // console.log(obj);
  };

  const handleSave = (e) => {
    e.preventDefault();
    addProduct(inpValues);
  };

  return (
    <form onSubmit={(e) => handleSave(e)}>
      <TextField
        id="outlined-basic"
        label="Название"
        variant="outlined"
        value={inpValues.title}
        name="title"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Тип"
        variant="outlined"
        value={inpValues.type}
        name="type"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Описание"
        variant="outlined"
        value={inpValues.description}
        name="description"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Цена"
        variant="outlined"
        value={inpValues.price}
        name="price"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Изображение 1"
        variant="outlined"
        value={inpValues.img1}
        name="img1"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Изображение 2"
        variant="outlined"
        value={inpValues.img2}
        name="img2"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Изображение 3"
        variant="outlined"
        value={inpValues.img3}
        name="img3"
        onChange={(e) => handleChange(e)}
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
};

export default AddProduct;
