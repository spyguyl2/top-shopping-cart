import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { handleToggleSideBar } = useOutletContext();
  return (
    <>
      <h2>This is the home page!</h2>
      <p>You can navigate from here. Yay!</p>
      <button onClick={handleToggleSideBar}>Toggle</button>
    </>
  );
};

export default Home;
