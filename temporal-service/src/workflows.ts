// src/workflows.ts
import { proxyActivities } from "@temporalio/workflow";
import * as activities from "./activities";
import { OrderDetails } from "./shared";

const { checkInventory, processPayment, sendNotification } = proxyActivities<typeof activities>({
  startToCloseTimeout: "1 minute",
  retry: {
    initialInterval: "1 second",
    maximumInterval: "1 minute",
    backoffCoefficient: 2,
    maximumAttempts: 3,
  }
});

export async function orderWorkflow(details: OrderDetails): Promise<void> {
  try {
    console.log("Starting order processing workflow");
    await checkInventory(details);
    await processPayment(details);
    await sendNotification(details);
    console.log("Order processed successfully");
  } catch (error) {
    console.error("Order processing failed:", error);
    throw error;
  }
}