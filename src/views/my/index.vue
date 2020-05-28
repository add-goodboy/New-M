<template>
  <div class="my-container">
    <!-- 登录状态 -->
    <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image class="avatar" fit="cover" round src="http://img.ewebweb.com/uploads/20191225/21/1577280507-UjzfoOwets.jpeg" />
          <span class="name">华生</span>
        </div>
        <div class="right">
          <van-button round size="mini">编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <div class="count">{{userInfo.art_count}}</div>
          <div class="text">头条</div>
        </div>
        <div class="data-item">
          <div class="count">{{userInfo.follow_count}}</div>
          <div class="text">关注</div>
        </div>
        <div class="data-item">
          <div class="count">{{userInfo.fans_count}}</div>
          <div class="text">粉丝</div>
        </div>
        <div class="data-item">
          <div class="count">{{userInfo.like_count}}</div>
          <div class="text">获赞</div>
        </div>
      </div>
    </div>
    <!-- 登录状态 -->

    <!-- 未登录状态 -->
    <div v-else class="header top-box">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="">
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <!-- 未登录状态 -->

    <!-- 导航 -->
    <van-grid class="grid-nav" column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont iconshoucang"></i>
        <span slot="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont iconlishi"></i>
        <span slot="text">历史</span>
      </van-grid-item>
    </van-grid>
    <!-- 导航 -->
    <van-cell title="消息通知" is-link />
    <van-cell title="皮皮同学" is-link />
    <van-cell v-if="user" class="out-login" clickable @click="onLogin" title="退出登录" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'MyIndex',
  data () {
    return {
      userInfo: {} // 用户信息
    }
  },
  created () {
    // 检测用户是否是登录状态,如果是则请求用户信息
    if (this.user) {
      this.loadUserInfo()
    }
  },
  methods: {
    // 退出提示 点击确定后清除登录状态
    onLogin () {
      this.$dialog.confirm({
        title: '确定退出吗'
      })
        .then(() => {
          // 将vuex里面的setUser数据变为空
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    },
    async loadUserInfo () {
      try {
        const { data } = await getUserInfo()
        console.log(data)
        this.userInfo = data.data
      } catch (err) {
        this.$toast('获取用户信息失败,清稍候再试')
      }
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>
.my-container {
  .header {
    height: 361px;
    background: url('~@/assets/banner.png');
    background-size: cover;
  }

  .top-box {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }
  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          margin-right: 23px;
          border: 3px solid #fff;
        }
        .name {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    .data-stats {
      display: flex;
      .data-item {
        height: 130px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .count {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }
  .grid-nav {
    margin-bottom: 9px;
    .grid-item {
      height: 141px;
      i.iconfont {
        font-size: 45px;
      }
      .iconshoucang {
        color: #eb5556;
      }
      .iconlishi {
        color: #ff9d1d;
      }
      span {
        font-size: 28px;
      }
    }
  }
  .out-login {
    height: 104px;
    margin-top: 9px;
    text-align: center;
    color: #d86262;
  }
}
</style>
