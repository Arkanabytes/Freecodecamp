<style type='text/scss'>
@each $color in blue, black, red {
  .#{$color}-text {color: $color;}
}

  .blue-bg {
  background-color: blue;
}
  
  .black-bg {
  background-color: black;
}
  
  .red-bg {
  background-color: red;
}

  div {
    height: 200px;
    width: 200px;
  }

</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
