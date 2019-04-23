<template>
  <div class="home">
    <div class="weui-toptips weui-toptips_warn js_tooltips">错误提示</div>

    <div class="container" id="container">
	
	    <div class="page__hd">
	        <h1 class="page__title">您的申请已受理</h1>
	        <p class="page__desc">申请查询编号：xxxxxxxxxxx，点击查询按钮跳转到查询页面进行进度查询。</p>
	    </div>
	
	</div>	
  </div>
</template>

<script>
import { Panel } from 'vant';

export default {
	components: {
		[Panel.name]: Panel
	}
};
</script>

<style scoped>
.page__hd {
	padding: 40px
}
.page__bd_spacing {
	padding: 0 15px
}
</style>