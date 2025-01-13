"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderWorkflow = void 0;
// src/workflows.ts
const workflow_1 = require("@temporalio/workflow");
const { checkInventory, processPayment, sendNotification } = (0, workflow_1.proxyActivities)({
    startToCloseTimeout: "1 minute",
    retry: {
        initialInterval: "1 second",
        maximumInterval: "1 minute",
        backoffCoefficient: 2,
        maximumAttempts: 3,
    }
});
async function orderWorkflow(details) {
    try {
        console.log("Starting order processing workflow");
        await checkInventory(details);
        await processPayment(details);
        await sendNotification(details);
        console.log("Order processed successfully");
    }
    catch (error) {
        console.error("Order processing failed:", error);
        throw error;
    }
}
exports.orderWorkflow = orderWorkflow;
