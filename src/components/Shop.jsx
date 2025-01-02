import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Card from "./Card";

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
      <p>welcome to the shop</p>
      <Card
        title={shopData[0].title}
        spinButtonId={shopData[0].id}
        image={shopData[0].image}
        price={shopData[0].price}
      />
    </>
  );
};

export default Shop;
