<template>
	<view class="news-box">
		<NewsList :newsDetail="newsDetail" @newsListClick="newsListClick"/>
	</view>
</template>

<script>
import http from '@/api/index.js';
export default {
	components:{
		NewsList:()=>import('../../components/NewsList/NewsList')
	},
	data() {
		return {
			newsDetail:[]
		};
	},
	onLoad() {
		this.getNewsDetail()
	},
	methods: {
		async getNewsDetail(){
			let data = await http.getnewslist()
			this.newsDetail = data.message
		},
		async newsListClick(id){
			console.log(id)
			uni.navigateTo({
				url:`/pages/newDetails/newDetails?id=${id}`
			})
			
		}
	}
};
</script>

<style lang="less" scoped>

</style>
