
/*<h1>Contador: {{contador}}</h1>
        <button v-on:click="incrementar()">Incrementar</button>
        <button v-on:click="restar()">restar</button>
        <button v-on:click="Limpiar()">Limpiar</button>*/

Vue.createApp({
    data() { 
        return {
            contador: 0
        }
    },
    methods: {
        incrementar(){    //declaramos metodos
           this.contador++;
        },
        restar(){
            this.contador--;
            if (this.contador < 0 ) {
               this.contador=0
               alert("negativo") 
            }
           
        },
        Limpiar(){
            this.contador=0;
        }
    }  
}).mount("#app");