import Stripe from "stripe";

export const stripe = new Stripe("sk_test_51OBabYFaxjWwud8ySfVoTk1LHUBOI5tnbytkQnzd9NB5EOeO5VDb2UyODBfJ9zmwBUYT2qOgXNqubbMhM2rq0pyd00u3T25Ugc", {
  apiVersion: "2023-08-16",
  typescript: true,
});