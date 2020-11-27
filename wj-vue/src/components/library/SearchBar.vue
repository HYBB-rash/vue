<template>
  <div style="margin-bottom: 30px; display: flex; justify-content: center; align-items: center">
    <el-input
      @keyup.enter.native="searchClick"
      placeholder="通过书名或者作者搜索"
      prefix-icon="el-icon-search"
      size="small"
      style="width: 400px; margin-right: 10px"
      v-model="keywords">
      <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick">搜索</el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      keywords: '',
      books: [],
      cardLoading: []
    }
  },
  methods: {
    searchClick () {
      this.$emit('onSearch')
    }
  }
}
</script>

<style scoped>

</style>
