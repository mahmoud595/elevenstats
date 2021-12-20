module.exports = {
  webpack: {
    externals: [
      /(xlsx|canvg)/,
      function (context, request, callback) {
        if (/(pdfmake)/.test(request)) {
          return callback(null, "commonjs " + request);
        }

        callback();
      },
    ],
  },
};
