/*Vue.createApp({
    data(){
        return{
            carrito:[],
            producto:''
            
        }
    },
    methods: {
        agregarProducto(){
            this.carrito.push(this.producto);
            this.producto='';
        }
      
    }
}).mount("#app")
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <div id="app">
       <h1>Lista de carrito</h1>
       <input v-model ="producto" type="text" placeholder="nombre del producto">
       <button @click="agregarProducto()">Agregar</button>
       <button @click="carrito=[]">Limpiar</button>

        <ul>
            <li v-for="producto in carrito">
                {{producto}}
            </li>
        </ul>

    </div>


    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src ="carrito.js"></script>
    




</body>
</html>*/