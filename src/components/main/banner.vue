<template>
  <div class="container">
    <div class="textBox">
      <h1 id="title">Cesium 공부 모음</h1>
      <p id="text">
        3D지도 오픈소스 JS 라이브러리 cesiumJS.<br />제가 공부한 것들 모음
        입니다.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerVue",
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(96, 178, 206, 1) 0%,
    rgba(101, 136, 241, 1) 51%,
    rgba(140, 142, 235, 1) 100%
  );
}

.textBox {
  position: absolute;
  top: 100px;
  left: 60px;
  color: #fff;
}

#text {
  line-height: 26px;
}
</style>