<template>
  <div id="app">
    <!-- <h2>{{this.$route.query.userId}}</h2> -->
    <div class="bgpic"></div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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

.weui-box {
  .weui-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transition: opacity 0.5s;
    background: #000;
    opacity: 0.6;
  }

  .weui-dialog {
    position: fixed;
    transition: opacity 0.5s;
    z-index: 5000;
    width: 70%;
    // max-width: 300px;
    // height: 25%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #fff;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
    .weui-dialog__hd {
      // padding: 1.3em 1.6em .5em;
      height: 60px;
      line-height: 60px;
      strong {
        font-size: 18px;
      }
    }
    .weui-dialog__bd {
      padding: 0 1.6em 0.8em;
      min-height: 50px;
      line-height: 50px;
      font-size: 16px;
      word-wrap: break-word;
      word-break: break-all;
      color: #999;
    }
    .weui-dialog__ft {
      position: relative;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      &::after {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #d5d5d6;
        -webkit-transform: scaleY(0.5);
      }
    }
    .weui-dialog__btn {
      display: block;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      height: 50px;
      line-height: 50px;
      color: #3cc51f;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      position: relative;
      &::after {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-left: 1px solid #d5d5d6;
        -webkit-transform-origin: 0 0;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
      }
    }
  }
}

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

// img[lazy='loading'] {
//   /*width: 100px;*/
//   background-position: center center !important;
//   background: url('./images/loading.gif');
//   background-size: 100px 100px;
//   background-repeat: no-repeat;
//   background-size: cover;
// }
img[lazy='error'] {
  /*width: 100px;*/
  background-position: center center !important;
  background: url('./images/error.jpg');
  background-size: 100px 100px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
