import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";

import Aside from "./../Aside/Aside";
import Temperature from "./../../pages/Temperature/Temperature";
import Main from "./../Main/Main"
import Meet from "./../../pages/Meet/Meet";
import Proviciones from "./../../pages/Proviciones/Proviciones";
import PrivateRoute from "./../PrivateRoute/PrivateRoute";

const Layout = () => {

    return(
        <>
          <Aside showMenu={true} />
          <Main >
            <Switch>
              <PrivateRoute path="/main" component={Layout} />
          {/*     <Route exact path="/" component={Home} /> */}
              <Route exact path="/clima" component={Temperature} />
              <Route exact path="/meet" component={Meet} />
              <Route exact path="/proviciones" component={Proviciones} />
            </Switch>
          </Main>
        </>
    )
}

export default Layout;