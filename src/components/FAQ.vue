<template>
  <div>
    <div class="main">
      <div class="container-fluid">
        <div class="box">
          <p class="heading">FAQs</p>
          <div class="faqs">
            <router-link type="button" class="btn btn-info" to="/addfaq">Add FAQ</router-link>
            <details>
              <summary class="question-faq">First question?
                <router-link type="button" class="icon-block mx-4" to="/editfaq"><i class="fa-solid fa-pen"></i></router-link>
                <a href="#" class="icon-block "><i class="fa-solid fa-trash"></i></a>
              </summary>
              <hr>
              <p class="text-faq">Mauris cursus mattis molestie a. Ac auctor augue mauris augue. Diam vulputate ut pharetra sit amet aliquam. Faucibus turpis in eu mi bibendum. Sodales ut eu sem integer. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Erat nam at lectus urna duis convallis. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Adipiscing elit ut aliquam purus. Mollis aliquam ut porttitor leo a. Ultrices dui sapien eget mi proin sed libero enim sed. Aliquet nibh praesent tristique magna sit amet.</p>
            </details>
            <details>
              <summary class="question-faq">Is this the second question?
                <router-link type="button" class="icon-block mx-4" to="/editfaq"><i class="fa-solid fa-pen"></i></router-link>
                <a href="#" class="icon-block "><i class="fa-solid fa-trash"></i></a>
              </summary>
              <hr>
              <p class="text-faq">Felis bibendum ut tristique et egestas quis. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Amet cursus sit amet dictum sit amet justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Pharetra massa massa ultricies mi quis hendrerit.</p>
            </details>
            <details>
              <summary class="question-faq">3 question?
                <router-link type="button" class="icon-block mx-4" to="/editfaq"><i class="fa-solid fa-pen"></i></router-link>
                <a href="#" class="icon-block "><i class="fa-solid fa-trash"></i></a>
              </summary>
              <hr>
              <p class="text-faq">Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Purus ut faucibus pulvinar elementum integer. In fermentum posuere urna nec tincidunt praesent semper feugiat. </p>
            </details>
            <details>
              <summary class="question-faq">What is FAQ mean?
                <router-link type="button" class="icon-block mx-4" to="/editfaq"><i class="fa-solid fa-pen"></i></router-link>
                <a href="#" class="icon-block "><i class="fa-solid fa-trash"></i></a>
              </summary>
              <hr>
              <p class="text-faq">Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Purus ut faucibus pulvinar elementum integer. In fermentum posuere urna nec tincidunt praesent semper feugiat. </p>
            </details>
            <details>
              <summary class="question-faq">What is Lorem ipsum?
                <router-link type="button" class="icon-block mx-4" to="/editstudent"><i class="fa-solid fa-pen"></i></router-link>
                <a href="#" class="icon-block "><i class="fa-solid fa-trash"></i></a>
              </summary>
              <hr>
              <p class="text-faq">In hendrerit gravida rutrum quisque non tellus. Cursus sit amet dictum sit amet justo donec. Cursus vitae congue mauris rhoncus aenean vel. Facilisis leo vel fringilla est ullamcorper. Lacus vestibulum sed arcu non odio. Nunc sed id semper risus in hendrerit. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Dui ut ornare lectus sit. Lectus magna fringilla urna porttitor rhoncus dolor purus. Dignissim suspendisse in est ante in nibh. </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ"
}
</script>