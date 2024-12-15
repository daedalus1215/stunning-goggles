<template>
    <button @click="signIn">Sign In</button>
  </template>
  
  <script>
  import { signInRedirect } from "../../services/authService";
  
  export default {
    name: "SignInButton",
    methods: {
      async signIn() {
        await signInRedirect();
      },
    },
  };
  </script>
  