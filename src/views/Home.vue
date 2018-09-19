<template>
  <div class="home">
    <MainHeader></MainHeader>
    <div class="container">
      <div class="container-card">
        <KanbanCard v-for="(data,index) in taskData" :key="index" :data="data"></KanbanCard>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import KanbanCard from '@/components/KanbanCard.vue'
import database from '../assets/config.js'

export default {
  name: 'home',
  components: {
    MainHeader,
    KanbanCard
  },
  data: function () {
    return {
      taskData: [
        {
          name: 'Pre-Log',
          data: []
        },
        {
          name: 'To-Do',
          data: []
        },
        {
          name: 'On-Going',
          data: []
        },
        {
          name: 'Pre-Log',
          data: []
        }
      ]
    }
  },
  methods: {},
  created () {
    let self = this
    var leadsRef = database.ref('/')
    console.log(leadsRef)
    leadsRef.on('value', function (snapshot) {
      console.log('masuk')
      console.log(snapshot.val())
      snapshot.forEach(function (childSnapshot) {
        if (childSnapshot.val().status === 'prelog') {
          const obj = childSnapshot.val()
          obj.id = childSnapshot.key
          self.taskData[0].data.push(obj)
        } else if (childSnapshot.val().status === 'todo') {
          const obj = childSnapshot.val()
          self.taskData[1].data.push(obj)
        } else if (childSnapshot.val().status === 'ongoing') {
          const obj = childSnapshot.val()
          self.taskData[2].data.push(obj)
        } else {
          const obj = childSnapshot.val()
          self.taskData[3].data.push(obj)
        }
      })
    })
  }
}
</script>

<style>
.container-card {
  margin-top: 30px;
  padding-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 90%;
  grid-gap: 20px;
}
.container {
  background-color: #f6f7f9;
  width: 100%;
  min-height: 675px;
}
</style>
