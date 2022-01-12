import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPage from '../pages/DatailPage/DetailPage';
import HomePage from '../pages/HomePage/HomePage';
import PokedexPage from '../pages/PokedexPage/PokedexPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Header from '../components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route exact path="/pokedex">
                <PokedexPage/>
            </Route>

            <Route exact path="/detail">
                <DetailPage/>
            </Route>

            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Router;