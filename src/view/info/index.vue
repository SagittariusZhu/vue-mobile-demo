<template>
	<div class="info">
  
  	<div class="fixed">
		<van-steps :active="active">
			<van-step>填写信息</van-step>
			<van-step>智能匹配</van-step>
			<van-step>产品申请</van-step>
			<van-step>反馈结果</van-step>
		</van-steps>
	</div>
  
	<div class="step-mask"></div>

	<div :is="currentView"></div>
			
	<div class="van-hairline--top"></div>
			
	<van-row>
	  	<van-col offset="6" span="12">
	  		<van-button 
				type="primary" 
				size="large" 
				:text="buttonTip"
				@click="nextStep"
			></van-button>
		</van-col>
	</van-row>
  
	</div>
</template>

<script>
import { Step, Steps, Button, Row, Col } from 'vant';
import InputData from '@/components/InputData';
import Products from '@/components/Products';
import ProductApply from '@/components/ProductApply';
import Feedback from '@/components/Feedback';

export default {
	components: {
		[Step.name]: Step,
		[Steps.name]: Steps,
		[Button.name]: Button,
		[Row.name]: Row,
		[Col.name]: Col,
		InputData,
		Products,
		ProductApply,
		Feedback
	},
	data() {
		return {
			list: [
				'InputData', 
				'Products', 
				'ProductApply',
				'Feedback'
			],
			currentView: 'InputData',
			buttonTip: "下一步",
			active: 0
		};
	},
	methods: {
		nextStep() {
			this.active = ++this.active;
			if (this.active <= 3)
				this.currentView = this.list[this.active];
			else
				this.$router.push("/search");
			
			if (this.active >= 3) {
				this.buttonTip = "查询进度";
			}
		}
	}
};

</script>

<style scoped>
.info {
	padding-bottom: 100px;
}
.fixed {
	position: fixed;
	top:0;
	left:0;
	width:100%;
	z-index:1;
}
.step-mask {
	height: 64px;
}
.van-hairline--top {
    height: 30px;
    background-color: white;
    &::after {
      top: 5px;
    }
}
</style>