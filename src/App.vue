<template>
  <div id="app">
    <Navbar></Navbar>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  },
  methods: {
    handleSCroll() {
      console.log("a");
    },
  },

};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
}
</style>
