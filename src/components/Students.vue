<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded ">
      <router-link type="button" class="btn btn-primary" to="/addstudent">Add Student</router-link>

      <table class="table table-striped text-center">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Імя</th>
        <th scope="col">Група</th>
        <th scope="col">Електронна пошта</th>
        <th scope="col">Телефон</th>
        <th scope="col">Редагування/Видалення</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
        <a href="#" class="icon-block "><i class="fa-solid fa-pen"></i></a>
        <a href="#" class="icon-block mx-4"><i class="fa-solid fa-trash"></i></a>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>
        <a href="#" class="icon-block "><i class="fa-solid fa-pen"></i></a>
        <a href="#" class="icon-block mx-4"><i class="fa-solid fa-trash"></i></a>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>
        <a href="#" class="icon-block "><i class="fa-solid fa-pen"></i></a>
        <a href="#" class="icon-block mx-4"><i class="fa-solid fa-trash"></i></a>
      </td>
    </tr>
    </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Students"
}
</script>