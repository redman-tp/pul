<template>
  <div class="wrapperr">
    <div class="hold">
      <img src="/images/1.png" alt="" />
      <img style="width: 10px" src="/images/10.png" alt="" />
      <img src="/images/2.png" alt="" />
      <img style="width: 10px" src="/images/10.png" alt="" />
      <img src="/images/22.png" alt="" />
      <img src="/images/4.png" alt="" />

      <img style="width: 10px" src="/images/10.png" alt="" />
      <img src="/images/5.png" alt="" />
      <img style="width: 10px" src="/images/6.png" alt="" />
      <img src="/images/7.png" alt="" /> <br />
      <img src="/images/8.png" alt="" />
      <img style="width: 10px" src="/images/10.png" alt="" />
      <img src="/images/9.png" alt="" />
      <img style="width: 10px" src="/images/10.png" alt="" />
      <img src="/images/11.png" alt="" />
      <img style="width: 10px" src="/images/10.png" alt="" />
      <img src="/images/12.png" alt="" />
      <img style="width: 10px" src="/images/10.png" alt="" />
      <img src="/images/13.png" alt="" />
      <img style="width: 10px" src="/images/10.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 30px;
  animation-name: floating;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 20px;
  margin-top: 15px;
  margin-right: 5px;
  margin-bottom: 15px;
  /* animation-delay: 5s; */
}

@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
}
</style>
