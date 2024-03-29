<template>
	<view class="good-body">
		<view class="good-box" v-for="item in hotGoodList" :key="item.id" @click="clickDetail(item.id)">
			<view class="good-img"><image :src="item.img_url" mode=""></image></view>
			<view class="good-price">
				<text>${{ item.sell_price }}</text>
				<text>${{ item.market_price }}</text>
			</view>
			<view class="good-title">{{ item.title }}</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'GoodList',
	props: {
		hotGoodList: {
			type: Array
		}
	},
	data() {
		return {};
	},
	methods: {
		clickDetail(id) {
			this.$emit("clickDetail",id)
		}
	}
};
</script>

<style lang="less">
@mainColor: #b50e03;
.good-body {
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
}
.good-box {
	background: #fff;
	width: 47%;
	padding: 50rpx 20rpx;
	box-sizing: border-box;
	margin: 10rpx;
	.good-img {
		width: 100%;
		margin-bottom: 15rpx;
		image {
			width: 100%;
			height: 150px;
			display: block;
		}
	}
	.good-price {
		text:nth-of-type(1) {
			color: @mainColor;
		}
		text:nth-of-type(2) {
			color: #999;
			text-decoration: line-through;
		}
	}
}
</style>
