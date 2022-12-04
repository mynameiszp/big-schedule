<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded ">
      <h4 class="text-center">Дисципліни</h4>
      <router-link type="button" class="btn btn-primary" to="/adddiscipline">Add Discipline</router-link>

      <table class="table table-striped text-center table-responsive">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Назва</th>
        <th scope="col">Редагування/Видалення</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>
        <router-link type="button" class="icon-block" to="/editdiscipline"><i class="fa-solid fa-pen"></i></router-link>
        <a href="#" class="icon-block mx-4"><i class="fa-solid fa-trash"></i></a>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>
        <router-link type="button" class="icon-block" to="/editdiscipline"><i class="fa-solid fa-pen"></i></router-link>
        <a href="#" class="icon-block mx-4"><i class="fa-solid fa-trash"></i></a>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>
        <router-link type="button" class="icon-block" to="/editdiscipline"><i class="fa-solid fa-pen"></i></router-link>
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
  name: "Disciplines"
}
</script>