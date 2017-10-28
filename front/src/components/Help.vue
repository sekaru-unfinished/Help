<template>
  <div class="hello">
    <h1>Help</h1>

    <div class="wantToHelp">
      <button type="button" name="wantToHelp">I Wan't to Help</button>
    </div>
    <div class="needHelp">
      <button type="button" name="needHelp">I need Help</button>
    </div>
    <div class="lookingToChat">
      <button type="button" name="chat">Looking to Chat</button>
    </div>
  </div>



</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
