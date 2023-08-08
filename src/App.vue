<template>
  <div class="rute">
    <HeaderVue />
    <MainVue />
  </div>
</template>

<script>
import HeaderVue from "./components/common/header.vue";
import MainVue from "./views/main.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    MainVue,
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
