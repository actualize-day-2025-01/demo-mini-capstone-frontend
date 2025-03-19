export function ProductsIndex({ products }) {
  return (
    <div>
      <h1 className="text-3xl font-bold my-4">All products {products.length} total</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="rounded shadow-lg mb-4">
            <img src={product.primary_image_url} alt="" className="w-full aspect-[4/3] object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p>Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
