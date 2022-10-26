/**
 	常用options
	op_1	vus				虛擬用戶數量，最少必須要 1 個，和 duration 搭配使用。
	op_1	duration		指定測試運行的總持續時間，與 vus 一起使用。
	op_2	iterations		腳本中的函數被執行的次數。
	op_3	Stages			可以指定在特定時間內增加或減少 用戶 數量的執行方式，也就是說可以模仿更精準的測試情境。
	op_4	rps				用戶每秒可以發送最大的 request 數量。
	op_5	group			將按照【功能】進行組裝在同一個測試腳本。
	op_6	scenarios		測試的情境的參數。
 **/
