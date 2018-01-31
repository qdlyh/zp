<template>
  <div>
    <div id="pullTo">
      <pull-to :top-load-method="refresh" :bottom-load-method="loadmore">
        <div class="findwork">
          <div class="work-list">
            <div class="list-box" v-for="(item,index) in list" :key="index">
              <router-link :to="{ name: 'mydeliver', params: { id: item.itemId }}">
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
                  <p class="time">投递时间：{{item.createdDate}}</p>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </pull-to>
    </div>
    <gotop></gotop>
  </div>
</template>
<script>
import gotop from "../../common/gotop";
import PullTo from "vue-pull-to";
export default {
  components: {
    PullTo,
    gotop
  },
  data() {
    return {
      pageNow: 2,
      list: []
    }
  },
  mounted() {
    this.$ajax({
      method: 'get',
      url: this.psta + '/item/myGive?personalId=1',
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
    getList(loaded) {
      this.$ajax({
        method: 'get',
        url: this.psta + '/item/myGive' + '?personalId=1' + '&pageNow=' + this.pageNow,
      })
        .then(response => {
          //console.log(response)
          let listPage = response.data.object;
          for (let i = 0; i < listPage.length; i++) {
            this.list.push(listPage[i])
          }
          if (listPage.length != 0) {
            this.pageNow++;
          }
          loaded('done');
        })
        .catch(error => {
          console.log(error);
          //alert('网络错误，不能访问');
        });
    },
    refresh(loaded) {
      this.list = [];
      this.pageNow = 1;
      this.getList(loaded);
    },
    loadmore(loaded) {
      this.getList(loaded);
    },
  }
}
</script>
<style lang="scss" scoped>
$text: #535353;

#pullTo {
  position: absolute;
  width: 100%;
  top: 0px;
  bottom: 0px;
  overflow: hidden;
}

.findwork {
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
      .time {
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
        color: #928a75;
        font-size: 12px;
      }
    }
  }
}
</style>


