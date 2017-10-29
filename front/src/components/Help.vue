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
  </div>
</template>

<script>
export default {
  name: 'Help',
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
