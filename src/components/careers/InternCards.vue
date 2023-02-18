<template>
  <div @click="mouseHover" class="cards">
    <div class="div">
      <img class="img" :src="cardImage" alt="pic" />
    </div>
    <div class="layer"></div>
    <div class="text-sec">
      <h1 class="h1">{{ cardTitle }}</h1>
      <div>
        <ul>
          <li>{{ list1 }}</li>
          <li>{{ list2 }}</li>
          <li>{{ list3 }}</li>
        </ul>
      </div>
    </div>
    <div class="duration">
      <img src="/career/Frame.png" />
      <p>3 Months</p>
    </div>
    <a class="btn-1" :href="link" target="_blank">Join The Team</a>
  </div>
</template>
<script>
// import { title } from 'process';

// import { title } from 'process';

export default {
  name: "EachCard",
  props: ["cardTitle", "cardImage", "list1", "list2", "list3", "link"],
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    mouseHover() {
      setTimeout(() => {
        this.isHovered = !this.isHovered;
      }, 1000);
    },
  },
  // mounted() {
  //   console.log(this.title);
  // },
};
</script>

<style scoped>
.cards {
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 17.4049px;
  width: 30%;
  height: auto;
  gap: 2em;
}
.h1 {
  font-family: "Roboto", sans-serif;
  margin: 1rem 0;
  font-size: 34px;
}
.div {
  background: rgba(0, 0, 0, 0.49);
  border-radius: 17.4px 17.4px 0px 0px;
  transition: ease-out 0.5s;
  height: auto;
}
.div:hover {
  background: white;
}
.img {
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: rgba(0, 0, 0, 0.49);
  border-radius: 17.4px 17.4px 0px 0px;
  transition: ease-out 0.5s;
  /* transition: linear 0.5s; */
}
.img:hover {
  opacity: 1;
  width: 100%;
  height: auto;
  background: rgba(14, 13, 13, 0.49);
  border-radius: 17.4px 17.4px 0px 0px;
}
.img2 {
  opacity: 1;
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.49);
  border-radius: 17.4px 17.4px 0px 0px;
}

.duration {
  display: flex;
  align-items: flex-start;
  /* width: 6em; */
  margin-left: 3em;
  gap: 1rem;
  margin: 2rem 1rem;
  /* justify-content: space-between; */
  align-items: center;
}
.duration img {
  width: 2em;
}
.text-sec {
  max-width: 100%;
  width: 100%;
  /* border: 1px solid red; */
  max-height: 14em;
  height: 100%;
  margin: 0 auto;
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-left: 1em;
  text-align: start;
}
li {
  margin-top: 0.5em;
}
.btn-1 {
  background: linear-gradient(
    285.19deg,
    rgba(207, 2, 187, 0.94) -17.8%,
    rgba(211, 172, 31, 0.94) 67.55%,
    rgba(240, 13, 67, 0.94) 152.9%
  );
  width: 50%;
  /* margin: 0 auto 2em auto; */
  display: inline-block;
  margin: auto;
  margin-bottom: 2em;
  padding: 12px;
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  border: none;
  border-radius: 3.46341px;
}

@media screen and (max-width: 900px) {
  .cards {
    max-width: 100%;
    width: 90%;
    height: 100%;
    /* position: relative; */
    /* height: 800px; */
  }
  li {
    margin-top: 1.2em;
  }

  .h1 {
    font-size: 25px;
  }
  .btn-1 {
    width: 200px;
    font-size: 15px;
    /* margin: 0 auto 2em auto; */
  }
  .duration {
    margin: 2em 0 2rem 3em;
    /* margin-left: 3em; */
    /* justify-content: space-between; */
    align-items: center;
  }
  .text-sec {
    margin: 1em auto 0 auto;
  }
}
@media screen and (min-width: 900px) and (max-width: 1300px) {
  .cards {
    width: 50%;
    height: 43em;
  }
  .h1 {
    font-size: 30px;
  }
  .btn-1 {
    width: 200px;
    font-size: 18px;
    margin-bottom: 0;
    margin: 1em 0 2em;
    /* margin: 0 auto 2em auto; */
  }
  .duration {
    margin: 1.5em 0 0 3em;
    /* margin-left: 3em; */
    /* justify-content: space-between; */
    align-items: center;
  }
  li {
    margin-top: 1.2em;
  }
}
</style>
