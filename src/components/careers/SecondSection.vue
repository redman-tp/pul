<template>
  <div>
    <div class="top-2">
      <h1 class="h1">Find Your Perfect Program</h1>
      <p class="p-tag q-px-md">
        Choose from our various Programs for your ideal Internship Experience.
      </p>
      <!-- <img src="/career/picture.png" alt="pic" /> -->
    </div>
    <div class="the-cards top-2">
      <InternCards
        cardTitle="Advanced Internship"
        link="https://forms.gle/atSMCN5xzom4utEJA"
        list1="Internship programs for graduates in various educational fields
"
        list2="Improved networking collaboration
"
        list3="Paid Internship opportunities
"
        :cardImage="'/career/picture.png'"
      />
      <InternCards
        cardTitle="School Internship"
        :cardImage="'/career/picture2.png'"
        link="https://forms.gle/97CsSDXmZm8sBnqH7"
        list1="Internship opportunities for undergraduates.
"
        list2="Real-time practical experience in the fieldof study
"
        list3="Networking and collaboration opportunities
"
      />
      <InternCards
        cardTitle="Learning By Internship"
        :cardImage="'/career/picture3.png'"
        link="https://forms.gle/uv61FGrNxbnVBybF8"
        list1="Learning opportunities for chosen career paths
"
        list2="Networking and Collaboration opportunities
"
        list3="Billed internship programs in chosen career fields.
"
      />
    </div>
    <h1 class="h1-2">GROW WITH GREYSOFT TECHNOLOGIES</h1>
  </div>
</template>

<script>
import InternCards from "./InternCards.vue";
export default {
  name: "secondSection",
  components: {
    InternCards,
  },
  data() {
    return {
      title: "Advanced Intern",
    };
  },
};
</script>

<style scoped>
.top-2 {
  margin: 7rem auto 2rem;
  text-align: center;
  font-family: "Roboto" sans-serif;
}
.h1 {
  font-family: "Roboto", sans-serif;
  font-size: 50px;
}
.p-tag {
  margin: 0 auto;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
}
.the-cards {
  display: flex;
  gap: 30px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
}
.h1-2 {
  text-align: center;
  font-family: "montserrat", sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.315em;
  color: #1a1a1a;
}
@media screen and (max-width: 900px) {
  .h1 {
    font-size: 30px;
  }
  .p-tag {
    width: 100%;
    font-size: 15px;
  }
  .top-2 {
    margin: 3em auto;
  }
  .the-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
  .h1-2 {
    font-size: 15px;
  }
}
</style>
Learning opportunities for chosen career paths Networking and Collaboration
opportunities Billed internship programs in chosen career fields.
