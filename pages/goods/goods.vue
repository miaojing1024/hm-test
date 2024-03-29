<template>
	<view>
		<view class="hot-good-body"><GoodList :hotGoodList="hotGoodList" @clickDetail="clickDetail" /></view>
		<view class="isOver" v-if="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
import http from '@/api/index.js';
import { Loading } from 'vant';
export default {
	components: {
		GoodList: () => import('../../components/GoodList/GoodList')
	},
	data() {
		return {
			hotGoodList: [],
			// 当前页数
			pageindex: 1,
			flag: false
		};
	},
	onLoad() {
		this.getgoods();
	},
	// 上滑加载
	onReachBottom() {
		if (this.hotGoodList.length < this.pageindex * 10) return (this.flag = true);
		this.pageindex++;
		this.getgoods();
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.pageindex = 1;
		this.hotGoodList = [];
		this.flag = false;

		setTimeout(() => {
			this.getgoods(() => {
				uni.stopPullDownRefresh();
			});
		}, 1000);
	},
	methods: {
		async getgoods(callBack) {
			const data = await http.getgoods({ pageindex: this.pageindex });
			this.hotGoodList = [...this.hotGoodList, ...data.message];
			callBack && callBack();
		},
		clickDetail(id) {
			uni.navigateTo({
				url: `/pages/goodsDetail/goodsDetail?id=${id}`
			});
		}
	}
};
</script>

<style lang="less" scoped>
.isOver {
	text-align: center;
}
</style>
