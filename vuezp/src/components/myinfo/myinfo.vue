<template>
  <div>
    <div class="myinfo">
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
            <input type="text">
          </div>
          <div>
            <span>性别：</span>
            <select name="select">
              <option value="">男</option>
              <option value="">女</option>
            </select>
          </div>
          <div>
            <span>联系：</span>
            <input type="text">
          </div>
          <div>
            <span>工龄：</span>
            <select name="select">
              <option value="">一年以下</option>
              <option value="">一年</option>
              <option value="">二年</option>
              <option value="">三年</option>
            </select>
          </div>
          <div>
            <span>职称：</span>
            <input type="text">
          </div>
          <div>
            <span>资格：</span>
            <select name="select">
              <option value="">搬砖</option>
              <option value="">包工头</option>
              <option value="">开发商</option>
            </select>
          </div>
          <div>
            <span class="sign">描述：</span>
            <textarea name="text" id="" cols="30" rows="10"></textarea>
          </div>
          <div class="btn-blue">
            <router-link to="/findwork">保存</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
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
      reader.onload = function(e) {
        $fileImg.src = this.result
      }
    }
    $file.onchange = readFile
  }
}
</script>
<style lang="scss" scoped>
$text: #535353;
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
    width: 75%;
    color: $text;
    font-size: 16px;
    padding: 10px;
    margin-top: 10px;
  }
  textarea {
    @extend input;
    height: 50px;
    resize: none;
  }
  select {
    @extend input;
    height: 40px;
    width: 82%;
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
}
</style>


