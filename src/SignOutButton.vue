<template>
    <button @click="signOut">Log Out</button>
  </template>
  
  <script>
  import { signOutRedirect } from "./authuserService";
  
  export default {
    name: "SignOutButton",
    methods: {
      signOut() {
        signOutRedirect();
      },
    },
  };
  </script>
  