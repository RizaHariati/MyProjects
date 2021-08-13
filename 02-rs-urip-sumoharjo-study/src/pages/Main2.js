import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "../component-menu/Home";
import Menu from "../Menu";
import RawatInap from "../component-menu/RawatInap";
import Dokter from "../component-menu/Dokter";
import Pelayanan from "../component-menu/Pelayanan";
import DaftarPasien from "../component-menu/DaftarPasien";
import Checkup from "../component-menu/Checkup";
import DataPasien from "../component-menu/DataPasien";
const Main = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="container">
      <Switch>
        <Route exact path={`${url}`}>
          <Home />
        </Route>
        <Route path={`${url}/rawatinap`}>
          <RawatInap />
        </Route>
        <Route path={`${url}/pelayanan`}>
          <Pelayanan />
        </Route>
        <Route path={`${url}/dokter`}>
          <Dokter />
        </Route>
        <Route path={`${url}/daftarpasien`}>
          <DaftarPasien />
        </Route>
        <Route path={`${url}/checkup`}>
          <Checkup />
        </Route>
        <Route path={`${url}/dataPasien`}>
          <DataPasien />
        </Route>
        <Route path="*">
          <Home></Home>
        </Route>
      </Switch>
      <Menu url={url} />
    </div>
  );
};

export default Main;
