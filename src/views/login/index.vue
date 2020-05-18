<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="标题" />
    <!-- 导航栏 -->
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field name="手机号" v-model="user.mobile" placeholder="请输入手机号">
        <i slot="left-icon" class="iconfont iconshouji"></i>
      </van-field>
      <van-field v-model="user.code" name="验证码" placeholder="请输入验证码">
        <i slot="left-icon" class="iconfont iconyanzhengma"></i>
        <template #button>
          <van-button class="send-sms-btn" round size="small" type="default">发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <!-- 登录表单 -->
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810' // 验证码
      }
    }
  },
  methods: {
    async onSubmit (values) {
      console.log('submit', values)
      // 获取表单数据
      const user = this.user

      this.$toast.loading({
        message: '登陆中...',
        forbidClick: true
      })
      // 提交表单请求登录
      try {
        const res = await login(user)
        console.log('登陆成功', res.data.data)
        this.$toast.success('登陆成功')
      } catch (err) {
        if (err.response.status === 400) {
          console.log('手机号或验证码错误', err.response)
          this.$toast.fail('手机号或验证码错误')
        } else {
          console.log('登陆失败', err.response)
          this.$toast.fail('登录失败')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .iconfont {
    font-size: 37px;
  }

  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }

  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
