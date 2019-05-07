export const datetimeMixin = {
    filters: {
        timestampToDate(timestamp: number) {
            const date = new Date(timestamp);
            const iso = date.toISOString().slice(0, 10).replace(/-/g, '-');
            return iso;
        },
    }
};