<template>
  <footer class="footer-section">
    <div class="tech-background">
      <div class="tech-element tech-circle"></div>
      <div class="tech-element tech-dots"></div>
      <div class="tech-element tech-wave"></div>
      <div class="tech-element tech-grid"></div>
      <div class="tech-element tech-circuit"></div>
    </div>

    <div class="footer-container">
      <!-- Top Section with Logo and Mission -->
      <div class="footer-top">
        <div class="brand-section">
          <h2 class="brand-name">Greysoft Technologies</h2>
          <p class="brand-tagline">Helping people leverage technology for improved livelihood.</p>

          <div class="social-links">
            <a
              href="https://web.facebook.com/greysoftng"
              target="_blank"
              class="social-icon"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/greysoft-tech/mycompany/"
              target="_blank"
              class="social-icon"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com/greyhobb"
              target="_blank"
              class="social-icon"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/greyhobb/"
              target="_blank"
              class="social-icon"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com/@greysofttechnologies"
              target="_blank"
              class="social-icon"
              aria-label="YouTube"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div class="newsletter-section">
          <h3 class="section-title">Stay Connected</h3>
          <p class="section-subtitle">Join our newsletter for updates and insights</p>

          <div class="newsletter-form">
            <input type="email" placeholder="Enter your email" class="newsletter-input" />
            <button class="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>

      <!-- Middle Section with Links -->
      <div class="footer-middle">
        <div class="footer-nav">
          <!-- About Us Column -->
          <div class="footer-column">
            <h3 class="category-title">About Us</h3>
            <ul class="nav-links">
              <!-- <li>
                <i class="fas fa-chevron-right nav-icon"></i>
                <router-link to="/team">Team</router-link>
              </li> -->
              <li>
                <i class="fas fa-chevron-right nav-icon"></i>
                <router-link to="/greytransform">GreyTransform</router-link>
              </li>
              <li>
                <i class="fas fa-chevron-right nav-icon"></i>
                <router-link to="/greyhobb">GreyHobb</router-link>
              </li>
              <li>
                <i class="fas fa-chevron-right nav-icon"></i>
                <router-link to="/greytech">GreyTech</router-link>
              </li>
              <li>
                <i class="fas fa-chevron-right nav-icon"></i>
                <router-link to="/greyacademy">GreyAcademy</router-link>
              </li>
              <li>
                <i class="fas fa-chevron-right nav-icon"></i>
                <router-link to="/greyacademy">VR Tour</router-link>
              </li>
            </ul>
          </div>

          <!-- Programs Column -->
          <div class="footer-column">
            <h3 class="category-title">Quick Links</h3>
            <ul class="nav-links">
              <li>
                <i class="fas fa-chevron-right nav-icon"></i>
                <a href="https://agritech.greysoft.ng/">Greysoft Agritech</a>
              </li>
              <li>
                <i class="fas fa-chevron-right nav-icon"></i>
                <a href="https://greysoft.ng/greysoftxr">Greysoft Extended Reality</a>
              </li>
              <li>
                <i class="fas fa-chevron-right nav-icon"></i>
                <router-link to="/careers">Careers</router-link>
              </li>
              <li>
                <i class="fas fa-chevron-right nav-icon"></i>
                <a href="#" @click.prevent="showPolicyDialog = true">Policy Contributions</a>
              </li>
              <li>
                <i class="fas fa-chevron-right nav-icon"></i>
                <a target="_blank" href="/gep.pdf">Gender Equality Plan</a>
              </li>
            </ul>
          </div>

          <!-- Contact Us Column -->
          <div class="footer-column">
            <h3 class="category-title">Contact Us</h3>
            <ul class="contact-links">
              <li class="contact-item">
                <i class="fas fa-envelope contact-icon"></i>
                <a href="mailto:hi@greysoft.ng" target="_blank">hi@greysoft.ng</a>
              </li>
              <li class="contact-item">
                <i class="fas fa-phone-alt contact-icon"></i>
                <div class="phone-numbers">
                  <a href="tel:+2348148729708" target="_blank">+234 814 872 9708</a>
                  <a href="tel:+2348035356090" target="_blank">+234 803 535 6090</a>
                </div>
              </li>
              <li class="contact-item">
                <i class="fas fa-map-marker-alt contact-icon"></i>
                <span>31, Gwari Avenue Barnawa, Kaduna, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="webmail-container">
          <q-btn
            class="webmail-btn"
            no-caps
            outline
            icon="mail"
            type="a"
            href="https://www.greysoft.ng/webmail/"
            target="_blank"
          >
            <span>Check Mail</span>
          </q-btn>
        </div>
      </div>

      <!-- Bottom Section with Copyright -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; {{ new Date().getFullYear() }} Greysoft Technologies. All rights reserved.</p>
        </div>
        <div class="footer-legal">
          <a href="#" class="legal-link">Terms & Conditions</a>
          <a href="#" class="legal-link">Privacy Policy</a>
        </div>
      </div>
    </div>
    <PolicyDialog v-model="showPolicyDialog" />
  </footer>
</template>

<script>
import { ref } from 'vue'
import PolicyDialog from '../Dialogs/PolicyDialog.vue'

