<template>
  <q-btn label="Sign Out" color="negative" @click="signOut" />
</template>

<script>
import { signOut } from '../services/oidc'

export default {
  name: 'SignOutButton',
  methods: {
    signOut,
  },
}
</script>
