<template>
  <div>

    <v-app>
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
    </v-app>
  </div>
</template>

<script>
import Navigation from './components/Navigation';


export default {
  name: 'App',

  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>
