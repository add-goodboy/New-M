<template>
  <div id="app">
    <h1>头条</h1>
    <div class="iconfont icondianzan"></div>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <router-view />
    <div class="box" >Hello World</div>
  </div>
</template>

<style lang="less">
.box {
  width: 555px;
  height: 64px;
  background-color:pink;
}

</style>
