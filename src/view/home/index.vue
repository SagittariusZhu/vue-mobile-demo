<template>
  <div class="home">
    <div class="weui-toptips weui-toptips_warn js_tooltips">错误提示</div>

    <div class="container" id="container">
	
	    <div class="page__hd">
	        <h1 class="page__title">欢迎页</h1>
	        <p class="page__desc">本项目基于vant-demo项目，增加了许多实用功能，涉及到了vue+vant+axios+mockjs等项目，是新手开发的良好起点。<br>
			本项目包括home/info/search/user四个页面，由底部导航栏进行切换。</p>
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