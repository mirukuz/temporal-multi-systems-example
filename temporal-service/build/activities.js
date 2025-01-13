"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotification = exports.processPayment = exports.checkInventory = void 0;
// src/activities.ts
const axios_1 = __importDefault(require("axios"));
async function checkInventory(details) {
    console.log(`Checking inventory for item ${details.item}.`);
    const response = await axios_1.default.get("http://localhost:3002/check-inventory");
    return response.data;
}
exports.checkInventory = checkInventory;
async function processPayment(details) {
    console.log(`Processing payment for order ${details.orderId}.`);
    const response = await axios_1.default.get("http://localhost:3003/process-payment");
    return response.data;
}
exports.processPayment = processPayment;
async function sendNotification(details) {
    console.log(`Sending notification to ${details.customerEmail}.`);
    await axios_1.default.get("http://localhost:3004/send-notification");
}
exports.sendNotification = sendNotification;
