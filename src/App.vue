<template>
  <div id="app">
    <Navbar></Navbar>
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
    updateScroll() {
      // this.scrollPosition = window.scrollY;
      let position = window.scrollY;

      if (position > 20) {
        console.log("scrolled");
        let el = document.getElementById("navbar");
        el.classList.add("scrolled");
      } else {
        console.log("scroll");
        let el = document.getElementById("navbar");
        el.classList.remove("scrolled");
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    console.log("connect");
  }

};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
}
#app {
  position: relative;
  width: 100%;
}
#navbar {
  position: sticky;
  top: 0;
  z-index: 9999;
}
.scrolled {
  box-shadow: 0 0 18px -5px #919aa3;
  transition: 0.5s;
}

</style>
