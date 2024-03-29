<template>
	<view class="pics-box">
		<scroll-view scroll-y="true" class="pics-left-box">
			<view v-for="(item, index) in leftMean" :key="item.id" :class="active == index ? 'active' : ''" @click="leftMeanClick(item.id, index)">{{ item.title }}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="pics-right-box">
			<view><image @click="previewImg('http://destiny001.gitee.io/image/ban3.jpg')" src="http://destiny001.gitee.io/image/ban3.jpg"></image></view>
		</scroll-view>
	</view>
</template>

<script>
import http from '@/api/index.js';
import axios from 'axios';
export default {
	data() {
		return {
			active: 0,
			leftMean: [
				{ title: '家居生活', id: 14 },
				{ title: '摄影设计', id: 15 },
				{ title: '明星美女', id: 16 },
				{ title: '空间设计', id: 17 },
				{ title: '户型装饰', id: 18 },
				{ title: '广告摄影', id: 19 },
				{ title: '摄影学习', id: 20 },
				{ title: '摄影器材', id: 21 },
				{ title: '明星写真', id: 22 },
				{ title: '清纯甜美', id: 23 },
				{ title: '古典美女', id: 24 }
			]
		};
	},
	mounted() {
		this.getimgcategory();
		// this.test()
	},
	methods: {
		// 获取leftMean数据
		async getimgcategory() {
			let data = await http.getimgcategory();
			this.leftMeanClick(this.leftMean[0].id, 0);
		},
		// 获取二级数据
		async getimages(id) {
			let data = await http.getimages(id);
		},
		leftMeanClick(id, index) {
			console.log(id);
			this.active = index;
			this.getimages(id);
		},
		// test(){
		// 	axios.get("http://localhost:8082/api/getimgcategory").then((res)=>{
		// 		console.log(res)
		// 	})
		// }
		previewImg(url){
			console.log(url)
			uni.previewImage({
				urls:url,
				current:url
			})
		}
	}
};
</script>

<style lang="less" scoped>
.pics-box {
	display: flex;
	height: 100%;
	.pics-left-box {
		width: 200rpx;
		height: 100%;
		flex-shrink: 0;
		border-right: 1px solid #eee;
		view {
			height: 80px;
			line-height: 80px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active {
			background-color: green;
		}
	}
	.pics-right-box{
		width: 100%;
		image{
			width: 100%;
		}
	}
}
</style>
