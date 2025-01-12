import useApiData from "../custom_hooks/useApiData";
import Card from "./Card";
import styled from "styled-components";

const Shop = () => {
  const { shopData, loading, error } = useApiData(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>A network error has occured.</p>;

  return (
    <>
      <ShopGrid>
        {shopData.map((shopItem) => {
          return (
            <Card
              title={shopItem.title}
              spinButtonId={shopItem.id}
              image={shopItem.image}
              price={shopItem.price}
              key={shopItem.id}
            />
          );
        })}
      </ShopGrid>
    </>
  );
};

const ShopGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 99vw;
  place-content: center;
`;

export default Shop;
