import React from 'react';
/* import ReactDOM from 'react-dom'; */
import { createRoot } from 'react-dom/client';
import { App } from './app/App.js';
// Import the store here.
import { store } from './app/store.js';
// Pass state and dispatch props to the <App /> component.

const container = document.getElementById('root');
const root = createRoot(container);
const render = () => {
  root.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    
  )
};
render();
store.subscribe(render)
// Subscribe render to the store.