<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded">
      <h4 class="text-center">Додавання нового розкладу</h4>
      <form action="#" id="form" method="post" @submit.prevent="checkForm">
        <div class="form-group m-1 mb-4">
          <label for="faculty-name">Назва*</label><br>
<!--          <small id="name-describe" class="form-text text-muted">Тільки українською</small>-->
          <input type="text" class="form-control" id="faculty-name" aria-describedby="name-describe"
                 placeholder="Введіть повну назву" v-model="scheduleName" @input="checkName">
          <small v-if="errors.scheduleName" class="error">{{ msg.scheduleName }}</small>
        </div>
        <div class="form-group m-1 mb-4">
          <label for="faculty-shortname">Час*</label><br>
          <small id="name-describe" class="form-text text-muted">Тільки українською, великі букви</small>
          <input type="time" class="form-control" id="schedule-time" aria-describedby="name-describe"
                 placeholder="Введіть назначений час" v-model="scheduletime" @input="checkTime">
          <small v-if="errors.scheduletime" class="error">{{ msg.scheduletime }}</small>
        </div>
        <div class="form-group m-1 mb-4">
          <label for="faculty-shortname">Classroom*</label><br>
          <small id="name-describe" class="form-text text-muted">Тільки цифри</small>
          <input type="text" class="form-control" id="classroom" aria-describedby="name-describe"
                 placeholder="Введіть назначений клас" v-model="classroom" @input="checkClassroom">
          <small v-if="errors.classroom" class="error">{{ msg.classroom }}</small>
        </div>
        <div class="form-group mb-4">
          <label for="teacher">Teacher-id*</label>
          <select name="" id="faculty" class="form-select" v-model="teacher" @change="checkTeacher">
            <option value="">Оберіть викладача</option>
            <option value="ІА-11">ІА-11</option>
            <option value="ІА-12">ІА-12</option>
            <option value="ІА-13">ІА-13</option>
            <option value="ІА-14">ІА-14</option>
          </select>
          <small v-if="errors.teacher" class="error">{{ msg.teacher}}</small>
        </div>
        <div class="form-group mb-4">
          <label for="teacher">Discipline-id*</label>
          <select name="" id="faculty" class="form-select" v-model="discipline" @change="checkDiscipline">
            <option value="">Оберіть дисципліну</option>
            <option value="ІА-11">ІА-11</option>
            <option value="ІА-12">ІА-12</option>
            <option value="ІА-13">ІА-13</option>
            <option value="ІА-14">ІА-14</option>
          </select>
          <small v-if="errors.discipline" class="error">{{ msg.discipline}}</small>
        </div>
        <div class="form-group mb-4">
          <label for="student-email">Group-id*</label>
          <select name="" id="group" class="form-select" v-model="group" @change="checkGroup">
            <option value="">Оберіть групу</option>
            <option value="ІА-11">ІА-11</option>
            <option value="ІА-12">ІА-12</option>
            <option value="ІА-13">ІА-13</option>
            <option value="ІА-14">ІА-14</option>
          </select>
          <small v-if="errors.group" class="error">{{msg.group}}</small>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

// import 'vue-select/dist/vue-select.css'

export default defineComponent({
  name: "Schedules_ADD",
  data: () => ({
    //змінні компонету
    scheduleName: '',
    scheduletime: '',
    teacher: '',
    discipline:'',
    group:'',
    classroom:'',
    msg: [],
    errors: {
      scheduleName: true,
      scheduletime: true,
      teacher: true,
      discipline:true,
      group:true,
      classroom:true,
    },
  }),
  directives: {
    //Локальна реєстрація директив
  },
  methods: {
    checkForm: function (event) {
      this.checkName();
      this.checkTime();
      this.checkTeacher();
      this.checkDiscipline();
      this.checkGroup();
      this.checkClassroom();
      if (!this.errors.scheduleName && !this.errors.scheduletime && !this.errors.teacher && !this.errors.discipline && !this.errors.group &&!this.errors.classroom) {
        alert("Ваші дані прийнято та успішно зареєстровано")
        this.clearForm();
      } else {
        alert("Форма не прийнята... Перевірте ваші дані, виправте та надішліть ще раз ")

      }
    },
    clearForm() {
      this.scheduleName = '';
      this.scheduletime = '';
      this.teacher = '';
      this.discipline = '';
      this.group= '';
      this.classroom= '';

    },

    checkName() {
      if (this.scheduleName.length === 0) {
        this.errors.scheduleName = true;
        this.msg['scheduleName'] = 'Назва не може бути пустою';
      }  else {
        this.errors.scheduleName = false;
      }
    },
    checkTime() {
      if (this.scheduletime.length === 0) {
        this.errors.scheduletime = true;
        this.msg['scheduletime'] = 'Час не може бути пустим';
      }  else {
        this.errors.scheduletime = false;
      }
    },
    checkTeacher() {
      if (this.teacher.valueOf() === '') {
        this.errors.teacher = true;
        this.msg['teacher'] = 'Оберіть викладача';
      } else {
        this.errors.teacher = false;
      }
    },
    checkDiscipline() {
      if (this.discipline.valueOf() === '') {
        this.errors.discipline = true;
        this.msg['discipline'] = 'Оберіть викладача';
      } else {
        this.errors.discipline = false;
      }
    },
    checkGroup() {
      if (this.group.valueOf() === '') {
        this.errors.group = true;
        this.msg['group'] = 'Оберіть групу';
      } else {
        this.errors.group = false;
      }
    },

    checkClassroom() {
      if (this.classroom.length > 5) {
        this.errors.classroom = true;
        this.msg['classroom'] = 'Максимум 5 цифр';
      }  else if (/[^0-9]/.test(this.classroom)) {
        this.errors.classroom = true;
        this.msg['classroom'] = 'Please enter a valid classroom';
      } else {
        this.errors.classroom = false;
      }
    }
  },
})

</script>