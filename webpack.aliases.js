const path = require("path");

module.exports = (existingAliases) => ({
  ...existingAliases,
  "@gql": path.join(__dirname, "./gql/"),
  "@hooks": path.join(__dirname, "./hooks/"),
  "@queries": path.join(__dirname, "./queries/"),
  "@components": path.join(__dirname, "./components/"),
});
