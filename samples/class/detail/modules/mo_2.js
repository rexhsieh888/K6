import http from 'k6/http';
import { parseHTML } from 'k6/html';

/**
 * html				解析 HTML 各元素，可能會需要取得 HTML 上的一些元素值做一些處理或換算。
 */

export default function () {
	const res = http.get('https://k6.io');
	const doc = parseHTML(res.body); // equivalent to res.html()
	const pageTitle = doc.find('head title').text();
	const langAttr = doc.find('html').attr('lang');
	console.log(pageTitle);
}
