<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid header">
        <img src="imgs/logo.png" class="logo" height="50" alt="Logo">
        <div class="navbar-brand">KPI</div>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto">
            <router-link to="/" class="nav-item nav-link" >Головна</router-link>
            <router-link to="/test" class="nav-item nav-link" >Аккаунт</router-link>
            <router-link to="/test" class="nav-item nav-link" >Новини</router-link>
            <router-link to="/test" class="nav-item nav-link" >Питання</router-link>
            <router-link to="/test" class="nav-item nav-link" >Таблиця</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header"
}
const insertScript = document.createElement('script')
insertScript.setAttribute('src', 'url_of_your_script')
document.body.appendChild(insertScript)
</script>