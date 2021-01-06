import Vue from 'vue'
import App from './App.vue'

document.body.innerHTML = `<div id="app" style="z-index: -100; background-color: grey;"></div>`;

new Vue({
    el: '#app',
    render: h => h(App)
});

