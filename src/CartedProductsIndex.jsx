export function CartedProductsIndex({ cartedProducts }) {
  return (
    <div>
      <h1>All cartedProducts ({cartedProducts.length} total)</h1>
      {cartedProducts.map((cartedProduct) => (
        <div key={cartedProduct.id}>
          <p>Product name: {cartedProduct.product.name}</p>
          <p>Quantity: {cartedProduct.quantity}</p>
        </div>
      ))}
    </div>
  );
}
