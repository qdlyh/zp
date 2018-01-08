<template>
  <div>
    <div class="myinfo" v-for="(item,index) in list" :key="index">
      <form action="">
        <div class="top-img">
          <div class="head">
            <div id="cropic">
              <div class="container" v-show="panel">
                <img id="image" :src="url" alt="Picture">
                <button type="button" id="button" @click="crop">确定</button>
              </div>
              <div>
                <div class="show">
                  <div class="picture" :style="'backgroundImage:url('+headerImage+')'"></div>
                </div>
                <input type="file" id="change" accept="image" @change="change">
              </div>
            </div>
          </div>
        </div>
        <div class="my-missage">
          <div>
            <span>姓名：</span>
            <input type="text" maxlength="10" v-model.trim="item.name">
          </div>
          <div>
            <span>性别：</span>
            <select name="select">
              <option value="" v-for="(item,index) in list[0].sexbox">{{item.sex}}</option>
            </select>
          </div>
          <div>
            <span>联系：</span>
            <input type="number" v-model="item.phone" oninput='if(value.length>11)value=value.slice(0,11)'>
          </div>
          <div>
            <span>工龄：</span>
            <select name="select">
              <option value="" v-for="(item,index) in list[0].work">{{item.time}}</option>
            </select>
          </div>
          <div>
            <span>职称：</span>
            <input type="text" v-model.trim="item.position" maxlength="15">
          </div>
          <div>
            <span>资格：</span>
            <select name="select">
              <option value="" v-for="(item,index) in list[0].prove">{{item.proveName}}</option>
            </select>
          </div>
          <div>
            <span class="sign">描述：</span>
            <span class="describe-box">
              <textarea name="text" v-model="item.describe" cols="30" rows="10" maxlength="200"></textarea>
              <i class="countText">{{countText}}/200</i>
            </span>
          </div>
          <div class="btn-blue" @click="submit()">
            <router-link to="">保存</router-link>
          </div>
        </div>
      </form>
    </div>
    <Dialog :popup="popup" :text="text"></Dialog>
  </div>
</template>
<script>
import Cropper from 'cropperjs';
import Dialog from "../../common/Dialog";
export default {
  components: {
    Dialog
  },
  data() {
    return {
      popup: false,
      text: '',
      headerImage: require('../../images/logo.png'),
      picValue: '',
      cropper: '',
      croppable: false,
      panel: false,
      url: '',
      list: [
        {
          name: 'lyh',
          sexbox: [
            {
              sex: '男'
            },
            {
              sex: '女'
            },
          ],
          phone: '13030212212',
          work: [
            {
              time: '一年以下'
            },
            {
              time: '一年'
            },
            {
              time: '两年'
            },
            {
              time: '三年'
            },
            {
              time: '三年以上'
            },
          ],
          position: '搬砖工程师',
          prove: [
            {
              proveName: '搬砖'
            },
            {
              proveName: '搬砖工程师'
            },
            {
              proveName: '包工头'
            },
            {
              proveName: '开发商'
            }
          ],
          describe: '留言留言噢噢噢噢噢噢噢噢哦哦哦哦哦哦哦哦哦'
        }
      ],
    }
  },
  mounted() {
    //初始化这个裁剪框  
    var self = this;
    var image = document.getElementById('image');
    this.cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      background: false,
      zoomable: false,
      ready: function () {
        self.croppable = true;
      }
    });
  },
  methods: {
    getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) { // basic  
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) { // mozilla(firefox)  
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) { // webkit or chrome  
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    change(e) {
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        this.popup = true;
        this.text = '请选择图片格式类型';
        return false
      }
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.panel = true;
      this.picValue = files[0];

      this.url = this.getObjectURL(this.picValue);
      //每次替换图片要重新得到新的url  
      if (this.cropper) {
        this.cropper.replace(this.url);
      }
      this.panel = true;

    },
    crop() {
      this.panel = false;
      var croppedCanvas;
      var roundedCanvas;

      if (!this.croppable) {
        return;
      }
      // Crop  
      croppedCanvas = this.cropper.getCroppedCanvas();
      console.log(this.cropper)
      // Round  
      roundedCanvas = this.getRoundedCanvas(croppedCanvas);

      this.headerImage = roundedCanvas.toDataURL();
      this.postImg()

    },
    getRoundedCanvas(sourceCanvas) {

      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var width = sourceCanvas.width;
      var height = sourceCanvas.height;

      if (width > 150) {
        width = 150;
      }
      if (height > 150) {
        height = 150;
      }

      canvas.width = width;
      canvas.height = height;

      context.imageSmoothingEnabled = true;
      context.drawImage(sourceCanvas, 0, 0, width, height);
      context.globalCompositeOperation = 'destination-in';
      context.beginPath();
      context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
      context.fill();

      return canvas;
    },
    postImg() {
      // let params = new FormData();
      // params.append('pic',123);
      this.$ajax.post(this.psta + '/logopic', { pic: this.headerImage })
        .then((res) => {

        })
        .catch((error) => {

        })
    },
    submit() {
      let have = true;
      if (this.list[0].name.length == 0 || this.list[0].phone.length == 0 || this.list[0].position.length == 0) {
        // console.log(this.list[0].name)
        //alert('基本信息不能为空')
        have = false;
        this.popup = true;
        this.text = '请填写完整的信息';
        return false;
      }
      if (!(/^1[345789][0-9]{9}$/.test(this.list[0].phone))) {
        //console.log('手机号错误');
        have = false;
        this.popup = true;
        this.text = '手机号码错误';
        return false;
      }
      if (have) {
        this.popup = true;
        this.text = '保存成功';
      }
    },
  },
  computed: {
    countText() {
      if (this.list[0].describe.length != 0) {
        return this.list[0].describe.length;
      }
      return 0;
    }
  },
  watch: {
    list: {
      handler(data) {
        //console.log(data);
      },
      deep: true
    },
    popup: {
      handler(obj) {
        //console.log(obj);
        if (this.popup) {
          setTimeout(() => {
            this.popup = false;
          }, 1500)
        }
      },
      deep: true
    },
  }
}
</script>
<style lang="scss" scoped>
//@extend
$text: #535353;
input,
select {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
.myinfo {
  padding: 10px;
}
.top-img {
  background: #a4a391;
  height: 130px;
  border-radius: 10px 10px 0 0;
  position: relative;
}

.my-missage {
  padding: 10px;
  text-align: center;
  border-radius: 0 0 10px 10px;
  background: rgba(255, 255, 255, 0.6);
  input {
    border-radius: 5px;
    outline: none;
    border: 0.5px solid #ccc;
    height: 20px;
    width: 80%;
    color: $text;
    font-size: 16px;
    padding: 10px;
    margin-top: 10px;
    height: 40px;
  }
  textarea {
    @extend input;
    height: 70px;
    resize: none;
  }
  select {
    @extend input;
    height: 40px;
    width: 80%;
    padding: 0 0 0 10px;
  }
  span {
    color: $text;
    font-size: 16px;
  }
  .sign {
    position: relative;
    top: -55px;
  }
  .describe-box {
    position: relative;
    .countText {
      position: absolute;
      right: 0;
      bottom: -20px;
      color: #a4a391;
      font-size: 14px;
    }
  }
}
</style>


