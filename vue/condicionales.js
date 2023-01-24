

Vue.createApp({
    data(){
        return{
            becado: true

        }
    }, 
    methods: {
        conBeca(){
            this.becado=true;


        },
        sinBeca(){
            this.becado=false;

        }
    }
}).mount("#app")

Vue.createApp({
    data(){
        return{
            
        }
    }
}).mount("#app")