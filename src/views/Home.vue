<template>
  <div>
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thick mb-4">Startup Shepherd</h1>
          <h4 class="subheading">Get the Startup Guidance You Need Now</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container>
      <v-switch
        color="green"
        v-model="$vuetify.theme.dark"
        inset
        label="Night Mode"
      ></v-switch>
      <!-- Card One -->
      <v-card elevation="10" outlined>
        <v-card-title>Ideation</v-card-title>
        <v-expansion-panels>
          <v-expansion-panel elevation="10">
            <v-expansion-panel-header> </v-expansion-panel-header>
            <v-expansion-panel-content>
              This is the first step of your Entrepreneurial Journey.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>

      <!-- Card Two -->
      <v-card elevation="10" outlined>
        <v-card-title>Market Validation</v-card-title>
        <v-expansion-panels>
          <v-expansion-panel elevation="10">
            <v-expansion-panel-header> </v-expansion-panel-header>
            <v-expansion-panel-content> 
              Once you have an idea, you need to validate your market. Use the following steps to do so:
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>

      <!-- Card Three -->
      <v-card elevation="10" outlined>
        <v-card-title>MVP / Service Offering</v-card-title>
        <v-expansion-panels>
          <v-expansion-panel elevation="10">
            <v-expansion-panel-header> </v-expansion-panel-header>
            <v-expansion-panel-content> 
              If you confirmed there is an audience, it's time to build an MVP and get it into people's hands.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>

      <!-- Card Four -->
      <v-card elevation="10" outlined>
        <v-card-title>Iteration / Pivoting</v-card-title>
        <v-expansion-panels>
          <v-expansion-panel elevation="10">
            <v-expansion-panel-header> </v-expansion-panel-header>
            <v-expansion-panel-content> 
              Your MVP is in people's hands, time to make updates or pivot to another idea.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>

      <!-- Card Five -->
      <v-card elevation="10" outlined>
        <v-card-title>Operating / Funding</v-card-title>
        <v-expansion-panels>
          <v-expansion-panel elevation="10">
            <v-expansion-panel-header> </v-expansion-panel-header>
            <v-expansion-panel-content> 
              You are growing and now in need of funding and management guidance. 
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-container>

    <v-container >
      <v-row align="center" justify="center" >
        <v-col class="text-center" >
          <h2>
            If you found the above information helpful please consider
            supporting this page.
          </h2>
          <h1>😃</h1>
          <v-spacer></v-spacer>
          <v-btn raised rounded large color="green" :to="{ name: 'Donate' }">Donate</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import getAnalytics from "firebase/compat/analytics";

export default {
  name: "home",
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

