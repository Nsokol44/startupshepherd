<template>
  <div>
    <stripe-checkout 
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <v-btn @click="submit">Pay now!</v-btn>
  </div>
</template>

<script>
import StripeCheckout from "@vue-stripe/vue-stripe";

export default {
    name: "donate",
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey = process.env.pk_live_51L9sOsGG9hsxbmLftJ0KKSt091NiFrWOsK3H7ozF1X3J7eqqSW2WT078XvUG2spS3jVpDh9XXc6Z1sM28ydQfb7D00IBMSo7o7;
    return {
      loading: false,
      lineItems: [
        {
          price: "price_1L9sQmGG9hsxbmLfaDme10cG", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
        {
          price: "price_1L9sQmGG9hsxbmLfkgNweYc0", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
        {
          price: "price_1L9sQmGG9hsxbmLfEAlFqWTV", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
        {
          price: "price_1L9sQmGG9hsxbmLfloRkitdr", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
        {
          price: "price_1L9sQmGG9hsxbmLfT5I3zXP7", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: "your-success-url",
      cancelURL: "your-cancel-url",
    };
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

