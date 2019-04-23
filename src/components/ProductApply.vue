<template>
<div class="productApply">
    <div class="page__hd">
        <h1 class="page__title">补充申请材料</h1>
	</div>
      <van-cell-group>
        <van-field
          v-model="username"
          label="申请人"
          placeholder="请输入姓名"
          clearable
          right-icon="question-o"
          required
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="password"
          type="password"
          label="设置密码"
          placeholder="请初始化查询密码"
          required
        />
      </van-cell-group>
</div>
</template>

<script>
import { CellGroup, Field } from 'vant';

export default {
	components: {
		[CellGroup.name]: CellGroup,
		[Field.name]: Field
	},
  data() {
    return {
      sms: '',
      value: '',
      password: '',
      username: '',
      username2: '',
      message: '',
      phone: '1365577'
    };
  }
};
</script>

<style lang="less">
.productApply {
  padding: 30px;
}
</style>