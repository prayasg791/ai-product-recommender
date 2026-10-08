function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>

      <p>{product.category}</p>

      <h4>${product.price}</h4>

      <p>⭐ {product.rating}</p>

      <p>{product.description}</p>

      <div>
        {product.features.map((feature, index) => (
          <span key={index}>{feature} </span>
        ))}
      </div>

      {product.reason && (
        <div className="ai-reason">
          <strong> Why AI recommends it:</strong>
          <p>{product.reason}</p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;

