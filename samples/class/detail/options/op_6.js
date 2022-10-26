import http from 'k6/http';
import {sleep} from 'k6';

/**
scenarios		測試的情境的參數
				在做效能測試前，通常都會先擬定好要測試的情境，蒐集真實數據進行評估，再進一步評估預期達到的目標再哪。
				所以可以先將一些常用的測試寫好。只要引用一下，設定一下立刻可以達到我們想要測試的結果。
				只要針對每個情境實作好了一些 Executors，最後只要呼叫它即可。
 **/

export const options = {
	discardResponseBodies: true,
	scenarios: {
		contacts: {
			executor: 'constant-arrival-rate',
			rate: 200, // 200 RPS, since timeUnit is the default 1s
			duration: '1m',
			preAllocatedVUs: 50,
			maxVUs: 100,
		},
	},
};

export default function () {
	http.get('https://test-api.k6.io/public/crocodiles/');
	sleep(1);
}

/**
 * 這個範例，K6會盡所能在 duration 內去達到 200 RPS。
 * 所以只要使用這個方法，可以很快找到你 API 的極限瓶頸在哪。
 * group vs scenarios
 * group: 通常一套 業務邏輯 且 會被重複使用
 * scenarios: 純粹一個情境、一個故事，為了要讓單一邏輯或 group 能夠被相互組合應用，需要多種不同的參數，用戶數量(vus)、持續時間(duration)等等，以便達到該情境的預期結果。
 */
