import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  documents: "app/features/**/*.ts",
  generates: {
    "app/types/__generated__/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      // config: {
      //   preResolveTypes: true,
      // },
    },
    // "./graphql.schema.json": {
    //   plugins: ["introspection"]
    // }
  },
};

export default config;
