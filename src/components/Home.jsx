import styled from "styled-components";
import { Heading } from "./NavBar";

const Home = () => {
  return (
    <HomeContainer>
      <Heading as={"h2"}>This is the home page!</Heading>
      <Heading as={"p"}>You can navigate from here. Yay!</Heading>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: rgb(223, 213, 165);
`;
