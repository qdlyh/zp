<template>
  <div>
    <div class="findwork">
      <form action="" id="form">
        <span>市:</span>
        <select v-model="selected">
          <option v-for="(data,index) in cityData" :value="data.id" :key="index">
            {{data.title}}
          </option>
        </select>
        <span>区:</span>
        <select v-model="myArea">
          <option v-for="(data,index) in selection" :value="data.id" :key="index">
            {{data.title}}
          </option>
        </select>
        <span>类型:</span>
        <select v-model="search">
          <option value="" v-for="(item,index) in searchData" :key="index" :value="item.id">{{item.title}}</option>
        </select>
      </form>
      <!-- <span>值：{{selected}}{{myArea}}{{search}}</span> -->
      <div class="ifshow" v-if="ifshow==true||elshow==true">
        <p>抱歉！该地区没有找到您需要的职位</p>
      </div>
      <div id="pullTo" v-else>
        <pull-to :top-load-method="refresh" :bottom-load-method="loadmore">
          <loading v-show="loading"></loading>
          <div class="work-list">
            <div class="list-box" v-for="(item,index) in list" :key="index">
              <router-link :to="{ name: 'companylist', params: { id: item.itemId }}">
                <span class="left">
                  <img v-lazy="item.headimgurl" alt="">
                </span>
                <span class="right">
                  <h3>{{item.name}}</h3>
                  <p class="sign-p">{{item.natureTitle}}&nbsp;|&nbsp;{{item.sizeTitle}}&nbsp;|&nbsp;{{item.scope}}</p>
                  <i>{{item.jobsTitle}}&nbsp;&nbsp;&nbsp;月薪：{{item.salaryTitle}}元</i>
                  <p class="describe">{{item.cdescription}}</p>
                  <p>{{item.address}}</p>
                  <p>{{item.typessTitle}}</p>
                </span>
              </router-link>
            </div>
          </div>
        </pull-to>
      </div>
      <gotop></gotop>
    </div>
  </div>
