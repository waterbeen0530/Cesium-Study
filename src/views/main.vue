<template>
  <div class="container"><BannerVue /></div>
</template>

<script>
import BannerVue from "@/components/main/banner.vue";
export default {
  name: "MainVue",
  components: {
    BannerVue,
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