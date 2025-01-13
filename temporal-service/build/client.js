"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/client.ts
const client_1 = require("@temporalio/client");
const workflows_1 = require("./workflows");
const shared_1 = require("./shared");
async function run() {
    const connection = await client_1.Connection.connect();
    const client = new client_1.Client({ connection, namespace: shared_1.namespace });
    const details = {
        orderId: Date.now().toString(),
        item: "widget",
        amount: 99.99,
        customerEmail: "customer@example.com",
    };
    console.log(`Starting order for ${details.item}, order ID: ${details.orderId}`);
    const handle = await client.workflow.start(workflows_1.orderWorkflow, {
        args: [details],
        taskQueue: shared_1.taskQueueName,
        workflowId: `order-${details.orderId}`,
    });
    console.log(`Started Workflow ${handle.workflowId} with RunID ${handle.firstExecutionRunId}`);
    await handle.result();
}
run().catch((err) => {
    console.error("Failed to start workflow:", err);
    process.exit(1);
});
