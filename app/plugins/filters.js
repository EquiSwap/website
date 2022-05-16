import Vue from 'vue';

export default () => {
    Vue.filter('date', (value) => {
        if (!value) return '';
        return new Date(value).toLocaleDateString('en-US');
    });

    Vue.filter('time', (value) => {
        if (!value) return '';
        return new Date(value).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    });

    Vue.filter('shortDecimal', (value) => {
        if (isNaN(value)) return '';
        return Math.round(value);
    });

    Vue.filter('pluralize', (value, amount) => {
        if (!value) return '';
        if (isNaN(amount)) return value;
        return value + (Math.round(amount) !== 1 ? 's' : '')
    })
}
