<template>
    <div>
      <div class="shadow-lg p-3 m-5 bg-white rounded row homebigbox">
        <h4 class="text-center" style=" background: #98dada">Вітаємо на сайті КПІ</h4>
        <div class="col-lg-4 col-sm-6 col-xs-12 card">
          <div class="card-body">
            <h5 class="card-title text-center">Розклад</h5>
            <h6 class="card-subtitle mb-2 text-muted">Тут можна побачити актуальний розклад, додати новий запис, редагувати або видалити</h6>
            <img src="imgs/img_6.png" class="img-fluid picture card-img-top" style="height: 300px" alt="Розклад КПІ">
            <router-link type="button" class="btn btn-dark mt-2" style="width: 100%" to="/schedules">Розклад</router-link>

          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12 card">
          <div class="card-body">
            <h5 class="card-title text-center">FAQ</h5>
            <h6 class="card-subtitle mb-2 text-muted">Тут можна побачити актуальні часті питання з відповідями, додати нові, редагувати або видалити</h6>
            <img src="imgs/img_8.png" class="img-fluid picture card-img-top" style="height: 300px" alt="Faq КПІ">
            <router-link type="button" class="btn btn-dark mt-2" style="width: 100%" to="/faq">Часті питання</router-link>

          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12 card">
          <div class="card-body">
            <h5 class="card-title text-center">Департаменти</h5>
            <h6 class="card-subtitle mb-2 text-muted">Тут можна побачити наші департаменти, додати нові, редагувати або видалити</h6>
            <img src="imgs/img_9.png" class="img-fluid picture card-img-top" style="height: 300px" alt="Департаменти КПІ">
            <router-link type="button" class="btn btn-dark mt-2" style="width: 100%" to="/departaments">Департаменти</router-link>

          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12 card">
          <div class="card-body">
            <h5 class="card-title text-center">Факультети</h5>
            <h6 class="card-subtitle mb-2 text-muted">Тут можна побачити наші факультети, додати нові, редагувати або видалити</h6>
            <img src="imgs/img_10.png" class="img-fluid picture card-img-top" style="height: 300px" alt="Факультети КПІ">
            <router-link type="button" class="btn btn-dark mt-2" style="width: 100%" to="/faculties">Факультети</router-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12 card">
          <div class="card-body">
            <h5 class="card-title text-center">Викладачі</h5>
            <h6 class="card-subtitle mb-2 text-muted">Тут можна побачити наших викладачів, додати нових, редагувати або видаляти</h6>
            <img src="imgs/img_11.png" class="img-fluid picture card-img-top" style="height: 300px" alt="Викладачі КПІ">
            <router-link type="button" class="btn btn-dark mt-2" style="width: 100%" to="/teachers">Викладачі</router-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12 card">
          <div class="card-body">
            <h5 class="card-title text-center">Дисципліни</h5>
            <h6 class="card-subtitle mb-2 text-muted">Тут можна побачити наші дисципліни, додати нові, редагувати або видаляти</h6>
            <img src="imgs/img_12.png" class="img-fluid picture card-img-top" style="height: 300px" alt="Дисципліни КПІ">
            <router-link type="button" class="btn btn-dark mt-2" style="width: 100%" to="/disciplines">Дисципліни</router-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12 card">
          <div class="card-body">
            <h5 class="card-title text-center">Студенти</h5>
            <h6 class="card-subtitle mb-2 text-muted">Тут можна побачити наших студентів, додати нових, редагувати або видаляти</h6>
            <img src="imgs/img_13.png" class="img-fluid picture card-img-top" style="height: 300px" alt="Студенти КПІ">
            <router-link type="button" class="btn btn-dark mt-2" style="width: 100%" to="/students">Студенти</router-link>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12 card">
          <div class="card-body">
            <h5 class="card-title text-center">Групи</h5>
            <h6 class="card-subtitle mb-2 text-muted">Тут можна побачити наші групи студентів, додати нові, редагувати або видаляти</h6>
            <img src="imgs/img_14.png" class="img-fluid picture card-img-top" style="height: 300px" alt="Групи КПІ">
            <router-link type="button" class="btn btn-dark mt-2" style="width: 100%" to="/groups">Групи</router-link>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "Home"
}
</script>