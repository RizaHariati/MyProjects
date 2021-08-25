import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const Promo = () => {
  const { isPromo, setIsPromo } = useGlobalContext();

  const refPromo = useRef(null);
  useEffect(() => {
    if (isPromo) {
      refPromo.current.style.height = "18rem";
    } else {
      refPromo.current.style.height = "0rem";
    }
  }, [isPromo]);
  return (
    <div className="promo" ref={refPromo} onWheel={() => setIsPromo(false)}>
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
          <div
            className="promo-info vaksin"
            style={{
              background:
                "linear-gradient(135deg, #80ad6b15,  #80ad6b15, #80ad6bb6  45%,#80ad6b), url('/assets/images/vaccination.jpg') top/cover no-repeat",
            }}
          >
            <div className="promo-info-text">
              <h3>Swab Antigen</h3>
              <h4 style={{ textDecoration: "line-through" }}>Rp.250.000</h4>
              <h3>Hanya Rp.150.000</h3>
              <h4>Lebih detail..</h4>
            </div>
          </div>

          <div
            className="promo-info vaksin"
            style={{
              background:
                "linear-gradient(135deg, #80ad6b15,  #80ad6b15, #80ad6bb6  45%,#80ad6b), url('/assets/images/test.jpg') top/cover no-repeat",
            }}
          >
            <div className="promo-info-text">
              <h3>Swab PCR</h3>
              <h4 style={{ textDecoration: "line-through" }}>Rp.650.000</h4>
              <h3>Hanya Rp.525.000</h3>
              <h4>Lebih detail..</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
