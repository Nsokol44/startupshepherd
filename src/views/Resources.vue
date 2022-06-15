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
              Find Readings, Podcasts, Programs, and Get Access to Our Partners Below
            </h2>
            <h5>Resources Added Every Week!</h5>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card>
            <v-card-title> Readings </v-card-title>
             <v-list-item>
              <v-list-item-content>
                <v-list-item-title>The Lean Startup</v-list-item-title>
                <v-list-item-subtitle>By Eric Ries</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
             <v-list-item>
              <v-list-item-content>
                <v-list-item-title>The Psychology of Persuasion</v-list-item-title>
                <v-list-item-subtitle>By Robert B. Cialdini</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card>
            <v-card-title> Podcasts </v-card-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Masters of Scale</v-list-item-title>
                <v-list-item-subtitle>Learn how to scale your startup quickly</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Techstars Climate Tech Podcast</v-list-item-title>
                <v-list-item-subtitle>Climate technologies and innovation</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card>
            <v-card-title> Programs </v-card-title>
             <v-list-item>
              <v-list-item-content>
                <v-list-item-title>NSF Innovation-Corps</v-list-item-title>
                <v-list-item-subtitle>Startup Program for STEM related Projects</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card>
            <v-card-title> Partnerships </v-card-title>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Cafe Boba</v-list-item-title>
                <v-list-item-subtitle>Web, Mobile App, UI, and IoT Development Community</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
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

