<template>
	<div class="total">
		<div class="head">
			<!-- <img src="" class="logo"> -->
			<div class="file-box">
				<img id="file-img" name="picture" src="../../images/logo.png">
				<input id="file" name="file" type="file">
				<input type="text" hidden>
			</div>
		</div>
		<div class="content">
			<span>单位名称：</span><input type="text" v-model="name"><br>
			<span>单位税号：</span><input type="text" v-model="number"><br>
			<span>单位地址：</span><input type="text" v-model="address"><br>
			<span>电话号码：</span><input type="text" v-model="telephone"><br>
			<span>开户银行：</span><input type="text" v-model="bank"><br>
			<span>银行账号：</span><input type="text" v-model="banknum"><br>
			<div class="btn-blue">
				<a @click="save">保存</a>
			</div>
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
			popup: false,
			text: '',
			id: null,
			userId: 1,
			name: '',
			number: '',
			address: '',
			telephone: null,
			bank: '',
			banknum: null
		}
	},
	mounted() {
		this.$ajax.get(this.psta + '/invoice/invoiceInfo?userId=1')
			.then(res => {
				//console.log(res.data);
				var temp = res.data.object;
				if (temp != null) {
					this.id = temp.id;
					this.name = temp.name;
					this.number = temp.number;
					this.address = temp.address;
					this.telephone = temp.telephone;
					this.bank = temp.bank;
					this.banknum = temp.banknum;

				}
			})
	},
	methods: {
		save() {
			var params = new FormData();
			var json = { 'userId': this.userId, 'name': this.name, 'number': this.number, 'address': this.address, 'telephone': this.telephone, 'bank': this.bank, 'banknum': this.banknum };
			for (let key in json) {
				params.append(key, json[key]);
			}
			if (this.id != null) {
				params.append('id', this.id);
			}
			this.$ajax.post(this.psta + '/invoice/open ', params)
				.then(res => {
					//console.log(res);
					this.popup = true;
					this.text = '保存成功';
				})
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
.file-box {
  width: 100px;
  height: 100px;
  img {
    @extend .file-box;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  input {
    @extend .file-box;
    opacity: 0;
  }
}
.total {
  padding: 10px;
}
.head {
  position: relative;
  width: 100%;
  height: 130px;
  background-color: #81959c;
  .logo {
  }
}
.content {
  background: #fff;
  background: rgba(255, 255, 255, 0.6);
  padding: 10px;
  span {
    font-size: 16px;
    display: inline-block;
    width: 25%;
    color: #535353;
  }
  input {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    outline: none;
    border: 0.5px solid #ccc;
    height: 20px;
    width: 65%;
    // color: $text;
    font-size: 16px;
    padding: 10px;
    margin-top: 10px;
    color: #535353;
    // 下拉列表
  }
  select {
    @extend input;
    height: 40px;
    width: 70%;
    // padding: 0 0 0 10px;
  }
  textarea {
    @extend input;
    height: 50px;
    resize: none;
  }
  .code {
    width: 30%;
  }
  .sendcode {
    width: 26%;
    text-align: center;
    background: #3873cd;
    color: #fff;
    margin-left: 2%;
    border-right: 5px;
  }
  .tip {
    font-size: 14px;
    text-align: center;
    color: #818181;
    margin-top: 20px;
  }
}
</style>