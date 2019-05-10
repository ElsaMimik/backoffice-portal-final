export const datetimeMixin = {
	filters: {
		timestampToDate(timestamp: number) {
			if(!timestamp) { return ''; }
			timestamp = timestamp + (timezone *60 *60 *1000);
			// 加上時區
			const webTime = new Date(timestamp);
			// Date
			const iso = webTime.toISOString().slice(0, 10).replace(/-/g, '-');
			return iso;
		},
		timestampToDatetime(timestamp: number) {
			if(!timestamp) { return ''; }
			timestamp = timestamp + (timezone *60 *60 *1000);
			// 加上時區
			const webTime = new Date(timestamp);
			// Time 這裡用UTC取得已經轉換過的時間
			// const time = webTime;
			const hours = webTime.getUTCHours() < 10 ? `0${webTime.getUTCHours()}` : webTime.getUTCHours();
			const minutes = `0${webTime.getUTCMinutes()}`;
			const seconds = `0${webTime.getUTCSeconds()}`;
			return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
		},
		timestampToDateAndTime(timestamp: number) {
			if(!timestamp) { return ''; }
			timestamp = timestamp + (timezone *60 *60 *1000);
			// 加上時區
			const webTime = new Date(timestamp);
			// Date
			const iso = webTime.toISOString().slice(0, 10).replace(/-/g, '-');
			// Time 這裡用UTC取得已經轉換過的時間
			// const time = webTime;
			const hours = webTime.getUTCHours() < 10 ? `0${webTime.getUTCHours()}` : webTime.getUTCHours();
			const minutes = `0${webTime.getUTCMinutes()}`;
			const seconds = `0${webTime.getUTCSeconds()}`;
			return `${iso} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
		},
	}
};

/**
 * 站台timezone
 * for filter timestamp to string
 */
const timezone = 8;

/**
 * yyyy-mm-dd 轉換成TimeStamp
 */
export const dateToTimeStamp = (date: string) => {
	return new Date(date).getTime();
};

/**
 * 取得前幾天的日期 yyyy-mm-dd
 * @parameter 傳入7可取得前7天的時間戳
 */
export const daysAgo = (day: number) => {
	const newDate = new Date(new Date().getTime() - day *24 *60 *60 *1000);
	return newDate.toISOString().slice(0, 10).replace(/-/g, '-');
};