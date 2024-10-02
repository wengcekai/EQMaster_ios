<template>
	<view class="container">
		<image class="avatar" :src="avatar" mode="aspectFill" />
		<view class="bubble-container">
			<view class="background-parent">
				<image class="character-background" src="/static/battlefield/character_background.png"></image>
			</view>
			<view class="character">{{ character }}</view>
			<text class="wording">{{ wording }}</text>
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
			character: {
				type: String,
				required: true
			},
			wording: {
				type: String,
				required: true
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
		background: transparent;
		border-radius: 12px;
	}

	.avatar {
		width: 400rpx;
		height: 400rpx;
	}

	.bubble-container {
		background-color: #23232a;
		border-radius: 10px;
		padding: 12px;
		color: #FFFFFF;
		max-width: 80%;
		border: solid 2px #eeaf61;
		overflow: visible;
	}

	.character-background {
		display: inline-block;
		padding: 5px 10px;
		width: 20%;
		height: 25px;
		position: absolute;
	}

	.background-parent {
		position: absolute;
		top: -20px;
		width: 100%;
		/*Use height to cut the image*/
		height: 20px;
		overflow: hidden;
	}

	.character {
		color: #000;
		padding: 5px 10px;
		top: -25px;
		height: 25px;
		position: absolute;
	}

	.wording {
		font-size: 16px;
		text-align: left;
		color: #FFFFFF;
	}
</style>