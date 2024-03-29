/* eslint-disable */
/**
 * 【温馨提示】，假如不想背锅，没事别动这个文件里面的任何东西，会导致整个项目网络请求崩溃,想好在动
 */
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import Vue from 'vue';
import {
    Dialog,
    Toast
} from 'vant';
const pc = axios.create({
    timeout: 10000,
    baseURL: process.env.VUE_APP_API
});
Vue.use(Dialog);
/**
 * GET请求方式
 * @param {*} url
 * @param {*} params
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        pc.get(url, {
                params: params
            })
            .then(response => {
                if (response.data.code === 200 || response.data.code === 0) {
                    //返回成功处理  这里传的啥 后续调用的时候 res就是啥
                    resolve(response.data); //我们后台所有数据都是放在返回的data里所以这里统一处理了
                } else {
                    //错误处理
                    resolve(response.data);
                }

            })
            .catch(err => {
                reject(err);
                let message = '请求失败！请检查网络';
                //错误返回
                if (err.response) {
                    message = err.response.data.message;
                }
                console.log(message);
            })
    })
}

/**提交JSON数据
 * @param url
 * @param data
 * @returns {Promise}
 */

export function postJSON(url, data = {}) {
    return new Promise((resolve, reject) => {
        pc.post(url, data)
            .then(response => {
                if (response.data.code === 200 || response.data.code === 0) {
                    //返回成功处理  这里传的啥 后续调用的时候 res就是啥
                    resolve(response.data); //我们后台所有数据都是放在返回的data里所以这里统一处理了
                } else {
                    //错误处理
                    resolve(response.data);
                }
            }, err => {
                reject(err);
                let message = '请求失败！请检查网络';
                if (err.response) {
                    message = err.response.data.message;
                }
                console.log(message);
            })
    })
}

/**
 * 提交表单数据
 * @param {*} url
 * @param {*} data
 */
export function postForm(url, data = {}) {
    return new Promise((resolve, reject) => {
        pc({
            method: 'post',
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }, // 请求头，发送FormData格式的数据，必须是 这种请求头。
            data: QS.stringify(data)
        }).then(response => {
            if (response.data.code === 200 || response.data.code === 0) {
                resolve(response.data);
            } else {
                resolve(response.data);
            }
        }, err => {
            reject(err);
            let message = '请求失败！请检查网络';
            if (err.response) {
                message = err.response.data.message;
            }
            console.log(message);
        })
    })
}


/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function put(url, params) {
    return new Promise((resolve, reject) => {
        pc({
            method: 'put',
            url: url,
            data:params
        }).then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log('请求失败!');
                reject(err.data)
            })
    });
}