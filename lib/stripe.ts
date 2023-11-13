import Stripe from "stripe";

export const stripe = new Stripe("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", {
  apiVersion: "2023-08-16",
  typescript: true,
});