<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded ">
      <h4 class="text-center">Додавання нового частого питання</h4>
      <form action="#" id="form" method="post" @submit.prevent="checkForm">
        <div class="form-group m-1 mb-4">
          <label for="question">Питання*</label><br>
          <small id="name-describe" class="form-text text-muted">Не більше 100 символів </small>
          <input type="text" class="form-control" id="question" aria-describedby="name-describe"
                 placeholder="Введіть питання" v-model="question" @input="checkQuestion">
          <small v-if="errors.question" class="error">{{ msg.question }}</small>
        </div>
        <div class="form-group mb-4">
          <label for="answer">Відповідь*</label><br>
          <small id="name-describe" class="form-text text-muted">Не більше 300 символів </small>
          <input type="text" class="form-control" id="answer"
                 placeholder="Введіть відповідь" v-model="answer" @input="validateAnswer">
          <small v-if="errors.answer" class="error">{{ msg.answer}}</small>
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
  name: "FAQs_ADD",
  data: () => ({
    //змінні компонету
    question: '',
    answer: '',
    faculty: '',
    msg: [],
    errors: {
      question: true,
      answer: true,
      faculty: true,
    },
  }),
  directives: {
    //Локальна реєстрація директив
  },
  methods: {
    checkForm: function (event) {
      this.checkQuestion();
      this.validateAnswer();
      this.checkFaculty();
      if (!this.errors.question && !this.errors.answer && !this.errors.faculty) {
        alert("Ваші дані прийнято та успішно зареєстровано")
        this.clearForm();
      } else {
        alert("Форма не прийнята... Перевірте ваші дані, виправте та надішліть ще раз ")
      }
    },
    clearForm() {
      this.question = '';
      this.answer = '';
      this.faculty = '';
    },

    checkQuestion() {
      if (this.question.length === 0) {
        this.errors.question = true;
        this.msg['question'] = 'Питання не може бути пустим';
      } else if (this.question.length > 100) {
        this.errors.question = true;
        this.msg['question'] = 'Питання завелике';
      } else {
        this.errors.question = false;
      }
    },
    validateAnswer() {
      if (this.answer.length === 0) {
        this.errors.answer = true;
        this.msg['answer'] = 'Відповідь не може бути пустою';
      } else if (this.answer.length > 300) {
        this.errors.answer = true;
        this.msg['answer'] = 'Відповідь завелика';
      } else {
        this.errors.answer = false;
      }
    }
  },
})

</script>