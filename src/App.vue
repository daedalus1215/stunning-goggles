<template>
  <div>
    <h1>Welcome to My Vue App</h1>
    <SignInButton />
    <SignOutButton />
    <router-view />
  </div>
</template>

<script>
import SignInButton from "./SignInButton.vue";
import SignOutButton from "./SignOutButton.vue";

export default {
  name: "App",
  components: {
    SignInButton,
    SignOutButton,
  },
};
</script>
