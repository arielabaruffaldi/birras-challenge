import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import './App.scss'

import Aside from "./components/Aside/Aside";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Temperature from "./pages/Temperature/Temperature";
import Main from "./components/Main/Main"
import Meet from "./pages/Meet/Meet";
import Proviciones from "./pages/Proviciones/Proviciones";

// TODO:
//SACAR TODOS LOS CONNECT Y REEMPLAZARLOS POR HOOKS
//CAMBIAR ICONOS
//AGREGAR PROPTYPES
//AGREGAR VALIDACION CONTRASEÑA LOGIN

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isAuthenticated = useSelector((state) => state.general.isAuthenticated);
  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Aside showMenu={true} />
          <Main responsive={isMobile}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/clima" component={Temperature} />
              <Route exact path="/meet" component={Meet} />
              <Route exact path="/proviciones" component={Proviciones} />
            </Switch>
          </Main>
        </>
      ) : (
        <Switch>
          <Route component={Login} />
        </Switch>
      )
      }
    </BrowserRouter>
  );
}

export default App;
