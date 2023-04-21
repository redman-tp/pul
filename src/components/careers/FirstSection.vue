<template>
  <div class="firstSection q-pt-xl animate__animated animate__fadeInLeft">
    <div class="container">
      <div class="skill">
        <img class="img" src="/career/Cursor.svg" />
        <p>Product Design</p>
      </div>
    </div>
    <div class="container2">
      <div class="skill2">
        <img class="img2" src="/career/Cursor (1).svg" />
        <p>Content Creation</p>
      </div>
    </div>
    <div class="container3">
      <div class="skill3">
        <img class="img3" src="/career/Cursor (2).svg" />
        <p>Web Development</p>
      </div>
    </div>
    <div class="container4">
      <div class="skill4">
        <img class="img4" src="/career/Cursor (3).svg" />
        <p>Videography</p>
      </div>
    </div>
    <div class="mini">
      <h1 class="h1-mini">
        Accelerate your career in the <span id="tech">tech</span> and
        <span class="create">creative</span> space
      </h1>
    </div>
    <p class="lorem">
      Our acceleration and internship programs provide a platform to establish
      critical and real-time experience in your chosen career fields.
    </p>

    <div class="btn-1">
      <div class="h3">Join The Team</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "firstSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 60px;
}
.firstSection {
  position: relative;
  /* width: 50%; */
  font-size: 40px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  padding: 10px;
  color: black;
  /* padding-top: 10rem;
  margin-top: 5em; */
}
.create {
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(
    285.19deg,
    rgba(207, 2, 187, 0.94) -17.8%,
    rgba(211, 172, 31, 0.94) 67.55%,
    rgba(240, 13, 67, 0.94) 152.9%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
.skill {
  padding: 1rem 2em;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  /* background: red; */
  width: fit-content;
  background: rgba(124, 212, 253, 1);
  text-align: center;
  align-items: center;
  justify-content: center;
}
.skill2 {
  padding: 1em 2em;
  font-family: "Roboto", sans-serif;
  display: flex;
  font-size: 12px;
  /* background: red; */
  background: rgba(221, 37, 144, 1);
  text-align: center;
  color: white;
  align-items: center;
  justify-content: center;
}
.skill3 {
  padding: 1em 12px;
  font-family: "Roboto", sans-serif;
  width: 120%;
  color: white;
  /* border-radius: 0 50px 50px 50px; */
  display: flex;
  font-size: 13px;
  /* background: red; */
  background: rgba(221, 37, 144, 1);
  text-align: center;
  align-items: center;
  justify-content: center;
}
.skill4 {
  padding: 1em 2em;
  font-family: "Roboto", sans-serif;
  display: flex;
  font-size: 13px;
  color: white;
  /* background: red; */
  background: rgba(3, 152, 85, 1);
  text-align: center;
  align-items: center;
  justify-content: center;
}
.container {
  position: absolute;
  left: 15%;
  top: -10%;
  /* height: 40px; */
}
.container2 {
  position: absolute;
  left: 58%;
  top: -7%;
}
.container3 {
  position: absolute;
  left: 92%;
  top: 25%;
}
.container4 {
  position: absolute;
  left: 38%;
  top: 42%;
}
.img {
  position: absolute;
  top: -50px;
  left: -30px;
}
.img2 {
  position: absolute;
  top: -50px;
  left: 100%;
}
.img3 {
  position: absolute;
  top: -40px;
  left: -20px;
}
.img4 {
  position: absolute;
  top: -30px;
  left: -30px;
}
.lorem {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 203%;
  text-align: start;
  padding: 20px 0 0 0;
  margin-top: 4rem;
  color: #1a1a1a;
}
.btn-1 {
  background: linear-gradient(
    285.19deg,
    rgba(207, 2, 187, 0.94) -17.8%,
    rgba(211, 172, 31, 0.94) 67.55%,
    rgba(240, 13, 67, 0.94) 152.9%
  );
  width: 40%;
  text-align: center;
  color: white;
  font-size: 25px;
  /* padding: 3em; */
  border-radius: 4px;
  margin-top: 2em;
}
.btn-1 a {
  /* padding: 1em; */
  display: inline-block;
}
.h1-mini {
  font-size: 62px;
}
.h3 {
  padding: 10px 0;
}
#tech {
  color: #3b59fb;
}

.social-icon {
  margin-top: 5em;
}

@media screen and (max-width: 800px) {
  .btn-1 {
    max-width: 80%;
    width: 100%;
    margin-top: 1em;
    font-size: 15px;
  }
  .container2 {
    display: none;
  }
  .h1-mini {
    font-size: 40px;
  }
}

@media screen and (max-width: 400px) {
  .mini {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .firstSection {
    position: relative;
    width: 100%;
    font-size: 28px;
    font-family: "Roboto", sans-serif;
    color: #fff;
    padding: 0;
    margin: 10px;
    color: black;
    margin-top: 1em;
  }
  .container3 {
    position: absolute;
    left: 50%;
    top: 250px;
  }
  .skill {
    padding: 0.5rem;
  }

  img {
    width: 40px;
  }
  .skill3 {
    padding: 1em 12px;
    width: 100%;
    font-size: 10px;
  }
  .skill {
    font-size: 10px;
  }
  .skill2 {
    font-size: 10px;
  }
  .skill4 {
    font-size: 10px;
  }
  .container4 {
    position: absolute;
    left: 15%;
    top: 250px;
  }
  .container {
    position: absolute;
    left: 10%;
    top: 8px;
  }
  .container2 {
    position: absolute;
    left: 50%;
    top: 10px;
  }
  .h1-mini {
    font-size: 45px;
    margin-top: 1em;
    /* line-height: 112%; */
  }
  .h3 {
    padding: 10px 0;
    font-family: "roboto" sans-serif;
  }
  .lorem {
    /* margin-top: 3em; */
    width: 95%;
  }
}
@media screen and (min-width: 550px) and (max-width: 1300px) {
  .firstSection {
    position: relative;
    width: 100%;
    font-family: "Roboto", sans-serif;
    color: #fff;
    margin: 10px;
    color: black;
    margin-top: 1em;
    padding: 0;
  }
  .container3 {
    position: absolute;
    left: 50%;
    top: 230px;
  }

  .skill3 {
    padding: 1em 12px;
    width: 100%;
  }
  .container4 {
    position: absolute;
    left: 10%;
    top: 206px;
  }
  .container {
    position: absolute;
    left: 10%;
    top: -6%;
  }
  .container2 {
    position: absolute;
    left: 50%;
    top: -5%;
  }
  .lorem {
    /* margin-top: 3em; */
    width: 95%;
  }
  .btn-1 {
    width: 50%;
    margin: 1em auto;
    /* margin-top: 1em; */
  }
  @media screen and (min-width: 770px) and (max-width: 800px) {
    .container4 {
      top: 130px;
    }
    .container3 {
      top: 100px;
    }
    .h1-mini {
      font-size: 50px;
    }
    btn-1 {
      max-width: 50%;
      width: 100%;
      margin-top: 1em;
      font-size: 15px;
    }
  }
  @media screen and (min-width: 788px) and (max-width: 1300px) {
    .container4 {
      top: 150px;
    }
    .container3 {
      top: 306px;
      left: 75%;
    }
    .h1-mini {
      font-size: 70px;
      text-align: center;
    }
    .btn-1 {
      width: 90%;
      color: white;
      font-size: 25px;
      padding: 0;
      border-radius: 4px;
      font-family: "roboto" sans-serif;
      /* margin-top: 2em; */
    }
  }
}
</style>
