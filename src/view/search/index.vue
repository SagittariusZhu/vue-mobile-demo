<template>
    <div class="search">

		<div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">进度查询</div>
            <div class="weui-panel__bd">
				<van-search placeholder="请输入申请查询编号" v-model="value" @search="onSearch"/>
			</div>
		</div>
		
		<div class="van-hairline--top"></div>
		
		<div :class="showResult">
			<div class="weui_cells_title">申请查询编号：{{value}}</div>
			<van-steps direction="vertical" :active="1">
			  <van-step>
			    <h3>【阿玻罗】申请已预批准</h3>
			    <p>2016-07-11 12:40</p>
			  </van-step>
			  <van-step>
			    <h3>【阿玻罗】申请已提交xx银行</h3>
			    <p>2016-07-11 12:41</p>
			  </van-step>
			  <van-step>
			    <h3>【xx银行】申请已受理</h3>
			  </van-step>
			  <van-step>
			    <h3>【xx银行】申请已通过</h3>
			  </van-step>
			  <van-step>
			    <h3>【xx银行】已放款</h3>
			  </van-step>
			</van-steps>
		</div>
	</div>
</template>

<script>
import { Search, Steps, Step } from 'vant';

export default {
	components: {
		[Search.name]: Search,
		[Steps.name]: Steps,
		[Step.name]: Step
	},
    data() {
      return {
		  value: 'xxxxx',
		  showResult: 'hide'
      };
    },
	methods: {
		onSearch: function() {
			console.log(this.value);
			this.showResult = 'show';
		}
	}
}
</script>

<style scoped>
.search {
	padding: 20px;
}
.van-hairline--top {
    height: 30px;
    background-color: white;
    &::after {
      top: 5px;
    }
}
.show {
	display: block;
}
.hide {
	display: none;
}
</style>