import ProductCard from "./ProductCard";
import { useState } from "react";
import CardsProgress from "./CardsProgress";
import Paginated from "./Paginated";
import { ProductType } from "../../../models";

const ProductCards = () => {
  const [products, setProducts] = useState<ProductType[]>([
    { id: 1, name: "Producto de prueba", brand: "CrombieNeta" },
  ]);
  return (
    <>
      <div className='h-full flex flex-col items-center'>
        {products.length === 0 ? (
          <CardsProgress />
        ) : (
          products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                id={product.id}
                name={product.name}
                brand={product.brand}
              />
            );
          })
        )}
      </div>
      <Paginated />
    </>
  );
};
export default ProductCards;
