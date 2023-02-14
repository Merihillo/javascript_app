const app = Vue.createApp({
    data(){
        return{

        }
    }
})

app.component('mi-card',{
    template: `<div class="card" style="width: 18rem;">
    <img src=" https://static.wikia.nocookie.net/fortnite/images/9/9a/Supply_Llama_-_Chest_-_Fortnite.png/revision/latest?cb=20211211204109" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
})

app.component('tabla',{
  template: `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`
})

app.component('spiner',{
  template: `<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`
})

app.component('boton',{
  template: `<a class="btn btn-primary" href="#" role="button">Link</a>
  <button class="btn btn-primary" type="submit">Button</button>
  <input class="btn btn-primary" type="button" value="Input">
  <input class="btn btn-primary" type="submit" value="Submit">
  <input class="btn btn-primary" type="reset" value="Reset">`
})