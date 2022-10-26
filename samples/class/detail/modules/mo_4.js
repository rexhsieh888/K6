import crypto from 'k6/crypto';

/**
 * crypto				非常強大的加密 module ，支援多種不同的加密方式如下:
 * 						hmac
 * 						md4
 * 						md5
 * 						sha256
 * 						sha384
 * 						sha512
 */

export default function () {
	console.log(crypto.sha256('hello world!', 'hex'));
	const hasher = crypto.createHash('sha256');
	hasher.update('hello ');
	hasher.update('world!');
	console.log(hasher.digest('hex'));
}

/**
 * 解密ex:
 * import { check } from 'k6';
 * import encoding from 'k6/encoding';
 *
 * export default function () {
 *   const str = 'hello world';
 *   const enc = 'aGVsbG8gd29ybGQ=';
 *   const buf = new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]).buffer;
 *   check(null, {
 *     'is encoding string correct': () => encoding.b64encode(str) === enc,
 *     'is encoding ArrayBuffer correct': () => encoding.b64encode(buf) === enc,
 *   });
 * }
 */