</template>
<script>
import gotop from "../../common/gotop";
import loading from "../../common/loading";
import PullTo from "vue-pull-to";
export default {
  components: {
    PullTo,
    loading,
    gotop
  },
  data() {
    return {
      ifshow: false,
      elshow: false,
      loading: false,
      qualification: '',
      number: '',
      address: '',
      typess: '',
      jobs: '',
      salary: '',
      years: '',
      pageNow: 2,
      search: '',
      searchData: [
        // { title: '所有', id: 0 }, { title: '全职', id: 321 }, { title: '兼职', id: 1233 }
      ],
      selected: '',
      myArea: '',
      cityData: [
        //   {
        //     title: '城市',
        //     area: [
        //       {
        //         text: '市区'
        //       },
        //     ]
        //   },
        //   {
        //     title: '广州市',
        //     area: [
        //       {
        //         text: '市区0'
        //       },
        //       {
        //         text: '天河区'
        //       },
        //       {
        //         text: '白云区'
        //       },
        //       {
        //         text: '海珠区'
        //       }
        //     ]
        //   },
        //   {
        //     title: '广州市1',
        //     area: [
        //       {
        //         text: '市区1'
        //       },
        //       {
        //         text: '天河区1'
        //       },
        //       {
        //         text: '白云区1'
        //       },
        //       {
        //         text: '海珠区1'
        //       }
        //     ]
        //   },
        //   {
        //     title: '广州市2',
        //     area: [
        //       {
        //         text: '市区2'
        //       },
        //       {
        //         text: '天河区2'
        //       },
        //       {
        //         text: '白云区2'
        //       },
        //       {
        //         text: '海珠区2'
        //       }
        //     ]
        //   }
      ],
      list: [
        // {
        //   src: require('../../images/logo.png'),
        //   title: '嘻嘻哈哈有限公司',
        //   itemp: '合资|100-150|房地产',
        //   itemq: '助理会计',
        //   itemw: '3000-4500',
        //   iteme:
        //     '主要负责公司账单主要负责公司账兼职主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
        //   itemr: '广东省广州市白云区鸣泉居',
        //   jz: '全职'
        // },
        // {
        //   src: require('../../images/logo.png'),
        //   title: '嘻嘻哈哈有限公司1',
        //   itemp: '合资|100-150|房地产',
        //   itemq: '助理会计',
        //   itemw: '3000-4500',
        //   iteme:
        //     '主要负责公司账单主要负责公司账兼职主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
        //   itemr: '广东省广州市白云区鸣泉居',
        //   jz: '全职'
        // },
        // {
        //   src: require('../../images/logo.png'),
        //   title: '嘻嘻哈哈有限公司2',
        //   itemp: '合资|100-150|房地产',
        //   itemq: '助理会计',
        //   itemw: '3000-4500',
        //   iteme:
        //     '主要负责公司账单主要负责公司账兼职主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
        //   itemr: '广东省广州市白云区鸣泉居',
        //   jz: '全职'
        // },
        // {
        //   src: require('../../images/logo.png'),
        //   title: '嘻嘻哈哈有限公司全职a',
        //   itemp: '合资|100-150|房地产',
        //   itemq: '助理会计',
        //   itemw: '3000-4500',
        //   iteme:
        //     '主要负责公司账单主全职要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
        //   itemr: '广东省广州市白云区鸣泉居',
        //   jz: '兼职'
        // },
        // {
        //   src: require('../../images/logo.png'),
        //   title: '嘻嘻哈哈有限公司b',
        //   itemp: '合资|100-150|房地产',
        //   itemq: '助理会计',
        //   itemw: '3000-4500',
        //   iteme:
        //     '主要负责公司账单主全职要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
        //   itemr: '广东省广州市白云区鸣泉居',
        //   jz: '兼职'
        // },
      ],
    }
  },
  mounted() {
    this.$ajax({
      method: 'get',
      url: this.psta + '/base/itemInfo',
    })
      .then(response => {
        //console.log(response)
        this.cityData = response.data.object.address[0].menus;
        this.searchData = response.data.object.typess;
        this.searchData.unshift({ title: '所有', id: 0 })
        this.selected = this.cityData[0].id
        this.search = this.searchData[0].id
        //拿到当前区id
        for (let i = 0; i < this.cityData.length; i++) {
          if (this.cityData[i].id === this.selected) {
            this.myArea = this.cityData[i].menus[0].id
          }
        }
        //console.log(this.searchData[0].title)
      })
      .catch(error => {
        console.log(error);
        //alert('网络错误，不能访问');
      });
  },
  methods: {
    getlist(loaded) {
      this.$ajax.interceptors.request.use((config) => {
        //在请求发送之前做一些事
        //console.log(config)
        this.ifshow = false;
        this.elshow = false;
        return config;
      }, function (error) {
        //当出现请求错误是做一些事
        alert('出错了!')
        return Promise.reject(error);
      });
      this.$ajax({
        method: 'get',
        url: this.psta + '/item/list' + '?city=' + this.selected + '&area=' + this.myArea + '&pageNow=' + this.pageNow + '&typess=' + this.search,
      })
        .then(response => {
          //console.log(response)
          let listPage = response.data.object.list;

          for (let i = 0; i < listPage.length; i++) {
            this.list.push(listPage[i])
          }
          this.pageNow++
          loaded("done");

        })
        .catch(error => {
          console.log(error);
          //alert('网络错误，不能访问');
        });
    },
    refresh(loaded) {
      this.list = [];
      this.pageNow = 1;
      this.getlist(loaded);
    },
    loadmore(loaded) {
      this.getlist(loaded)
    },
  },
  computed: {
    selection() {
      for (let i = 0; i < this.cityData.length; i++) {
        //console.log(this.cityData[i].title, this.cityData[i].menus[0].title)
        if (this.cityData[i].id === this.selected) {
          this.myArea = this.cityData[i].menus[0].id
          return this.cityData[i].menus;
        }
      }
    },
    // listData() {
    //   // var search = this.search
    //   // //console.log(search)
    //   // if (search == this.searchData[0].id) {
    //   //   this.elshow = false;
    //   //   return this.list;
    //   // }
    //   // if (search == this.searchData[0].title && this.selected == this.cityData[0].title) {
    //   //  // console.log(search, this.cityData[0].title)
    //   //   return this.list;
    //   // }
    //   // var all = [];
    //   // if (search) {
    //   //   for (var i = 0; i < this.list.length; i++) {
    //   //     if (this.list[i].typessTitle.toLowerCase().indexOf(search) != -1) {
    //   //       //console.log(this.list[i])
    //   //       all.push(this.list[i]);
    //   //     }
    //   //   }

    //   //   if (all == '') {
    //   //     this.elshow = true;
    //   //   } else {
    //   //     this.elshow = false;
    //   //   }

    //   //   return all;
    //   // }
    //   return this.list;
    // }
    // listData() {
    //   var search = this.search
    //   if (search) {
    //     return this.list.filter(function(product) {
    //       console.log(product.typessTitle)
    //       return product.typessTitle.toLowerCase().indexOf(search) > -1
    //     })
    //   }
    //   return this.list
    // }
  },
  watch: {
    myArea: {
      handler(data) {
        this.$ajax({
          method: 'get',
          url: this.psta + '/item/list' + '?city=' + this.selected + '&area=' + this.myArea + '&typess=' + this.search,
        })
          .then(response => {
            //console.log(response)
            this.list = response.data.object.list;
            //console.log(this.list)
          })
          .catch(error => {
            console.log(error);
            //alert('网络错误，不能访问');
          });
      },
      deep: true
    },
    search: {
      handler(data) {
        this.$ajax({
          method: 'get',
          url: this.psta + '/item/list' + '?city=' + this.selected + '&area=' + this.myArea + '&typess=' + this.search,
        })
          .then(response => {
            this.list = response.data.object.list;
            //console.log(response)
          })
          .catch(error => {
            console.log(error);
            //alert('网络错误，不能访问');
          });
      },
      deep: true
    },
    list: {
      handler(data) {
        if (this.list.length == 0) {
          this.ifshow = true;
          this.loading = true;
          //console.log(this.ifshow)
        } else {
          this.ifshow = false;
          this.loading = false;
        }
      },
      deep: true
    },
  }

}
</script>
<style lang="scss" scoped>
$text: #535353;

