import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
const DataPasien = () => {
  return (
    <div className="banner ex-menu-content">
      {/* <div className="background-utama"></div> */}
      <div className="ex-menu-header">
        <h1>Mengakses Data Pasien Secara Online</h1>
        <div className="line" />
        <div className="ex-menu-list">
          <h3>
            Dengan mendaftar secara online Anda mendapatkan kemudahan untuk:
          </h3>
          <h3> Membayar tagihan Anda via Internet</h3>
          <h3> Melihat rekam medis </h3>
          <h3> Melihat hasil laboratorium dan tes kesehatan </h3>
        </div>
      </div>
      <AksesDataPasien />
    </div>
  );
};

export default DataPasien;

export const AksesDataPasien = () => {
  const [login, setLogin] = useState(true);
  const [dataLogin, setDataLogin] = useState("");
  const [dataRegister, setDataRegister] = useState("");
  const handleLogin = (data) => {
    setDataLogin(data);
    if (dataRegister === "") {
      console.log("user/password tidak ditemukan");
    } else {
      console.log(dataRegister);
    }
  };
  const handleRegister = (data) => {
    setDataRegister(data);
  };
  return (
    <div className="data-pasien-container">
      <div className="pasien-form">
        <div className="pasien-btn-container">
          <button
            className={login ? "pasien-btn active" : "pasien-btn "}
            onClick={() => setLogin(true)}
          >
            Login
          </button>
          <button
            className={!login ? "pasien-btn active" : "pasien-btn "}
            onClick={() => setLogin(false)}
          >
            Daftar
          </button>
        </div>

        {login && <Login handleLogin={handleLogin} />}
        {!login && <Register handleRegister={handleRegister} />}
      </div>
    </div>
  );
};

const Login = ({ handleLogin }) => {
  const initLogin = {
    email: "",
    password: "",
    registrasi: "",
  };

  return (
    <div className="pasien-login">
      <img src="/assets/images/logo bulat.jpg" alt="logo" />
      <Formik initialValues={initLogin} onSubmit={handleLogin}>
        <Form className="formik-login">
          <div className="login-form">
            <label name="email">email</label>
            <Field id="email" name="email" className="field-login" />
          </div>
          <div className="login-form">
            <label name="password">password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="field-login"
            />
          </div>
          <div className="login-form">
            <label name="registrasi">nomor registrasi</label>
            <Field id="registrasi" name="registrasi" className="field-login" />
            <p>
              nomor registrasi didapatkan dari RS Urip Sumoharjo saat
              pendaftaran
            </p>
          </div>

          <button type="submit" className="login-btn">
            login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

const Register = ({ handleRegister }) => {
  const initRegister = {
    nama: "",
    email: "",
    password1: "",
    password2: "",
    registrasi: "",
  };

  return (
    <div className="pasien-login">
      <img src="/assets/images/logo bulat.jpg" alt="logo" />
      <Formik initialValues={initRegister} onSubmit={handleRegister}>
        <Form className="formik-login">
          <div className="login-form">
            <label name="nama">nama lengkap</label>
            <Field id="nama" name="nama" className="field-login" />
          </div>
          <div className="login-form">
            <label name="email">email</label>
            <Field id="email" name="email" className="field-login" />
          </div>
          <div className="login-form">
            <label name="password1">password</label>
            <Field
              type="password"
              id="password1"
              name="password1"
              className="field-login"
            />
          </div>
          <div className="login-form">
            <label name="password2">konfirmasi password</label>
            <Field
              type="password"
              id="password2"
              name="password2"
              className="field-login"
            />
          </div>
          <div className="login-form">
            <label name="registrasi">nomor registrasi</label>
            <Field id="registrasi" name="registrasi" className="field-login" />
            <p>
              nomor registrasi diberikan pihak RS Urip Sumoharjo saat
              pendaftaran
            </p>
          </div>

          <button type="submit" className="login-btn">
            daftarkan
          </button>
        </Form>
      </Formik>
    </div>
  );
};
