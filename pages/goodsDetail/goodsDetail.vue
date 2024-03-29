<template>
	<view class="goods-box">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in thumimages" :key="item.id"><image :src="item.src" mode=""></image></swiper-item>
		</swiper>
		<view class="goods-price">
			<text>￥2195</text>
			<text>￥2499</text>
		</view>
		<view class="goods-title">{{ infoDetails.title }}</view>
		<view class="goods-info">
			<view>货号: {{ infoDetails.goods_no }}</view>
			<view>库存: {{ infoDetails.stock_quantity }}</view>
		</view>
		<view class="goods-content">
			<view class="good-content-tit">详情介绍</view>
			<view class="good-content-info"><rich-text :nodes="desc.content"></rich-text></view>
		</view>
		<view class="zhanwei"></view>
		<view class="goods-nav"><uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" /></view>
	</view>
</template>

<script>
import uniGoodsNav from '../../components/uni-goods-nav/uni-goods-nav.vue';
import http from '@/api/index.js';
export default {
	components: { uniGoodsNav },
	data() {
		return {
			infoDetails: [],
			thumimages: [],
			desc: [],
			options: [
				{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
					text: '客服'
				},
				{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
					text: '店铺'
				},
				{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
					text: '购物车',
					info: 12
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			]
		};
	},
	onLoad() {
		this.getinfo();
		this.getthumimages();
		this.getdesc();
	},
	methods: {
		async getinfo() {
			const data = await http.getinfo(this.$route.query.id);
			this.infoDetails = data.message[0];
		},
		async getthumimages() {
			const data = await http.getthumimages(this.$route.query.id);
			this.thumimages = data.message;
		},
		async getdesc() {
			const data = await http.getdesc(this.$route.query.id);
			this.desc = data.message[0];
		},
		onClick(val){
			console.log(val)
		},
		buttonClick(val){
			console.log(val)
		}
	}
};
</script>

<style lang="less" scoped>
@mainColor: #b50e03;
.goods-box {
	.swiper {
		width: 750rpx;
		height: 700rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.goods-price {
		padding: 10rpx;
		text:nth-of-type(1) {
			color: @mainColor;
		}
		text:nth-of-type(2) {
			color: #999;
			text-decoration: line-through;
		}
	}
	.goods-title {
		padding: 10rpx;
		border-bottom: 10rpx solid #eee;
	}
	.goods-info {
		padding: 10rpx;
		line-height: 70rpx;
		border-bottom: 10rpx solid #eee;
	}
	.goods-content {
		box-sizing: border-box;
		padding: 10rpx;
		width: 100%;
		.good-content-tit {
			padding: 10rpx;
			padding-left: 0;
			border-bottom: 1px solid #eee;
			margin-bottom: 10rpx;
		}
		.good-content-info {
			width: 100%;
			/deep/p {
				width: 100%;
				img {
					width: 100%;
				}
			}
		}
	}
	.zhanwei {
		height: 100rpx;
	}
	.goods-nav {
		width: 100%;
		position: fixed;
		bottom: 0;
	}
}
</style>
