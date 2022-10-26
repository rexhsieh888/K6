import http from 'k6/http';
import { sleep } from 'k6';

/**
 * sleep				主要就是等待時間，有些時候使用 sleep 是為了更好模擬使用者情境。
 */

export const options = {
	vus: 1,
	duration: '1s',
};

export default function () {
	http.get('https://test.k6.io');
	sleep(1);
}
