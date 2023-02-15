import React, { useState } from "react";
import { themes, useThemeContext } from "../../../Context/ThemeContext";

export type inputType = {
  name: string;
  brand: string;
};

const AddProductForm: React.FC = () => {
  const [productDetails, setProductDetails] = useState<inputType>({
    name: "",
    brand: "",
  });

  const { theme } = useThemeContext();

  const [backendErrors, setBackendErrors] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setBackendErrors("");
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("HOLA DEBES IMPLEMENTAR ESTE BOTON DE CREAR PRODUCTO");
  };

  return (
    <>
      <form
        className='h-52 flex flex-col justify-around'
        onSubmit={(e) => submitHandler(e)}
      >
        <div className='relative items-center'>
          <input
            type='text'
            name='name'
            value={productDetails.name}
            onChange={(e) => handleInput(e)}
            className={`h-10 w-full p-2 my-4 flex items-center justify-center ${
              theme === themes.dark
                ? "text-white bg-gray-900 border-gray-800"
                : "text-black bg-gray-300 border-gray-200"
            } rounded border focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 transition-colors peer`}
          />
          <label
            htmlFor='name'
            className={`absolute left-0 top-4 p-2 text-gray-600 cursor-text peer-focus:text-md peer-focus:-top-5 peer-focus:text-indigo-600 transition-all ${
              !productDetails.name ? "" : "-top-5 text-indigo-600"
            }`}
          >
            Name
          </label>
        </div>
        <div className='relative items-center'>
          <input
            type='text'
            name='brand'
            // placeholder='Apple'
            value={productDetails.brand}
            onChange={(e) => handleInput(e)}
            className={`h-10 w-full p-2 my-4 flex items-center justify-center ${
              theme === themes.dark
                ? "text-white bg-gray-900 border-gray-800"
                : "text-black bg-gray-300 border-gray-200"
            } rounded border focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 transition-colors peer`}
          />
          <label
            htmlFor='brand'
            className={`absolute left-0 top-4 p-2 text-gray-600 cursor-text peer-focus:text-md peer-focus:-top-5 peer-focus:text-indigo-600 transition-all ${
              !productDetails.brand ? "" : "-top-5 text-indigo-600"
            }`}
          >
            Brand
          </label>
        </div>
        {backendErrors ? (
          <p className='text-red-400 text-ligth text-xs mb-3'>
            {backendErrors}
          </p>
        ) : null}
        <input
          type='submit'
          className={`h-10 w-full mb-4 ${
            theme === themes.dark
              ? "bg-indigo-500 hover:bg-indigo-400"
              : "bg-indigo-400 hover:bg-indigo-500"
          } flex justify-center items-center rounded  active:ring active:ring-indigo-600 text-white`}
          value='Save'
        />
      </form>
    </>
  );
};
export default AddProductForm;
