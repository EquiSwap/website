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
}
