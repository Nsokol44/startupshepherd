<template>
  <div>
    <v-container>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-2 pa-2">
          <h1>Services</h1>
        </v-flex>
      </v-layout>

      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card class="text-center" elevation="5" outlined>
            <h1 class="headline">
              We offer a variety of services from grant writing to strategy.
              Fill out the below form so we can figure out how to help you.
            </h1>
            <v-btn class="my-5"
              raised
              rounded
              large
              color="green"
              href="https://forms.gle/rFJbjoANVZrUqemC6"
              target="_blank"
              >Take Survey</v-btn
            >
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import getAnalytics from "firebase/compat/analytics";

export default {
  name: "services",
  metaInfo: {
    changed(metaInfo) {
      getAnalytics().setCurrentScreen(metaInfo.title);
      getAnalytics().logEvent("page_view");
      getAnalytics().logEvent("screen_view", {
        screen_name: metaInfo.title,
      });
    },
  },
};
</script>
