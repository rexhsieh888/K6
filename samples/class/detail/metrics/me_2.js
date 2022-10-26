import http from 'k6/http';

/**
 * Thresholds				可以為測試的結果自訂一個標準限制，中文稱為【門檻值】。
 * 官方文檔
 * https://k6.io/docs/using-k6/thresholds/
 * Threshold 其實與 Check 有點類似，但差別在於
 * 		Check 設定比較單一 且 執行失敗的話，腳本仍會繼續執行，直到腳本結束，才會返回 Check 的數據值。
 * 		Threshold 可以彈性設定條件 且 執行失敗的話，它還可以自行設置中斷點，讓執行中腳本達到某條件的話，就直接中斷並且返回錯誤資訊。
 */

export const options = {
	thresholds: {
		http_req_failed: ['rate<0.01'], // http request 失敗的總比例要低於 1% 才能算通過
		http_req_duration: ['p(95)<200'], // 95% 的 requests 數回傳時間都要低於 200ms 以內才算通過
	},
};

export default function () {
	http.get('https://test-api.k6.io/public/crocodiles/1/');
}
