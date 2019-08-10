switch (process.env.NODE_ENV) {
  case "production":
    module.exports = {
      plugins: [require("autoprefixer"), require("cssnano")]
    };
    break;
  case "development":
    module.exports = {
      plugins: [require("autoprefixer")]
    };
    break;
}
