<template>
  <div class="products">
	<van-radio-group v-model="radio">
	<van-list
	  v-model="loading"
	  :finished="finished"
	  finished-text="没有更多了"
	  @load="onLoad"
	>
	  <van-radio 
	  	v-for="item in list"
	    :key="item.id"
	    :name="item.id"
	  >
		  <apo-cell
			:newsData="item"
			:key="item.id"
		  />
	  </van-radio>
	</van-list>
	</van-radio-group>

  </div>
</template>

<script>
import { RadioGroup, Radio, List } from 'vant';
import LoanCell from '@/components/LoanCell.vue';
import api from './../axios/api.js'

export default {
  components: {
	  [RadioGroup.name]: RadioGroup,
	  [Radio.name]: Radio,
	  [List.name]: List,
	  'apo-cell': LoanCell
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
	  radio: '1'
    };
  },

  methods: {
    onLoad() {
		var detail = {type: "top", key: "123456"};
		var data = "detail=\""+JSON.stringify(detail)+"\"&target=";
      // 异步更新数据
      setTimeout(() => {
		  api.getNews('/news/index', data)
	      .then(res => {
	        console.log(res);
	        this.list = res.articles;
	      })
		  .catch(error => {
			  console.log(error);
			  this.finished = true;
		  });
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style scoped>
.products {
	padding: 20px;
}
</style>