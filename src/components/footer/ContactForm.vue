<template>
  <section>
    <form ref="form" @submit.prevent="sendMessage">
      <h3>CONTACT</h3>
      <input v-model="name" type="text" placeholder="NAME / NOM *" required />
      <input v-model="email" type="email" placeholder="EMAIL *" required />
      <textarea v-model="message" placeholder="MESSAGE *" required></textarea>
      <button type="submit">SEND MESSAGE</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const form = ref<HTMLElement | null>(null);

const name = ref("");
const email = ref("");
const message = ref("");

const sendMessage = () => {
  emailjs
    .send(
      "service_xufnxq8",
      "template_yo9qmic",
      {
        from_name: name.value,
        message: message.value,
        from_email: email.value,
      },
      "I70RKpmZdwqxkUKKs"
    )
    .then((res) => {
      alert("Message sent successfully!");
      console.log(res);
      name.value = "";
      email.value = "";
      message.value = "";
    })
    .catch((err) => console.log(err));
};
</script>

<style scoped lang="scss">
section {
  @include fdCol-jcCt-aiCt;
  min-height: 500px;
  width: 100%;
  padding: 70px 20px;
  h3 {
    width: 100%;
    font-size: 3rem;
    color: rgb(34, 32, 32);
  }
}

form {
  display: flex;
  column-gap: 10px;
  flex-wrap: wrap;
  max-width: 900px;
  height: 400px;
  color: white;
  & input,
  textarea {
    border: 1px solid black;
    outline: none;
    padding: 1em;
    &::placeholder {
      color: black;
      font-size: 1.2em;
    }
  }
  & input {
    flex: 1;
    height: 50px;
  }
  & textarea {
    width: 100%;
    height: 150px;
  }
  & button {
    width: 200px;
    height: 60px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid #212529;
    cursor: pointer;
  }
}
</style>
