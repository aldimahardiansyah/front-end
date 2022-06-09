import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import CreateMovie from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import ToptRatedMovie from "./pages/movie/TopRated";

import {ThemeProvider} from "styled-components";
import theme from './utils/constants/theme';
import PopularMovie from "./pages/movie/Popular";
import Detail from "./pages/movie/Detail";
import { useState } from "react";
import data from "./utils/constants/data";

function App() {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/movie/create" element={<CreateMovie  movies={movies} setMovies={setMovies}/>}/>
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlaying/>} />
            <Route path="/movie/top" element={<ToptRatedMovie/>} />
            <Route path="/movie/:id" element={<Detail/>} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
