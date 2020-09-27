<template>
  <div class="footer">
	<van-tabbar v-model="active">
	  <van-tabbar-item icon="home-o" to="home">首页</van-tabbar-item>
	  <van-tabbar-item icon="friends-o" to="info" dot>申请</van-tabbar-item>
	  <van-tabbar-item icon="search" to="search">查询</van-tabbar-item>
	  <van-tabbar-item icon="setting-o" to="user" info="5">设置</van-tabbar-item>
	</van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
	name: 'apo-foot',
	components: {
		[Tabbar.name]: Tabbar,
		[TabbarItem.name]: TabbarItem
	},
    data () {
      return {
      	active: 0
      }
    }
}

</script>