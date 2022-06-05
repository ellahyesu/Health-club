<template>
  <div>
      <h1>Welcome {{title}} !</h1>
      <input type="text" v-model="input1">
      <button type="button" @click="getData">Get</button>
      <button type="button" @click="setData">Set</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "개발자",
      title2: "서울",
      input1: "abcd",
    };
  },
  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = "12345";
    }
  }
};
</script>