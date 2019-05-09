export const datetimeMixin = {
	filters: {
		timestampToDate(timestamp: number) {
			const date = new Date(timestamp);
			const iso = date.toISOString().slice(0, 10).replace(/-/g, '-');
			return iso;
		},
		timestampToDatetime(timestamp: number) {
			const time = new Date(timestamp * 1000);
			const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
			const minutes = `0${time.getMinutes()}`;
			const seconds = `0${time.getSeconds()}`;
			return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
		},
		timestampToDateAndTime(timestamp: number) {
			if(!timestamp) { return ''; }
			// console.log(timestamp)
			timestamp = timestamp + timezoneOffset *60000 + (24 *60 *60 *1000);
			// console.log(timestamp)
			const date = new Date(timestamp);
			const iso = date.toISOString().slice(0, 10).replace(/-/g, '-');
			const time = new Date(timestamp * 1000);
			const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
			const minutes = `0${time.getMinutes()}`;
			const seconds = `0${time.getSeconds()}`;
			return `${iso}  ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
		},
	}
};

/**
 * TODO : 設定站台timezoneOffset
 * 用站台時間顯示於網頁上
 * for filter timestamp to string
 * 然後要提示站台時區在網頁上
 */
const timezoneOffset = -480;

/**
 * yyyy-mm-dd 轉換成TimeStamp
 */
export const dateToTimeStamp = (date: string) => {
	return new Date(date).getTime();
};

/**
 * 取得前幾天的日期 yyyy-mm-dd
 */
export const daysAgo = (day: number) => {
	const newDate = new Date(new Date().getTime() - day *24 *60 *60 *1000);
	return newDate.toISOString().slice(0, 10).replace(/-/g, '-');
};