const config = {
  schema: "http://localhost:1337/graphql",
  documents: ["src/**/*.jsx"],
  ignoreNoDocuments: true,
  generates: {
    "./types/gql/": {
      preset: "client",
    },
  },
};

export default config;