export default {
  name: 'FooterComponent',
  components: {
    PolicyDialog,
  },
  setup() {
    const showPolicyDialog = ref(false)

    return {
      showPolicyDialog,
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:color';

// Variables
$primary-color: var(--q-primary, #8d354a);
$secondary-color: #f0d043;
$gradient-start: #ab042c;
$gradient-end: #2c0f3a;
$accent-color: #f0d043;
$text-color: #ffffff;
$heading-color: #f8f9fa;
$transition-speed: 0.3s;

// Main Footer Styles
.footer-section {
  position: relative;
  background: linear-gradient(135deg, $gradient-start 0%, $gradient-end 100%);
  color: $text-color;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  padding: 5rem 0 2rem;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
}

// Tech Background Elements
.tech-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.7;
  z-index: 0;
}

.tech-element {
  position: absolute;
  opacity: 0.6;
}

.tech-circle {
  width: 300px;
  height: 300px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  top: -100px;
  right: -100px;

  &::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    top: 50px;
    left: 50px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    top: 100px;
    left: 100px;
  }
}

.tech-dots {
  width: 200px;
  height: 200px;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
  background-size: 15px 15px;
  bottom: 50px;
  left: 50px;
}

.tech-wave {
  width: 400px;
  height: 100px;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 5px,
    rgba(255, 255, 255, 0.15) 5px,
    rgba(255, 255, 255, 0.15) 10px
  );
  transform: rotate(-30deg);
  top: 30%;
  right: 10%;
}

.tech-grid {
  width: 300px;
  height: 300px;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 20px 20px;
  top: 20%;
  left: 5%;
}

.tech-circuit {
  width: 250px;
  height: 250px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  bottom: 10%;
  right: 15%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.25);
  }

  &::before {
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
  }

  &::after {
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
  }
}

// Container
.footer-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  z-index: 1;
}

// Top Section
.footer-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
}

.brand-section {
  max-width: 400px;
}

.brand-name {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem;
  background: linear-gradient(90deg, #ffffff, $accent-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(255, 107, 107, 0.2);
}

.brand-tagline {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e0e0e0;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: $text-color;
  font-size: 1.2rem;
  transition: all $transition-speed ease;

  &:hover {
    background: $accent-color;
    color: $gradient-start;
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(240, 208, 67, 0.3);
  }
}

.newsletter-section {
  max-width: 400px;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: $heading-color;
  letter-spacing: 0.5px;
}

.section-subtitle {
  font-size: 1rem;
  color: #d0d0d0;
  margin-bottom: 1.5rem;
}

.newsletter-form {
  display: flex;
  margin-bottom: 1.5rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 4px 0 0 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  outline: none;
  background: rgba(255, 255, 255, 0.9);
}

.newsletter-button {
  padding: 0.8rem 1.5rem;
  background: $accent-color;
  color: $gradient-start;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: all $transition-speed ease;

  &:hover {
    background: color.scale($accent-color, $lightness: 5%);
    box-shadow: 0 5px 15px rgba(240, 208, 67, 0.3);
  }
}

// Middle Section
.footer-middle {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
}

.footer-column {
  margin-bottom: 0;
}

.category-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 1.5rem;
  position: relative;
  padding-bottom: 0.8rem;
  color: $heading-color;
  letter-spacing: 0.5px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: $accent-color;
    transition: width $transition-speed ease;
  }

  &:hover::after {
    width: 80px;
  }
}

.nav-links,
.contact-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: baseline;
}

.nav-icon {
  font-size: 0.8rem;
  color: $accent-color;
  margin-right: 0.5rem;
  transition: transform $transition-speed ease;
}

.nav-links a {
  color: #d0d0d0;
  text-decoration: none;
  font-size: 1rem;
  transition: all $transition-speed ease;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background: $accent-color;
    transition: width $transition-speed ease;
  }

  &:hover {
    color: white;
    padding-left: 5px;

    &::after {
      width: 100%;
    }
  }
}

.nav-links li:hover .nav-icon {
  transform: translateX(3px);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.2rem;
}

.contact-icon {
  margin-right: 1rem;
  font-size: 1.2rem;
  color: $accent-color;
}

.contact-links a {
  color: #d0d0d0;
  text-decoration: none;
  transition: color $transition-speed ease;

  &:hover {
    color: white;
  }
}

.phone-numbers {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.webmail-container {
  margin-top: 1.5rem;
  align-self: flex-end;
}

.webmail-btn {
  color: #e0e0e0;
  border-color: rgba(255, 255, 255, 0.3);
  transition: all $transition-speed ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: $accent-color;
    color: white;
  }
}

// Bottom Section
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

.copyright p {
  font-size: 0.9rem;
  color: #a0a0a0;
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.legal-link {
  color: #a0a0a0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color $transition-speed ease;

  &:hover {
    color: white;
  }
}

// Responsive Styles
@media (max-width: 1200px) {
  .footer-section {
    padding: 4rem 0 2rem;
  }

  .brand-name {
    font-size: 2.2rem;
  }
}

@media (max-width: 992px) {
  .footer-section {
    padding: 3.5rem 0 2rem;
  }

  .brand-name {
    font-size: 2rem;
  }

  .brand-tagline {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .footer-nav {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 3rem 0 1.5rem;
  }

  .footer-top {
    margin-bottom: 3rem;
  }

  .footer-middle {
    margin-bottom: 3rem;
  }

  .category-title {
    font-size: 1.1rem;
  }

  .footer-nav {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 576px) {
  .footer-section {
    padding: 2.5rem 0 1.5rem;
  }

  .brand-name {
    font-size: 1.8rem;
  }

  .social-icon {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-input {
    border-radius: 4px;
    margin-bottom: 0.8rem;
  }

  .newsletter-button {
    border-radius: 4px;
    width: 100%;
  }
}
</style>
