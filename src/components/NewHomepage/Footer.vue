<template>
  <div class="footer">
    <div class="top">
      <h6>Greysoft Technologies</h6>
      <p>
        Increased access to digital opportunities <br />
        for improved livelihood.
      </p>
    </div>

    <div class="footer_links">
      <div class="links_container">
        <h6>About Us</h6>
        <ul>
          <li><router-link to="/about"> Clients</router-link></li>
          <li><router-link to="/greyhobb"> GreyHobb</router-link></li>
          <li><router-link to="/greytech"> GreyTech</router-link></li>
          <li><router-link to="greycreate"> GreyCreate</router-link></li>
          <li>
            <router-link to="/kukah"> Kukah Prize for Young Innovators </router-link>
          </li>
          <!-- <li><a> Product Managers</a></li> -->
        </ul>
      </div>
      <div class="links_container">
        <h6>Company</h6>
        <ul>
          <li><router-link to="/team"> Team</router-link></li>
          <li><router-link to="/greyacademy"> GreyAcademy</router-link></li>
          <li>
            <router-link
              :to="{
                name: 'training',
              }"
              >AI Training</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'courses',
              }"
              >Training courses</router-link
            >
          </li>
          <li>
            <a target="_blank" href="/gep.pdf"> Gender Equality Plan </a>
          </li>
          <!-- <li><a> </a></li> -->
        </ul>
      </div>
      <div class="links_container">
        <h6>Follow Us</h6>
        <ul>
          <li>
            <div>
              <a href="https://web.facebook.com/greysoftng" target="_blank" class="footer__social">
                <i class="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/greysoft-tech/mycompany/"
                target="_blank"
                class="footer__social"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/greyhobb" target="_blank" class="footer__social">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/greyhobb/" target="_blank" class="footer__social">
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com/@greysofttechnologies"
                target="_blank"
                class="footer__social"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="contact_container">
      <div class="left_side">
        <li class="row items-center">
          <q-icon name="fa-solid fa-envelope" color="white" size="1.8rem" class="q-mr-lg" />
          <a href="mailto:hi@greysoft.ng" target="_blank"><p class="contact">hi@greysoft.ng</p></a>
        </li>
        <li class="row items-center">
          <q-icon name="phone" color="white" size="1.8rem" class="q-mr-lg" />
          <p class="contact">
            <a href="tel:+2347060998702" target="_blank">07060998702</a>,
            <a href="tel:+2347025467470" target="_blank">07025467470</a>
          </p>
        </li>
        <li class="row no-wrap items-center">
          <q-icon name="fa-solid fa-location-dot" color="white" size="1.8rem" class="q-mr-lg" />
          <p class="contact">31, Gwari Avenue Barnawa, Kaduna.</p>
        </li>
      </div>
      <div class="right_side">
        <div class="text-subtitle1 text-bold be_first">Be the first to know</div>
        <q-btn flat class="bg-white">
          <div class="btn_text">JOIN OUR NEWSLETTER</div>
        </q-btn>
        <br />
        <q-btn
          class="q-mt-sm text-white"
          no-caps
          small
          outline
          icon="mail"
          type="a"
          href="https://www.greysoft.ng/webmail/"
          target="_blank"
        >
          <span class="q-pl-sm">Check Mail</span>
        </q-btn>
      </div>
    </div>

    <div class="bottom">
      <p class="bottom_text">Copyright © {{ new Date().getFullYear() }} Greysoft Technologies</p>
      <!-- <div class="row terms">
        <p class="bottom_text">Terms & Condition</p>
        <p class="bottom_text">Privacy Policy</p>
      </div> -->
    </div>

    <div class="bottom_svg">
      <img src="footer_curves.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
p {
  margin: 0;
}
.footer {
  background: linear-gradient(180deg, #ab042c 0%, #550619 100%);
  color: white;
  padding: 2% 10%;
  position: relative;
  font-family: 'Poppins';
}
.bottom_svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.bottom_svg img {
  width: 100%;
}
.footer .top {
  width: 40%;
  margin-bottom: 3%;
}
.top h6 {
  margin: 3% 0;
  font-size: 2rem;
  font-weight: 900;
}
.top p {
  font-size: 1rem;
}

.mail {
  padding: 0.75rem;
  border: 1px solid white;
  display: inline-block;
  position: relative;
  z-index: 2;
}
.footer_links {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
}
.links_container h6 {
  margin: 2% 0;
  border-bottom: 1px solid white;
  font-size: 1.5rem;
  padding-bottom: 3.5%;
}
.links_container ul {
  margin: 5% 0 0;
  list-style: none;
  padding: 0;
}
.links_container li {
  margin: 1% 0;
  font-size: 1.25rem;
  font-weight: 400;
}
.links_container li a i {
  margin: 1% 0;
  font-size: 1.85rem;
  font-weight: 400;
}
.btn_text {
  letter-spacing: 0.305em;
  line-height: 20px;
  font-weight: 400;
  font-size: 0.5rem;
  background: linear-gradient(180deg, #8d354a 21.35%, rgba(171, 4, 44, 0.78) 83.85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.contact_container {
  margin: 2% 0 1.5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.contact_container li {
  margin: 6% 0;
}
.contact,
.bottom_text {
  font-size: 1.15rem;
}
.footer .bottom {
  display: flex;
  justify-content: space-between;
  margin: 3% 0 3%;
}
.terms {
  gap: 40px;
}

.right_side {
  position: relative;
  z-index: 5;
}
@media screen and (max-width: 1150px) {
  .footer .top {
    width: 60%;
  }
  .top h6,
  .links_container h6 {
    font-size: 1.5rem;
  }
  .top p,
  .links_container li {
    font-size: 1rem;
  }
  .contact,
  .bottom_text {
    font-size: 0.85rem;
  }
}
@media screen and (max-width: 1100px) {
  .footer {
    padding: 2% 6%;
  }
}
@media screen and (max-width: 960px) {
  .top h6,
  .links_container h6 {
    font-size: 1.1rem;
  }
  .top p,
  .links_container li {
    font-size: 1.05rem;
  }
  .contact,
  .bottom_text {
    font-size: 1rem;
  }
  .btn_text {
    letter-spacing: 0.15em;
  }
}
@media screen and (max-width: 860px) {
  .top h6,
  .links_container h6 {
    font-size: 1.15rem;
  }
  .links_container h6 {
    padding-bottom: 2.5%;
  }
  .top p,
  .links_container li {
    font-size: 0.95rem;
  }
  .contact,
  .bottom_text {
    font-size: 0.5rem;
  }
}
@media screen and (max-width: 770px) {
  .footer_links {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .contact_container {
    margin: 7% 0 3%;
    display: grid;
    gap: 25px;
  }
  .links_container h6 {
    border: none;
    position: relative;
  }
  .links_container h6::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background: white;
    width: 60%;
  }
  .be_first {
    margin-bottom: 1%;
  }
  .terms {
    gap: 20px;
  }
  .bottom_text {
    font-size: 0.85rem;
  }
}
@media screen and (max-width: 620px) {
  .footer .bottom {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin: 7% 0 6%;
    gap: 10px;
  }
}
@media screen and (max-width: 560px) {
  .links_container h6::after {
    width: 100%;
  }
  .footer .top {
    width: 100%;
  }
  .terms {
    gap: 25px;
  }
  .right_side {
    margin: 2% 0 4%;
  }
}
</style>
