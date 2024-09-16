import React from 'react';
import ClassCounter from './ClassCounter';
import FunctionalCounter from './FunctionalCounter';

const App = () => {
  return <div className='container'>
    <h1>Counter</h1>
    <ClassCounter/>
    <FunctionalCounter/>
  </div>;
};

export default App;