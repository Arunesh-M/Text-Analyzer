import React from 'react';
import './App.css';
import Text from './Components/text';
import Nav1 from './Components/nav1';
import Nav2 from './Components/nav2';
import { DataProvider } from './context/datacontext';


function App() {
  
  return (
    <div className="App">
      <DataProvider>
          <Nav1 />
          <Text />
          <Nav2 />
      </DataProvider>
      
    </div>
  );
}

export default App;
