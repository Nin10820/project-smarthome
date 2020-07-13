<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
      <div class="portfolio row">
        <div class="col-lg-5 justify-content-center portfolio-main">
          <h3 data-aos="fade-up" data-aso-delay="100">Stay at home</h3>
          <h1 data-aos="fade-up" data-aso-delay="200">buy everything</h1>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            class="portfolio-main__content"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nam suscipit minima, ullam voluptatibus cumque aliquid necessitatibus, corporis porro odio omnis. Aperiam deleniti impedit provident sed obcaecati labore praesentium voluptatum?</div>
          <div data-aos="fade-up" data-aos-delay="600">
            <a href="#about" class="btn btn-get-started my-5">Get Started</a>
          </div>
        </div>
        <div
          class="col-lg-7 d-flex justify-content-center align-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img src="../assets/images/img_2.jpg" class="animated" alt />
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-4 col-6">
            <img
              src="../assets/images/clients/client-1.png"
              class="img-fluid"
              alt
              data-aos="zoom-in"
            />
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img
              src="../assets/images/clients/client-2.png"
              class="img-fluid"
              alt
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img
              src="../assets/images/clients/client-3.png"
              class="img-fluid"
              alt
              data-aos="zoom-in"
              data-aos-delay="200"
            />
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img
              src="../assets/images/clients/client-4.png"
              class="img-fluid"
              alt
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img
              src="../assets/images/clients/client-5.png"
              class="img-fluid"
              alt
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img
              src="../assets/images/clients/client-6.png"
              class="img-fluid"
              alt
              data-aos="zoom-in"
              data-aos-delay="500"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Clients Section -->

    <!-- ======= Features Section ======= -->
    <section class="features container">
      <h3>Features</h3>
      <p
        class="text-center"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit repellat dolore id tempora saepe modi est atque minima laboriosam. Ipsum at, iure fugiat architecto dignissimos quibusdam ea quia hic numquam.</p>
      <div class="features-main row py-5">
        <img src="../assets/images/features-1.png" alt class="img-fluid col-6" />
        <div class="col-6">
          <h4 class="font-weight-">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
          <p
            class="font-italic"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam excepturi accusantium maxime quia, adipisci illo earum harum sequi dolore aliquid, officia</p>
          <ul>
            <li>quos perferendis nobis nesciunt officiis laborum fugit nam modi.</li>
            <li>quos perferendis nobis nesciunt officiis laborum fugit nam modi.</li>
            <li>quos perferendis nobis nesciunt officiis laborum fugit nam modi.</li>
          </ul>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis sapiente maxime error accusantium totam a ratione eveniet commodi eligendi!</p>
        </div>
      </div>
      <div class="row">
        <div class="feature-item col-sm-3">
          <ICountUp :endVal="108" class="feature-item__val" />
          <div>Clients</div>
        </div>
        <div class="feature-item col-sm-3">
          <ICountUp :endVal="29" class="feature-item__val" />
          <div>Clients</div>
        </div>
        <div class="feature-item col-sm-3">
          <ICountUp :endVal="8" class="feature-item__val" />
          <div>Clients</div>
        </div>
        <div class="feature-item col-sm-3">
          <ICountUp :endVal="2612" class="feature-item__val" />
          <div>Clients</div>
        </div>
      </div>
    </section>

    <!-- End Features Section -->

    <section class="mt-3">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse beatae quam quisquam reprehenderit explicabo ipsum debitis natus, itaque illum dolorem amet, tempore quis quas corporis dolorum? Eius error quaerat autem?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsum obcaecati, culpa minima architecto, harum consectetur, ut facere dolorum voluptate dolorem laudantium eveniet dolor alias numquam? Ipsum aperiam consectetur culpa?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque ea qui facere harum corporis magni at accusamus, numquam aut cupiditate porro consectetur doloribus, doloremque in, velit blanditiis! Consectetur, illo.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae hic tempora minus, voluptatibus possimus itaque quas exercitationem, vel ad dolore officiis perferendis maiores magnam qui id beatae a saepe et.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae excepturi necessitatibus id expedita quo modi deleniti voluptates? Beatae repudiandae, nisi sint reiciendis quidem laborum dolorem, obcaecati culpa autem ipsum veniam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti odio nam quod voluptatem in voluptas voluptates. Quasi corporis nihil ex molestias fuga, mollitia repellendus tenetur, saepe quae explicabo optio pariatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi, commodi debitis doloremque rem ipsa eaque laborum sunt a, aliquam sapiente fuga natus fugit reiciendis quam dolor aliquid omnis at?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores nam voluptatibus obcaecati rem vel temporibus! Esse deserunt omnis quas delectus ut libero assumenda reiciendis dolore similique? Quaerat, dignissimos optio.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse beatae quam quisquam reprehenderit explicabo ipsum debitis natus, itaque illum dolorem amet, tempore quis quas corporis dolorum? Eius error quaerat autem?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsum obcaecati, culpa minima architecto, harum consectetur, ut facere dolorum voluptate dolorem laudantium eveniet dolor alias numquam? Ipsum aperiam consectetur culpa?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque ea qui facere harum corporis magni at accusamus, numquam aut cupiditate porro consectetur doloribus, doloremque in, velit blanditiis! Consectetur, illo.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae hic tempora minus, voluptatibus possimus itaque quas exercitationem, vel ad dolore officiis perferendis maiores magnam qui id beatae a saepe et.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae excepturi necessitatibus id expedita quo modi deleniti voluptates? Beatae repudiandae, nisi sint reiciendis quidem laborum dolorem, obcaecati culpa autem ipsum veniam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti odio nam quod voluptatem in voluptas voluptates. Quasi corporis nihil ex molestias fuga, mollitia repellendus tenetur, saepe quae explicabo optio pariatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi, commodi debitis doloremque rem ipsa eaque laborum sunt a, aliquam sapiente fuga natus fugit reiciendis quam dolor aliquid omnis at?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores nam voluptatibus obcaecati rem vel temporibus! Esse deserunt omnis quas delectus ut libero assumenda reiciendis dolore similique? Quaerat, dignissimos optio.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse beatae quam quisquam reprehenderit explicabo ipsum debitis natus, itaque illum dolorem amet, tempore quis quas corporis dolorum? Eius error quaerat autem?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsum obcaecati, culpa minima architecto, harum consectetur, ut facere dolorum voluptate dolorem laudantium eveniet dolor alias numquam? Ipsum aperiam consectetur culpa?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque ea qui facere harum corporis magni at accusamus, numquam aut cupiditate porro consectetur doloribus, doloremque in, velit blanditiis! Consectetur, illo.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae hic tempora minus, voluptatibus possimus itaque quas exercitationem, vel ad dolore officiis perferendis maiores magnam qui id beatae a saepe et.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae excepturi necessitatibus id expedita quo modi deleniti voluptates? Beatae repudiandae, nisi sint reiciendis quidem laborum dolorem, obcaecati culpa autem ipsum veniam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti odio nam quod voluptatem in voluptas voluptates. Quasi corporis nihil ex molestias fuga, mollitia repellendus tenetur, saepe quae explicabo optio pariatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi, commodi debitis doloremque rem ipsa eaque laborum sunt a, aliquam sapiente fuga natus fugit reiciendis quam dolor aliquid omnis at?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores nam voluptatibus obcaecati rem vel temporibus! Esse deserunt omnis quas delectus ut libero assumenda reiciendis dolore similique? Quaerat, dignissimos optio.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse beatae quam quisquam reprehenderit explicabo ipsum debitis natus, itaque illum dolorem amet, tempore quis quas corporis dolorum? Eius error quaerat autem?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsum obcaecati, culpa minima architecto, harum consectetur, ut facere dolorum voluptate dolorem laudantium eveniet dolor alias numquam? Ipsum aperiam consectetur culpa?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque ea qui facere harum corporis magni at accusamus, numquam aut cupiditate porro consectetur doloribus, doloremque in, velit blanditiis! Consectetur, illo.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae hic tempora minus, voluptatibus possimus itaque quas exercitationem, vel ad dolore officiis perferendis maiores magnam qui id beatae a saepe et.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae excepturi necessitatibus id expedita quo modi deleniti voluptates? Beatae repudiandae, nisi sint reiciendis quidem laborum dolorem, obcaecati culpa autem ipsum veniam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti odio nam quod voluptatem in voluptas voluptates. Quasi corporis nihil ex molestias fuga, mollitia repellendus tenetur, saepe quae explicabo optio pariatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi, commodi debitis doloremque rem ipsa eaque laborum sunt a, aliquam sapiente fuga natus fugit reiciendis quam dolor aliquid omnis at?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores nam voluptatibus obcaecati rem vel temporibus! Esse deserunt omnis quas delectus ut libero assumenda reiciendis dolore similique? Quaerat, dignissimos optio.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse beatae quam quisquam reprehenderit explicabo ipsum debitis natus, itaque illum dolorem amet, tempore quis quas corporis dolorum? Eius error quaerat autem?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsum obcaecati, culpa minima architecto, harum consectetur, ut facere dolorum voluptate dolorem laudantium eveniet dolor alias numquam? Ipsum aperiam consectetur culpa?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque ea qui facere harum corporis magni at accusamus, numquam aut cupiditate porro consectetur doloribus, doloremque in, velit blanditiis! Consectetur, illo.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae hic tempora minus, voluptatibus possimus itaque quas exercitationem, vel ad dolore officiis perferendis maiores magnam qui id beatae a saepe et.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae excepturi necessitatibus id expedita quo modi deleniti voluptates? Beatae repudiandae, nisi sint reiciendis quidem laborum dolorem, obcaecati culpa autem ipsum veniam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti odio nam quod voluptatem in voluptas voluptates. Quasi corporis nihil ex molestias fuga, mollitia repellendus tenetur, saepe quae explicabo optio pariatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi, commodi debitis doloremque rem ipsa eaque laborum sunt a, aliquam sapiente fuga natus fugit reiciendis quam dolor aliquid omnis at?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores nam voluptatibus obcaecati rem vel temporibus! Esse deserunt omnis quas delectus ut libero assumenda reiciendis dolore similique? Quaerat, dignissimos optio.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse beatae quam quisquam reprehenderit explicabo ipsum debitis natus, itaque illum dolorem amet, tempore quis quas corporis dolorum? Eius error quaerat autem?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsum obcaecati, culpa minima architecto, harum consectetur, ut facere dolorum voluptate dolorem laudantium eveniet dolor alias numquam? Ipsum aperiam consectetur culpa?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque ea qui facere harum corporis magni at accusamus, numquam aut cupiditate porro consectetur doloribus, doloremque in, velit blanditiis! Consectetur, illo.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae hic tempora minus, voluptatibus possimus itaque quas exercitationem, vel ad dolore officiis perferendis maiores magnam qui id beatae a saepe et.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae excepturi necessitatibus id expedita quo modi deleniti voluptates? Beatae repudiandae, nisi sint reiciendis quidem laborum dolorem, obcaecati culpa autem ipsum veniam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti odio nam quod voluptatem in voluptas voluptates. Quasi corporis nihil ex molestias fuga, mollitia repellendus tenetur, saepe quae explicabo optio pariatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi, commodi debitis doloremque rem ipsa eaque laborum sunt a, aliquam sapiente fuga natus fugit reiciendis quam dolor aliquid omnis at?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores nam voluptatibus obcaecati rem vel temporibus! Esse deserunt omnis quas delectus ut libero assumenda reiciendis dolore similique? Quaerat, dignissimos optio.
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ICountUp from "vue-countup-v2";

