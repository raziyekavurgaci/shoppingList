import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  shops,
  categories,
  type Product,
  type AddProductFormProps,
} from "../data/index";
import { nanoid } from "nanoid";

export const AddProductForm = ({ onAdd }: AddProductFormProps) => {
  const [name, setName] = useState<string>("");
  const [shop, setShop] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handleAdd = () => {
    if (!name || !shop || !category) {
      alert("Lütfen tüm alanları doldurunuz");
      return;
    }

    onAdd({
      id: Number(nanoid()),
      name,
      shop: shop as Product["shop"],
      category: category as Product["category"],
      isBought: false,
    });
    setName("");
    setShop("");
    setCategory("");
  };

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
      <Button onClick={handleAdd}>Ürünü Ekle</Button>
    </>
  );
};
