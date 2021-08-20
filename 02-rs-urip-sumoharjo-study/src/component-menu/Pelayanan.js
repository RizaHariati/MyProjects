import React, { useState } from "react";
import { data_pelayanan, data_fasilitas } from "../data/data_layan";

const Pelayanan = () => {
  const [showPelayanan, setShowPelayanan] = useState(false);
  const [pelayanan, setPelayanan] = useState({ id: "", title: "" });
  const [showFasilitas, setShowFasilitas] = useState(false);
  const [fasilitas, setFasilitas] = useState({ id: "", title: "" });
  const cariPelayanan = () => {
    setShowPelayanan(!showPelayanan);
    setShowFasilitas(false);
  };
  const cariFasilitas = () => {
    setShowFasilitas(!showFasilitas);
    setShowPelayanan(false);
  };
  const handlePelayanan = (id, title) => {
    setFasilitas({ id: "", title: "" });
    setPelayanan({ id, title });
    setShowPelayanan(false);
  };
  const handleFasilitas = (id, title) => {
    setPelayanan({ id: "", title: "" });
    setFasilitas({ id, title });
    setShowFasilitas(false);
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
              value={pelayanan.title}
              placeholder="silahkan pilih..."
              readOnly
            />
            <button className="search-btn" onClick={cariPelayanan}>
              <i
                className={
                  showPelayanan ? "fa fa-chevron-up" : "fa fa-chevron-down"
                }
              ></i>
            </button>
            {showPelayanan && (
              <ul className="list-search">
                {data_pelayanan.map((data) => {
                  const { id, title } = data;
                  return (
                    <li
                      key={id}
                      id={id}
                      onClick={() => handlePelayanan(id, title)}
                    >
                      {title}
                    </li>
                  );
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

      <PelayananDetail />

      <FasilitasDetail />
    </div>
  );
};

export default Pelayanan;

const PelayananDetail = () => {
  return (
    <div className="ex-menu-subhead">
      <h1>Pelayanan</h1>
      <div className="line" />
      <div className="pelayanan-content">
        {data_pelayanan.map((data) => {
          const { id, title, hari, jam, telp } = data;
          return (
            <div key={id} className="pelayanan-info">
              <h2>{title}</h2>
              <h4>{hari}</h4>
              <p>jam: {jam}</p>
              {telp.map((phone) => {
                const { index, nomor } = phone;
                return (
                  <p key={index}>
                    <i className="fa fa-phone"></i>
                    {nomor}
                  </p>
                );
              })}
              <button className="pelayanan-btn">baca lebih lanjut...</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FasilitasDetail = () => {
  const fasMenu = [...new Set(data_fasilitas.map((item) => item.kategori))];

  return (
    <div className="ex-menu-subhead">
      <h1>Fasilitas</h1>
      <div className="line" />
      <div className="fasilitas-container">
        {fasMenu.map((menu, index) => {
          const newData = data_fasilitas.filter(
            (item) => item.kategori === menu
          );
          return (
            <div key={index}>
              <h2>{menu}</h2>
              <div className="line"></div>
              <div className="fasilitas-content">
                {newData.map((data) => {
                  const { id, title, img } = data;
                  return (
                    <div key={id} className="fasilitas-info">
                      <h4>{title}</h4>
                      <img
                        src={`/assets/images/pelayanan-fasilitas/${img}.jpg`}
                        alt={title}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
