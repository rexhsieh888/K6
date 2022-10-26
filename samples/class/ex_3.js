import http from 'k6/http';
import {check} from 'k6';

// Metrics指標

export default function () {
	const res = http.get('https://test-api.k6.io/public/crocodiles/');
	check(res, {	//斷言。僅會返回 通過(pass)或失敗(fail)，不論成功或失敗，腳本皆仍會繼續執行。
		'is status 200': (r) => r.status === 200,
		'body size is 11,105 bytes': (r) => r.body.length == 11105,
	});
}
