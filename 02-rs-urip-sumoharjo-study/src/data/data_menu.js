const main_menu = [
  {
    id: "menu0",
    url: "dokter",
    title: "cari dokter",
    icon: "fa fa-user-md",
    class: "dokter",
  },
  {
    id: "menu1",
    url: "pelayanan",
    title: "pelayanan & fasilitas",
    icon: "fa fa-stethoscope",
    class: "pelayanan",
  },
  {
    id: "menu2",
    url: "rawatInap",
    title: "rawat inap",
    icon: "fa fa-bed",
    class: "rawat-inap",
  },
  {
    id: "menu3",
    url: "daftarPasien",
    title: "daftar pasien",
    icon: "fa fa-address-card",
    class: "daftar-pasien",
  },
  {
    id: "menu4",
    url: "checkup",
    title: "promo checkup",
    icon: "fa fa-money",
    class: "checkup",
  },
  {
    id: "menu5",
    url: "dataPasien",
    title: "Data Pasien",
    icon: "fa fa-clipboard",
    class: "data-pasien",
  },
];

const nav_menu = [
  {
    index: "link01",
    link: "Tentang Urip Soemoharjo",
    path: "/about",
  },
  {
    index: "link02",
    link: "Hak dan Kewajiban Pasien",
    path: "/hak",
  },
  {
    index: "link03",
    link: "Penghargaan",
    path: "/penghargaan",
  },
  {
    index: "link04",
    link: "Lowongan Kerja",
    path: "/lowongan",
  },
];

export { main_menu, nav_menu };
