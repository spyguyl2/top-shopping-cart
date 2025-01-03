import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import "../styles/Shop.css";

const Shop = () => {
  const [shopData, setShopData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setShopData(response);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>A network error has occured.</p>;

  return (
    <>
      <NavBar />
      <div className="shopGrid">
        {shopData.map((shopItem) => {
          return (
            <Card
              title={shopItem.title}
              spinButtonId={shopItem.id}
              image={shopItem.image}
              price={shopItem.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shop;
