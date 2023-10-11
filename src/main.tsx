import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.tsx'
import ReactDOM from 'react-dom/client'
import Home from './Index.tsx';
import React from 'react'
import './index.css'
import Animals from './pages/AnimalPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Animals' element={<Animals />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
)
