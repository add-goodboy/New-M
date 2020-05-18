<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="标题" />
    <!-- 导航栏 -->
    <!-- 登录表单 -->
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field name="mobile" v-model="user.mobile" placeholder="请输入手机号" type="number" maxlength="11"
                 :rules="userFormRules.mobile">
        <i slot="left-icon" class="iconfont iconshouji"></i>
      </van-field>
      <van-field v-model="user.code" name="code" placeholder="请输入验证码" type="number" maxlength="6"
                 :rules="userFormRules.code">
        <i slot="left-icon" class="iconfont iconyanzhengma"></i>
        <template #button>
          <!-- 验证码倒计时组件 -->
          <van-count-down v-if="isCountDownShow" :time="1000 * 5" format="ss s" @finish="isCountDownShow = false" />
          <van-button v-else class="send-sms-btn" round size="small" native-type="button" @click="onSendSms"
                      type="default">发送验证码</van-button>
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
import { login, sendSms } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810' // 验证码
      },
      userFormRules: {
        mobile: [
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      },
      isCountDownShow: false
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
    },
    async onSendSms () {
      //  1.校验手机号 通过ref获取表单示例对象,通过name获取具体表单项
      try {
        await this.$refs.loginForm.validate('mobile')
        this.$toast('发送成功')
      } catch (err) {
        return console.log('验证失败')
      }
      // 2.验证通过显示倒计时
      this.isCountDownShow = true
      // 3.请求发送验证码
      try {
        const res = await sendSms(this.user.mobile)
        console.log(res)
      } catch (err) {
        this.isCountDownShow = false
        if (err.response.status === 429) {
          this.$toast('操作频繁,请稍候再试')
        } else {
          this.$toast('发送失败,请稍候再试')
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
