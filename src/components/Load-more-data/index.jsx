import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => {
          const newProducts = result.products.filter(
            (newItem) => !prevData.some((existingItem) => existingItem.id === newItem.id)
          );
          return [...prevData, ...newProducts];
        });
        setLoading(false);
        console.log("Fetched products:", result.products.length);
      }

      if (result.products.length < 20) {
        setDisableButton(true);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading && products.length === 0) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={`${item.id}-${index}`}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
        >
          {loading ? "Loading..." : "Load more products"}
        </button>
        {disableButton && <p>Limit 100 products reached</p>}
      </div>
    </div>
  );
}
