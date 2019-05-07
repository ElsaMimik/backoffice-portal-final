export const datetimeMixin = {
    filters: {
        timestampToDate(timestamp: number) {
            const date = new Date(timestamp);
            const iso = date.toISOString().slice(0, 10).replace(/-/g, '-');
            return iso;
        },
        timestampToDatetime(timestamp: number) {
            var time = new Date(timestamp * 1000);
            var hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
            var minutes = `0${time.getMinutes()}`;
            var seconds = `0${time.getSeconds()}`;
            return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
        },
        timestampToDateAndTime(timestamp: number) {
            const date = new Date(timestamp);
            const iso = date.toISOString().slice(0, 10).replace(/-/g, '-');
            var time = new Date(timestamp * 1000);
            var hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
            var minutes = `0${time.getMinutes()}`;
            var seconds = `0${time.getSeconds()}`;
            return `${iso}  ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
        },
    }
};