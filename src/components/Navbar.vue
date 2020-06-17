<template>
  <div class="container">
    <nav>
      <div class="logo mr-auto">
        <h1 class="text-light">
          <a href="index.html">
            <span>Vesperr</span>
          </a>
        </h1>
      </div>
      <ul class="nav-menu ">
        <li class="active">
          <a href="/" >Home</a>
        </li>
        <li>
          <a href="/about" >About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <li class="get-started">
          <a href="#about">Get Started</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
nav {
  display: flex;
  align-items: center;
  margin: 1em 0;
}

.nav-menu,
.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex
}

.nav-menu > ul > li {
  position: relative;
}

.nav-menu a {
  position: relative;
  color: #555555;
  padding: 8px 0 12px 25px;
  transition: 0.3s;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
}

.nav-menu a:hover,
.nav-menu .active > a,
.nav-menu li:hover > a {
  color: #3498db;
  text-decoration: none;
}

.nav-menu .get-started a {
  background: #3498db;
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
