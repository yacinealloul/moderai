import Stripe from "stripe";

export const stripe = new Stripe("sk_test_51NamwzI746zrYomv2AkTWTlAbnmONkxemL6CX9Zatwube94HMhpsJxBicSTM75FiLBWgeX6G5U0CVViHVxgi0fnL00eY7o6ESD", {
  apiVersion: "2023-08-16",
  typescript: true,
});