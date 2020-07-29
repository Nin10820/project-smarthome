<template>
  <div class>
    <nav id="navbar">
      <div class="logo">Niun108</div>
      <ul class="nav-menu">
        <li v-for="(link, index) in navbarLinks" :key="link + index">
          <router-link :to="link.path">{{link.name}}</router-link>
        </li>
      </ul>
      <div class="buttons">
        <span>
          <i class="fas fa-search"></i>
        </span>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navbarLinks: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "About",
          path: "/about"
        },
        {
          name: "Shop",
          path: "/shopping"
        },
        {
          name: "Service",
          path: "/service"
        },
        {
          name: "Ship",
          path: "/ship"
        },
        {
          name: "Review",
          path: "/review"
        }
      ]
    };
  },
  methods: {
    scrollClass() {
      console.log("a");
    },
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap");
/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
nav {
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2em 2em;
  background: white;
  transition: 0.5s;
  z-index: 1;
  border-radius: 5px;


  .logo {
    font-size: 2em;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #34d4ea;
    filter: brightness(40%);
  }

  .buttons {
    span {
      color: #919aa3;
    }
  }
}

nav.scrolled {
  box-shadow: 0 0 18px -5px #919aa3;
  transition: 0.5s;
}

.nav-menu,
.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;

  .router-link-exact-active {
    color: #2fd4ec;
  }
}

.nav-menu > ul > li {
  position: relative;
}

.nav-menu a {
  position: relative;
  color: #919aa3;
  padding: 0 2em;
  transition: 0.5s;
  font-size: 1em;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
}

.nav-menu a:hover,
.nav-menu .active > a,
.nav-menu li:hover > a {
  color: #2fd4ec;
  text-decoration: none;
}

.nav-menu .get-started a {
  background: #2fd4ec;
  color: #fff;
  border-radius: 50px;
  margin: 0 0 0 30px;
  padding: 10px 25px;
}

.nav-menu .get-started a:hover {
  background: #57aae1;
  color: #fff;
}
</style>
