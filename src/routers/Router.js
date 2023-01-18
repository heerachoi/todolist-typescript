import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.tsx';
import Details from '../pages/Details.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
