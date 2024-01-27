import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoutes from './ui/routes/Routes';
import store from './store/index';

import './ui/assets/styles/styles.scss';

function App() {
   return (
      <div className="app">
         <Provider store={store}>
            <BrowserRouter>
               <AppRoutes />
            </BrowserRouter>
         </Provider>
      </div>
   );
}

export default App;
