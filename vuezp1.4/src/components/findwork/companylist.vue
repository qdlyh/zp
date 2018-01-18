<template>
    <div>
        <div class="myinfo" v-for="(item,index) in list" key="index">
            <form action="">
                <div class="top-img">
                    <img v-lazy="item.src">
                </div>
                <div class="my-missage">
                    <div>
                        <span>企业名称：</span>
                        <p>{{item.title}}</p>
                        <hr/>
                    </div>
                    <div>
                        <span>企业性质：</span>
                        <p>{{item.hz}}</p>
                        <hr/>
                    </div>
                    <div>
                        <span>经营范围：</span>
                        <p>{{item.jy}}</p>
                        <hr/>
                    </div>
                    <div>
                        <span>联系人
                            <i class="sign-i">：</i>
                        </span>
                        <p>{{item.lxr}}</p>
                        <hr/>
                    </div>
                    <div>
                        <span>联系电话：</span>
                        <p>{{item.phone}}</p>
                        <hr/>
                    </div>
                    <div>
                        <span>企业地址：</span>
                        <p>{{item.dz}}</p>
                        <hr/>
                    </div>
                    <div>
                        <span class="sign-span">企业描述：</span>
                        <p class="sign-p">{{item.ms}}</p>
                        <hr/>
                    </div>
                    <div>
                        <span>招聘岗位：</span>
                        <p>{{item.zp}}</p>
                        <hr/>
                    </div>
                    <div>
                        <span>工作年限：</span>
                        <p>{{item.gz}}</p>
                        <hr/>
                    </div>
                    <div>
                        <span>岗位薪资：</span>
                        <p>{{item.xz}}</p>
                        <hr/>
                    </div>
                    <div>
                        <span class="sign-span">岗位描述：</span>
                        <p class="sign-p">{{item.gwms}}</p>
                        <hr/>
                    </div>
                    <div class="btn-blue btn-sign">
                        <router-link to="/findwork">发送简历</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          hz: '合资',
          gm: '100-15/人',
          jy: '房地产',
          lxr: '李佳刚',
          phone: '13030217212',
          dz: '广东省广州市白云区',
          ms: '要负责公司账单要负责公司账单要负责公司账单要负责公司账单要负责公司账单主要负责公司账单',
          zp: '高级搬砖工程师',
          gz: '3年以上',
          xz: '5000/7000/月',
          gwms: '要负责公司账单要负责公司账单要负责公司账单要负责公司账单要负责公司账单主要负责公司账单'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
$text: #535353;
.myinfo {
  padding: 10px;
}
.top-img {
  background: #81959c;
  height: 130px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
}
.my-missage {
  padding: 10px;
  border-radius: 0 0 10px 10px;
  background: rgba(255, 255, 255, 0.6);
  div {
    margin-top: 10px;
  }
  span {
    color: $text;
    font-size: 16px;
    width: 150px;
    display: inline-block;
    float: left;
    width: 30%;
  }
  p {
    color: $text;
    font-size: 16px;
    display: inline-block;
    float: left;
    width: 70%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    margin-bottom: 5px;
    display: flex;
  }
  hr {
    border-top: 0.5px solid #81959c;
  }
  .sign-span {
    width: 30%;
  }
  .sign-p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .sign-i {
    padding-left: 10px;
  }
}
.btn-sign {
  a {
    margin-top: 30px;
  }
}
</style>

