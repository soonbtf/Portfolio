<template>
  <section>
    <form @submit.prevent="sendMessage(name, email, message)">
      <h3>CONTACT</h3>
      <input type="text" placeholder="NAME / NOM *" v-model="name" required />
      <input type="email" placeholder="EMAIL *" v-model="email" required />
      <textarea placeholder="MESSAGE *" v-model="message" required></textarea>
      <button type="submit">SEND MESSAGE</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import { Email } from "@/assets/smtp.js";

const name = ref("");
const email = ref("");
const message = ref("");

const sendMessage = (name: string, email: string, message: string) => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "birlakhdar.mehdi@gmail.com",
    Password: "0A05CE00B8C3FE6CC34B97A9F610457D4CA5",
    To: "birlakhdar.mehdi@gmail.com",
    From: "birlakhdar.mehdi@gmail.com",
    Subject: `Message from ${name} - ${email}`,
    Body: message,
  }).then((message: string) => alert(message));
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