#pullTo {
  position: absolute;
  width: 100%;
  top: 50px;
  bottom: 0px;
  overflow: hidden;
}

.findwork {
  #form {
    background: #fff;
    height: 50px;
    line-height: 50px;
    span {
      color: $text;
      font-size: 14px;
      padding: 0 7px;
    }
    select {
      width: 20%;
      height: 30px;
      border: none;
      border: 0.5px solid #ccc;
    }
  }
  .ifshow {
    width: 100%;
    height: 100vh;
    background: #fff;
    p {
      text-align: center;
      padding-top: 50%;
      font-size: 16px;
      color: $text;
    }
  }
  .work-list {
    padding: 10px;
    div:first-child {
      margin-top: 0px;
    }
    .list-box {
      width: 100%;
      background: #fff;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.7);
      margin-top: 10px;
      a {
        display: flex;
        justify-content: space-between;
      }
      h3 {
        font-weight: normal;
        font-size: 16px;
        color: $text;
        margin-top: 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      p {
        color: $text;
        font-size: 12px;
        margin: 3px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      i {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-size: 14px;
        color: #928a75;
      }
      .left {
        display: flex;
        align-items: center;
        padding: 10px;
      }
      img {
        width: 120px;
        height: 120px;
      }
      .describe {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        padding-left: 20px;
      }
      .sign-p {
        padding-left: 20px;
      }
    }
  }
}
</style>


