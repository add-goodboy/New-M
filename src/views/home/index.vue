<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar">
      <van-button class="top-button" slot="title" round icon="search" size="small" type="info">搜索</van-button>
    </van-nav-bar>
    <!-- 导航栏 -->
    <van-tabs class="home-tab" v-model="active" animated swipeable>
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <div class="placeholder" slot="nav-right"></div>
      <div class="right-btn" slot="nav-right">
        <i class="iconfont icongengduo"></i>
      </div>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less">
.home-container {
  .van-nav-bar__title {
    max-width: unset;
  }
  .top-button {
    width: 555px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;
    text-align: center;
  }
  .van-icon {
    color: #fff;
    font-size: 32px;
    padding-top: 3px;
  }
}
.home-tab {
  .van-tabs__wrap {
    height: 82px;
  }
  .van-tab {
    min-width: 200px;
    border-right: 1px solid #effdf0;
    font-size: 30px;
    color: #777777;
  }
  .van-tab--active {
    color: #333333;
  }
  .van-tabs__nav {
    padding-bottom: 0;
  }
  .van-tabs__line {
    bottom: 8px;
    width: 30px !important;
    height: 6px;
    background-color: #3296fa;
  }
  .placeholder {
    flex-shrink:0;
    width: 66px;
    height: 82px;
  }
  .right-btn {
    position: fixed;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 66px;
    height: 82px;
    background-color: #fff;
    opacity: 0.902;
    i .iconfont {
      font-size: 33px;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 100%;
      background-image: url(~@/assets/gradient-gray-line.png);
      background-size: contain;
    }
  }
}
</style>
