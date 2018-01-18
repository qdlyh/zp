<template>
  <div id="app">
    <img src="./images/bj.jpg" class="bgpic">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: none;
}
i {
  font-style: normal;
}
#app {
  margin: 0 auto;
}
.bgpic {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

/* 按钮 */
.btn-blue {
  margin: 30px 0;
  text-align: center;
  a {
    display: inline-block;
    line-height: 45px;
    height: 45px;
    width: 60%;
    background: #3873cd;
    border-radius: 10px;
    font-size: 18px;
    color: #fff;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    margin: 0 auto;
    &:active {
      background: rgb(47, 115, 218);
    }
  }
}

/* 懒加载图片过渡效果 */
img[lazy="loaded"] {
  animation: fade 0.5s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

img[lazy=loading] {
    /*width: 100px;*/
    background-position:center center!important;
    background: url("./images/loading.gif");
    background-size:100px 100px;
    background-repeat:no-repeat;
    background-size: cover;
}
img[lazy=error] {
    /*width: 100px;*/
    background-position:center center!important;
    background: url("./images/error.gif");
    background-size:100px 100px;
    background-repeat:no-repeat;
    background-size: cover;
}

</style>
