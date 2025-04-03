export function CartedProductsNew({ product, onCartCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onCartCreate();
  };

  return (
    <div>
      <h1>New shopping cart item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Quantity: <input name="quantity" type="text" />
        </div>
        <div>
          <input name="product_id" type="hidden" value={product.id} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
