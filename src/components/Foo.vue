<template>
  <div class="foo">
    <h1 @click="handleClick">Foo Component</h1>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert("foo")
    },
  },
}
</script>

<style>
.foo {
  background-color: #fcfcfc;
}
</style>
