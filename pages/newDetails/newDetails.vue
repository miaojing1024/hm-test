<template>
	<view class="newsDetails-box">
		<view class="news-title">{{newsDetails.title}}</view>
		<view class="news-info">
			<text>发表:{{formateTime(newsDetails.add_time)}}</text>
			<text>浏览:{{newsDetails.click}}</text>
		</view>
		<rich-text :nodes="newsDetails.content" :selectable='true'></rich-text>
	</view>
</template>

<script>
import http from '@/api/index.js';
import moment from 'moment'
export default {
	data() {
		return {
			id: '',
			newsDetails:{}
		};
	},
	onLoad(options) {
		// this.id = this.$route.query.id;
		this.id = options.id;
		this.getNewsDetails();
	},
	filters:{
	},
	methods: { 
		async getNewsDetails() {
			let data = await http.getnew(this.id);
			this.newsDetails = data.message[0]
		}, 
		formateTime(val, time = "YYYY-MM-DD HH:mm") {
		  if (!val) return '暂无数据';
		  if(!isNaN(Number(val))) {
		    return moment(Number(val)).format(time);
		  } else if(toString.call(new Date(val))==='[object Date]'){
		    return moment(new Date(val)).format(time);
		  } else {
		    console.log('日期格式不正确!');
		    return ''
		  }
		}
	}
};
</script>

<style scoped lang="less">
.newsDetails-box{
	padding: 20rpx;
	.news-info{
		display: flex;
		justify-content: space-between;
	}
	.news-title{
		margin: 10rpx 0rpx;
		font-size: 16px;
	}
}
</style>
