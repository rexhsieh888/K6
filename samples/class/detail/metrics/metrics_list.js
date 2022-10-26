/**
 	常用Metrics
	me_1	Checks			斷言。僅會返回 通過(pass)或失敗(fail)
							但這邊的斷言是，"不論成功或失敗，腳本皆仍會繼續執行"。
	me_2	Thresholds		可以為測試的結果自訂一個標準限制，中文稱為【門檻值】，可以針對 各個指標 限制於某個條件，相對來說會更彈性，測試會更為準確。
 **/

/**
 * Http系列
 * http_req_receiving: API 從 server 回應 所花費的時間
 * http_req_sending: API 發送 到 server 所花費的時間
 * http_req_waiting: API 從 server 等待回應 所花費的時間
 * http_req_duration: API 請求的總時間(http_req_sending + http_req_waiting + http_req_receiving)
 * http_req_failed: API 失敗的機率(預設 status code 是 200，若有特別判斷可使用 expectedStatuses)
 * iteration_duration: 該腳本執行一次所花費的時間
 * http_reqs: 會計算測試總共發了多少 request
 */
