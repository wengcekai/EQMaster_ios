<template>
	<view class="dialog-container">
		<view class="header">
			<image class="avatar" :src="avatar" />
			<view class="name">{{ name }}</view>
		</view>
		<view class="dialog-box">
			<text class="dialog-text">{{ dialog }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			avatar: {
				type: String,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			dialog: {
				type: String,
				required: true
			}
		}
	};
</script>

<style>
	.dialog-container {
		width: 90%;
		margin: 20rpx;
		display: flex;
		flex-direction: column;
	}

	.header {
		display: flex;
		align-items: center;
	}

	.avatar {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin-right: 10rpx;
	}

	.name {
		background-color: #FDEDC8;
		/* 设置为与图片相近的颜色 */
		padding: 5rpx 10rpx;
		border-radius: 10rpx;
		font-weight: bold;
		color: #333;
	}

	.dialog-box {
		background-color: #3A3A3A;
		/* 深色背景 */
		border-radius: 10rpx;
		padding: 20rpx;
		margin-top: 10rpx;
	}

	.dialog-text {
		font-size: 16px;
		color: #FFF;
		/* 白色文字 */
		line-height: 1.5;
	}
</style>