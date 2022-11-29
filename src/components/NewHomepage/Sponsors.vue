<template>
  <div class="sponsors">
    <p>Our Clients And Partners</p>
    <h6>Some organisations we've loved working with</h6>

    <div class="sponsors_group">
      <div class="sponsor_item">
        <img src="sponsors/microsoft.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/kdsg.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/kadipa.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/agrolog.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/softalliance.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/kukah.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/cleantech.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/rabitz.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/bantu.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/certiport.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/ukaid.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/mastercard.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/dbi.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/itf.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/nbte.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/victoryxr.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/google.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/meta.svg" alt="" />
      </div>
      <div class="sponsor_item">
        <img src="sponsors/pan.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sponsors {
  padding: 3% 10%;
}
p,
h6 {
  margin: 0;
  color: #000000 !important;
}
.sponsors p {
  margin: 1% 0;
  font-size: 1.5rem;
  font-weight: 400;
  color: #8d354a;
}
.sponsors h6 {
  font-weight: 900;
  font-size: 2.5rem;
}
.sponsors_group {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 4% 0;
  padding: 0 2%;
}
.sponsor_item {
  border: 1px solid grey;
  height: 25vh;
  display: grid;
  justify-content: center;
  place-items: center;
}
.sponsor_item img {
  width: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: 0.8s ease;
}
.sponsor_item:hover img {
  filter: none;
}
@media screen and (max-width: 1270px) {
  .sponsor_item {
    height: 20vh;
  }
}
@media screen and (max-width: 1100px) {
  .sponsors {
    padding: 3% 6%;
  }
  .sponsors_group {
    grid-template-columns: repeat(5, 1fr);
    padding: 0;
  }
  .sponsor_item img {
    width: 85%;
  }
  .sponsors p {
    font-size: 1.25rem;
  }
  .sponsors h6 {
    font-size: 2rem;
  }
}
@media screen and (max-width: 870px) {
  .sponsor_item {
    height: 15vh;
  }
  .sponsor_item img {
    width: 65%;
  }
  .sponsors p {
    font-size: 1.05rem;
  }
  .sponsors h6 {
    font-size: 1.7rem;
  }
}
@media screen and (max-width: 650px) {
  .sponsor_item {
    height: 12vh;
  }
  .sponsor_item img {
    width: 60%;
  }
  .sponsors p {
    font-size: 0.95rem;
  }
  .sponsors h6 {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 560px) {
  .sponsors_group {
    display: flex !important;
    /* width: 100%; */
    /* height: 120px; */
    /* white-space: nowrap; */
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none; /* hiding the scrollbar for Internet Explorer, Edge */
    scrollbar-width: none; /* hiding the scrollbar for Firefox */
    scroll-behavior: smooth;
  }
  .sponsors_group::-webkit-scrollbar {
    display: none; /* hiding the scrollbar for Chrome, Safari, and Opera */
  }
  .sponsor_item {
    width: 20%;
    flex: 1 0 25%;
  }
  .sponsor_item img {
    filter: none;
  }
  .sponsor_item {
    border: none;
  }
  .sponsors p {
    font-size: 0.9rem;
    margin: 0;
    /* text-align: center; */
  }
  .sponsors h6 {
    font-size: 1.4rem;
    /* text-align: center; */
    /* margin: 0 auto; */
    /* width: 80%; */
  }
}
@media screen and (max-width: 450px) {
  .sponsors h6 {
    width: 100%;
  }
  .sponsor_item {
    flex: 1 0 30%;
  }
}
</style>
