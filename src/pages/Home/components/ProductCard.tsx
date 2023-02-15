import { ProductType } from "../../../models/products";
import { themes, useThemeContext } from "../../../Context/ThemeContext";

const ProductCard: React.FC<ProductType> = ({ name, brand }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`${
        theme === themes.dark ? "bg-[#363636]" : "bg-gray-500"
      } w-full rounded flex justify-between items-center flex-row p-2 mb-2`}
    >
      <div className='flex flex-col w-4/6 min-h-20 place-content-around justify-'>
        <p className={`text-lg text-white h-1/2 flex items-center`}>
          Name: {name}
        </p>
        <p className={`text-lg text-white h-1/2 flex items-center`}>
          Brand: {brand}
        </p>
      </div>
    </div>
  );
};
export default ProductCard;
