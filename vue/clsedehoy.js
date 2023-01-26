Vue.createApp({
    data(){
        return{
            nombre:'',
            precio:'',
            cantidad:'',
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
                descripcion: this.descripcion
            }

            this.productos.push(producto);
        }
    }
}).mount("#app")