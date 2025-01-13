// src/activities.ts
import axios from "axios";
import { OrderDetails } from "./shared";

export async function checkInventory(details: OrderDetails): Promise<string> {
  console.log(`Checking inventory for item ${details.item}.`);
  const response = await axios.get("http://localhost:3002/check-inventory");
  return response.data;
}

export async function processPayment(details: OrderDetails): Promise<string> {
  console.log(`Processing payment for order ${details.orderId}.`);
  const response = await axios.get("http://localhost:3003/process-payment");
  return response.data;
}

export async function sendNotification(details: OrderDetails): Promise<void> {
  console.log(`Sending notification to ${details.customerEmail}.`);
  await axios.get("http://localhost:3004/send-notification");
}