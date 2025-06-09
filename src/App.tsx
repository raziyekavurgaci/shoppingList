import { useState } from "react";
import type { Product } from "./data";
import { AddProductForm } from "./components/addProductForm";
import { ProductTable } from "./components/productTable";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const handleEdit = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id.toString() === id ? product : { ...product, isBought: false }
      )
    );
  };
  const handleDelete = (id: string) => {
    setProducts(products.filter((product) => product.id.toString() !== id));
  };
  return (
    <>
      <AddProductForm onAdd={handleAddProduct} />
      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;
