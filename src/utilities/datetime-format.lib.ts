const datetimeMixin = {
    filters: {
        timestampDisplay(timestamp: number) {
            const date = new Date(timestamp * 1000);
            const iso = date.toISOString().match(/(\d{2}:\d{2}:\d{2})/);
            return iso && iso.input;
        }
    }
};