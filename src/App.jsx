import Header from './components/Header.jsx';
import { Fragment, useState } from 'react';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Section from './components/Section.jsx';
function App() {
  return (
      <Fragment>
      <header>
        <h1>Hello Techiee Welcome to </h1>
      </header>

    <Header /> {/* Here we have declared the component for header */}
    <main>
      
      <CoreConcepts/>
      <Examples />  
    {/*Section 2 for examples */}
    
      </main>   
      </Fragment>   
  
  );
}

export default App;
