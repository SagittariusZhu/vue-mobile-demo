<template>
  <div class="goods">
	<van-list
	  v-model="loading"
	  :finished="finished"
	  finished-text="没有更多了"
	  @load="onLoad"
	>
	  <apo-cell
	    v-for="item in list"
		:newsDate="item"
		:key="item.id"
	  />
	</van-list>

  </div>
</template>

<script>
import { List } from 'vant';
import LoanCell from '@/components/LoanCell.vue';
import api from '../../axios/api.js'

export default {
  components: {
	  [List.name]: List,
	  'apo-cell': LoanCell
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
		  api.getNews('/news/index', 'type=top&key=123456')
	      .then(res => {
	        console.log(res);
	        this.list = res.articles;
	      });
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
