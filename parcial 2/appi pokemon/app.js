Vue.createApp({
    data(){
        return{
            pokemones: [],
            loading: null,
            pokemonImagen:'',
            experiencia:'',
            abilidades:'',
            gameindi:'',
            altura:'',
            id:'',
            order:'',
            stats:'',
            types:'',
            move:'',
            nombre:''


        }
    },
    mounted() {
        this.getPokemon();
    },
    methods: {
        async getPokemon(){ 
            //async funcion acirncrona, le dices que no importa que no se quede estancada la pagina
            //GET (OBTENER RECURSOS)
            //POST (PARA CREAR RECURSOS)
            //PUT (MODIFICAR RECURSOS)
            //DELETE (ELIMINAR RECURSOS)
            //const random = Math.floor (Math.random() * 200); +random
            this.loading = true;

            var i = 1;

            while (i <= 200)
            {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i,{
                    method: 'GET'
                });
                const pokemon = await response.json();
                 console.log(pokemon);
                this.pokemones.push(pokemon);

                 i++;

             }
             this.loading = false;

        },mostrarPokemon(pokemon){
            console.log(pokemon)
            //console.log(this.experiencia)
            //console.log(this.habilidades)
          
            $('#myModal').modal('show');
            this.pokemonImagen = pokemon.sprites.other.dream_world.front_default
            this.experiencia= pokemon.base_experience
            this.altura= pokemon.height
            this.id=pokemon.id
            this.order=pokemon.order
            this.gameindi= pokemon.game_indices
            this.abilidades = pokemon.abilities
            this.stats=pokemon.stats
            this.types=pokemon.types
            this.move=pokemon.moves
            this.nombre=pokemon.name

        }

    },
   
    //login datos del usuario
    //elementos en un lugar
}).mount('#app')