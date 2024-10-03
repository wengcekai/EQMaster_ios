<template>
	<view class="feedback-container" :style="{ backgroundColor: bgColor }">
		<text class="title" :style="{color: fontColor}">{{ title }}
		</text>
		<text class="wording" :style="{color: fontColor}">{{ wording }}</text>
		<view class="button-container">
			<button class="action-button" :style="{
				backgroundColor: buttonBgColor
			}" @tap="onContinue">继续</button>
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
				required: true,
				fontColor: "#fff"
			},
			goodJudge: {
				type: Boolean,
				required: true
			}
		},
		methods: {
			onContinue() {
				// 按钮点击事件
				console.log("emitting event");
				this.$emit('judge', this.goodJudge);
			}
		},
		computed: {
			bgColor() {
				return this.goodJudge ? '#E8FFC4' : '#fff2b4';
			},
			fontColor() {
				return this.goodJudge ? '#315B00' : '#936A15';
			},
			buttonBgColor() {
				return this.goodJudge ? '#A9E55B' : '#FFD044';
			}
		}
	}
</script>

<style scoped>
	.feedback-container {
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