import shoePurseImg from "../../assets/womens/shoe-purse.jpg"
import yellowheel from "../../assets/womens/shoes/yellow-satin-heel.jpg"
import beigeheel from "../../assets/womens/shoes/beige-satin-heel-item.jpg"
import beigepump from "../../assets/womens/shoes/beige-heel-pump-item.jpg"
import womensSweater from "../../assets/womens/tops/womens-sweater-item.jpg"
import womensJeans from '../../assets/womens/bottoms/jeans-item.jpg'
import jewelry from '../../assets/womens/accessories/jewelry.jpg'
import womenswear from '../../assets/womens/womenswear.jpg'
//mens
import menswear from '../../assets/mens/menswear.jpg'
import mensbluecanvas from '../../assets/mens/shoes/blue-tennis-canvas-item.jpg'
import mensyellowcanvas from '../../assets/mens/shoes/canvas-shoe-item.jpg'
import mensloafers from '../../assets/mens/shoes/loafer-gator.jpg'
import mensuit from '../../assets/mens/suits/men-blazer-suits.jpg'
import menjeans from '../../assets/mens/bottoms/mens-jeans.jpg'
import menjeans2 from '../../assets/mens/bottoms/jeans-hangers.jpg'
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
    link: "page-4",
  },
];

export const pageData = [
  {
    name: "page 1",
    classification: "",
    details:"Details about page 1",
    items: [
      {
        name:"product 1",
        description: "item we sell",
        image: yellowheel,
        cost: 49.99
      },
      {
        name:"product 2",
        description: "item we sell",
        image: beigeheel,
        cost: 49.99
      },
      {
        name:"product 3",
        description: "item we sell",
        image: beigepump,
        cost: 55.99
      },

    ],
    more_details:"lorem ipsum tango bravo",
    image: shoePurseImg.src
  },
  {
    name: "page 2",
    classification: "womens",
    details:"Details about page 2",
    items: [
      {
        name:"product 1",
        description: "items we sell",
        image: womensSweater,
        cost: 49.99
      },
      {
        name:"product 2",
        description: "items we sell",
        image: womensJeans,
        cost: 79.99,
      },
      {
        name:"product 3",
        description: "items we sell",
        image: shoePurseImg,
        cost: 85.99
      },
    ],
    more_details:"lorem ipsum tango bravo",
    image: womenswear.src
  },
  {
    name: "page 3",
    classification: "mens",
    details:"Details about page 3",
    items: [
      {
        name:"product 1",
        description: "item we sell",
        image: mensloafers,
        cost: 149.99
      },
      {
        name:"product 2",
        description: "item we sell",
        image: mensyellowcanvas,
        cost: 29.99
      },
      {
        name:"product 3",
        description: "item we sell",
        image: mensbluecanvas,
        cost: 29.99
      },

    ],
    more_details:"",
    image: menswear.src
  },
  {
    name: "page 4",
    classification: "mens",
    details:"Details about page 4",
    items: [
      {
        name:"product 1",
        description: "items we sell",
        image: mensuit,
        cost: 199.99

      },
      {
        name:"product 2",
        description: "items we sell",
        image: menjeans,
        cost: 79.99

      },
      {
        name:"product 3",
        description: "items we sell",
        image: menjeans2,
        cost: 49.99
      },
    ],
    more_details:"Lorem ipsum tango bravo",
    image: menswear.src
  },
]
