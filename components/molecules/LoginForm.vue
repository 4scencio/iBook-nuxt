<template>
  <form class="login-form" @submit.prevent="login">
    <h1>Acesse sua conta:</h1>
    <input v-model="form.email" type="email" placeholder="Digite seu e-mail" />
    <input
      v-model="form.password"
      type="password"
      placeholder="Digite sua senha"
    />
    <p><a href="">Esqueci minha senha :'(</a></p>
    <button type="submit">Entrar</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store' 


export default Vue.extend({
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      console.log(this.form.email, this.form.password)
      try {
        await auth.create({email: this.form.email, password: this.form.password})
      } catch(error) {
        console.log(error)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.login-form {
  display: grid;
  grid-gap: 1.5rem;
  input {
    color: black;
    border: 1px solid rgba(color('dark'), 0.5);
    padding: 0.5rem 1rem;
    border-radius: 5rem;
    color: color(dark, darkest);
    font-size: 1.1rem;
    transition: all 300ms ease;
    &:focus {
      border: 1px solid color('light');
    }
  }
  p {
    text-align: center;
    a {
      text-decoration: none;
      color: black;
      list-style: none;
    }
  }

  button {
    box-shadow: -1px 8px 26px 5px rgba(0, 0, 0, 0.12);
    background: color(dark, darkest);
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5rem;
    color: color('light', 'darkest');
    transition: all 300ms ease;
    font-size: 1.1rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
