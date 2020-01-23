<!--
 * @Descripttion: components的JSX写法
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2020-01-20 11:28:01
 * @LastEditors  : https://github.com/liunanchenFYJJ
 * @LastEditTime : 2020-01-20 11:52:21
 -->
<script>
export default {
  name: 'jsx_test',
  props: {
    msg: {
      type: String,
      default: '',
    }
  },
  render(h) {
    return (
      <h1 class="h1">{this.msg}</h1>
    )
  },
}
</script>
<style lang="scss">
  .h1 {
    color: red;
  }
</style>