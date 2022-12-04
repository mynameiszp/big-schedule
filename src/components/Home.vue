<template>
  <div>
    <h1>Home</h1>
    <router-link to="/">Home</router-link><br>
    <router-link to="/faq">FAQ</router-link><br>
    <router-link to="/students">Students</router-link><br>
    <router-link to="/addstudent">Add Student</router-link><br>
    <router-link to="/editstudent">Edit Student</router-link><br>
    <router-link to="/disciplines">Disciplines</router-link><br>
    <router-link to="/adddiscipline">Add Discipline</router-link><br>
    <router-link to="/editdiscipline">Edit Discipline</router-link><br>
  </div>
</template>

<script>
export default {
  name: "Students"
}
</script>