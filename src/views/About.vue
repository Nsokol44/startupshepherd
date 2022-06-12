<template>
  <div>
    <section>

      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 >
          <h1>About Us</h1>
        </v-flex>
      </v-layout>

      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-2">
          <v-container>
            <v-row center no-gutters>
              <v-col center>
                
                <v-img
                  :src="require('../assets/Startupshep.png')"
                  height="600"
                  max-height="400"
                  max-width="400"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card class="text-center">
            <h2 class="headline">
              Startup Shepherd is a
              <a href="https://carthago.co"> Carthago</a> application. Our goal
              is to make it easier for individuals to begin their
              entrepreneurial journey.
            </h2>
            <h3>
              The main contents of this site are free and your donations help
              keep us running.
            </h3>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card class="text-center">
            <h2 class="headline">
              If you have any comments, feedback, or suggestions feel free to
              submit them below.
            </h2>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4 class="my-2 pa-2">
          <v-card class="text-center">
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="20"
                      label="First name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="20"
                      label="Last name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field v-model="comments" label="Comments"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
              <v-flex xs12 class="text-xs-center">
                    <v-btn
                      class="green white--text"
                      dark
                      large
                      @click="feedback"
                      >Submit</v-btn
                    >
                  </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>
import getAnalytics from "firebase/compat/analytics";
import db from "../firebase/firebaseInit";


export default {
  name: "about",
      data() {
        return {
            email: "",
            firstname: "",
            lastname: "",
            comments: "",
            error: "",
            errorMsg: "",
            valid: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
        };
    },
    methods: {
        async feedback() {
            if (
                this.email !== "" &&
                this.firstname !== "" &&
                this.lastname !== "" &&
                this.comments !== ""
            ) 
            {
                this.error = false;
                this.errorMsg = "";


                db.collection("feedback").add({ email: this.email, firstname: this.firstname, lastname: this.lastname, comments: this.comments  });
                this.$router.push({name: 'Home'});
                return;
            }
            this.error = true;
            this.errorMsg = "Please fill out all fields!";
        },
    },

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
