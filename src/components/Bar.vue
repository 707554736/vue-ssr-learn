<template>
  <div class="bar">
    <h1>Bar Component</h1>
    <h1 @click="handleClick">Bar Component</h1>
    <h2>异步Ajax数据：</h2>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
// 这里在Bar组件的默认导出对象中增加了一个方法asyncData，在该方法中会dispatch相应的action，进行异步数据获取。

// 需要注意的是，我在mounted中也写了获取数据的代码，这是为什么呢？ 因为想要做到同构，代码单独在浏览器端运行，也应该是没有问题的，又由于服务器没有mounted生命周期，所以我写在这里就可以解决单独在浏览器环境使用也可以发起同样的异步请求去初始化数据。

const fetchInitialData = ({ store }) => {
  store.dispatch("fetchBar")
}

export default {
  asyncData: fetchInitialData,
  methods: {
    handleClick() {
      alert("Bar")
    },
  },

  mounted() {
    // 服务端渲染只有bedoreCreate和Created两个生命周期
    // 把AJAX初始化数据放在这里，为了通过单独浏览器渲染使用
    let store = this.$store
    fetchInitialData({ store })
  },

  computed: {
    msg() {
      return this.$store.state.bar
    },
  },
}
</script>

<style>
.bar {
  background-color: rosybrown;
}
</style>
