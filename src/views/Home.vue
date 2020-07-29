<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
      <div class="portfolio row">
        <div class="col-lg-5 justify-content-center portfolio-main">
          <h2 data-aos="fade-up" data-aso-delay="100">Stay at home</h2>
          <h1 data-aos="fade-up" data-aso-delay="200">buy everything</h1>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            class="portfolio-main__content"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nam suscipit minima, ullam voluptatibus cumque aliquid necessitatibus, corporis porro odio omnis. Aperiam deleniti impedit provident sed obcaecati labore praesentium voluptatum?</div>
          <div data-aos="fade-up" data-aos-delay="600">
            <a href="#about" class="btn btn-get-started my-3">Get Started</a>
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
      <h2>Features</h2>
      <p
        class="text-center"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit repellat dolore id tempora saepe modi est atque minima laboriosam. Ipsum at, iure fugiat architecto dignissimos quibusdam ea quia hic numquam.</p>
      <div class="features-main row py-5">
        <img src="../assets/images/features-1.png" alt class="img-fluid col-6" />
        <div class="col-6">
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
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
          <ICountUp :endVal="108" :delay="3000" class="feature-item__val" />
          <div>Clients</div>
        </div>
        <div class="feature-item col-sm-3">
          <ICountUp :endVal="29" :delay="3000" class="feature-item__val" />
          <div>Clients</div>
        </div>
        <div class="feature-item col-sm-3">
          <ICountUp :endVal="8" :delay="3000" class="feature-item__val" />
          <div>Clients</div>
        </div>
        <div class="feature-item col-sm-3">
          <ICountUp :endVal="2612" :delay="3000" class="feature-item__val" />
          <div>Clients</div>
        </div>
      </div>
    </section>

    <!-- End Features Section -->

    <!-- ======= Service Section ======= -->
    <section class="service">
      <h2>Service</h2>
      <p
        class="text-center pb-5 container"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam, dolor ea ullam consectetur fuga Iste molestiae praesentium possimus, ullam totam eos quisquam dolores fugiat doloribus eligendi maiores dignissimos.</p>
      <div class="container">
        <div class="item-inline-3">
          <div class="service-item">
            <div class="service-item__logo">
              <i class="fas fa-search"></i>
              <!-- <svg xmlns="../assets/svg/svg_1.svg" alt /> -->
              <svg
                width="100"
                height="100"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                class="bg-svg"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  fill="#f5f5f5"
                  d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                />
              </svg>
            </div>
            <div>
              <h4 class="py-2">Lorem ipsum dolor</h4>
              <p
                class="text-small"
              >Iste molestiae praesentium possimus, ullam totam eos quisquam dolores fugiat doloribus eligendi maiores dignissimos.</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-item__logo">
              <i class="fas fa-search"></i>
              <svg
                width="100"
                height="100"
                viewBox="0 0 600 600"
                class="bg-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  fill="#f5f5f5"
                  d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                />
              </svg>
            </div>
            <div>
              <h4 class="py-2">Lorem ipsum dolor</h4>
              <p
                class="text-small"
              >Iste molestiae praesentium possimus, ullam totam eos quisquam dolores fugiat doloribus eligendi maiores dignissimos.</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-item__logo">
              <i class="fas fa-search"></i>
              <svg
                width="100"
                height="100"
                class="bg-svg"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="none"
                  stroke-width="0"
                  fill="#f5f5f5"
                  d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                />
              </svg>
            </div>
            <div>
              <h4 class="py-2">Lorem ipsum dolor</h4>
              <p
                class="text-small"
              >Iste molestiae praesentium possimus, ullam totam eos quisquam dolores fugiat doloribus eligendi maiores dignissimos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Service Section -->

    <!-- ======= Testimonials Section ======= -->
    <section class="testimonials">
      <div class="container">
        <h2>Testimonials</h2>
        <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true">
          <div class="testimonial-item text-center">
            <div class="testimonial-item__img">
              <img
                src="../assets/images/testimonials/testimonials-5.jpg"
                class="img-fluid rounded-circle"
                alt
              />
            </div>
            <div class="testimonial-item__name">
              <div class="main">Deserunt</div>
              <div class="sub">Web Designer</div>
            </div>
            <div class="testimonial-item__content">
              <i class="fas fa-quote-left"></i>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum dolore temporibus odit earum magnam ea quaerat et impedit illum? Optio officia eos dolorem quaerat omnis aperiam. Voluptate, a cum.</span>
              <i class="fas fa-quote-right"></i>
            </div>
          </div>
          <div class="testimonial-item text-center">
            <div class="testimonial-item__img">
              <img
                src="../assets/images/testimonials/testimonials-2.jpg"
                class="img-fluid rounded-circle"
                alt
              />
            </div>
            <div class="testimonial-item__name">
              <div class="main">Deserunt</div>
              <div class="sub">Web Designer</div>
            </div>
            <div class="testimonial-item__content">
              <i class="fas fa-quote-left"></i>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum dolore temporibus odit earum magnam ea quaerat et impedit illum? Optio officia eos dolorem quaerat omnis aperiam. Voluptate, a cum.</span>
              <i class="fas fa-quote-right"></i>
            </div>
          </div>
          <div class="testimonial-item text-center">
            <div class="testimonial-item__img">
              <img
                src="../assets/images/testimonials/testimonials-1.jpg"
                class="img-fluid rounded-circle"
                alt
              />
            </div>
            <div class="testimonial-item__name">
              <div class="main">Deserunt</div>
              <div class="sub">Web Designer</div>
            </div>
            <div class="testimonial-item__content">
              <i class="fas fa-quote-left"></i>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum dolore temporibus odit earum magnam ea quaerat et impedit illum? Optio officia eos dolorem quaerat omnis aperiam. Voluptate, a cum.</span>
              <i class="fas fa-quote-right"></i>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </section>
    <!-- End Testimonials Section -->

    <!-- ======= Contact Section ======= -->
    <section class="contact container">
      <h2>Contact</h2>
      <div class="contact-main row">
        <div class="col-md-4 contact-main__info inline-2">
          <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class="contact-info">
            <h4>Location</h4>
            <p>13 duong so 7 khu dan cu hong long . quan thu duc</p>
          </div>
          <div class="contact-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="contact-info">
            <h4>Email</h4>
            <p>Minhnguyen1082000@gmail.com</p>
          </div>
          <div class="contact-icon">
            <i class="fas fa-phone-alt"></i>
          </div>
          <div class="contact-info">
            <h4>Phone</h4>
            <p>093 837 8396</p>
          </div>
        </div>
        <div class="col-md-8">
          <div class="inline-2 mb-4">
            <input type="text" class="form-control" placeholder="Your Name" />
            <input type="text" class="form-control" placeholder="Phone" />
          </div>
          <input type="text" class="form-control mb-4 mb-2" placeholder="Email" />
          <input type="text" class="form-control mb-4" placeholder="Subject" />
          <textarea name id cols="10" rows="10" class="form-control mb-4" placeholder="Message"></textarea>
          <button class="btn btn-primary">Send</button>
        </div>
      </div>
    </section>
    <!-- End Contact Section -->

    <!-- ======= Footer Section ======= -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="footer-brand">Niun108</div>
            <div class="sub">Stay at home! Buy everything</div>
          </div>
          <div class="col-6 ">
            <h4 class="text-right">Follow us</h4>
            <div class="social-icon">
              <div class="icon">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div class="icon">
                <i class="fab fa-instagram"></i>
              </div>
              <div class="icon">
                <i class="fab fa-google"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Contact Section -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ICountUp from "vue-countup-v2";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Home",
  components: {
    ICountUp,
    VueSlickCarousel,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap");

* {
  font-family: "Poppins", sans-serif;
}
input {
  padding: 1.4em 0.8em !important;
}

.inline-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5em;
}

