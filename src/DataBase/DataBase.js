const alldata = [
    {
      "id": 1,
      "brand": "Chanel",
      "name": "Chanel No. 5",
      "company": "Chanel",
      "price": "$135",
      "discount_price": "$120",
      "discount": true,
      "size": "100ml",
      "fragrance_type": "Floral",
      "gender": "Female",
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Chanel_No._5_Fragrance_Austin_Calhoon_Photograph.jpg",
      "origin_country": "France"
    },
    {
      "id": 2,
      "brand": "Dior",
      "name": "Miss Dior",
      "company": "Christian Dior",
      "price": "$145",
      "discount": false,
      "size": "100ml",
      "fragrance_type": "Floral",
      "gender": "Female",
      "image": "https://i5.walmartimages.com/asr/c3aa5a92-8fae-4d83-aa76-f02ed5b0d966_1.be808ab66d532816b708ba88fd163919.jpeg",
      "origin_country": "France"
    },
    {
      "id": 3,
      "brand": "Gucci",
      "name": "Gucci Bloom",
      "company": "Gucci",
      "price": "$120",
      "discount_price": "$100",
      "discount": true,
      "size": "100ml",
      "fragrance_type": "Floral",
      "gender": "Female",
      "image": "https://thedecantcompany.com/wp-content/uploads/2023/08/375x500.79602.jpg",
      "origin_country": "Italy"
    },
    {
      "id": 4,
      "brand": "Tom Ford",
      "name": "Black Orchid",
      "company": "Tom Ford",
      "price": "$180",
      "discount": false,
      "size": "100ml",
      "fragrance_type": "Oriental",
      "gender": "Unisex",
      "image": "https://buyperfumeinbangladesh.com/wp-content/uploads/2017/02/Tom-Ford-Black-Orchid-EDP-for-Men-and-Women-100ml.png",
      "origin_country": "USA"
    },
    {
      "id": 5,
      "brand": "Yves Saint Laurent",
      "name": "Libre",
      "company": "Yves Saint Laurent",
      "price": "$132",
      "discount_price": "$115",
      "discount": true,
      "size": "100ml",
      "fragrance_type": "Woody",
      "gender": "Female",
      "image": "https://www.gazzaz.com.sa/cdn/shop/products/100203012050_800x.jpg?v=1671527525",
      "origin_country": "France"
    },
    {
      "id": 6,
      "brand": "Versace",
      "name": "Bright Crystal",
      "company": "Versace",
      "price": "$105",
      "discount": false,
      "size": "90ml",
      "fragrance_type": "Fruity",
      "gender": "Female",
      "image": "https://i0.wp.com/perfumeshop.com.bd/wp-content/uploads/2022/09/images-17_17.jpeg",
      "origin_country": "Italy"
    },
    {
      "id": 7,
      "brand": "Burberry",
      "name": "My Burberry",
      "company": "Burberry",
      "price": "$125",
      "discount_price": "$110",
      "discount": true,
      "size": "90ml",
      "fragrance_type": "Floral",
      "gender": "Female",
      "image": "https://m.media-amazon.com/images/I/91VjMRyO1kL._AC_UF350,350_QL80_.jpg",
      "origin_country": "UK"
    },
    {
      "id": 8,
      "brand": "Armani",
      "name": "Si",
      "company": "Giorgio Armani",
      "price": "$130",
      "discount": false,
      "size": "100ml",
      "fragrance_type": "Chypre",
      "gender": "Female",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UdiAt20VFYHOCLDV_xlus8ZMrgZXI1Ou2Q&s",
      "origin_country": "Italy"
    },
    {
      "id": 9,
      "brand": "Prada",
      "name": "La Femme",
      "company": "Prada",
      "price": "$145",
      "discount_price": "$130",
      "discount": true,
      "size": "100ml",
      "fragrance_type": "Floral",
      "gender": "Female",
      "image": "https://m.media-amazon.com/images/I/615m4acTEMS._AC_UF1000,1000_QL80_.jpg",
      "origin_country": "Italy"
    },
    {
      "id": 10,
      "brand": "Hermès",
      "name": "Twilly d'Hermès",
      "company": "Hermès",
      "price": "$130",
      "discount": false,
      "size": "85ml",
      "fragrance_type": "Spicy",
      "gender": "Female",
      "image": "https://www.scentstore.com/wp-content/uploads/2023/10/Hermes-Tutti-Twilly-85ml-Box.jpg",
      "origin_country": "France"
    },
    {
      "id": 11,
      "brand": "Chanel",
      "name": "Coco Mademoiselle",
      "company": "Chanel",
      "price": "$150",
      "discount_price": "$135",
      "discount": true,
      "size": "100ml",
      "fragrance_type": "Citrus",
      "gender": "Female",
      "image": "https://du0l56ab6b371.cloudfront.net/images/thumbs/0001760_chanel-coco-mademoiselle-edp_1000.webp",
      "origin_country": "France"
    },
    {
      "id": 12,
      "brand": "Dior",
      "name": "J'adore",
      "company": "Christian Dior",
      "price": "$142",
      "discount": false,
      "size": "100ml",
      "fragrance_type": "Floral",
      "gender": "Female",
      "image": "https://du0l56ab6b371.cloudfront.net/images/thumbs/0001748_dior-jadore-edp_625.webp",
      "origin_country": "France"
    },
    {
      "id": 13,
      "brand": "Gucci",
      "name": "Gucci Guilty",
      "company": "Gucci",
      "price": "$125",
      "discount": false,
      "size": "100ml",
      "fragrance_type": "Amber",
      "gender": "Female",
      "image": "https://fragranceroom.com/cdn/shop/products/perfume-gucci-guilty-for-women-eau-de-toilette-spray-1.jpg?v=1546632322",
      "origin_country": "Italy"
    },
    {
      "id": 14,
      "brand": "Tom Ford",
      "name": "Tobacco Vanille",
      "company": "Tom Ford",
      "price": "$210",
      "discount_price": "$195",
      "discount": true,
      "size": "100ml",
      "fragrance_type": "Woody",
      "gender": "Unisex",
      "image": "https://www.luxeoscent.in/cdn/shop/files/TomfordTobaccoVanille.webp?v=1722673269",
      "origin_country": "USA"
    },
    {
      "id": 15,
      "brand": "Yves Saint Laurent",
      "name": "Mon Paris",
      "company": "Yves Saint Laurent",
      "price": "$130",
      "discount": false,
      "size": "90ml",
      "fragrance_type": "Fruity",
      "gender": "Female",
      "image": "https://swish.qa/cdn/shop/products/yslmonparisedp90ml_800x.jpg?v=1650619172",
      "origin_country": "France"
    },
    {
        "id": 16,
        "brand": "Versace",
        "name": "Dylan Blue",
        "company": "Versace",
        "price": "$120",
        "discount_price": "$105",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Aromatic",
        "gender": "Male",
        "image": "https://i0.wp.com/perfumeshop.com.bd/wp-content/uploads/2021/09/0001-7262092136_20210906_012545_0000.jpg?fit=1180%2C1180&ssl=1",
        "origin_country": "Italy"
      },
      {
        "id": 17,
        "brand": "Burberry",
        "name": "Brit Rhythm",
        "company": "Burberry",
        "price": "$110",
        "discount": false,
        "size": "90ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vdnWSZubAAXTPHAYNRnRXMJkAqFoYzgcZg&s",
        "origin_country": "UK"
      },
      {
        "id": 18,
        "brand": "Armani",
        "name": "Aqua di Gio",
        "company": "Giorgio Armani",
        "price": "$130",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Aromatic",
        "gender": "Male",
        "image": "https://dutyfree.b-cdn.net/423_0938_5a458d21ae.png",
        "origin_country": "Italy"
      },
      {
        "id": 19,
        "brand": "Prada",
        "name": "Luna Rossa",
        "company": "Prada",
        "price": "$125",
        "discount_price": "$110",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Citrus",
        "gender": "Male",
        "image": "https://www.fluxurymagazine.com/wp-content/uploads/2023/06/abertura-Prada-luna-rossa.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 20,
        "brand": "Hermès",
        "name": "Voyage d'Hermès",
        "company": "Hermès",
        "price": "$140",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Fresh",
        "gender": "Unisex",
        "image": "https://assets.hermes.com/is/image/hermesproduct/voyage-d-hermes-parfum--107569V0-worn-3-0-0-800-800_g.jpg",
        "origin_country": "France"
      },
      {
        "id": 21,
        "brand": "Chanel",
        "name": "Allure Homme Sport",
        "company": "Chanel",
        "price": "$150",
        "discount_price": "$135",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Citrus",
        "gender": "Male",
        "image": "https://example.com/images/allure_homme_sport.jpg",
        "origin_country": "France"
      },
      {
        "id": 22,
        "brand": "Dior",
        "name": "Sauvage",
        "company": "Christian Dior",
        "price": "$140",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://example.com/images/sauvage.jpg",
        "origin_country": "France"
      },
      {
        "id": 23,
        "brand": "Gucci",
        "name": "Mémoire d'une Odeur",
        "company": "Gucci",
        "price": "$135",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Herbal",
        "gender": "Unisex",
        "image": "https://example.com/images/memoire.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 24,
        "brand": "Tom Ford",
        "name": "Neroli Portofino",
        "company": "Tom Ford",
        "price": "$230",
        "discount_price": "$210",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Citrus",
        "gender": "Unisex",
        "image": "https://example.com/images/neroli_portofino.jpg",
        "origin_country": "USA"
      },
      {
        "id": 25,
        "brand": "Yves Saint Laurent",
        "name": "Opium",
        "company": "Yves Saint Laurent",
        "price": "$125",
        "discount": false,
        "size": "90ml",
        "fragrance_type": "Spicy",
        "gender": "Female",
        "image": "https://example.com/images/opium.jpg",
        "origin_country": "France"
      },
      {
        "id": 26,
        "brand": "Versace",
        "name": "Eros",
        "company": "Versace",
        "price": "$130",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://example.com/images/eros.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 27,
        "brand": "Burberry",
        "name": "Brit",
        "company": "Burberry",
        "price": "$110",
        "discount_price": "$95",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Gourmand",
        "gender": "Female",
        "image": "https://example.com/images/burberry_brit.jpg",
        "origin_country": "UK"
      },
      {
        "id": 28,
        "brand": "Armani",
        "name": "Code",
        "company": "Giorgio Armani",
        "price": "$135",
        "discount_price": "$120",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Oriental",
        "gender": "Male",
        "image": "https://example.com/images/code.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 29,
        "brand": "Prada",
        "name": "L'Homme",
        "company": "Prada",
        "price": "$145",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://example.com/images/lhomme.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 30,
        "brand": "Hermès",
        "name": "Terre d'Hermès",
        "company": "Hermès",
        "price": "$135",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://example.com/images/terre_dhermes.jpg",
        "origin_country": "France"
      },
      {
        "id": 31,
        "brand": "Chanel",
        "name": "Bleu de Chanel",
        "company": "Chanel",
        "price": "$150",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://example.com/images/bleu_de_chanel.jpg",
        "origin_country": "France"
      },
      {
        "id": 32,
        "brand": "Dior",
        "name": "Fahrenheit",
        "company": "Christian Dior",
        "price": "$140",
        "discount_price": "$125",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Leather",
        "gender": "Male",
        "image": "https://example.com/images/fahrenheit.jpg",
        "origin_country": "France"
      },
      {
        "id": 33,
        "brand": "Gucci",
        "name": "Gucci Oud",
        "company": "Gucci",
        "price": "$160",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Oud",
        "gender": "Unisex",
        "image": "https://example.com/images/gucci_oud.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 34,
        "brand": "Tom Ford",
        "name": "Oud Wood",
        "company": "Tom Ford",
        "price": "$230",
        "discount_price": "$210",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Oud",
        "gender": "Unisex",
        "image": "https://example.com/images/oud_wood.jpg",
        "origin_country": "USA"
      },
      {
        "id": 35,
        "brand": "Yves Saint Laurent",
        "name": "L'Homme",
        "company": "Yves Saint Laurent",
        "price": "$135",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://example.com/images/lhomme_ysl.jpg",
        "origin_country": "France"
      },
      {
        "id": 36,
        "brand": "Versace",
        "name": "Oud Noir",
        "company": "Versace",
        "price": "$140",
        "discount_price": "$125",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Oud",
        "gender": "Male",
        "image": "https://example.com/images/oud_noir.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 37,
        "brand": "Burberry",
        "name": "London",
        "company": "Burberry",
        "price": "$115",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Spicy",
        "gender": "Male",
        "image": "https://example.com/images/london_burberry.jpg",
        "origin_country": "UK"
      },
      {
        "id": 38,
        "brand": "Armani",
        "name": "Emporio Armani",
        "company": "Giorgio Armani",
        "price": "$135",
        "discount_price": "$120",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Oriental",
        "gender": "Male",
        "image": "https://example.com/images/emporio_armani.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 39,
        "brand": "Prada",
        "name": "Prada Amber",
        "company": "Prada",
        "price": "$145",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Amber",
        "gender": "Unisex",
        "image": "https://example.com/images/prada_amber.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 40,
        "brand": "Hermès",
        "name": "Equipage",
        "company": "Hermès",
        "price": "$140",
        "discount_price": "$125",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://example.com/images/equipage.jpg",
        "origin_country": "France"
      },
      {
        "id": 41,
        "brand": "Chanel",
        "name": "Égoïste",
        "company": "Chanel",
        "price": "$155",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://example.com/images/egoiste.jpg",
        "origin_country": "France"
      },
      {
        "id": 42,
        "brand": "Dior",
        "name": "Dior Homme",
        "company": "Christian Dior",
        "price": "$145",
        "discount_price": "$130",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://example.com/images/dior_homme.jpg",
        "origin_country": "France"
      },
      {
        "id": 43,
        "brand": "Gucci",
        "name": "Gucci Intense Oud",
        "company": "Gucci",
        "price": "$165",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Oud",
        "gender": "Unisex",
        "image": "https://example.com/images/intense_oud.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 44,
        "brand": "Tom Ford",
        "name": "Noir Extreme",
        "company": "Tom Ford",
        "price": "$180",
        "discount_price": "$165",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://example.com/images/noir_extreme.jpg",
        "origin_country": "USA"
      },
      {
        "id": 45,
        "brand": "Yves Saint Laurent",
        "name": "La Nuit de L'Homme",
        "company": "Yves Saint Laurent",
        "price": "$135",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Spicy",
        "gender": "Male",
        "image": "https://example.com/images/la_nuit.jpg",
        "origin_country": "France"
      },
      {
        "id": 46,
        "brand": "Versace",
        "name": "Pour Homme",
        "company": "Versace",
        "price": "$125",
        "discount_price": "$110",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Aromatic",
        "gender": "Male",
        "image": "https://example.com/images/pour_homme.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 47,
        "brand": "Burberry",
        "name": "Touch",
        "company": "Burberry",
        "price": "$115",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Woody",
        "gender": "Male",
        "image": "https://example.com/images/touch.jpg",
        "origin_country": "UK"
      },
      {
        "id": 48,
        "brand": "Armani",
        "name": "Attitude",
        "company": "Giorgio Armani",
        "price": "$135",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Oriental",
        "gender": "Male",
        "image": "https://example.com/images/attitude.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 49,
        "brand": "Prada",
        "name": "Prada L'Homme Intense",
        "company": "Prada",
        "price": "$150",
        "discount_price": "$135",
        "discount": true,
        "size": "100ml",
        "fragrance_type": "Leather",
        "gender": "Male",
        "image": "https://example.com/images/lhomme_intense.jpg",
        "origin_country": "Italy"
      },
      {
        "id": 50,
        "brand": "Hermès",
        "name": "H24",
        "company": "Hermès",
        "price": "$140",
        "discount": false,
        "size": "100ml",
        "fragrance_type": "Aromatic",
        "gender": "Male",
        "image": "https://example.com/images/h24.jpg",
        "origin_country": "France"
      }
  ]

  export default alldata
  