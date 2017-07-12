<template>
    <div>
        Login Page
        <ui-button @click="login">Test</ui-button>
    </div>
</template>
<script>
import auth from '@/lib/api/auth'

export default {
  methods: {
    login () {
      auth.login()
    }
  }
}
</script>
<style>
</style>
