import { StackContext, Table, WebSocketApi } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  const table = new Table(stack, "WebSocketConnections", {
    fields: {
      id: "string",
    },
    primaryIndex: { partitionKey: "id" },
  });
  const api = new WebSocketApi(stack, "Api", {
    defaults: {
      function: {
        bind: [table],
      },
    },
    routes: {
      $connect: "packages/functions/src/connect.main",
      $disconnect: "packages/functions/src/disconnect.main",
      sendmessage: "packages/functions/src/sendMessage.main",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
