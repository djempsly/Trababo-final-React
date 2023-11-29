import React from 'react';
import { AppUI } from './AppUI';
import { ItemProvider } from '../Context';

function App() {

  return (
    <div className="App">
      <ItemProvider>
       <AppUI  />
      </ItemProvider>

    </div>
  );
}

export default App;
