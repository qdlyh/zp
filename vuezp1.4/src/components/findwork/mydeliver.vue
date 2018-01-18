<template>
    <div>
        <div class="findwork">
            <div class="work-list">
                <div class="list-box" v-for="(item,index) in list" :key="index">
                    <router-link to="/companylist">
                        <span class="left">
                            <img v-lazy="item.src" alt="">
                        </span>
                        <span class="right">
                            <h3>{{item.title}}</h3>
                            <p class="sign-p">{{item.itemp}}</p>
                            <i>{{item.itemq}}</i>
                            <i class="sign-i">月薪：{{item.itemw}}元</i>
                            <p class="describe">{{item.iteme}}</p>
                            <p>{{item.itemr}}</p>
                            <p class="time">投递时间：{{item.time}}</p>
                        </span>
                    </router-link>
                </div>
            </div>
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
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          time: '2017-11-11',
          iteme:
            '主要负责公司账单主要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          time: '2017-11-11',
          iteme:
            '主要负责公司账单主要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          time: '2017-11-11',
          iteme:
            '主要负责公司账单主要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          time: '2017-11-11',
          iteme:
            '主要负责公司账单主要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          time: '2017-11-11',
          iteme:
            '主要负责公司账单主要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
$text: #535353;
.findwork {
  .work-list {
    padding: 10px;
    .list-box {
      width: 100%;
      background: #fff;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.7);
      margin-bottom: 10px;
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
      .sign-i {
        padding-left: 10px;
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


