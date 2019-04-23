<template>
    <div class="page__bd page__bd_spacing">

		<div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">一、基本信息</div>
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">企业名称</h4>
					<div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text" placeholder="请输入企业名称">
		                </div>
		            </div>
                </div>
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">企业地址</h4>
					<div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text" placeholder="请输入企业地址">
		                </div>
		            </div>
                </div>
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">企业联系人</h4>
					<div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text" placeholder="请输入企业联系人">
		                </div>
		            </div>
                </div>
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">企业联系人电话</h4>
					<div class="weui-cell weui-cell_select weui-cell_select-before">
		                <div class="weui-cell__hd">
		                    <select class="weui-select" name="select2">
		                        <option value="1">+86</option>
		                        <option value="2">+80</option>
		                        <option value="3">+84</option>
		                        <option value="4">+87</option>
		                    </select>
		                </div>
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入号码">
		                </div>
		            </div>
                </div>
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">企业联系人邮箱</h4>
					<div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text" placeholder="请输入企业联系人邮箱">
		                </div>
		            </div>
                </div>
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">上年度销售收入（万元）</h4>
					<div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入上年度销售收入（万元）">
		                </div>
		            </div>
                </div>
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">成立年限</h4>
					<div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <select class="weui-select" name="select-year">
                                <option value="1">3年（含）以内</option>
                                <option value="2">3年-7年以上</option>
                                <option value="3">7年以上</option>
		                    </select>
		                </div>
		            </div>
                </div>
            </div>
        </div>

		<div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">二、融资情况</div>
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">是否获得过贷款</h4>
					<div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <select class="weui-select" name="select-load">
                                <option value="1">是</option>
                                <option value="2">否</option>
		                    </select>
		                </div>
		            </div>
                </div>
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">3月末贷款余额（万元）</h4>
					<div class="weui-cell">
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入3月末贷款余额（万元）">
		                </div>
		            </div>
                </div>
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">贷款起始时间</h4>
					<div class="weui-cell">
		                <div class="weui-cell__bd">
							<input class="weui-input" type="date" value="" placeholder="请输入贷款起始时间">
		                </div>
		            </div>
                </div>
			
			</div>
		</div>

		<div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">三、融资需求</div>
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">需要中小办协调解决的问题</h4>
					<div class="weui-cell">
		                <div class="weui-cell__bd">
							<textarea class="weui-textarea" placeholder="请具体说明贵公司在近期贷款过程中遇到哪些具体问题需要中小办协调" rows="3"></textarea>
		                </div>
		            </div>
                </div>
			</div>
		</div>

	</div>

</template>

<script>
export default {
}
</script>

<style scoped>
.page__hd {
	padding: 40px
}
.page__bd_spacing {
	padding: 0 15px
}
</style>