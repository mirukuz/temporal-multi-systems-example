// src/client.ts
import { Connection, Client } from "@temporalio/client";
import { orderWorkflow } from "./workflows";
import { OrderDetails, taskQueueName, namespace } from "./shared";

async function run() {
  const connection = await Connection.connect();
  const client = new Client({ connection, namespace });

  const details: OrderDetails = {
    orderId: Date.now().toString(),
    item: "widget",
    amount: 99.99,
    customerEmail: "customer@example.com",
  };

  console.log(`Starting order for ${details.item}, order ID: ${details.orderId}`);

  const handle = await client.workflow.start(orderWorkflow, {
    args: [details],
    taskQueue: taskQueueName,
    workflowId: `order-${details.orderId}`,
  });

  console.log(`Started Workflow ${handle.workflowId} with RunID ${handle.firstExecutionRunId}`);
  await handle.result();
}

run().catch((err) => {
  console.error("Failed to start workflow:", err);
  process.exit(1);
});