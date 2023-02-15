import { useThemeContext } from "../../Context/ThemeContext";
import Paginated from "./components/Paginated";
import ProductCards from "./components/ProductCards";

const Home = () => {
  const { theme } = useThemeContext();

  return (
    <div className='h-screen w-96 flex flex-col m-4'>
      <h1 className={`${theme} text-4xl font-bold mb-5`}>Products List</h1>
      <ProductCards />
    </div>
  );
};
export default Home;
