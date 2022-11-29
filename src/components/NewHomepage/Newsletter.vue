<template>
  <div class="wrapper">
    <div class="hold container">
      <h2 class="who">Newsletter</h2>
      <p class="desc">Stay in the Know</p>

      <div class="grid">
        <div class="left">
          <h4 class="head">
            Join a global team of <br />
            change-makers.
          </h4>
          <p>
            Sign up for our email newsletter and get updated with our special
            Grey offers, tech trends, events, and much more. Get updated on our
            special community activities and stay inspired
          </p>

          <q-btn>
            Subscribe To Our Newsletter
            <i class="fa-duotone fa-arrow-right-long"></i>
          </q-btn>
        </div>

        <div class="right">
          <img src="/images/news.png" alt="" />

          <div class="form">
            <form>
              <h5>Join the community</h5>
              <p>we send out newsletter and updates every week.</p>

              <div class="input_wrap">
                <label for="email"> Email:</label> <br />
                <input type="text" placeholder="Enter your Email here" />
              </div>
              <q-btn class="submit" type="submit"> Yep! am in </q-btn>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  padding: 10rem 0 30rem;
  background: rgba(34, 34, 34, 0.1);
}
.who {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 42px;
  text-transform: capitalize;
  color: #8d354a;
}

p.desc {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  /* font-size: 25px; */
  font-size: 45px;
  line-height: 130%;
  text-align: justify;
  margin: 1rem 0 1rem;
  color: #000000;
}

h6 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  /* font-size: 30px; */
  line-height: 42px;
  text-transform: capitalize;
  color: #facc07;
}

img {
  height: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}

.left {
  background: linear-gradient(285.19deg, #ff0000 -17.8%, #1f31d3 152.9%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}

.left .q-btn {
  padding: 12.6529px 11.7491px;
  background: #ffffff;
  border-radius: 3.61512px;
  margin-top: 1rem;
  text-transform: capitalize;
  text-align: left;
  width: 70%;
}
.left .q-btn i {
  width: 27.11px;
  height: 27.11px;
  background: rgba(141, 52, 90, 0.4);
  border-radius: 903.779px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.7rem;
}

.left h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36.1512px;
  line-height: 1;
  text-transform: capitalize;
  color: #ffffff;
}

.left p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16.268px;
  line-height: 150%;
  color: #ffffff;
  margin: 1.5rem 0;
}
p {
  margin-bottom: 0;
}

.right {
  position: relative;
}

.right h5 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30.0271px;
  /* font-size: 45.0271px; */
  line-height: 1;
  color: #8d354a;
}

.right p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #4d4d4d;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #ffffff;
  border-radius: 9.38065px;
  padding: 5rem 2rem;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  top: 80%;
  padding-bottom: 3rem;
  z-index: 1;
}
form::before {
  content: "";
  position: absolute;
  bottom: -1%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    282.15deg,
    rgba(207, 2, 187, 0.94) 0.4%,
    rgba(211, 172, 31, 0.94) 50.25%,
    rgba(240, 13, 67, 0.94) 100.1%
  );
  filter: blur(24.5px);
  height: 10px;
  z-index: -1;
}
.right label {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #8d354a;
}

.right input {
  border: none;
  background: rgba(224, 224, 224, 0.4);
  border: 2.81419px solid #ffffff;
  border-radius: 4.69032px;
  padding: 1rem;
  width: 100%;
}
.submit {
  padding: 10px 32px;
  background: linear-gradient(
    285.19deg,
    rgba(207, 2, 187, 0.94) -17.8%,
    rgba(211, 172, 31, 0.94) 67.55%,
    rgba(240, 13, 67, 0.94) 152.9%
  );
  margin-top: 1rem;
  color: #fff;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .left .q-btn {
    width: 70%;
  }
  .wrapper {
    padding: 3rem 0 30rem;
    background: rgba(34, 34, 34, 0.1);
  }
}
@media (max-width: 500px) {
  .left .q-btn {
    width: 100%;
  }

  form {
    width: 90%;
    padding: 3rem 1rem 2rem;
  }

  .left {
    padding: 2rem 1rem;
  }

  .left h4 {
    font-size: 26px;
  }

  .left p {
    font-size: 14px;
  }
}
</style>
