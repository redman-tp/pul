<template>
  <div class="grid-container animate__animated animate__slideInDown">
    <div class="grid">
      <img class="img1" src="https://i.imgur.com/waYx2ir.png" alt="img" />
      <img class="arrow" src="/career/Vector.png" />
      <img class="arrow2" src="/career/Vector2.png" />
      <img class="triple" src="/career/Triple.png" />
      <img class="pic1" src="/career/pic1.png" />
      <img class="pic2" src="/career/pic2.png" />
      <img class="img2" src="https://i.imgur.com/64phpkV.png" alt="img" />
      <img class="img3" src="https://i.imgur.com/XG4j9ha.png" alt="img" />
      <img class="img5" src="https://i.imgur.com/QPi5iRU.png" alt="img" />
      <img class="img6" src="https://i.imgur.com/CkR6Lxf.png" alt="img" />
      <img class="img7" src="https://i.imgur.com/LL7Ymvg.png" alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "GridedImages",
};
</script>

<style scoped>
.grid-container {
  max-width: 60%;
  margin-top: 6em;
}
/* .outer-grid{
    display: grid;
    grid-template-columns: repeat(1, minmax(0,1fr));
    grid-template-rows: repeat(3, minmax(opx 600px));
    row-gap: initial;
} */
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  row-gap: 15px;
}
.grid .img1 {
  grid-column-start: 9;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: 1;
  width: 300px;
  border-radius: 6px;
  height: auto;
  /* z-index: 1; */
}
.grid .pic1 {
  grid-area: 9/6/1/5;
  width: 120px;
  margin-top: 150%;
  margin-left: -10%;
}
.grid .arrow2 {
  grid-area: 9/4/1/5;
  margin-top: 70%;
  margin-left: 50%;
}
.grid .arrow {
  grid-area: 9/6/1/5;
  /* width: 120px; */
  /* margin-top: 200%; */
  /* margin-left: 5%; */
}
.triple {
  margin-top: -300%;
  margin-left: 200%;
}
.grid .img2 {
  grid-column-start: 9;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: 2;
  border-radius: 6px;

  width: 300px;
  /* grid-area: 3/4/2/9; */
  height: auto;
  /* z-index: 1; */
}
.grid .img7 {
  grid-area: 9/4/2/5;
  border-radius: 6px;

  width: 300px;
  margin-left: 35%;
  /* margin-top: 200%; */
  /* margin-left: 1%; */
}
.grid .img6 {
  border-radius: 6px;
  grid-area: 9/1/2/1;
  width: 120px;
  margin-top: 450%;
  margin-left: 220%;
  /* z-index: 1; */
  /* margin-top: 200%; */
  /* margin-left: 100%; */
}
.grid .img3 {
  grid-column-start: 9;
  grid-column-end: 7;
  border-radius: 6px;
  grid-row-start: 3;
  grid-row-end: 3;
  width: 300px;
  /* margin-top: 200%; */
  /* margin-left: -50%; */
}
.grid .pic2 {
  grid-area: 9/4/3/5;
  width: 300px;
  margin-left: 35%;
  /* margin-top: 200%; */
  /* margin-left: -50%; */
}
.grid .img5 {
  grid-area: 4/1/3/1;
  width: 300px;
  height: auto;
  margin-left: -230%;
  border-radius: 6px;
  /* z-index: 1;
margin-top: 200%;
margin-left: 100%; */
}
@media screen and (max-width: 1024px) {
  .grid-container {
    display: none;
  }
}
</style>

<!-- 
<PhotosSection source=" https://i.imgur.com/waYx2ir.png" />
<PhotosSection source="https://i.imgur.com/64phpkV.png" />
<PhotosSection source="https://i.imgur.com/XG4j9ha.png" />
<PhotosSection source="https://i.imgur.com/OFdfhJb.png" />
<PhotosSection source="https://i.imgur.com/QPi5iRU.png" />
<PhotosSection source="https://i.imgur.com/CkR6Lxf.png" />
<PhotosSection source="https://i.imgur.com/SU2XR4T.png" />
<PhotosSection source="https://i.imgur.com/LL7Ymvg.png " />
</div> -->
-->
