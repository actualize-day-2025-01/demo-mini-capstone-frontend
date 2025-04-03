import { Link } from "react-router-dom";

export function ProductsShow({ product }) {
  return (
    <div className="rounded mb-4 ">
      <img src={product.primary_image_url} alt="" className="w-1/2 aspect-[4/3] object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p>Price: {product.price}</p>
        <Link className="rounded border border-gray-300 p-2 hover:bg-gray-100" to="/">
          Back to all products
        </Link>
      </div>
    </div>
  );
}
