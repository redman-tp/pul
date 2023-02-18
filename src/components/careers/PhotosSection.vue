<template>
      <img :src="source" alt="img" />
</template>

<script>
export default {
  name: "photosSection",
  props: ["source"],
};
</script>
<style>
.photo-sec {
  border: 2px solid red;
  display: flex;
  max-width: 100%;
  width: 100%;
}
.each-pic{
    max-width: 100%;
    width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

}
.pic-container {
  border: 2px solid blue;
  max-width: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>

https://i.imgur.com/waYx2ir.png https://i.imgur.com/64phpkV.png
https://i.imgur.com/XG4j9ha.png https://i.imgur.com/OFdfhJb.png
https://i.imgur.com/QPi5iRU.png https://i.imgur.com/CkR6Lxf.png
blob:https://imgur.com/84fc9248-7db3-4079-a719-df00d2c9d270
https://i.imgur.com/LL7Ymvg.png
