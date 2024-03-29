<template>
	<view>
		<view class="newsList-box" v-for="item in newsDetail" :key="item.id" @click="newsListClick(item.id)">
			<view class="news-img"><image :src="item.img_url" mode=""></image></view>
			<view class="news-content">
				<view class="news-content-top">{{ item.title }}</view>
				<view class="news-content-under">
					<text>发表时间：{{ item.add_time }}</text>
					<text>浏览：{{ item.click }}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		newsDetail: {
			type: Array
		}
	},
	data() {
		return {};
	},
	methods:{
		newsListClick(id){
			this.$emit('newsListClick',id)
		}
	}
};
</script>

<style lang="less" scoped>
@mainColor: #b50e03;
.newsList-box {
	display: flex;
	justify-content: space-between;
	padding: 10rpx;
	border-bottom: 1px solid @mainColor;
	.news-img {
		width: 200rpx;
		height: 150rpx;
		margin-right: 10rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.news-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 14px;
	}
}
</style>
