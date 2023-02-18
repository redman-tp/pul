<template>
    <div>
    <img class="line"  src="../assets/Line 18.svg"/>
    <hr class="hr2"/>

    <div class="icon-container" >
        <div class="icons">
        <img class="img" src="../assets/Instagram Icon.png"/>
        <img class="img" src="../assets/Facebook Icon.png"/>
        <img class="img"  src="../assets/Linkedin Icon.png"/>
        <img class="img" src="../assets/Twitter Icon.png"/>
        <img class="img" src="../assets/Youtube Icon.png"/>
        </div>
    </div>

    </div>
</template>

<script>
export default {
    name: "socialMedia",
}

    </script>
    <style scoped>
    .line{
        width: 100%;
    }
    .hr2{
  color:  #f8f3f3;
  rotate: 90deg;
  width: 200px;
  margin-left: 25em;
  margin-bottom:10px;
}
.icon-container{
   margin-left: 10.5em;
   margin-bottom: 15em;
   
}
.img{
    padding: 10px;
    margin-left: 5px;
    background: #dfd7d7;
    border: #302E2E;
    border-radius: 8px;
}
@media screen and (max-width: 1050px) {
    .line{
        display: none;
    }
    .hr2{
  display: none;

}
.icon-container{
   margin: 2em 3em;
   /* margin-bottom: 2em; */
}
    
}

    </style>

<!-- 
https://i.imgur.com/waYx2ir.png
https://i.imgur.com/64phpkV.png
https://i.imgur.com/XG4j9ha.png
https://i.imgur.com/OFdfhJb.png
https://i.imgur.com/QPi5iRU.png
https://i.imgur.com/CkR6Lxf.png
blob:https://imgur.com/84fc9248-7db3-4079-a719-df00d2c9d270
https://i.imgur.com/LL7Ymvg.png -->