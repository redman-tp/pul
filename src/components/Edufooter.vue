<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-brand">
          <a href="#" class="logo">
            <img src="/pe/logo.svg" alt="Eduland logo" />
          </a>

          <p class="footer-text">
            Professionally scale cross functional human capital and extensive
            technology.
          </p>

          <ul class="social-list">
            <li>
              <a href="#" class="social-link">
                <i class="fa-brands fa-google"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-link-box">
          <ul class="footer-list">
            <li>
              <p class="footer-link-title">Services</p>
            </li>

            <li>
              <a href="#" class="footer-link">Design</a>
            </li>

            <li>
              <a href="#" class="footer-link">Development</a>
            </li>

            <li>
              <a href="#" class="footer-link">Marketing</a>
            </li>

            <li>
              <a href="#" class="footer-link">Content Writing</a>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-link-title">Company</p>
            </li>

            <li>
              <a href="#" class="footer-link">About</a>
            </li>

            <li>
              <a href="#" class="footer-link">Terms</a>
            </li>

            <li>
              <a href="#" class="footer-link">Privacy Policy</a>
            </li>

            <li>
              <a href="#" class="footer-link">Careers</a>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-link-title">Job Info</p>
            </li>

            <li>
              <a href="#" class="footer-link">Select</a>
            </li>

            <li>
              <a href="#" class="footer-link">Services</a>
            </li>

            <li>
              <a href="#" class="footer-link">Payment</a>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-link-title">Contact</p>
            </li>

            <li class="contact-item">
              <span>Call : </span>

              <a href="tel:5463876387" class="contact-link">546 3876 387</a>
            </li>

            <li class="contact-item">
              <span>Email : </span>

              <a href="mailto:example@gmail.com" class="contact-link"
                >example@gmail.com</a
              >
            </li>

            <li class="contact-item">
              <span>Address : </span>

              <a href="#" class="contact-link">
                <address>San Francisco, USA</address>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          &copy; 2022 <a href="">codewithsadee</a>. All right reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background: var(--rich-black-fogra-29);
}

.footer-top {
  padding-block: var(--section-padding);
}

.footer-brand {
  margin-bottom: 50px;
}

.footer-brand .logo img {
  width: 160px;
  margin-bottom: 20px;
}

.footer-text {
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  line-height: 1.8;
  margin-bottom: 30px;
}

.footer .social-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}

.footer .social-link {
  background: var(--raisin-black);
  color: var(--silver-chalice);
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  font-size: 18px;
  border-radius: 50%;
  border: 1px solid var(--raisin-black);
  transition: var(--transition);
}

.footer .social-link:is(:hover, :focus) {
  background: var(--rich-black-fogra-29);
  color: var(--cultured);
}

.footer-link-box {
  display: grid;
  gap: 30px;
}

.footer-list {
  max-width: 230px;
}

.footer-list li:first-child {
  margin-bottom: 10px;
}

.footer-link-title {
  color: var(--cultured);
  font-family: var(--ff-poppins);
  font-size: var(--fs-4);
}

.footer-link {
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  padding-block: 10px;
  transition: var(--transition);
}

.footer-link:is(:hover, :focus) {
  color: var(--cultured);
  transform: translateX(3px);
}

.footer .contact-item {
  padding-block: 10px;
}

.footer .contact-item span {
  display: inline-block;
  color: var(--cultured);
  font-family: var(--ff-rubik);
  font-weight: var(--fw-500);
}

.footer .contact-link {
  display: inline-block;
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  font-weight: var(--fw-500);
}

.footer .contact-link address {
  font-style: normal;
}

.footer-bottom {
  padding-block: 20px;
  border-top: 1px solid var(--onyx);
}

.copyright {
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  line-height: 1.7;
  text-align: center;
}

.copyright a {
  display: inline-block;
  color: inherit;
  transition: var(--transition);
}

.copyright a:is(:hover, :focus) {
  color: var(--cultured);
}
@media (min-width: 768px) {
  .footer-text {
    max-width: 400px;
  }
}
@media (min-width: 550px) {
  .footer-link-box {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .footer-link-box {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
