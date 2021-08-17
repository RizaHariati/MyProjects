import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const Promo = () => {
  const { isPromo, setIsPromo } = useGlobalContext();
  const { hideSubmenu } = useGlobalContext();
  const refPromo = useRef(null);
  useEffect(() => {
    if (isPromo) {
      refPromo.current.style.height = "18rem";
    } else {
      refPromo.current.style.height = "0rem";
    }
  }, [isPromo]);
  return (
    <div
      className="promo"
      ref={refPromo}
      onMouseOver={hideSubmenu}
      onWheel={() => setIsPromo(false)}
    >
      <div className="promo-header">
        <h4>
          <i className="fa fa-exclamation-triangle"></i>
          Informasi mengenai COVID-19
        </h4>
        <button className="promo-btn" onClick={() => setIsPromo(!isPromo)}>
          <i
            className={isPromo ? `fa fa-chevron-down` : `fa fa-chevron-up`}
          ></i>
        </button>
      </div>
      <div className="promo-info-container">
        <h2>PPKM (Promo Peduli Kesehatan Masyarakat)</h2>
        <div className="promo-infos">
          <div className="promo-info vaksin">
            <div className="promo-info-image">
              <img src="/assets/images/vaccination.jpg" alt="vaccine" />
            </div>
            <div className="promo-info-text">
              <h3>Swab Antigen</h3>
              <h4 style={{ textDecoration: "line-through" }}>Rp.250.000</h4>
              <h3>Hanya Rp.150.000</h3>
              <h4>Lebih detail..</h4>
            </div>
          </div>
          <div className="promo-info test">
            <div className="promo-info-image">
              <img src="/assets/images/test.jpg" alt="test" />
            </div>
            <div className="promo-info-text">
              <h3>Jadwal vaksin gratis</h3>
              <h4>Setiap hari Jumat s/d Minggu</h4>
              <h4>Jam 08.00 - 15.00 WIB</h4>
              <h4>Lebih detail..</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
