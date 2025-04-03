import { useLoaderData } from "react-router-dom";
import { CartedProductsIndex } from "./CartedProductsIndex";

export function CartedProductsPage() {
  const cartedProducts = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl font-bold my-4">Shopping Cart</h1>
      <CartedProductsIndex cartedProducts={cartedProducts} />
    </div>
  );
}
