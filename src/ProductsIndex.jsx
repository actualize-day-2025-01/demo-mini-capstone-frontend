export function ProductsIndex({ products }) {
  return (
    <div>
      <h1>All products {products.length} total</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <img src={product.primary_image_url} alt="" />
        </div>
      ))}
    </div>
  );
}
