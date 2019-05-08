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