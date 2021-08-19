import React, { useState } from "react";
import { data_pelayanan } from "../data/data_layan";

const Pelayanan = () => {
  const [showPelayanan, setShowPelayanan] = useState(false);
  const [showFasilitas, setShowFasilitas] = useState(false);
  return (
    <div className="banner ex-menu-content">
      <div className="background-utama"></div>
      <div className="ex-menu-header">
        <h1>Pelayanan & Fasilitas</h1>
        <div className="line" />
        <h3>Barisan Garda Depan Kami Siap Melayani </h3>
        <h3>Dengan Dukungan Fasilitas yang Mumpuni</h3>
      </div>
      <div className="search-container">
        <div className="form-search">
          <label htmlFor="search-pelayanan" className="search-label">
            <i className="fa fa-handshake-o"></i>
            <h3>Cari Pelayanan</h3>
          </label>
          <div className="search-header">
            <input
              type="text"
              name="search-pelayanan"
              id="search-pelayanan"
              placeholder="silahkan pilih..."
            />
            <button className="search-btn">
              <i
                className={
                  showPelayanan ? "fa fa-chevron-down" : "fa fa-chevron-up"
                }
                onClick={() => setShowPelayanan(!showPelayanan)}
              ></i>
            </button>
            {showPelayanan && (
              <ul className="list-search">
                {data_pelayanan.map((data) => {
                  const { id, title } = data;
                  return <li key={id}>{title}</li>;
                })}
              </ul>
            )}
          </div>
        </div>

        <div className="form-search">
          <label htmlFor="search-fasilitas" className="search-label">
            <i className="fa fa-flask"></i>
            <h3>Cari Fasilitas</h3>
          </label>
          <div className="search-header">
            <input
              type="text"
              name="search-fasilitas"
              id="search-fasilitas"
              placeholder="silahkan pilih..."
            />
            <button
              className="search-btn"
              onClick={() => setShowFasilitas(!showFasilitas)}
            >
              <i
                className={
                  showFasilitas ? "fa fa-chevron-down" : "fa fa-chevron-up"
                }
              ></i>
            </button>
            {showFasilitas && (
              <ul className="list-search">
                <li>Satu</li>
                <li>dua</li>
                <li>tiga</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="ex-menu-subhead">
        <h1>Pelayanan</h1>
        <div className="line" />
      </div>
      <div className="ex-menu-subhead">
        <h1>Fasilitas</h1>
        <div className="line" />
      </div>
    </div>
  );
};

export default Pelayanan;
