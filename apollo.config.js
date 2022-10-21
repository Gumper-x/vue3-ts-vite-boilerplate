module.exports = {
  client: {
    service: {
      includes: ["./graphql/**/*.gql"],
      name: "graphql",
      localSchemaFile: "./src/shared/transports/schema/schema.json",
    },
  },
};
