<template>
  <div>
    <div class="myinfo" v-for="(item,index) in list" :key="index">
      <form action="">
        <div class="top-img">
          <div class="file-box">
            <img id="file-img" name="picture" src="../../images/logo.png">
            <input id="file" name="file" type="file">
            <input type="text" hidden>
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
import Dialog from "../../common/Dialog";
export default {
  components: {
    Dialog
  },
  data() {
    return {
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
      popup: false,
      text: '',
    }
  },
  mounted() {
    var $file = document.getElementById('file')
    function readFile() {
      var $fileImg = document.getElementById('file-img')
      var imagSize = document.getElementById('file').files[0].size
      var file = this.files[0]
      //console.log(file)
      if (!/image\/\w+/.test(file.type)) {
        //alert("请选择图片类型");
        return false
      }
      if (imagSize > 1024 * 1024 * 3) {
        alert('图片不能大于3M')
        return true
      }
      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        $fileImg.src = this.result
      }
    }
    $file.onchange = readFile;
  },
  methods: {
    submit() {
      let have = true;
      if (this.list[0].name.length == 0 || this.list[0].phone.length == 0 || this.list[0].position.length == 0) {
        // console.log(this.list[0].name)
        //alert('基本信息不能为空')
        have = false;
        this.popup = true;
        this.text = '请填写完整的信息'
        return false;
      }
      if (!(/^1[345789][0-9]{9}$/.test(this.list[0].phone))) {
        //console.log('手机号错误');
        have = false;
        this.popup = true;
        this.text = '手机号码错误'
        return false;
      }
      if (have) {
        this.popup = true;
        this.text = '保存成功'
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
        console.log(data);
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
$text: #535353;
input,
select {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.myinfo {
  padding: 10px;
}
.top-img {
  background: #a4a391;
  height: 130px;
  border-radius: 10px 10px 0 0;
}
.file-box {
  width: 100px;
  height: 100px;
  padding-top: 10px;
  margin: 0 auto;
  img {
    @extend .file-box;
    position: absolute;
  }
  input {
    @extend .file-box;
    opacity: 0;
  }
}
.my-missage {
  padding: 10px;
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
    }
  }
}
</style>


