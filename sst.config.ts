import { SSTConfig } from "sst";
import { ExampleStack } from "./stacks/ExampleStack";

export default {
  config(_input) {
    return {
      name: "websocket",
      region: "us-east-2",
      stage: "dev",
      awsProfile: "devlima",
    };
  },
  stacks(app) {
    app.stack(ExampleStack);
  },
} satisfies SSTConfig;
