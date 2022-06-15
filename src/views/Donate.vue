<template>
  <div>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-2 pa-2">
          <h1>Every Contribution Helps the Site Run</h1>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card class="text-center">
            <v-img
              height="350"
               :src="require('../assets/venmo_qr.png')"
            ></v-img>
            <stripe-checkout
              ref="checkoutRef"
              mode="payment"
              :pk="publishableKey"
              :line-items="lineItems"
              :success-url="successURL"
              :cancel-url="cancelURL"
              @loading="(v) => (loading = v)"
            />
            <v-btn @click="submit">Donate Today!</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </section>
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
    this.publishableKey =
      process.env.pk_live_51L9sOsGG9hsxbmLftJ0KKSt091NiFrWOsK3H7ozF1X3J7eqqSW2WT078XvUG2spS3jVpDh9XXc6Z1sM28ydQfb7D00IBMSo7o7;
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

