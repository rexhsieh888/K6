import http from 'k6/http';
import {group} from 'k6';

/**
group			主要就是將按照【功能】進行組裝在同一個測試腳本。
				可以針對測試方法做調整，通常在測試 API 時可能是一個行為，但是是會多個 API 連續調用的情況。
				這時候可以使用 group 方法來實現，以下是官網的例子。
 **/

export default function () {
	group('user flow: returning user', function () {
		group('visit homepage', function () {
			// load homepage resources
			http.get('https://test-api.k6.io/public/crocodiles/');
		});
		group('login', function () {
			// perform login
			http.get('https://test-api.k6.io/public/crocodiles/');
		});
	});
}

/**
 * 如上方例子，可以將整個登入流程加入一個群組，測試結果會多一個指標 "group_duration"，就可方便得知這一個 group 平均執行時間。
 * 意味著這個 group 功能不建議僅拿來組裝單一 API，它不是一個像單回傳 api module 的般的使用。
 * 這樣就失去 group 功能真正的涵義了。
 * ex:
 * import http from 'k6/http';
 *
 * export let options = {
 *   discardResponseBodies: true,
 *   scenarios: {
 *     contacts: {
 *       executor: 'constant-arrival-rate',
 *       rate: 200, // 200 RPS, since timeUnit is the default 1s
 *       duration: '1m',
 *       preAllocatedVUs: 50,
 *       maxVUs: 100,
 *     },
 *   },
 * };
 *
 * export default function () {
 *   http.get('https://test.k6.io/contacts.php');
 * }
 */



