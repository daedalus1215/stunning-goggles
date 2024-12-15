<template>
  <q-btn label="Sign In" color="primary" @click="signIn" />
</template>

<script>
import { signIn } from '../services/oidc'

export default {
  name: 'SignInButton',
  methods: {
    signIn,
  },
}
</script>
