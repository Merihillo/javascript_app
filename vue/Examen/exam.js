const app=Vue.createApp({
    data(){
        return{
            acumulado: 0,
            nombre:'',
            descripcion:'',
            creador:'',
            precio:'',
            cantidad:'',
            url:'',
            cursos: []
            
        }
    },
    methods: {
        agregar(){
            const curso = {
                nombre: this.nombre,
                descripcion: this.descripcion,
                creador: this.creador,
                precio: this.precio,
                cantidad: this.cantidad,
                url: this.url
            }
            this.cursos.push(curso);
        }
    
    }
})

/*app.component('mi-card',{
    template: `<div class="card" style="width: 18rem;">
    <img src=" https://static.wikia.nocookie.net/fortnite/images/9/9a/Supply_Llama_-_Chest_-_Fortnite.png/revision/latest?cb=20211211204109" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
})*/