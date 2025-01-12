import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <h2>This is the home page!</h2>
      <p>You can navigate from here. Yay!</p>
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
`;
