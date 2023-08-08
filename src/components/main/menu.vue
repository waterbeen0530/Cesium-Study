<template>
  <div class="container">
    <div class="wrapper">
      <router-link to="/beginnerList">
        <div class="item">
          <div class="textBox">
            <div id="tag">개발중</div>
            <h1>Beginner 기능 모음</h1>
            <p>
              CesiumJS의 사용법을 익히고 <br />기본적인 기능을 개발하였습니다.
            </p>
          </div>
        </div>
      </router-link>

      <router-link to="/GeometriesList">
        <div class="item">
          <div class="textBox">
            <div id="tag">개발중</div>
            <h1>Geometries 기능 모음</h1>
            <p>CesiumJS의 도형 사용법을 <br />익히고 개발하였습니다.</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuVue",
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.wrapper {
  width: 100%;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item {
  position: relative;
  width: 480px;
  height: 260px;
  border-radius: 10px;
  background-color: rgba(241, 244, 250, 0.937);
  transition: 0.6s;
}

.item:hover {
  transform: translateY(-10px);
  cursor: pointer;
}

.textBox {
  position: absolute;
  top: 30px;
  left: 30px;
  color: #222;
}

#tag {
  width: 64px;
  height: 26px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #222;
}
</style>
