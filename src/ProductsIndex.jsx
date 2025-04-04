import { Link } from "react-router-dom";

export function ProductsIndex({ products }) {
  return (
    <div>
      <h1 className="text-3xl font-bold my-4">All products {products.length} total</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded mb-4 transform transition duration-300 hover:scale-105 shadow-md hover:shadow-xl"
          >
            <img src={product.primary_image_url} alt="" className="w-full aspect-[4/3] object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p>Price: {product.price}</p>
            </div>
            <Link className="rounded border border-gray-300 p-2 hover:bg-gray-100" to={`/products/${product.id}`}>
              More info
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
