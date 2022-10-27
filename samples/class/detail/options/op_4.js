import http from 'k6/http';
import {sleep} from 'k6';

/**
Stages				可以指定在特定時間內增加或減少 用戶 數量的執行方式，也就是說可以模仿更精準的測試情境。
 **/

export let options = {
	/**
	 * 第一階段就是在 30 秒間逐步把用戶加到 10 個
	 * 第二階段就是在一分半內逐步從 10 個用戶追加到 30 個用戶
	 * 第三階段是在 20 秒內逐步從 30 個用戶 降到 0 個用戶個用戶
	 */
	stages: [
		{duration: '30s', target: 10},
		{duration: '1m30s', target: 30},
		{duration: '20s', target: 0},
	],
};

export default function () {
	http.get('https://test-api.k6.io/public/crocodiles/');
	sleep(1);
}
