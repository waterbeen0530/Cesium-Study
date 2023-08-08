<template>
  <div class="rute">
    <HeaderVue />
    <router-view />
  </div>
</template>

<script>
import HeaderVue from "./components/common/header.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
  },
};
</script>

<style>
.rute {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>;
