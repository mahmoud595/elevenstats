// // const withPlugins = require('next-compose-plugins');
// // // const optimizedImages = require('next-optimized-images');
// // const svgSpriteLoader = require('svg-sprite-loader');
// // const imageminSvgo = require('imagemin-svgo');

// // // module.exports = withPlugins([
// // //   [svgSpriteLoader],
// // //   [imageminSvgo],

// // //   // your other plugins here
// // // ]);

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       loader: 'file-loader',
//       options: {
//         name: 'static/media/[name].[hash:8].[ext]',
//       },
//     });

//     return config;
//   },
// };

// next.config.js
// const path = require('path');
// const withCSS = require('@zeit/next-css');

// module.exports = withCSS({
//   webpack(config, options) {
//     return config;
//   },
// });
const withPlugins = require("next-compose-plugins");

// const withTM = require("next-transpile-modules")([
//   "@amcharts/amcharts4",
//   // '@fullcalendar/core',
//   // "@fullcalendar/react",
//   // "@fullcalendar/common",
//   // "@fullcalendar/daygrid",
//   // "@fullcalendar/timegrid",
//   // "@fullcalendar/interaction",
// ]); // pass the modules you would like to see transpiled

//
// module.exports = () => {
//   withTM();
//   return {
//     images: {
//       domains: ["cdn.sportmonks.com"],
//     },
//   };
// };
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const config = {
  images: {
    domains: ["cdn.sportmonks.com", "cdn5.wyscout.com"],
    env: {
      NEXT_PUBLIC_ROOT_URL: process.env.NEXT_PUBLIC_ROOT_URL,
      NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
    },
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/fixtures/noDate",
  //     },
  //   ];
  // },
};

// module.exports = withTM();
module.exports = withPlugins([withBundleAnalyzer], config);
