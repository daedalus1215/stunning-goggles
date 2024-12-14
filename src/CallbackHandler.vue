<template>
    <div>
      <p>Welcome, {{ user?.profile?.email }}</p>
      <p>Access Token: {{ user?.access_token }}</p>
      <p>ID Token: {{ user?.id_token }}</p>
      <p>Refresh Token: {{ user?.refresh_token }}</p>
    </div>
  </template>
  
  <script>
  import { handleSignInCallback } from "../authService";
  
  export default {
    name: "CallbackHandler",
    data() {
      return {
        user: null,
      };
    },
    async created() {
      try {
        this.user = await handleSignInCallback();
      } catch (error) {
        console.error("Error handling callback:", error);
      }
    },
  };
  </script>
  