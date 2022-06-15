<template>
  <v-card class="mx-auto overflow-hidden" height="auto">
    <v-app-bar app color="primary" dark>
      <v-toolbar-side-icon class="logo">
        <v-btn flat :to="{ name: 'Home' }" icon>
          <img
            :src="require('../assets/Startupshep.png')"
            alt="Vuetify.js"
            height="50px"
            width="50px" /></v-btn
      ></v-toolbar-side-icon>
    
      <v-spacer></v-spacer>
      <v-btn raised rounded large color="green" :to="{ name: 'Donate' }">Donate</v-btn>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>


    
    <v-navigation-drawer v-model="drawer" temporary right app>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="green--text text--accent-4"
        >
          <v-list-item to='/'>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item>

          <v-list-item to='about'>
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to='services'>
            <v-list-item-icon>
              <v-icon>mdi-toolbox</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Services</v-list-item-title>
          </v-list-item>

          <v-list-item to='resources'>
            <v-list-item-icon>
              <v-icon>mdi-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Resources</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "navigation",

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>