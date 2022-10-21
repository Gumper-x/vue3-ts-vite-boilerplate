module.exports = {
  overwrite: true,
  schema: {
    [process.env.CODEGEN_API]: {
      headers: {
        schema: "SmartFactoryAI",
        Authorization: `Bearer ${process.env.CODEGEN_TOKEN}`,
      },
    },
  },
  hooks: {
    afterOneFileWrite: "prettier --write",
  },

  documents: "src/**/*.gql",
  generates: {
    "./src/shared/transports/schema/schema.d.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
      ],
      config: {
        maybeValue: "T",
      },
    },
    "./src/shared/transports/schema/schema.json": {
      plugins: ["introspection"],
      config: {
        schemaDescription: true,
        minify: true,
      },
    },
  },
};
