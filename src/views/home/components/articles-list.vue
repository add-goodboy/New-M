<template>
  <div class="articles-list">
    <!-- {{item.name}}列表组件 -->
    <van-list v-model="loading" :finished="finished" :error.sync="error" error-text="请求失败，点击重新加载"
              finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(article, index) in list" :key="index" :title="article.title" />
    </van-list>
  </div>
</template>

<script>
import { getArticles } from '@/api/articles'
export default {
  name: 'ArticlesList',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      timestamp: null,
      error: false // 控制列表加载失败状态
    }
  },
  created () { },
  methods: {
    async onLoad () {
      // 异步更新数据
      try {
        // 1.请求获取数据
        const { data } = await getArticles({
          channel_id: this.item.id,
          // 使用逻辑或运算符,当第一个值为空时则执行第二个值
          timestamp: this.timestamp || Date.now(),
          with_top: 1
        })
        // 2.将请求的数据合并到list数组中
        const { results } = data.data
        console.log(results)
        this.list.push(...results)
        // 3.本次加载结束后,将loading状态设置为加载结束
        this.loading = false
        // 4.判断是否全部加载完毕
        if (results.length) {
          this.timestamp = data.data.pre_timestamp
        } else {
          this.finished = true
        }
      } catch (err) {
        console.log('请求文章失败')
        this.error = true
        this.loading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
