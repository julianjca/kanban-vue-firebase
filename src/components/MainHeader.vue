<template>
  <div class="main-header">
    <h1>KanbanTools</h1>
    <!-- <i class="fas fa-plus"></i> -->
    <input type="text" placeholder="Input Task Here" v-model="taskName">
    <input type="submit" @click="sendItem">
  </div>
</template>

<script>
import database from '../assets/config.js'

export default {
  name: 'MainHeader',
  data () {
    return {
      taskName: ''
    }
  },
  methods: {
    sendItem () {
      database.ref('/').push({
        title: this.taskName,
        status: 'Pre-Log'
      })
      this.taskName = ''
    }
    // deleteArr () {
    //   this.$emit('deleting-array')
    // }
  }
}
</script>

<style scoped>
html,
body {
  font-family: 'Lato';
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

h1,
h2,
h3 {
  padding: 0;
  margin: 0;
}
.main-header h1 {
  color: #4684f6;
  margin-left: auto;
  margin-left: auto;
  text-align: center;
  border-top: #4684f6 3px solid;
  padding-top: 1.5%;
  font-size: 35px;
}
.main-header i {
  font-size: 20px;
  color: #4684f6;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 50px;
  cursor: pointer;
}

.main-header input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

input {
  height: 30px;
  width: 300px;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
