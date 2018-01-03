<template>
  <div>
    <div class="findwork">
      <form action="" id="form">
        <span>市:</span>
        <select v-model="selected">
          <option v-for="(data,index) in cityData" :key="index">
            {{data.text}}
          </option>
        </select>
        <span>区:</span>
        <select>
          <option v-for="(area,index) in selection" :key="index">
            {{area.text}}
          </option>
        </select>
        <span>类型:</span>
        <select name="" v-model="search">
          <option value="" v-for="(item,index) in searchData" :key="index">{{item.title}}</option>
        </select>
      </form>
      <span>值：{{search}}</span>
      <div class="work-list">
        <div class="list-box" v-for="(item,index) in listData" :key="index">
          <router-link to="/mydeliver">
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
              <p>{{item.jz}}</p>
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
      myarea:'',
      search: '所有',
      searchData: [{ title: '所有' }, { title: '全职' }, { title: '兼职' }],
      selected: '城市',
      cityData: [
        {
          text: '城市',
          area: [
            {
              text: '市区'
            }
          ]
        },
        {
          text: '广州市',
          area: [
            {
              text: '天河区'
            },
            {
              text: '白云区'
            },
            {
              text: '海珠区'
            }
          ]
        },
        {
          text: '广州市1',
          area: [
            {
              text: '天河区1'
            },
            {
              text: '白云区1'
            },
            {
              text: '海珠区1'
            }
          ]
        },
        {
          text: '广州市2',
          area: [
            {
              text: '天河区2'
            },
            {
              text: '白云区2'
            },
            {
              text: '海珠区2'
            }
          ]
        }
      ],
      list: [
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          iteme:
            '主要负责公司账单主要负责公司账兼职主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居',
          jz: '城市：广州市,市区：白云区,全职,所有'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          iteme:
            '主要负责公司账单主要负责公司账兼职主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居',
          jz: '城市：广州市,市区：白云区,全职,所有'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          iteme:
            '主要负责公司账单主要负责公司账兼职主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居',
          jz: '城市：广州市,市区：天河,全职,所有'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          iteme:
            '主要负责公司账单主全职要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居',
          jz: '城市：佛山市,顺德区：天河,兼职,所有'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          iteme:
            '主要负责公司账单主全职要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居',
          jz: '城市：佛山市,哈哈区：天河,兼职,所有'
        },
        {
          src: require('../../images/logo.png'),
          title: '嘻嘻哈哈有限公司',
          itemp: '合资|100-150|房地产',
          itemq: '助理会计',
          itemw: '3000-4500',
          iteme:
            '主要负责公司账单主全职要负责公司账主要负责主要负责公司账主要负责公司账主要负责公司账主要负责公司账公司账主主要负责公司账主要负责公司账主要负责公司账主要负责公司账要负责公主要负责公司账主要负责公司账司账',
          itemr: '广东省广州市白云区鸣泉居',
          jz: '城市：佛山市,顺德区：天河,兼职,所有'
        }
      ]
    }
  },
  computed: {
    selection: {
      get() {
        return this.cityData.filter(item => {
          console.log(this.selected)
          return item.text == this.selected;
        })[0].area
      }
    },
    listData() {
      //console.log(this.selected)
      var search = this.search
      var all = []
      if (search) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].jz.toLowerCase().indexOf(search) != -1) {
            //console.log(this.list[i])
            all.push(this.list[i])
          }
        }
        return all
      }
      return this.list
    }
  }
}
</script>
<style lang="scss" scoped>
$text: #535353;
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
    }
  }
}
</style>


