<template>
  <q-page class="">
    <main class="main">
      <section class="home" id="home">
        <img
          src="/pe/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix.jpg"
          alt=""
          class="home__img"
        />
        <div class="home__container boot container grid">
          <div class="home__data">
            <Splide
              :options="{ rewind: true, arrows: false, autoplay: true }"
              aria-label="Vue Splide Example"
            >
              <SplideSlide>
                <div class="dett">
                  <img src="/pe/kukahflyer.jpeg" alt="" />

                  <strong class="text-white"
                    >Kukah Prize For Young Innovators</strong
                  >
                  <br />

                  <q-btn to="/kukah" class="buttonn center"
                    >Click here to submit entry
                    <i class="fas fa-arrow-right"></i
                  ></q-btn>
                  <br />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="dett">
                  <img src="/pe/kidssummer.jpg" alt="" />

                  <strong class="text-white">Kids Summer Bootcamp</strong>
                  <br />

                  <a
                    target="_blank"
                    href="https://paystack.com/pay/greysoftkcc"
                    class="buttonn center"
                    >Click here to register now
                    <i class="fas fa-arrow-right"></i
                  ></a>
                  <br />
                </div>
              </SplideSlide>
            </Splide>
          </div>

          <h1 class="home__data-title">
            Helping people <br />

            leverage technology <br />
            for improved livelihood.
          </h1>
        </div>
      </section>

      <section class="about section" id="about">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">About Us</h2>
            <h4>Community, Technology, Creativity, Finance & more...</h4>
            <p class="about__description">
              We are a team of innovators who have gained a reputation in
              delivering quality services by delivering time critical solutions
              to solve urban and rural problems, while continuously evolving to
              match the emerging digital and creative trend. We have a dedicated
              team of high-quality professionals who constantly work with
              diverse industrial players in varied sectors like cyber security,
              blockchain technology, health, agriculture, biometrics, education,
              banking etc.
            </p>
            <q-btn to="/about" class="button">More About Us</q-btn>
          </div>

          <div class="experience__img grid">
            <div class="over">
              <div class="experience__overlay rel">
                <img
                  src="pe/unsplash_FPQlXQtjkqU.png"
                  alt=""
                  class="experience__img-one"
                />
              </div>
              <div class="experience__overlay">
                <img
                  src="pe/unsplash_9opiHRPIvR0.png"
                  alt=""
                  class="experience__img-one"
                />
              </div>
              <div class="experience__overlay">
                <img
                  src="pe/unsplash_MxVkWPiJALs.png"
                  alt=""
                  class="experience__img-two"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="values">
        <div class="values-wrap container">
          <div class="card">
            <i class="fas fa-eye fa-3x"></i>

            <h2>Vision</h2>
            <p>
              Increased access to digital opportunities for improved livelihood.
            </p>
          </div>
          <div class="card">
            <i class="fas fa-bullseye fa-3x"></i>

            <h2>Mission</h2>
            <p>Helping people leverage technology for improved livelihood.</p>
          </div>

          <div class="card">
            <i class="fas fa-balance-scale fa-3x"></i>

            <h2>Values</h2>
            <p>People - Productivity - Teamwork - Innovation- Quality</p>
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <div class="services-wrap container">
          <h2>Our Services</h2>
          <p class="lead">
            Our services cover a wide range of innovative initiatives designed
            to help people experience technology differently and make the most
            of it with a view to identifying opportunities, solving problems and
            creating value.
          </p>

          <div class="services-cards">
            <div class="card">
              <i class="fas fa-users fa-4x"></i>

              <h4>GreyHobb</h4>
              <p>
                Our coworking spaces let you choose to work with others in an
                open-plan area, or a shared office.
              </p>
              <div class="learn"><a href="greyhobb.html">Learn More </a></div>
            </div>

            <div class="card">
              <i class="fas fa-laptop-code fa-4x"></i>

              <h4>GreyTech</h4>
              <p>
                We are building a community of tech enthusiasts who practically
                see a digital solution to every problem they come across…
              </p>
              <div class="learn"><a href="">Learn More </a></div>
            </div>

            <div class="card">
              <i class="fas fa-palette fa-4x"></i>

              <h4>GreyCreate</h4>
              <p>
                At our creative space, we have a common saying – “Let your
                creative juice flow”. This is because we believe that everything
                is possible.
              </p>
              <div class="learn"><a href="">Learn More </a></div>

              <div class="bubbles">
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
              </div>
            </div>

            <div class="card">
              <i class="fab fa-bitcoin fa-4x"></i>

              <h4>GreyFund</h4>
              <p>
                We help our friends make money trading! If you are a part of our
                ecosystem, that means you share our values and enthusiasm…
              </p>
              <div class="learn"><a href="">Learn More </a></div>
            </div>
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <div class="services-wrap container">
          <h2>Offerings</h2>
          <p class="lead">
            “To help people leverage technology for improved livelihood”.
          </p>

          <div class="offerings">
            <div class="left">
              <ul>
                <li><i class="ri-briefcase-line"></i> Job Opportunities</li>
                <!-- <li><img src="/pe/Vector (1).png"alt=""> Job Opportunities</li> -->
                <li>
                  <i class="ri-line-chart-line"></i> Investment Opportunities
                </li>
                <li>
                  <i class="ri-home-wifi-fill"></i> Incubation and Acceleration
                  Programs
                </li>
                <li><i class="ri-building-fill"></i> Workspaces</li>
                <li><i class="ri-group-fill"></i> Access to Team</li>
              </ul>
            </div>
            <div class="middle">
              <ul>
                <li><i class="ri-folder-lock-fill"></i> Security</li>
                <li><i class="ri-router-line"></i> 24hr Internet Services</li>
                <li><i class="ri-flashlight-fill"></i> 24hr Electricity</li>
                <li>
                  <i class="ri-user-voice-fill"></i> Offline and Online
                  Conferencing
                </li>

                <li><i class="ri-ancient-pavilion-fill"></i> Training Rooms</li>
              </ul>
            </div>
            <div class="right">
              <ul>
                <li><i class="ri-user-2-fill"></i> Mentoring</li>

                <li><i class="ri-door-open-fill"></i> Creative Spaces</li>
                <li>
                  <i class="ri-font-size-2"></i> Creative Content Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <div class="activities__wrap container">
          <h2>Our Activities</h2>

          <p class="lead">
            We want young people to know that there are career opportunities
            here in Africa. They don’t have to dream of living overseas. They
            can work the jobs from here; this is why we have put in the right
            building blocks, which now generates a daily collision of ideas on
            repeat. At Greysoft, We are giving people the unfair advantage.
            There’s nothing too big that you can’t dream here, and this is so
            because we have not only the skill and experience, we have also
            formed the right partnerships in the public and private sectors,
            locally and internationally to drive the growth and impact we seek.
          </p>

          <div class="activities__wraps">
            <Splide :options="options" aria-label="Vue Splide Example">
              <SplideSlide v-for="(activity, index) in activities" :key="index">
                <div class="activities__card">
                  <i
                    v-if="activity.imgs"
                    class="ri-arrow-down-fill"
                    @click="openModal(activity)"
                  ></i>
                  <div class="activities__img">
                    <img :src="activity.img" alt="" />
                  </div>
                  <div class="det">
                    <h4>{{ activity.title }}</h4>
                    <p>
                      {{ activity.desc }}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>

          <h2>We are Community Driven</h2>

          <p class="lead">
            Processes and Products without People is utterly useless. This is
            why People are right there at the center of everything we do at
            Greysoft. In fact, on top of the list of our corporate core values
            is “People”. We are driven by the communities we serve. For
            starters, we take our Corporate Social Responsibilities (CSR)
            seriously; our innovation space is eco-friendly and super welcoming
            enough to spur productivity and inspiration. After all, our mission
            is to help people leverage technology for improved livelihood.
          </p>

          <Splide :options="options" aria-label="Vue Splide Example">
            <SplideSlide>
              <div class="activities__card">
                <div class="activities__img">
                  <iframe
                    width="100%"
                    height="430"
                    src="https://www.youtube.com/embed/TEJgnYjRkdY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="activities__card">
                <div class="activities__img">
                  <iframe
                    width="100%"
                    height="430"
                    src="https://www.youtube.com/embed/vL96qTou4_w"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="activities__card">
                <div class="activities__img">
                  <iframe
                    width="100%"
                    height="430"
                    src="https://www.youtube.com/embed/kW_HGUgtKc8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="activities__card">
                <div class="activities__img">
                  <iframe
                    width="100%"
                    height="430"
                    src="https://www.youtube.com/embed/khXpa4WaeAA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>

      <section class="section-team" id="team">
        <h2>Our Team</h2>
        <h5>
          We have a prolific team of experienced innovators who have
          consistently turned challenges into opportunities creating
          market-ready solutions that add value to the lives of the communities
          we serve.
        </h5>
        <div class="teams container">
          <div class="box">
            <div class="inner">
              <div class="front">
                <img src="/pe/Manzo.jpg" alt="" />
              </div>

              <div class="back">
                <div class="img">
                  <img src="/pe/Manzo.jpg" alt="" />
                </div>
                <h4>Dr. Manzo Maigari</h4>
                <p>Chairman</p>

                <div class="media">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="inner">
              <div class="front">
                <img src="/pe/Ralphhh.jpg" alt="" />
              </div>

              <div class="back">
                <div class="img">
                  <img src="/pe/Ralphhh.jpg" alt="" />
                </div>
                <h4>Isah Raphael</h4>
                <p>MD / CEO</p>

                <div class="media">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="inner">
              <div class="front">
                <img src="/pe/michealpicture.jpg" alt="" />
              </div>

              <div class="back">
                <div class="img">
                  <img src="/pe/michealpicture.jpg" alt="" />
                </div>
                <h4>Ogungbe Michael</h4>
                <p>COO</p>
                <div class="media">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="box">
            <div class="inner">
              <div class="front">
                <img src="/pe/victor pete.jpg" alt="" />
              </div>

              <div class="back">
                <div class="img">
                  <img src="/pe/victor pete.jpg" alt="" />
                </div>
                <h4>Victor Peter</h4>
                <p>CTO / MOC</p>
                <div class="media">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="inner">
              <div class="front">
                <img src="/pe/bilal.jpeg" alt="" />
              </div>

              <div class="back">
                <div class="img">
                  <img src="/pe/bilal.jpeg" alt="" />
                </div>
                <h4>Bilal Salau</h4>
                <p>Creative Director</p>
                <div class="media">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> -->
        </div>

        <div class="love-bubbles">
          <div class="love-bubble"></div>
          <div class="love-bubble"></div>
          <div class="love-bubble"></div>
          <div class="love-bubble"></div>
          <div class="love-bubble"></div>
          <div class="love-bubble"></div>
          <div class="love-bubble"></div>
        </div>
      </section>

      <section class="testimonial">
        <h1>Join Us</h1>
        <div class="testimonial-wrap container">
          <div class="testimonial-img">
            <img style="object-fit: contain" src="/pe/testi.png" alt="" />
          </div>

          <div class="testimonial-detail">
            <h1>"</h1>
            <div class="testimonials">
              <div class="p-testimonial active">
                <p>
                  GreyHobb has made me a better person and has given me so much
                  access to take on greatness.
                </p>
                <div class="img">
                  <img src="/pe/unsplash_FPQlXQtjkqU.png" alt="" />
                  <div class="img-det">
                    <h6>Gwen Stacy</h6>
                    <small>Software Developer</small>
                  </div>
                </div>
              </div>
              <div class="p-testimonial">
                <p>
                  GreyHobb is an amazing place, it can be likened even to a
                  universe that has a midas touch, turning things into gold and
                  bringing the best out of everything.
                </p>
                <div class="img">
                  <img src="/pe/unsplash_M_TOzf3lUcA.png" alt="" />
                  <div class="img-det">
                    <h6>Emmanuel</h6>
                    <small>Software Developer</small>
                  </div>
                </div>
              </div>
              <div class="p-testimonial">
                <p>
                  GreyHobb has provided me with a space to grow and also have a
                  glimpse of what greatness looks like. I am eternally grateful.
                </p>
                <div class="img">
                  <img src="/pe/unsplash_MxVkWPiJALs.png" alt="" />
                  <div class="img-det">
                    <h6>Emmanuel</h6>
                    <small>Web Developer</small>
                  </div>
                </div>
              </div>
            </div>
            <q-btn to="/greyhobb"
              >Join us <i class="fas fa-arrow-right"></i
            ></q-btn>

            <div class="buttons">
              <div class="left prev-btn">
                <i class="fas fa-arrow-left"></i>
              </div>

              <div class="right next-btn">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about section" id="about">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">Become a member</h2>
            <p class="about__description">
              Becoming a member of this formidable community comes with a
              truckload of advantages. Asides 24hr access to internet and
              electricity, members have access to a community of innovators
              where the solution to any challenge is only "an ask" away. An
              ecosystem of creative minds - imagine a situation where your
              payment gateway powers my app, amazing right?
            </p>
            <ul>
              <li>+ Membership Card</li>
              <li>+ Security</li>
              <li>+ Growing Global Community</li>
              <li>+ Greyhobb office address</li>
            </ul>
            <div class="disclaimer">
              <h5>Disclaimer</h5>
              <p>
                Do not use our office address on CAC incorporation documents.
              </p>
            </div>
            <q-btn to="/greyhobb" class="button">Learn More</q-btn>
          </div>
          <div class="about__img" data-aos="zoom-in">
            <img src="/pe/9970.jpg" alt="" />
          </div>
        </div>
      </section>

      <section class="subscribe section" id="newsletter">
        <div class="subscribe__bg">
          <div class="subscribe__container container">
            <h2 class="section__title subscribe__title">
              Subscribe to our Newsletter
            </h2>

            <p class="subscribe__description">
              Subscribe to our newsletter for up to date information on our
              services and offerings
            </p>
            <form action="" class="subscribe__form">
              <input
                type="text"
                placeholder="Enter email"
                class="subscribe__input"
              />

              <button class="button">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <section class="about section" id="tour">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">Book a Tour</h2>
            <p class="about__description">
              Whether in person or virtually, we are happy to show you around
              our space. You are always welcome to explore our exquisite world
              of emerging technology.
            </p>
            <div class="btns">
              <a
                href="https://kuula.co/share/collection/7vGlZ?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=-1"
                class="button book-date"
                >VR Tour<i class="fas fa-arrow-right"></i
              ></a>
              <a
                target="_blank"
                href="https://kuula.co/share/collection/7vbCd?logo=1&info=0&fs=1&vr=1&initload=0&thumbs=-1&alpha=0.90"
                class="button book-vr"
                >VR Tour MSquare</a
              >
            </div>
          </div>
          <div class="about__img" data-aos="zoom-in">
            <div class="experience__img grid">
              <div class="over">
                <div class="experience__overlay rel">
                  <img
                    src="pe/nastuh-abootalebi-ZtC4_rPCRXA-unsplash.jpg"
                    alt=""
                    class="experience__img-one"
                  />
                </div>

                <div class="experience__overlay">
                  <img
                    src="pe/unsplash_3kB63Vz7xVg.png"
                    alt=""
                    class="experience__img-two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog">
        <div class="container">
          <h2>Latest Blogs</h2>
          <div class="blogs">
            <div class="blog-item">
              <img src="pe/unsplash_ourQHRTE2IM.png" alt="" />
              <h4>What is Web 3.0 and will it change our lives?</h4>
              <p>
                The World Wide Web is changing, again. But it might not be
                immediately apparent, given that Tim Berners-Lee’s creation is
                now an intrinsic part of everyday life.
              </p>
              <a href="" class="btn">
                Read more <i class="fas fa-arrow-right"></i
              ></a>
            </div>
            <div class="blog-item">
              <img
                src="pe/why-acting-like-a-five-year-old-could-make-you-wiser-darling-800x1200.jpg"
                alt=""
              />
              <h4>Why Thinking Like a 5 Year-Old Could Make You Wiser</h4>
              <p>
                For just a minute, try to remember what it felt like to be five
                years old. The half-second lag at the top of the swings, the
                smell of fresh cut summer grass, .
              </p>
              <a href="" class="btn">
                Read more <i class="fas fa-arrow-right"></i
              ></a>
            </div>
            <div class="blog-item">
              <img src="/pe/unsplash_9opiHRPIvR0.png" alt="" />
              <h4>Mexico's Third Richest Man Advises Buy Bitcoin Now</h4>
              <p>
                Mexican billionaire Ricardo Salinas Pliego commented on the U.S.
                economy and bitcoin Wednesday. He is the founder and chairman of
                Grupo Salinas,
              </p>
              <a href=""> Read more <i class="fas fa-arrow-right"></i> </a>
            </div>
          </div>
        </div>
      </section>

      <q-dialog v-model="openModals" class="activityModal">
        <q-card
          style="width: 100%; height: 100%"
          class="modal containerr"
          id="myModal"
        >
          <q-carousel
            autoplay
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" :img-src="modalImgs[0]" />
            <q-carousel-slide :name="2" :img-src="modalImgs[1]" />
            <q-carousel-slide :name="3" :img-src="modalImgs[2]" />
            <q-carousel-slide :name="4" :img-src="modalImgs[3]" />
          </q-carousel>
        </q-card>
      </q-dialog>

      <section class="section-contact" id="contact">
        <div class="contact-wrap container">
          <h2>Meet Us</h2>

          <div class="inputs">
            <div class="two-inputs">
              <input type="text" name="" id="" placeholder="Full Name" />
              <input type="email" name="" id="" placeholder="Email" />
            </div>
            <div class="single-input">
              <input type="text" placeholder="Subject" />
            </div>
            <textarea> Your message</textarea>
          </div>

          <button type="submit">Send Message</button>
        </div>
      </section>

      <!-- === SPONSORS  === -->
      <section class="sponsor section">
        <div class="sponsor__container container grid">
          <div class="sponsor__content">
            <img src="pe/Group 34636.png" alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src="pe/google logo.png" alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src="pe/Meta.png" alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img
              src="pe/NITDA-logo-newest-1-removebg-preview 1.png"
              alt=""
              class="sponsor__img"
            />
          </div>
          <div class="sponsor__content">
            <img src="pe/pngwing 1.png" alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src="pe/Group 34637.png" alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src="pe/ibm.png" alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src="pe/Frame 38251.png" alt="" class="sponsor__img" />
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </q-page>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref } from "vue";
import { defineComponent } from "vue";
import Footer from "../components/FooterMain.vue";
import "@splidejs/vue-splide/css";
export default defineComponent({
  name: "IndexPage",
  components: {
    Footer,
    Splide,
    SplideSlide,
  },
  setup() {
    return {
      slide: ref(1),
    };
  },
  data() {
    return {
      openModals: false,
      activities: [
        {
          title: "Kaduna State at 55",
          img: "/pe/kad55.jpeg",
          desc: `At a plenary session hosted by that State Government,Greysoft's CEO amongst top tech companies graced a
                      fireside chat, discussing ICT for MSMEs in Kaduna State.
                      Kaduna`,
        },
        {
          title: "Kaduna Business Community and Gov. Nasir El Rufai",
          img: "/pe/bosswith4.jpeg",
          desc: `Mallam Nasir El-Rufai, Kaduna State Governor meets with
                      the business community of Kaduna State to prob on
                      challenges in the business space and reassures business
                      owners of stability and security as well as ease of doing
                      business.`,
          imgs: [
            "pe/bosswith1.jpeg",
            "pe/bosswith2.jpeg",
            "pe/bosswith4.jpeg",
            "pe/bosswith3.jpeg",
          ],
        },
        {
          title: "Remote Jobs",
          img: "/pe/Certiport.jpg",
          desc: `We are not only creating freelance opportunities for the
                      teeming youthful population of Africa, we are also
                      creating opportunities for tech and creative experts to
                      become fully employed with foreign job through our robust
                      partnerships with global employers.`,
        },
        {
          title: "Bishop MH Kukah at Greysoft on Digital Literacy",
          img: "/pe/bishop4.jpg",
          desc: `Bishop Matthew Hassan Kukah during the GreyHobb launch in
                      January emphasizing the role of Digital Literacy in the
                      Nigerian society as well as that of government policies.`,
          imgs: [
            "/pe/bishop1.jpg",
            "/pe/bishop4.jpg",
            "/pe/bishop2.jpg",
            "/pe/bishop3.jpg",
            "/pe/bishop5.jpg",
            "/pe/bishop9.jpg",
          ],
        },
        {
          title: "The Kukah Prize for Young Innovators",
          img: "/pe/drmm1.jpg",
          desc: `Greysoft Technologies and The Kukah Center have
                      established The Kukah Young Innovators Prize in a state
                      conference in Kaduna. This prize is aimed at highlighting,
                      rewarding and surpporting young and innovative Africans
                      under 30years of age.`,
          imgs: [],
        },
        {
          title: "We are Community Driven!",
          img: "/pe/greyflix.jpeg",
          desc: `People are right there on top of our Core Values at
                      Greysoft. Our cutting edge solutions are developed with
                      our communities in mind. Hence we have developed a
                      strategy that includes them right at the beginning, middle
                      and end of all our projects.`,
        },
        {
          title: "UK Aid funded Apprenticeship and Traineeship S4P Program",
          img: "/pe/greysoftboss.jpeg",
          desc: `Greysoft, NABTEB certified and ITF Compliant doubles as
                      both Training Partners and Employers in the UK Aid funded
                      Skills for Prosperity Apprenticeship and Traineeship
                      System to train and provide jobs for 100 candidates in the
                      technology and creative industries.`,
        },
        {
          title: "KADIPA meets GreyHobb",
          img: "/pe/kadipa1.jpeg",
          desc: `The Executive Secretary of the Kaduna Investment and
                      Promotion Agency (KADIPA), Khalil Nur Khalil, visited with
                      GreyHobb to support and encourage the myriads of
                      innovations churning out of the center.`,
          imgs: [
            "/pe/kadipa1.jpeg",
            "/pe/kadipa2.jpeg",
            "/pe/kadipa3.jpeg",
            "pe/kadipa4.jpeg",
            "/pe/kadipa5.jpeg",
          ],
        },
        {
          title: "Certiport Authorized Testing Center (CATC)",
          img: "/pe/IC3.jpg",
          desc: `Greysoft, the first a Certiport Authorized Testing Center
                      (CATC) in Northern Nigeria partners with NBTE Center of
                      Excellence to establish baseline tests for candidates of
                      Kaduna Polytechnic on IC3 courses.`,
        },
        {
          title: "Nigeria/Kaduna Startup Bill",
          img: "/pe/bill.jpeg",
          desc: `CEO, CoLab featured in the conversation at GreyHobb on the
                      Nigeria Startup Bill and the domestication of the same to
                      produce the Kaduna Startup Bill. We are happy to co-create
                      the Kaduna Startup Bill together with other stakeholders
                      of the innovation space.`,
        },
        {
          title: "NFT Bootcamp",
          img: "/pe/nft.jpeg",
          desc: `Our interest in emerging technologies drives and
                      continuously fuel our enthusiasm to regularly educate our
                      community on evolving trends and how they can make the
                      most of it.`,
          imgs: [
            "pe/nft10.jpeg",
            "pe/nft6.jpeg",
            "pe/nft12.jpeg",
            "pe/nft2.jpeg",
            "pe/nft5.jpeg",
            "pe/nft8.jpeg",
          ],
        },
        {
          title: "Fullstack Bootcamp",
          img: "/pe/full.jpeg",
          desc: `GreyHobb regularly hosts sponsored and paid bootcamps for
                      the benefits of tech enthusiasts. More and more Northern
                      Nigerian youth are embracing the digital ecosystem to
                      learn coding and find a new path.`,
          imgs: [],
        },
        {
          title: "Bootcamp Winners – N500,000",
          img: "/pe/bootcamp.jpg",
          desc: `Winners of the last Bootcamp, themed – “Making Kaduna
                      State Safe Again” banked N500,000 and an opportunity to
                      fully develop MVP for state use. It’s amazing how great
                      things can come from so little things.`,
        },
        {
          title: "Greysoft Open Day",
          img: "/pe/open1.jpeg",
          desc: `Everything we do at Greysoft is community driven! This is
                      why we spare every last Tuesday in a month to meet with
                      our community and relate with them on our various projects
                      and how they can take due advantage.`,
        },
        {
          title: "Kids Code Class",
          img: "/pe/kids4.jpeg",
          desc: ` We catch them young! From the age of 4, we are already
                      training our young ones on how to identify patterns and
                      solve problems digitally. We have different classes for
                      various age brackets.`,
          imgs: ["pe/kids4.jpeg", "pe/kids3.jpeg", "pe/kidsboot.jpeg"],
        },
        {
          title: "Free/Paid Acting Class",
          img: "/pe/script.jpeg",
          desc: `Greysoft GreyCreate routinely holds free/paid acting
                      classes for interested folks who wish to pick a career in
                      acting. The aim is to boost the northern creative industry
                      and help tell authentic African story.`,
        },
        {
          title: "Script Writing Conference",
          img: "/pe/scripbill.jpeg",
          desc: `GreyCreate hosts community to a script writing conference
                      in preparation for the Season Episodes of the Hobb Series
                      – Co-working Spaces which highlights happenings around the
                      tech and creative spaces.`,
        },
        {
          title: "GreyHobb Game Day",
          img: "/pe/game2.jpeg",
          desc: `At Greysoft, We work and play! This is us at the last
                  Friday of every month trying to catch our breath, laugh
                  hard and ease the never ending stress of work. Everyone
                  deserves a shot at happiness.`,
        },
      ],
      modalImgs: [],
      options: {
        rewind: true,
        autoplay: true,
        arrows: false,
        perPage: 3,
        breakpoints: {
          1200: {
            perPage: 3,
          },
          1135: {
            perPage: 2,
          },
          800: {
            perPage: 1,
          },
        },
      },
    };
  },
  methods: {
    openModal(activity) {
      console.log(activity);
      this.modalImgs = activity.imgs;
      this.openModals = true;
    },
  },
});
</script>

.
<style scoped>
.activities__card h4 {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.00735em;
}
</style>
