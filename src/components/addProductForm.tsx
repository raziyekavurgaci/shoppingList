import { useState } from "react";
import {Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { shops, categories } from "../data/index";

export const AddProductForm = () => {
  const [name, setName] = useState<string>("");
  const [shop, setShop] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <>
      <Form.Group>
        <Form.Label>Ürün Adı</Form.Label>
        <Form.Control
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ürün Adı Giriniz..."
          type="text"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Marka Seçiniz</Form.Label>
        <Form.Control
          as="select"
          required
          value={shop}
          onChange={(e) => setShop(e.target.value)}
          placeholder="Marka Seçiniz..."
        >
          <option value="">All Shops</option>
          {shops.map((shop, index) => (
            <option key={index} value={shop}>
              {shop}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Kategori Seçiniz</Form.Label>
        <Form.Control
          as="select"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Ürün Adı Giriniz..."
        >
          <option value="">All Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </>
  );
};
