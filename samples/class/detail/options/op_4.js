import http from 'k6/http';
import {sleep} from 'k6';

/**
rps				用戶每秒可以發送最大的 request 數量
 				其實就是為了更好模擬用戶流量，再測試前須確認好測試範疇
				多數平台應該都是在某些時間點流量會增大
				但這個流量增大並非是無上限的增大
				一定會落在某個數值
 				只要將數值取出來後並換算

				e.g.
				用戶量 100 vus
				執行時間 60s
				request 條件是 100000
				那就是一位 user rps 就是 100000/100/60 = 16
				通常 rps 的範疇會多估 10-20% 以防萬一，所以湊個整數 20 就是較符合的數值
 **/

export const options = {
	vus: 100,
	duration: '60s',
	rps: 20
};

export default function () {
	http.get('https://test-api.k6.io/public/crocodiles/');
	sleep(1);
}
