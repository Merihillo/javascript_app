/*Hacer un select con 5 opciones, cuando seleccionen una opción les mostrar 
una imagen respectiva a la opción seleccionada if si pusiste mazana retornaras la url
en el return la url.*/

Vue.createApp({
    data(){
        return{
            fruta:''
           
            
        }
    },
    computed: 
    {
        fotofruta() 
        {
            if (this.fruta=="manzana"){
                return 'https://www.cuerpomente.com/medio/2020/11/10/manzana_a1c5bdb0_1200x1200.jpg';

            }else if (this.fruta=="piña") {
                return 'https://www.gastronomiavasca.net/uploads/image/file/3415/w700_pi_a.jpg';

             }else if (this.fruta=="naranja"){
                return'https://naranjadevalencia.eu/wp-content/uploads/2016/09/Naranja-de-Valencia-fruta.jpg';
                
             }else if (this.fruta=="fresa"){
                return'https://img.interempresas.net/fotos/1341264.jpeg';

             }else if (this.fruta=="platano"){
                return'https://www.granodeoro.com.mx/wp-content/uploads/2020/03/pl%C3%A1tano-portalim%C3%B3n-600x600.jpg';
            }
        }
    }
}).mount("#app")


