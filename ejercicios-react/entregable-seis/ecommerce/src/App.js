import React from 'react';
import { CustomRouter, ProtectedRoutes, LoadingScreen, MainLayaout, SearchItem } from './components';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Login, Menu, About, Contact, Shop, ShopDetail, Beginning, Cart, Account } from './pages';
import { history } from './utils';
import { useSelector } from 'react-redux';

function App() {

  const isLoading = useSelector( state => state.app.isLoading );

  document.body.style = ' background: #fff';

  return (
    <>
      <CustomRouter history={history}>

        { isLoading && <LoadingScreen /> }

        <Routes>
          <Route path="/login" element={ <Menu /> } />
          <Route element={ <MainLayaout /> }>
          <Route path="/" element={ <Beginning /> } />
            <Route path="/about" element={ <About /> }/>
            <Route path="/contact" element={ <Contact /> }/>
              <Route element={ <ProtectedRoutes /> } >
                <Route path="/cart" element={ <Cart /> }/>
                <Route element={ <SearchItem /> }>
                  <Route path="/shop" element={ <Shop /> } />
                </Route>
                <Route path="/shop/:id" element={ <ShopDetail /> } />
                <Route path="/account" element={ <Account /> } />
              </Route>
          </Route>
        </Routes>
      </CustomRouter>
    </>
  );
}

export default App;
