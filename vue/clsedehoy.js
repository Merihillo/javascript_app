Vue.createApp({
    data(){
        return{
            colorTable:'info',
            nombre:'',
            precio:'',
            cantidad:'',
            tipo:'',
            fecha:'',
            descripcion:'',
            url:'',
            productos: []
            
        }
    },
    methods: {
        agregar(){
            const producto = {
                nombre: this.nombre,
                precio: this.precio,
                cantidad: this.cantidad,
                tipo: this.tipo,
                fecha: this.fecha,
                descripcion: this.descripcion,
                url: this.url
            }

            this.productos.push(producto);
        }
    }
}).mount("#app")