import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./pages/Home";
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/'>
                <Route index element={<Home />} />
                <Route path='/products/:id' element={<Detail />} />
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
