<template>
	<view class="feedback-container">
		<view class="title"><text>{{ title }}</text></view>
		<view class="wording">{{ wording }}</view>
		<view class="button-container">
			<button class="action-button" @tap="onContinue">继续</button>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			wording: {
				type: String,
				required: true
			}
		},
		methods: {
			onContinue() {
				// 按钮点击事件
				this.$emit('continue');
			}
		}
	}
</script>

<style scoped>
	.feedback-container {
		background-color: #E3F8C8;
		border-radius: 12px;
		padding: 16px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		width: 100%;
		height: 200px;
		position: absolute;
		bottom: 0;
	}

	.title {
		font-weight: 700;
		font-size: 17px;
		color: rgba(49, 91, 0, 1);
		margin-bottom: 8px;
	}

	.wording {
		font-size: 16px;
		color: #3E3E3E;
		margin-bottom: 16px;
	}

	.button-container {
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
	}

	.action-button {
		background-color: #A9E55B;
		color: #3E3E3E;
		border-radius: 50px;
		font-size: 16px;
		height: 50px;
		width: 100%;
		line-height: 50px;
		text-align: center;
		border: none;
	}
</style>