export default {
  name: "Home",
  components: {
    // HelloWorld
    ICountUp
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap");

* {
  font-family: "Open Sans", sans-serif;
}

h1,
h2,
h3,
h4 {
  font-family: "Poppins", sans-serif;
}

.home {
  margin-top: 4em;

  .portfolio {
    position: relative;
    width: 100%;

    padding: 6em 0 7em 5em;

    h1 {
      text-transform: uppercase;
      font-weight: bold;
      font-family: "Balsamiq Sans", cursive;
      font-size: 5em;
      padding-bottom: 0.2em;
      filter: brightness(95%);
      color: #2fd4ec;
    }
    h3 {
      font-size: 2em;
      letter-spacing: 2px;
      padding: 0 0.2em;
      font-family: "MuseoModerno", cursive;
      color: #34d4ea;
      filter: brightness(40%);
      font-weight: medium;
    }

    &-main {
      display: flex;
      flex-direction: column;

      &__content {
        color: #919aa3;
        font-family: "Open Sans", sans-serif;
      }

      .btn-get-started {
        border: 2px solid #ff9269;
        background: #ff9269;
        color: white;
      }
      .btn-get-started:hover {
        filter: brightness(110%);
      }
    }

    img {
      max-width: 80%;
      height: auto;
      animation: portfolio 4s infinite linear;
    }

    @keyframes portfolio {
      50% {
        transform: translateX(1%);
      }
    }
  }

  .clients {
    position: relative;
    background: #e1f1f381;
    padding: 1.5em 0;

    img {
      cursor: pointer;
      height: 35px;
      opacity: 0.3;
      filter: grayscale(90%);
      transition: filter 2s;
      &:hover {
        filter: grayscale(10%);
      }
    }
  }

  .features {
    h3 {
      font-family: "Poppins", sans-serif;
      padding: 1em;
      padding-bottom: 0.6em;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        width: 70px;
        height: 3px;
        background: #aabbd7;
        bottom: 0;
        margin: 1em;
      }

      &::after {
        content: "";
        width: 70px;
        height: 3px;
        background: #aabbd7;
        bottom: 0;
        margin: 1em;
      }
    }

    p, li {
      letter-spacing: 0.2px;
      color: #575757;
    }

    .feature-item {
      text-align: center;
      color: #919aa3;
      line-height: 1.5;

      &__val {
        color: #34d4ea;
        font-weight: bold;
        font-size: 2.5em;
      }
    }
  }
}
</style>
