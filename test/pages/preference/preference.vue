<template>
	<view class="container">
		<image class="background-image" :src="backgroundImage" mode="widthFix"></image>

		<view class="text-content">
			<text class="question">你的性别是？</text>
		</view>

		<view class="gender-options">
			<view class="gender-option" :class="{ 'selected': selectedGender === 'female' }"
				@click="selectGender('female')">
				<image class="gender-icon" src="/static/female.png"></image> <!-- 替换为女性图片 -->
			</view>

			<view class="gender-option" :class="{ 'selected': selectedGender === 'male' }"
				@click="selectGender('male')">
				<image class="gender-icon" src="/static/male.png"></image> <!-- 替换为男性图片 -->
			</view>

			<view class="gender-option" :class="{ 'selected': selectedGender === 'other' }"
				@click="selectGender('other')">
				<image class="gender-icon" src="/static/4.png"></image> <!-- 替换为其他图片 -->
			</view>
		</view>


		<view class="gender-options1">
			<!-- 性别标签 -->
			<text class="gender-label">女生</text>
			<text class="gender-label">男生</text>
			<text class="gender-label">其他</text>
		</view>

	</view>


	<view class="button-container">
		<view class="continue-button" @click="nextStep">
			<text class="arrow">→</text>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				selectedGender: null,
				userId: '',
				username: '',
				backgroundImage: '/static/picture1.png', // 确保背景图片路径正确
			};
		},
		onLoad(options) {
			// 从路由参数中获取 userId 和 username
			this.userId = options.userId;
			this.username = decodeURIComponent(options.username);
			console.log('User ID:', this.userId);
			console.log('Username:', this.username);
		},
		methods: {
			selectGender(gender) {
				this.selectedGender = gender;
			},
			nextStep() {
				if (this.selectedGender) {
					// 保存性别信息
					uni.setStorageSync('gender', this.selectedGender);
					// 导航到下一页，并传递所有参数
					uni.navigateTo({
						url: `/pages/preference/preference1?userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.selectedGender}`
					});
				} else {
					uni.showToast({
						title: '请选择性别',
						icon: 'none'
					});
				}
			},
		},
	};
</script>

<style scoped>
	@import url("common.css");
	/* 容器设置 */
	.container {
		display: flex;
		flex-direction: column;
		background-color: #1c1c1e;
		padding: 40px 20px;
	}

	/* 背景图片 */
	.background-image {
		position: absolute;
		top: 40px;
		right: 0px;
		width: 30%;
		height: 100vh;
		/* 确保背景图片覆盖整个视窗 */
		z-index: 1;
		/* 确保背景图片位于内容之下 */
	}

	/* 文本内容设置 */
	.text-content {
		margin-top: 60px;
		margin-bottom: 70px;
	}

	.question {
		font-size: 20px;
		color: #ffffff;
		margin-bottom: 8px;
	}

	.subtitle {
		font-size: 14px;
		color: #8e8e93;
	}

	/* 性别选项设置 */
	.gender-options {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 160px;
		gap: 10px;
		/* 控制选项之间的间距 */
	}

	.gender-options1 {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 10px;
		gap: 10px;
		/* 控制选项之间的间距 */
	}

	.gender-option {
		width: 80px;
		height: 80px;
		background-color: #2c2c2e;
		border-radius: 100rpx;
		/* 确保圆形 */
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid transparent;
	}

	.gender-option.selected {
		border-color: #30d158;
	}

	/* 调整 gender-icon 的样式以适应图片大小 */
	.gender-icon {
		width: 66px;
		/* 根据实际图片尺寸调整 */
		height: 60px;
		/* 根据实际图片尺寸调整 */
		margin-bottom: 5px;
	}


	/* 性别标签设置 */
	.gender-label {
		font-size: 14px;
		color: #ffffff;
		margin-bottom: 500px;
	}
</style>