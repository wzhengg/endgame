import CherryMXBlack1 from "./assets/imgs/cherry-mx-black-1.webp";
import CherryMXBlack2 from "./assets/imgs/cherry-mx-black-2.webp";
import CherryMXBlack3 from "./assets/imgs/cherry-mx-black-3.webp";
import CherryMXBrown1 from "./assets/imgs/cherry-mx-brown-1.webp";
import CherryMXBrown2 from "./assets/imgs/cherry-mx-brown-2.webp";
import CherryMXBrown3 from "./assets/imgs/cherry-mx-brown-3.webp";
import EqualzTangerine1 from "./assets/imgs/c3equalz-tangerine-1.webp";
import EqualzTangerine2 from "./assets/imgs/c3equalz-tangerine-2.jpeg";
import EqualzTangerine3 from "./assets/imgs/c3equalz-tangerine-3.webp";
import SingaUnikorn1 from "./assets/imgs/singa-unikorn-1.webp";
import SingaUnikorn2 from "./assets/imgs/singa-unikorn-2.webp";
import SingaKohaku1 from "./assets/imgs/singa-kohaku-1.webp";
import SingaKohaku2 from "./assets/imgs/singa-kohaku-2.webp";
import TXStabs1 from "./assets/imgs/tx-stabilizers-rev3-1.webp";
import TXStabs2 from "./assets/imgs/tx-stabilizers-rev3-2.webp";
import TXStabs3 from "./assets/imgs/tx-stabilizers-rev3-3.webp";
import Staebies1 from "./assets/imgs/aeboards-staebies-v2-1.webp";
import Staebies2 from "./assets/imgs/aeboards-staebies-v2-2.webp";
import Staebies3 from "./assets/imgs/aeboards-staebies-v2-3.webp";
import TXFilms from "./assets/imgs/tx-switch-films-1.webp";

export const products = [
  {
    category: "switches",
    products: [
      {
        name: "Ultraglide Cherry MX Blacks",
        price: 10.0,
        imgs: [CherryMXBlack1, CherryMXBlack2, CherryMXBlack3],
      },
      {
        name: "Cherry MX Butter Browns",
        price: 10.0,
        imgs: [CherryMXBrown1, CherryMXBrown2, CherryMXBrown3],
      },
      {
        name: "C3Equalz x TKC Tangerines",
        price: 10.0,
        imgs: [EqualzTangerine1, EqualzTangerine2, EqualzTangerine3],
      },
    ],
  },
  {
    category: "keyboards",
    products: [
      {
        name: "SINGA X TGR Unikorn R2.1",
        price: 700.0,
        imgs: [SingaUnikorn1, SingaUnikorn2],
      },
      {
        name: "SINGA Kohaku",
        price: 600.0,
        imgs: [SingaKohaku1, SingaKohaku2],
      },
    ],
  },
  {
    category: "accessories",
    products: [
      {
        name: "TX Stabilizers Rev3",
        price: 18.0,
        imgs: [TXStabs1, TXStabs2, TXStabs3],
      },
      {
        name: "AEBoards Staebies V2.1",
        price: 22.0,
        imgs: [Staebies1, Staebies2, Staebies3],
      },
      {
        name: "TX Films",
        price: 5.5,
        imgs: [TXFilms],
      },
    ],
  },
];
