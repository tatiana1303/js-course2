import {Cart} from "./Cart.js";
import {Products} from "./Products.js";
import {Error} from "./Error.js";
import {Browse} from "./Browse.js";
import {Topnavigation} from "./Topnavigation.js";



const App = {
    components: {
        Browse,
        Topnavigation,
        Cart,
        Products,
        Error,

    },
    data() {
        return {
            API: `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`,
            userSearch: '',
            big: true,
        }
    },
    provide() {
        return {
            API: this.API,
            getJson: this.getJson,
            putJson: this.putJson,
            postJson: this.postJson,
            deleteJson: this.deleteJson
        }
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error))
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error))
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error))
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error));
        },
    },

};


Vue.createApp(App).mount('#app');
