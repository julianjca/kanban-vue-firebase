<template>
  <div class="cardContent">
    <h2 @click="changeStatus">{{item.title}}</h2>
  </div>
</template>

<script>
import database from '../assets/config.js'

export default {
  name: 'ContentCard',
  data: function () {
    return {}
  },
  props: ['item'],
  created () {},
  methods: {
    changeStatus () {
      database
        .ref()
        .child('/' + this.$vnode.key)
        .update({ title: this.item.title, status: 'todo' })
    }
  }
}
</script>

<style scoped>
.cardContent {
  font-size: 10px;
  color: #fff;
  width: 70%;
  height: 60px;
  background-color: #4684f6;
  -webkit-box-shadow: 0px 5px 4px #c0c0c09d;
  -moz-box-shadow: 0px 5px 4px #c0c0c09d;
  box-shadow: 0px 5px 4px #c0c0c09d;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 50px;
  vertical-align: middle;
  cursor: pointer;
}

.card h2 {
  padding-top: 20px;
  padding-bottom: 28px;
}
</style>
