import './App.css';
import React from 'react';
import {Helmet} from 'react-helmet'
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes  } from  'react-router-dom'
import Home from './screens/Home';
import About from './screens/About'
import Projects from './screens/Projects'
import Contact from './screens/Contact'


function App() {
  return (
    <div className='App'>
      <Helmet>
        <style>{'body {background-color: #262626;}'}</style>
      </Helmet>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
