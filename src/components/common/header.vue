<template>
  <div class="container">
    <div class="wrapper">
      <h1 id="logo">Cesium-Study</h1>
      <div class="navBox">
        <router-link to="/beginnerList">
          <p class="text">Beginner</p>
        </router-link>
        <router-link to="/GeometriesList">
          <p class="text">Geometries</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.wrapper {
  gap: 60px;
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#logo {
  font-size: 30px;
  cursor: pointer;
}

.navBox {
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text {
  font-size: 18px;
  font-weight: 500;
  color: #222;
  cursor: pointer;
}
</style>