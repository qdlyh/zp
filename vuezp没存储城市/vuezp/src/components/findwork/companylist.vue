<template>
    <div>
        <!-- <h2>{{$route.query.personalId}}</h2> -->
        <!-- <h2>{{ $route.params.id }}</h2> -->
        <div class="myinfo" v-for="(item,index) in list" :key="index">
            <form action="">
                <div class="top-img">
                    <img v-lazy="item.headimgurl">
                </div>
                <div class="my-missage">
                    <div>
                        <span>企业名称：</span>
                        <p>{{item.name}}</p>
                    </div>
                    <div>
                        <span>企业性质：</span>
                        <p>{{item.natureTitle}}</p>
                    </div>
                    <div>
                        <span>经营范围：</span>
                        <p>{{item.sizeTitle}}</p>
                    </div>
                    <div>
                        <span>联系人
                            <i class="sign-i">：</i>
                        </span>
                        <p>{{item.linkman}}</p>
                    </div>
                    <div>
                        <span>联系电话：</span>
                        <p>{{item.linkNumber}}</p>
                    </div>
                    <div>
                        <span>企业地址：</span>
                        <p>{{item.address}}</p>
                    </div>
                    <div class="sign-div">
                        <span class="sign-span">企业描述：</span>
                        <p class="sign-p">{{item.cdescription}}</p>
                    </div>
                    <div>
                        <span>招聘岗位：</span>
                        <p>{{item.jobsTitle}}</p>
                    </div>
                    <div>
                        <span>工作年限：</span>
                        <p>{{item.yearsTitle}}</p>
                    </div>
                    <div>
                        <span>岗位薪资：</span>
                        <p>{{item.salaryTitle}}</p>
                    </div>
                    <div class="sign-div" style="margin-bottom:30px;">
                        <span class="sign-span">岗位描述：</span>
                        <p class="sign-p">{{item.idescription}}</p>
                    </div>
                    <div class="btn-blue btn-sign" @click="submit()">
                        <router-link to="">发送简历</router-link>
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
            itemId: '',
            personalId: '',
            text: '',
            popup: false,
            list: []
        }
    },
    mounted() {
        this.itemId = this.$route.params.id                //列表路径id
        this.personalId = this.$route.query.personalId     //url参数
        this.$ajax({
            method: 'get',
            url: this.psta + '/item/detail?itemId=' + this.itemId,
        })
            .then(response => {
                //console.log(response)
                this.list = response.data.object;
                //console.log(this.list)
            })
            .catch(error => {
                console.log(error);
                //alert('网络错误，不能访问');
            });
    },
    methods: {
        submit() {
            let formData = new FormData();
            formData.append('itemId', this.itemId);
            formData.append('personalId', this.personalId)
            formData.append('companyId', this.list[0].companyId)
            this.$ajax({
                method: 'post',
                url: this.psta + '/item/giveResume',
                data: formData

            })
                .then(response => {
                    //console.log(response)
                    let list = response.data.object;
                    console.log(list)
                    if (list == 1) {
                        this.popup = true;
                        this.text = '简历投递成功'
                    } else {
                        this.popup = true;
                        this.text = '你已经投递过该岗位'
                    }
                })
                .catch(error => {
                    console.log(error);
                    //alert('网络错误，不能访问');
                });
        }
    },
    watch: {
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
    height: 30px;
    margin-top: 10px;
    border-bottom: 0.5px solid #81959c;
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
  .sign-div {
    height: 50px;
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
  border: none !important;
}
</style>

