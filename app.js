const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
app.use(cors());
const data = [
  {
    id: 1,
    name: "Iphone 14",
    price: "$1000",
    img: "https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/bltaf5a1524f0c76fe6/6319db03c1a0e62da40cec60/Carousel_iPhone14_Purple_Placement01-PreOrder.png",
    category: "new",
  },

  {
    id: 2,
    name: "Iphone 13",
    price: "$900",
    img: "https://ar.oneclickstore.com/wp-content/uploads/2021/12/iPhone_13_Starlight_PDP_Image_position-1A__CLCO_v1.jpg",
    category: "new",
  },

  {
    id: 3,
    name: "Iphone 12",
    price: "$820",
    img: "https://www.macstation.com.ar/img/productos/2492-2317-1.jpg",
    category: "new",
  },

  {
    id: 4,
    name: "Iphone x",
    price: "$600",
    img: "https://todoapplecaba.com.ar/wp-content/uploads/2021/05/apple-iphone-x-64gb-silver-used-20191122085356800-_w500_1-8532858c58bff3411615996662135414-640-0.jpg",
    category: "new",
  },

  {
    id: 5,
    name: "Iphone 8 Plus",
    price: "$450",
    img: "https://acdn.mitiendanube.com/stores/001/116/601/products/refurb-iphone8plus-gold1-134c24cb5eb8e426cb16364723565163-480-0.jpg",
    category: "old",
  },

  {
    id: 6,
    name: "Iphone 7 Plus",
    price: "$200",
    img: "https://http2.mlstatic.com/D_NQ_NP_604878-MLA43704039116_102020-O.webp",
    category: "old",
  },

  {
    id: 7,
    name: "Iphone 6s Plus",
    price: "$130",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8IDYzEIbSgj_GDVDb_xLu0aL1sxJs6KdlbPyCpGXEvE2-G8m0BJ42puVstheTFP8PIg&usqp=CAU",
    category: "old",
  },

  {
    id: 8,
    name: "Ipad Pro ",
    price: "$500",
    img: "https://cdn-ipoint.waugi.com.ar/25845-thickbox_default/ipad-pro-129-wi-fi-256gb-5ta-gen-space-grey.jpg",
    category: "new",
  },
];

app.get("/", (req, res) => {
  console.log(req.url);
  res.json(data);
});

app.get("/product/:id", (req, res) => {
  let url = req.url;
  let prodId = url.slice(-1);
  const filteredProduct = data.filter((product) => {
    return product.id === Number(prodId);
  });
  res.json(filteredProduct);
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

// const html = `
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Hello from Github!</title>
//     <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
//     <script>
//       setTimeout(() => {
//         confetti({
//           particleCount: 100,
//           spread: 70,
//           origin: { y: 0.6 },
//           disableForReducedMotion: true
//         });
//       }, 500);
//     </script>
//     <style>
//       @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
//       @font-face {
//         font-family: "neo-sans";
//         src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
//         font-style: normal;
//         font-weight: 700;
//       }
//       html {
//         font-family: neo-sans;
//         font-weight: 700;
//         font-size: calc(62rem / 16);
//       }
//       body {
//         background: white;
//       }
//       section {
//         border-radius: 1em;
//         padding: 1em;
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         margin-right: -50%;
//         transform: translate(-50%, -50%);
//       }
//     </style>
//   </head>
//   <body>
//     <section>
//       Hello from Render!
//     </section>
//   </body>
// </html>
// `
