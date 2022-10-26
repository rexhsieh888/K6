import http from 'k6/http';
import { sleep } from 'k6';

// Basic test
// mac
// docker-compose run -v $PWD/samples:/scripts k6 run /scripts/class/ex_1.js
// windows
// docker-compose run -v /$PWD/samples:/scripts k6 run /scripts/class/ex_1.js

export default function () {
	http.get('https://test-api.k6.io/public/crocodiles/');
	sleep(1);
}
