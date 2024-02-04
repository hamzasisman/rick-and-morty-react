import { Episode } from "./pages/Episode";
import { Characters } from "./pages/Characters";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Products, ProductsLayout } from "./pages/Products";

function App() {
  return (
    <>
      <section className="min-h-full relative">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsLayout />} />
            <Route path="/episode" element={<Episode />} />
            <Route path="/characters" element={<Characters />} />
          </Routes>
        </BrowserRouter>


        <p className="text-[10px] absolute bottom-3 left-0 right-0 text-center">© Hamza Şişman | This project was created
          with using <b>Tailwind CSS</b> and <b>React</b>
        </p>
      </section>
    </>
  );
}

export default App;
