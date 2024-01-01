import austinImg from "../../assets/austin.jpg"
import dallasImg from "../../assets/dallas.jpg"
import elpasoImg from "../../assets/el-paso-texas.jpg"
import galvestonImg from "../../assets/Galveston-Island.jpg"
import houstonImg from "../../assets/houston.jpg"
import sanantonioImg from "../../assets/san antonio.jpg"
import wacoImg from "../../assets/waco.jpg"

export const pages: any[] = [
  {
    link: "page-1"
  },
  {
    link: "page-2"
  },
  {
    link: "page-3"
  },
  {
    link: "page-5",
  },
];

export const pageData = [
  {
    name: "page-1",
    population: "974,447",
    date_established: "1989",
    region: "hill country texas",
    classification: "urban",
    avg_income: "$78,000",
    details:"",
    isCapital: true,
    sights: [
      {
        name:"Capital building",
        description: ""
      },
      {
        name:"Lady bird lake",
        description: ""
      },

    ],
    more_details:"",
    image: '../../assets/shoe-purse.jpg'
  },
  {
    name: "dallas",
    population: "1,299,544",
    date_established: "1856",
    region: "north texas",
    classification: "urban",
    avg_income: "$85,000",
    details:"",
    isCapital: false,
    sights: [
      {
        name:"",
        description: ""
      },
      {
        name:"",
        description: ""
      },
      {
        name:"",
        description: ""
      },
    ],
    more_details:"",
    image:dallasImg
  },
  {
    name: "el paso",
    population: "677,456",
    date_established: "1873",
    region: "west texas",
    classification: "urban",
    avg_income: "$51,000",
    details:"Details about El Paso",
    isCapital: false,
    sights: [
      {
        name:"",
        description: ""
      },
      {
        name:"",
        description: ""
      },

    ],
    more_details:"",
    image:elpasoImg
  },
]
