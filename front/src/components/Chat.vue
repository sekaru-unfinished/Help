<template>
  <div class="chat">
    <h1>{{ msg }}</h1>
    <div id="container">
        <div id="chatbox">
            <ul>
                <li v-for="message in messages" :key="message">
                    <span class="name">{{message.split(':')[0]}}</span>{{message.split(':')[1]}}
                </li>           
            </ul>
        </div>
        <div id="chatbar">
            <textarea rows=1 v-model="chatBarText" @keydown.enter.prevent.stop="send()"></textarea>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      msg: 'This is the chat',
      messages: [],
      chatBarText: '',
      myID: ''
    }
  },
  mounted: function() {
    this.$socket.emit('requestID'); 
  },
  methods: {
    send: function() {
      if(this.chatBarText.length===0) return;
      this.$socket.emit('message', { msg: this.chatBarText });
      this.chatBarText = '';    
    },
    add: function(message) {        
      this.messages.push(message);

      // hacky delay so the message is pushed to the observer before scrolling
      var self = this;
      setTimeout(() => {
        var box = self.$el.querySelector('#chatbox');
        box.scrollTop = box.scrollHeight;
      }, 100);
    }
  },
  sockets: {
    connect: function() {
    },
    myID: function(data) {
      this.myID = data.id;
      this.add('Your ID is [' + data.id + ']');
    },
    message: function(data) {
      var chatMessage = data.id ? data.id + ':' + data.msg : data.msg;      
      if(this.myID.length>0) {
        if(chatMessage.startsWith(this.myID)) chatMessage = chatMessage.replace(this.myID, "You"); 
      }

      this.add(chatMessage);
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  opacity: 0;
  animation: fade 0.3s ease-in-out forwards;
}

@keyframes fade {
	100% { 
    opacity: 1; 
  }
}

textarea {
  font-size: 1rem;    
  border: none;
  resize: none;
  width: 100%;
  min-height: 1rem;
}

textarea:focus {
  outline: none;
}

#container {
  width: 80vw;   
  margin: 0 auto;  
  display: flex;
  flex-direction: column;
  align-items: center;   
}

#chatbox {
  order: 0;
  width: 100%;
  height: 20vh;
  border: 1px solid #ddd;
  border-radius: 0.5em;   
  padding: 0.5em;
  text-align: left;   
  margin-bottom: 0.25em; 
  overflow: scroll;
}

#chatbar {
  order: 1;
  width: 100%;    
  border: 1px solid #ddd;
  border-radius: 0.5em;  
  padding: 0.5em;     
}

.name {
  margin-right: 0.75em;
  font-weight: bold;
}
</style>
