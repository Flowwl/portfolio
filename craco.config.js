/* eslint-disable no-undef,@typescript-eslint/no-var-requires */
const CracoAlias = require("craco-alias");
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "tsconfig.paths.json"
      }
    }
  ]
};
