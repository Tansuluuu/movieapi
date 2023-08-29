import {Route, Routes} from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviePage from "./views/Movie-Page";
import NotFound from "./components/Not-found";

const App = () => {
  return(
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/movie/:movieId' element={<MoviePage/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
  )
}
export default App