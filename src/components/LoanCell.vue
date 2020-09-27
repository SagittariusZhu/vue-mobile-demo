<template>
	<van-card
	  :desc="newsData.author_name"
	  :title="newsData.title"
	  :thumb="newsData.thumbnail_pic_s"
	>
	</van-card>	
</template>

<script>
import { Card, Button } from "vant";

export default {
  components: {
    [Card.name]: Card,
    [Button.name]: Button
  },
  props: {
    newsData: Object
  },
  data () {
    return {
    }
  }
};
</script>

<style>
.van-card__title {
	max-width: 120px;
}
</style>