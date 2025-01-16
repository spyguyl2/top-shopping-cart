import useApiData from "../custom_hooks/useApiData";
import Card from "./Card";
import styled from "styled-components";
import { Heading } from "./NavBar";

const Shop = () => {
  const { shopData, loading, error } = useApiData(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (error) return <Heading as={"p"}>A network error has occured.</Heading>;
  if (loading) return <Heading as={"p"}>Loading ...</Heading>;

  return (
    <>
      <ShopGrid>
        {shopData.map((shopItem) => {
          return (
            <Card
              title={shopItem.title}
              spinButtonId={shopItem.id}
              image={shopItem.images[0]}
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
