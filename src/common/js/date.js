export function formatDate(date, fmt) {
  console.log(date);
  //匹配以y开头的字符串，一个或者多个，
	if (/(y+)/.test(fmt)) {
    //如果匹配上了，替换，匹配y的时候，匹配几个，date.getFullYear就有几位上
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	let o = {
		'M': date.getMonth() + 1,
		'd': date.getDate(),
		'h': date.getHours(),
		'm': date.getMinutes(),
		's': date.getSeconds()
	};
  //console.log(o);
  //for (let k in o) {
	//	if (new RegExp(`(${k})`).test(fmt)) {
	//		let str = o[k] + '';
	//		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
	//	}
	//}
  let dt=`${date.getFullYear()}-${o.M}-${o.d} ${o.h}: ${o.m}: ${o.s}`
  return dt;
};

function padLeftZero(str) {
	return ('00' + str).substr(str.length);
}
