<template>
	<view class="home">
		<swiper indicator-dots circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in imgList" :key="item.id"><image :src="item.img"></image></swiper-item>
		</swiper>
		<view class="nav">
			<view class="nav-item" v-for="(item, index) in navList" :key="index" @click="navItemClick(item.path)">
				<view class="nav-top"><image :src="item.icon" mode=""></image></view>
				<view class="nav-txt">{{ item.name }}</view>
			</view>
		</view>
		<view class="hot-title"><text>推荐商品</text></view>
		<view class="hot-good-body"><GoodList :hotGoodList="hotGoodList" @clickDetail="clickDetail" /></view>
	</view>
</template>

<script>
import http from '@/api/index.js';
export default {
	components: {
		GoodList: () => import('../../components/GoodList/GoodList')
	},
	data() {
		return {
			imgList: [],
			navList: [
				{ name: '超市', icon: '../../static/logo.png', path: '/pages/goods/goods' },
				{ name: '联系我们', icon: '../../static/logo.png', path: '/pages/contact/contact' },
				{ name: '社区图片', icon: '../../static/logo.png', path: '/pages/pics/pics' },
				{ name: '学习视频', icon: '../../static/logo.png', path: '/pages/videos/videos' }
			],
			hotGoodList: []
		};
	},
	onLoad() {
		this.getlunbo();
		this.getgoods();
	},
	methods: {
		async getlunbo() {
			const data = await http.getlunbo();
			this.imgList = data.message;
		},
		async getlunbo() {
			const data = await http.getlunbo();
			this.imgList = data.message;
		},
		async getgoods() {
			const data = await http.getgoods({ pageindex: 1 });
			console.log(data);
			this.hotGoodList = data.message;
		},
		navItemClick(navPath) {
			uni.navigateTo({
				url: navPath
			});
		},
		clickDetail(id) {
			uni.navigateTo({
				url:`/pages/goodsDetail/goodsDetail?id=${id}`
			})
		}
	}
};
</script>

<style lang="less">
@mainColor: #b50e03;
.home {
	background: #eee;
	swiper {
		width: 750rpx;
		height: 380rpx;
		image {
			height: 100%;
			width: 100%;
		}
	}
	.nav {
		display: flex;
		justify-content: space-evenly;
		padding: 20rpx 0;
		background: #fff;
		margin-bottom: 20rpx;
		.nav-item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 20%;
			.nav-top {
				width: 120rpx;
				height: 120rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.hot-title {
		text-align: center;
		color: @mainColor;
		padding: 30rpx 0;
		background: #fff;
		letter-spacing: 20px;
		margin-bottom: 20rpx;
	}
}
</style>
