<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded row">
      <h4 class="text-center">Розклад</h4>
      <router-link type="button" class="btn btn-primary" to="/addschedule">Add Schedule</router-link>
      <div class="col-lg-4 col-sm-6 col-xs-12 card">
        <div class="card-body">
          <h5 class="card-title">Назва</h5>
          <h6 class="card-subtitle mb-2 text-muted">Група</h6>
          <p class="card-text">Час - дисципліна-викладач</p>
          <router-link type="button" class="icon-block card-link" to="/editschedule"><i class="fa-solid fa-pen"></i></router-link>
          <a href="#" class="icon-block mx-4 card-link"><i class="fa-solid fa-trash"></i></a>
        </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12 card" >
          <div class="card-body">
            <h5 class="card-title">Назва</h5>
            <h6 class="card-subtitle mb-2 text-muted">Група</h6>
            <p class="card-text">Час - дисципліна-викладач</p>

            <router-link type="button" class="icon-block card-link" to="/editschedule"><i class="fa-solid fa-pen"></i></router-link>
            <a href="#" class="icon-block mx-4 card-link"><i class="fa-solid fa-trash"></i></a>
          </div>
        </div>
          <div class="col-lg-4 col-sm-6 col-xs-12 card" >
            <div class="card-body">
              <h5 class="card-title">Назва</h5>
              <h6 class="card-subtitle mb-2 text-muted">Група</h6>
              <p class="card-text">Час - дисципліна-викладач</p>

              <router-link type="button" class="icon-block card-link" to="/editschedule"><i class="fa-solid fa-pen"></i></router-link>
              <a href="#" class="icon-block mx-4 card-link"><i class="fa-solid fa-trash"></i></a>
            </div>
          </div>
            <div class="col-lg-4 col-sm-6 col-xs-12 card">
              <div class="card-body">
                <h5 class="card-title">Назва</h5>
                <h6 class="card-subtitle mb-2 text-muted">Група</h6>
                <p class="card-text">Час - дисципліна-викладач</p>

                <router-link type="button" class="icon-block card-link" to="/editschedule"><i class="fa-solid fa-pen"></i></router-link>
                <a href="#" class="icon-block mx-4 card-link"><i class="fa-solid fa-trash"></i></a>
              </div>
            </div>
              <div class="col-lg-4 col-sm-6 col-xs-10 card" >
                <div class="card-body">
                  <h5 class="card-title">Назва</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Група</h6>
                  <p class="card-text">Час - дисципліна-викладач</p>

                  <router-link type="button" class="icon-block card-link" to="/editschedule"><i class="fa-solid fa-pen"></i></router-link>
                  <a href="#" class="icon-block mx-4 card-link"><i class="fa-solid fa-trash"></i></a>
                </div>
                </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Schedules"
}
</script>