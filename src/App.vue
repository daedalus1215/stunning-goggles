<template>
  <div id="app">
    <div>
      <button @click="signIn">Sign In</button>
      <button @click="signOut">Log Out</button>
    </div>
    <div v-if="user">
      <p>Hello: {{ user.profile?.email }}</p>
      <p>Access Token: {{ user.access_token }}</p>
      <p>ID Token: {{ user.id_token }}</p>
      <p>Refresh Token: {{ user.refresh_token }}</p>
    </div>
  </div>
</template>

<script>
import { userManager, signOutRedirect } from "./authService";

export default {
  data() { 
    return {
      user: null,
    };
  },
  methods: {
    async signIn() {
      await userManager.signinRedirect();
    },
    async signOut() {
      await signOutRedirect();
    },
  },
  async created() {
    try {
      const user = await userManager.signinCallback();
      this.user = user;
    } catch (error) {
      console.error("User sign-in callback failed", error);
    }
  },
};
</script>
