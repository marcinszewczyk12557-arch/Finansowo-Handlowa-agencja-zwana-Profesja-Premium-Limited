export default function ProductCard({product}: any){
  return (
    <article>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Kategoria: {product.category}</p>
      <strong>{product.price}</strong>
      <button>Zapytaj ofertowo</button>
    </article>
  );
}
