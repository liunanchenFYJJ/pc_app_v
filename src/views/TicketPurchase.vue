<!--
 * @Descripttion: 
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2020-01-20 11:10:01
 * @LastEditors  : https://github.com/liunanchenFYJJ
 * @LastEditTime : 2020-01-20 11:51:43
 -->
<template>
    <div>
        购票
        <test-jsx :msg="msg"></test-jsx>
    </div>
</template>
<script>
// import TestJsx from '@/comments/TestJsx.vue';
import TestJsx from '../components/TestJsx';
export default {
    components: {
        TestJsx
    },
    data() {
        return {
            msg: 'hello msg'
        }
    },
}
</script>
