import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { useThemeContext } from "./Context/ThemeContext";

const Home = lazy(() => import("./pages/Home/Home"));
const CreateProduct = lazy(() => import("./pages/CreateProduct/CreateProduct"));

function App() {
  const { theme } = useThemeContext();

  return (
    <div
      className={`${theme} flex flex-col h-screen justify-between items-center`}
    >
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Navigate to={"home"} replace={true} />} />
          <Route path='home' element={<Home />} />
          <Route path='create-product' element={<CreateProduct />} />
          <Route path='*' element={<>PAGE NOT FOUNDED</>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
