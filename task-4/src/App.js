import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import CreateMovie from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import ToptRatedMovie from "./pages/movie/TopRated";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/create" element={<CreateMovie/>}/>
          <Route path="/movie/popular" element={<ToptRatedMovie/>} />
          <Route path="/movie/now" element={<NowPlaying/>} />
          <Route path="/movie/top" element={<ToptRatedMovie/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
