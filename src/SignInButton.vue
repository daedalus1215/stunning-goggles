<template>
    <button @click="signIn">Sign In</button>
  </template>
  
  <script>
  import { signInRedirect } from "./authuserService";
  
  export default {
    name: "SignInButton",
    methods: {
      async signIn() {
        await signInRedirect();
      },
    },
  };
  </script>
  