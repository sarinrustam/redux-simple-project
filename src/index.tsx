import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {store} from './store/index';
import { createRoot } from "react-dom/client";

const container = document.getElementById('root');
const root = container && createRoot(container);

root?.render(
  <Provider store={store}>
    <App />
  </Provider>
);