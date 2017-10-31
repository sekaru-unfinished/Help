<template>
  <div class="hello">
    <h1>Help</h1>

    <div class="wantToHelp">
      <button type="button" name="wantToHelp">I want to help</button>
    </div>
    <div class="needHelp">
      <button type="button" name="needHelp">I need help</button>
    </div>
    <div class="lookingToChat">
      <button type="button" name="chat">Looking to chat</button>
    </div>

    <h2><router-link :to="'chat'">Chat</router-link></h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

h1{
  text-transform: uppercase;
}

button{
  padding: 40px;
  width: 300px;
}
</style>
