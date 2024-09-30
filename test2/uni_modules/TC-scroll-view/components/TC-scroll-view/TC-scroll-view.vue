<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view>
			<view class="title">
				<text>纵向滚动</text>
			</view>
			<view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
					<view v-for="(item,index) in tupian" :key="item"> 
					<image class="Y-item"  :src="item" mode=""></image>	
					</view>
				</scroll-view>
			</view>
			
			
			<view style="margin-top: 50rpx; text-align: center;" @tap="goTop" >
				点击这里返回顶部
			</view>

			<view class="title">
				<text>横向滚动</text>
			</view>
			<view>
				<scroll-view class="H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<image v-for="(item,index) in tupian" :key="item" :src="item" mode=""></image>
				</scroll-view>
			</view>
			<view ></view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				tupian: [
					'https://images.pexels.com/photos/133953/pexels-photo-133953.jpeg?auto=compress&cs=tinysrgb&w=1600',
					'https://images.pexels.com/photos/2948636/pexels-photo-2948636.jpeg?auto=compress&cs=tinysrgb&w=1600',
					'https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=1600',
				]
			}
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向值已被修改为 0"
				})
			}
		}
	}
</script>
<style>
	.title{
	 text-align: center;	
	 padding-bottom: 50rpx;
	 padding-top: 50rpx;
	}
	.title text{
	font-weight: bold;	
	}
	.Y {
		height: 300rpx;
	}

	.H {
		white-space: nowrap;
		width: 100%;
	}

	.Y-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
</style>