// src/shared.ts
export type TaskQueue = "order-processing";

export interface OrderDetails {
  orderId: string;
  item: string;
  amount: number;
  customerEmail: string;
}

export const namespace = "default";
export const taskQueueName: TaskQueue = "order-processing";