// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "@babel/preset-typescript",
      [
        "@babel/preset-env",
        {
          // KoLmafia r29403 bundles Rhino 1.8+
          targets: { rhino: "1.8.0" },
        },
      ],
    ],
  };
};
