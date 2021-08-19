import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "../component-menu/Home";
import Menu from "../Menu";
import RawatInap from "../component-menu/RawatInap";
import Dokter from "../component-menu/Dokter";
import Pelayanan from "../component-menu/Pelayanan";
import DaftarPasien from "../component-menu/DaftarPasien";
import Checkup from "../component-menu/Checkup";
import DataPasien from "../component-menu/DataPasien";
import { useGlobalContext } from "../context";
const Main = () => {
  const { url } = useRouteMatch();
  const { hideSubmenu } = useGlobalContext();
  return (
    <div className="container" onMouseOver={hideSubmenu}>
      <div className="banner">
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
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="exclusive-menu">
        <Menu url={url} />
      </div>
    </div>
  );
};

export default Main;
