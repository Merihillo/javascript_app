/*Hacer un select con 5 opciones, cuando seleccionen una opción les mostrar 
una imagen respectiva a la opción seleccionada if si pusiste mazana retornaras la url
en el return la url.*/

Vue.createApp({
    data(){
        return{
            fruta:""
           
            
        }
    },
    computed: {
        fotofruta() {
            if (this.fruta="manzana"){
                return 'https://www.cuerpomente.com/medio/2020/11/10/manzana_a1c5bdb0_1200x1200.jpg';
            }else if (this.Piña) {
                return '';
            
            }else{
                return'no hay nada';
            }
        }
    }
}).mount("#app")


