import http from 'k6/http';
import {check} from 'k6';

/**
 * Checks				斷言。僅會返回 通過(pass)或失敗(fail)，不論成功或失敗，腳本皆仍會繼續執行。
 */

// mac
// docker-compose run -v $PWD/samples:/scripts k6 run /scripts/class/detail/metrics/me_1.js
// windows
// docker-compose run -v /$PWD/samples:/scripts k6 run /scripts/class/detail/metrics/me_1.js

export default function () {
	const res = http.get('http://test.k6.io/');
	check(res, {
		'is status 200': (r) => r.status === 200,
	});
}
