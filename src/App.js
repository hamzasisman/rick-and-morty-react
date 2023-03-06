import { Episodes } from "./pages/Episodes";
import { Episode } from "./pages/Episode";
import { Characters } from "./pages/Characters";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <section className="min-h-full relative p-5">
        <h1 className="font-bold text-center text-secondary uppercase text-lg">Rick And Morty Projects</h1>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Episodes />} />
            <Route path="/episode" element={<Episode />} />
            <Route path="/characters" element={<Characters />} />
          </Routes>
        </BrowserRouter>


        <p className="text-[10px] absolute bottom-3 left-0 right-0 text-center mb-5">© Hamza Şişman | Rick And Morty Project
          with using <b>Tailwind CSS</b> and <b>React</b>
        </p>
      </section>
    </>
  );
}

export default App;
