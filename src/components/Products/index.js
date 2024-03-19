import { useState, useEffect } from "react";
import { getProductList } from "../../services/productService";
import "./Product.scss";
import ProductItem from "./ProductItem";
function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setProduct(result.products);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="product">
        {product &&
          product.map((item) => <ProductItem item={item} key={item.id} />)}
      </div>
    </>
  );
}

export default Products;
