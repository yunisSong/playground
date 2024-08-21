<script setup>
import { ref, watch } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import MyCpn from "./components/MyCpn";
import MyCpn1 from "./components/MyCpn1";
import Segment from "./components/Segment";
import MYSegment from "./components/Yunis.tsx";

const itemList = [
  {
    label: "ALL",
    value: "1",
  },
  {
    label: "ALL1",
    value: "11",
  },
  {
    label: "ALL2",
    value: "12",
  },
  {
    label: "ALL3",
    value: "13",
  },
];
const status = ref("");
watch(status, (v1, v2) => {
  console.log("v1,v2: ", v1, v2);
});

const log = (count) => {
  console.log("count: ", count);
};
</script>

<template>
  <MyCpn1 msg="Vite + Vue" count="12">
    <MyCpn msg="123" />
  </MyCpn1>
  <Segment v-model="status" :itemList="itemList" />
  {{ status }}

  <MYSegment message="你好" count="100" @changeCount="log">
    <template #head="slot">
      <h1>head="slot" {{ slot.text }}</h1></template
    >

    <template #footer> <h1>1111</h1></template>
    <template #default> <h1>222222</h1></template>
  </MYSegment>

  <MYSegment message="你好11111111">
    <h1>默认插槽</h1>
  </MYSegment>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
