<template>
	<van-card
	  :desc="newsDate.author_name"
	  :title="newsDate.title"
	  :thumb="newsDate.thumbnail_pic_s"
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
    newsDate: Object
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