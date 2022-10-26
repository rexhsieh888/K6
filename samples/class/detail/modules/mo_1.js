import http from 'k6/http';

/**
 * http				主要是能發送 API，常使用為 get/post/put/del
 */

// mac
// docker-compose run -v $PWD/samples:/scripts k6 run /scripts/class/detail/modules/mo_1.js
// windows
// docker-compose run -v /$PWD/samples:/scripts k6 run /scripts/class/detail/metrics/mo_1.js

export const options = {
	vus: 1,
	duration: '1s',
};

export default function () {
	http.get('https://test.k6.io');
}

/**
 * post example
 * import http from 'k6/http';
 *
 * const url = 'https://httpbin.test.k6.io/post';
 * const logoBin = open('./logo.png', 'b');
 * export default function () {
 *   let data = { name: 'Bert' };
 *
 *   // Using a JSON string as body
 *   let res = http.post(url, JSON.stringify(data), {
 *     headers: { 'Content-Type': 'application/json' },
 *   });
 *   console.log(res.json().json.name); // Bert
 *
 *   // Using an object as body, the headers will automatically include
 *   // 'Content-Type: application/x-www-form-urlencoded'.
 *   res = http.post(url, data);
 *   console.log(res.json().form.name); // Bert
 *
 *   // Using a binary array as body. Make sure to open() the file as binary
 *   // (with the 'b' argument).
 *   http.post(url, logoBin, { headers: { 'Content-Type': 'image/png' } });
 *
 *   // Using an ArrayBuffer as body. Make sure to pass the underlying ArrayBuffer
 *   // instance to http.post(), and not the TypedArray view.
 *   data = new Uint8Array([104, 101, 108, 108, 111]);
 *   http.post(url, data.buffer, { headers: { 'Content-Type': 'image/png' } });
 * }
 */
