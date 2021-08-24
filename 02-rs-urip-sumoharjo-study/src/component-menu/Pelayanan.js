import React, { useState } from "react";
import { data_fasilitas } from "../data/data_layan";
import { useGlobalContext } from "../context";
import PelayananDetail from "./PelayananDetail";
import FasilitasDetail from "./FasilitasDetail";
const Pelayanan = () => {
  const { showModal } = useGlobalContext();
  const [showFasilitas, setShowFasilitas] = useState(false);
  const [fasilitas, setFasilitas] = useState({ id: "", title: "" });

  const cariFasilitas = () => {
    setShowFasilitas(!showFasilitas);
  };

  const handleFasilitas = (id, title) => {
    setFasilitas({ id, title });
    setShowFasilitas(false);
    showModal(id);
  };

  return (
    <div className="banner ex-menu-content">
      <div className="background-utama"></div>
      <div className="ex-menu-header">
        <h1>Pelayanan & Fasilitas</h1>
        <div className="line" />
        <h3>Barisan Garda Depan Kami Siap Melayani </h3>
        <h3>Dengan Dukungan Fasilitas yang Mumpuni</h3>
      </div>
      <PelayananDetail />
      <div className="search-container">
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
              value={fasilitas.title}
              placeholder="silahkan pilih..."
              readOnly
            />
            <button className="search-btn" onClick={cariFasilitas}>
              <i
                className={
                  showFasilitas ? "fa fa-chevron-up" : "fa fa-chevron-down"
                }
              ></i>
            </button>
            {showFasilitas && (
              <ul className="list-search">
                {data_fasilitas.map((data) => {
                  const { id, title } = data;
                  return (
                    <li
                      key={id}
                      id={id}
                      onClick={() => handleFasilitas(id, title)}
                    >
                      {title}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>

      <FasilitasDetail />
    </div>
  );
};

export default Pelayanan;
