import http from 'k6/http';
import { sleep } from 'k6';

// Options

export const options = {
	vus: 10,	//虛擬用戶數量，最少必須要 1 個，和 duration 搭配使用。
	duration: '30s',	//指定測試運行的總持續時間，與 vus 一起使用。
};

export default function () {
	http.get('https://test-api.k6.io/public/crocodiles/');
	sleep(1);
}
