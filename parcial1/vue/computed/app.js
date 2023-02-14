Vue.createApp({
    data(){
        return{
            edad: 0
            
        }
    },
    computed: {
        calcularedad() {
            if (this.edad == ''){
                return '';
            }else if (this.edad > 18) {
                return 'Eres mayor de edad';
            
            }else{
                return'eres menor de edad';
            }
        }
    }
}).mount("#app")