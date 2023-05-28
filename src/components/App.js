import './App.css';
import Navbar from './Navbar';
import News from './News';

import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const App = (props)=> {

  // state={
  //   progress: 0
  // }

  const [progress, setStateProgress] = useState(0);

  const apiKey=process.env.REACT_APP_NEWS_API;

  const setProgress = (progress)=>{
    setStateProgress(progress);
  }
  const pageSize = 12;

    return (
      <>
        <div>

          <Router>
            
            <Navbar />
            <LoadingBar
              color='#f11946'
              progress={progress}
              
            />
            <Routes>
              <Route exact path='/' element={<News key='general' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country='us' category='general' />}></Route>
              <Route exact path='/business' element={<News key='business' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country='us' category='business' />}></Route>
              <Route exact path='/entertainment' element={<News key='entertainment' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country='us' category='entertainment' />}></Route>
              <Route exact path='/health' element={<News key='health' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country='us' category='health' />}></Route>
              
              <Route exact path='/science' element={<News key='science' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country='us' category='science' />}></Route>
              <Route exact path='/sports' element={<News key='sports' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country='us' category='sports' />}></Route>
              <Route exact path='/technology' element={<News key='technology' apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country='us' category='technology' />}></Route>
            </Routes>
          </Router>


        </div>
      </>
    )
 
}

export default App;
