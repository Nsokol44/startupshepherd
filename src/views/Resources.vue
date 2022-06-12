<template>
  <div>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-2 pa-2">
          <h1>Resources</h1>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card class="text-center">
            <h2>
              Find Readings, Podcasts, and Information about Programs Below
            </h2>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card>
            <v-card-title> Readings </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card>
            <v-card-title> Podcasts </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card>
            <v-card-title> Programs </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>
import getAnalytics from "firebase/compat/analytics";

export default {
  name: "resources",
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

