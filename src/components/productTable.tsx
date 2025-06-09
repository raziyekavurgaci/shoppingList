import type { Product, ProductTableProps } from "../data";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { styled } from "styled-components";

const StyledTableCell = styled.td<{ isBought?: boolean }>`
  text-decoration: ${({ isBought }) => (isBought ? "line-through" : "none")};
`;

export const ProductTable = ({
  products,
  onDelete,
  onEdit,
}: ProductTableProps) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>İsim</th>
          <th>Mağaza</th>
          <th>Kategori</th>
          <th>Durum</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <StyledTableCell isBought={product.isBought}>
              {product.id}
            </StyledTableCell>
            <StyledTableCell isBought={product.isBought}>
              {product.name}
            </StyledTableCell>
            <StyledTableCell isBought={product.isBought}>
              {product.shop}
            </StyledTableCell>
            <StyledTableCell isBought={product.isBought}>
              {product.category}
            </StyledTableCell>
            <td>
              <Button onClick={() => onEdit(product.id.toString())}>
                Satın Alındı
              </Button>
              <Button onClick={() => onDelete(product.id.toString())}>
                Sil
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
