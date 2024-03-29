import * as PcHttpKit from '@/utils/http/test.js';
// const url = process.env.VUE_APP_HUIYUAN;
// const api = process.env.VUE_APP_API;
// const approve = process.env.VUE_APP_APPROVE
const url = "http://localhost:8082"
const http = {
	// 获取轮播图数据
	getlunbo: (data) => PcHttpKit.get(`${url}/api/getlunbo`),
	// 获取推荐商品数据
	getgoods: (data) => PcHttpKit.get(`${url}/api/getgoods`, data),
	// 获取新闻信息
	getnewslist: (data) => PcHttpKit.get(`${url}/api/getnewslist`, data),
	// 获取新闻列表详情页
	getnew: (data) => PcHttpKit.get(`${url}/api/getnew/${data}`),
	// 获取商品详情页数据
	getinfo: (data) => PcHttpKit.get(`${url}/api/goods/getinfo/${data}`),
	// 获取商品详情页数据--轮播
	getthumimages: (data) => PcHttpKit.get(`${url}/api/getthumimages/${data}`),
	// 获取商品详情页数据--商品介绍
	getdesc: (data) => PcHttpKit.get(`${url}/api/goods/getdesc/${data}`),
	// 获取社区图片左侧列表
	getimgcategory: (data) => PcHttpKit.get(`${url}/api/getimgcategory`),
	// 获取社区图片二级列表
	getimages: (data) => PcHttpKit.get(`${url}/api/getimages/${data}`),
}
export default http
