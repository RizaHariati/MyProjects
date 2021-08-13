import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = ({ url }) => {
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    if (url === "/") {
      setNewUrl("/home");
    } else {
      setNewUrl(url);
    }
  }, [url]);
  return (
    <div className="exclusive-menu">
      <Link to={`${newUrl}/rawatInap`} className="ex-menu rawat-inap">
        <i className="fa fa-bed"></i>
        <h2>rawat inap</h2>
      </Link>
      <Link to={`${newUrl}/pelayanan`} className="ex-menu pelayanan">
        <i className="fa fa-stethoscope"></i>
        <h2>pelayanan</h2>
      </Link>
      <Link to={`${newUrl}/dokter`} className="ex-menu dokter">
        <i className="fa fa-user-md"></i>
        <h2>cari dokter</h2>
      </Link>
      <Link to={`${newUrl}/daftarPasien`} className="ex-menu daftar-pasien">
        <i className="fa fa-address-card"></i>
        <h2>daftar pasien</h2>
      </Link>
      <Link to={`${newUrl}/checkup`} className="ex-menu checkup">
        <i className="fa fa-money"></i>
        <h2>promo checkup</h2>
      </Link>
      <Link to={`${newUrl}/dataPasien`} className="ex-menu data-pasien">
        <i className="fa fa-clipboard"></i>
        <h2>Data Pasien</h2>
      </Link>
    </div>
  );
};

export default Menu;
