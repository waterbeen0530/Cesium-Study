<template>
  <div class="container">
    <BannerVue />
    <MenuVue />
  </div>
</template>

<script>
import BannerVue from "@/components/main/banner.vue";
import MenuVue from "@/components/main/menu.vue";

export default {
  name: "MainVue",
  components: {
    BannerVue,
    MenuVue,
  },
};
</script>

<style scoped>
.container {
  width: 1000px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}
</style>