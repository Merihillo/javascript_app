Vue.createApp({
    data(){
        return{
            pokemones: []

        }
    },
    mounted() {
        this.getPokemon();
    },
    methods: {
        async getPokemon(){ //async funcion acirncrona, le dices que no importa que no se quede estancada la pagina
            //GET (OBTENER RECURSOS)
            //POST (PARA CREAR RECURSOS)
            //PUT (MODIFICAR RECURSOS)
            //DELETE (ELIMINAR RECURSOS)
            //const random = Math.floor (Math.random() * 200); +random

            var i = 1;

            while (i <= 200)
            {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i,{
                    method: 'GET'
                });
                const pokemon = await response.json();
                 //console.log(data);
                this.pokemon.push(pokemon);

                 i++;

             }

        }
    }
}).mount('#app')