Vue.createApp({
    data(){
        return{
            pokemon: null

        }
    },
    methods: {
        async getPokemon(){ //async funcion acirncrona, le dices que no importa que no se quede estancada la pagina
            //GET (OBTENER RECURSOS)
            //POST (PARA CREAR RECURSOS)
            //PUT (MODIFICAR RECURSOS)
            //DELETE (ELIMINAR RECURSOS)
            const random = Math.floor (Math.random() * 200);
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' +random,{
                method: 'GET'
            });

            const data = await response.json();
            //console.log(data);
            this.pokemon=data;


        }
    }
}).mount('#app')