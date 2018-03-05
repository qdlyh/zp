<template>
  <div id="app">
    <!-- <h2>{{this.$route.query.userId}}</h2> -->
    <div class="bgpic"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userId: ''
    }
  },
  created() {
    this.userId = this.$route.query.userId;
  }
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
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(./images/bj.jpg);
  top: 0;
  left: 0;
  z-index: -1;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
}

/* 按钮 */
.btn-blue {
  width: 60%;
  text-align: center;
  margin: 30px auto;
  a {
    display: inline-block;
    line-height: 45px;
    width: 100%;
    height: 45px;
    background: #3873cd;
    border-radius: 10px;
    font-size: 18px;
    color: #fff;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    &:active {
      background: rgb(47, 115, 218);
    }
  }
}

// .action-block {
//   position: relative;
//   &:before {
//     content: ' ';
//     position: absolute;
//     width: 15px;
//     height: 15px;
//     background: url(./images/loadings.gif);
//     background-size: 15px 15px;
//     z-index: 9999;
//     left: 35%;
//     top: 35%;
//   }
// }

/* 懒加载图片过渡效果 */
img[lazy='loaded'] {
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

img[lazy='loading'] {
  /*width: 100px;*/
  background-position: center center !important;
  background: url('./images/loading.gif');
  background-size: 100px 100px;
  background-repeat: no-repeat;
  background-size: cover;
}
img[lazy='error'] {
  /*width: 100px;*/
  background-position: center center !important;
  background: url('./images/error.jpg');
  background-size: 100px 100px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
