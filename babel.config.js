module.exports = {
  presets: [
    "@babel/preset-react", // necessary for all .jsx files
    "next/babel",
  ],
  plugins: ["inline-react-svg"],
  // fullcalendar attempts to import its own CSS files, but next.js does not allow this.
  // throw away these statements before they arrive at next.js,
  // but you'll need to import them manually in pages/_app.jsx.
  // will also work for any other 3rd-party packages that attempt to do this.
  overrides: [
    {
      include: ["./node_modules"],
      plugins: [
        [
          "babel-plugin-transform-require-ignore",
          {
            extensions: [".css"],
          },
        ],
        [
          "import",
          {
            libraryName: "@mui/material",
            libraryDirectory: "",
            camel2DashComponentName: false,
          },
          "@mui/material",
        ],
        [
          "import",
          {
            libraryName: "@mui/material/styles",
            libraryDirectory: "",
            camel2DashComponentName: false,
          },
          "@mui/material/styles",
        ],
        [
          "import",
          {
            libraryName: "@mui/icons-material",
            libraryDirectory: "",
            camel2DashComponentName: false,
          },
          "@mui/icons-material",
        ],
      ],
    },
  ],
};
