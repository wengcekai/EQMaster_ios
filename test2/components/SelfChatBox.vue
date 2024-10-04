<template>
	<view class="message-container">
		<text class="message-text">{{ message }}</text>
	</view>
</template>
<script>
	export default {
		props: {
			message: {
				type: String,
				required: true
			}
		}
	};
</script>

<style>
	.message-container {
		width: 90%;
		background-color: #FDEDC8;
		/* 浅黄色背景 */
		border-radius: 10px;
		padding: 20rpx;
		box-sizing: border-box;
		border: 2rpx solid #8c5225;
		/* 边框颜色 */
	}

	.message-text {
		font-size: 16px;
		color: #333;
		/* 字体颜色 */
		line-height: 1.5;
	}
</style>