h1,
h2,
h3,
h4 {
  font-family: "Poppins", sans-serif;
}

h2 {
  padding: 1em;
  padding-bottom: 0.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;

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
.btn-primary {
  background: #00c2db !important;
  border-color: #00c2db !important;
  padding: 0.3em 2em !important;
  font-weight: bold;
}

.text-small {
  font-size: 1em;
  color: #919aa3;
}

.item-inline-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5em;
}

.home {
  margin-top: 4em;

  .portfolio {
    position: relative;
    width: 100%;

    padding: 6em 0 5em 5em;

    h1 {
      text-transform: uppercase;
      font-weight: bold;
      font-family: "Balsamiq Sans", cursive;
      font-size: 5em;
      padding-bottom: 0.2em;
      filter: brightness(95%);
      color: #2fd4ec;
    }
    h2 {
      font-size: 2em;
      letter-spacing: 2px;
      padding: 0 0.2em;
      font-family: "MuseoModerno", cursive;
      color: #00c2db;
      filter: brightness(40%);
      font-weight: medium;
    }

    &-main {
      display: flex;
      flex-direction: column;

      &__content {
        color: #919aa3;
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
    background: #f9f9fa;
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
    padding: 1.5em;
    padding-bottom: 3em;
    p,
    li {
      letter-spacing: 0.2px;
      color: #919aa3;
    }

    .feature-item {
      text-align: center;
      color: #919aa3;
      line-height: 1.5;

      &__val {
        color: #00c2db;
        font-weight: bold;
        font-size: 2.5em;
      }
    }
  }

  .service {
    padding-bottom: 3em;
    background: radial-gradient(
      40% 40% at 50% 60%,
      rgba(218, 218, 218, 0.692),
      #ffffff 100%
    );

    .service-item {
      border-radius: 5px;
      padding: 4em 2em;
      background: white;
      text-align: center;
      box-shadow: 0 0 20px -12px #919aa3;

      &__logo {
        position: relative;
        margin: 1em;
        padding: 1em;

        .svg-inline--fa {
          position: absolute;
          font-size: 1.5em;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: 0.5s;
        }
        .bg-svg {
          path {
            transition: 0.3s;
          }
        }
      }
      &:hover {
        box-shadow: 0 0 20px -5px #919aa3;
      }

      &:nth-child(1) {
        color: #47aeff;

        &:hover {
          .svg-inline--fa {
            color: white;
          }
          .bg-svg {
            path {
              fill: #47aeff;
            }
          }
        }
      }

      &:nth-child(2) {
        color: #e80368;

        &:hover {
          .svg-inline--fa {
            color: white;
          }
          .bg-svg {
            path {
              fill: #e80368;
            }
          }
        }
      }

      &:nth-child(3) {
        color: #ffbb2c;

        &:hover {
          .svg-inline--fa {
            color: white;
          }
          .bg-svg {
            path {
              fill: #ffbb2c;
            }
          }
        }
      }
    }

    p {
      color: #919aa3;
    }
  }

  .testimonials {
    background: #f9f9fa;
    padding: 1.5em 0;
    padding-bottom: 5em;
    .testimonial-item {
      &__img {
        width: 6em;
        margin: auto;
        img {
          box-shadow: 0 0 20px -10px #4d4e4e;
        }
      }

      &__content {
        padding: 1.8em 0.5em;
        color: #919aa3;
        font-size: 1.1em;
        svg {
          color: #2fd3ec48;
          font-size: 1.2em;

          &:nth-child(1) {
            margin-right: 0.5em;
            margin-bottom: 0.1em;
          }

          &:nth-child(3) {
            margin-left: 0.5em;
          }
        }
      }

      &__name {
        .main {
          font-family: "Poppins", sans-serif;
          color: #00c2db;
          filter: brightness(40%);
          padding-top: 0.5em;
          font-size: 1.5em;
          font-weight: 600;
        }
        .sub {
          font-family: "Poppins", sans-serif;
          filter: brightness(40%);
          font-size: 0.9em;
          font-weight: 600;
          margin-top: -0.1em;
          color: #cecece;
          font-style: italic;
        }
      }
    }
  }

  .contact {
    padding: 1.5em 0;
    padding-bottom: 3em;

    h2 {
      margin-bottom: 1em;
    }

    &-main {
      .contact-icon {
        color: #00c2db;
        background: #00c1db09;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 70px;
        height: 70px;
      }
    }
  }

  footer {
    padding: 1.5em 0;
    box-shadow: 0 0 20px -12px #919aa3;

    .footer-brand {
      font-size: 2.5em;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      color: #34d4ea;
      filter: brightness(40%);
    }
    .social-icon {
      display: flex;
      justify-content: flex-end;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        margin: 0 .2em;
        border-radius: 50%;
        background: #34d4ea;
        color: white;
      }
    }
  }
}
</style>
