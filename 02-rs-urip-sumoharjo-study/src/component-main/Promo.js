import React, { useEffect, useRef } from "react";

import { useGlobalContext } from "../context";
const Promo = () => {
  const { isPromo, setIsPromo } = useGlobalContext();
  const refPromo = useRef(null);
  useEffect(() => {
    if (isPromo) {
      refPromo.current.style.height = "0rem";
    } else {
      refPromo.current.style.height = "15rem";
    }
  }, [isPromo]);
  return (
    <div className="promo" onWheel={() => setIsPromo(true)}>
      <div className="promo-title">
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
      <div className="promo-info" ref={refPromo}>
        test
      </div>
    </div>
  );
};

export default Promo;
