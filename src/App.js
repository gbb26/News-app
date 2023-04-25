import React from 'react'
import './App.css';
import NewsSection from './components/top-headlines/NewsSection';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigator from './components/Navigator';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Navigator/>
      <Routes>
            <Route exact path="/" element={<NewsSection   category="general" />} />
            <Route exact path="/business" element={<NewsSection  category="business" />} />
            <Route exact path="/entertainment" element={<NewsSection  category="entertainment" />} />
            <Route exact path="/general" element={<NewsSection  category="general" />} />
            <Route exact path="/science" element={<NewsSection  category="science" />} />
            <Route exact path="/sports" element={<NewsSection  category="sports" />} />
            <Route exact path="/technology" element={<NewsSection  category="technology" />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App
