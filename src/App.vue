<template>
  <div id="app">
    <!-- <h2>{{$route.query.userId}}</h2> -->
    <div class="bgpic"></div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
export default {
  name: 'app',
  data() {
    return {
      userId: null,
      appId: null,
      timestamp: null,
      noncestr: null,
      signature: null,

    }
  },
  created() {

    if (sessionStorage.getItem("userId") != null) {
      this.userId = sessionStorage.getItem("userId");
    } else {
      this.userId = this.$route.query.userId;
      sessionStorage.setItem('userId', this.userId);
    }

    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: this.$route.query.appId, // 必填，公众号的唯一标识
      timestamp: this.$route.query.timestamp, // 必填，生成签名的时间戳
      nonceStr: this.$route.query.noncestr, // 必填，生成签名的随机串
      signature: this.$route.query.signature,// 必填，签名
      jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表
    });
    wx.ready(function () {
      wx.onMenuShareAppMessage({
        title: '分享朋友', // 分享标题
        desc: '分享朋友,分享朋友', // 分享描述
        link: 'http://huipin.birds-resort.com/mvc/route/share', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
          // 用户确认分享后执行的回调函数
          alert('分享成功')
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
          alert('分享取消')
        }
      });

      wx.onMenuShareTimeline({
        title: '盆友圈', // 分享标题
        link: 'http://huipin.birds-resort.com/mvc/route/share', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '', // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
          alert('盆友圈成功')
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
          alert('盆友圈失败')
        }
      });
    });
    wx.error(function (res) {
      //console.log(res)
    });
  },
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
  max-width: 750px;
  -webkit-overflow-scrolling: touch; //在ios上滑动不流畅样式设置处理
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
