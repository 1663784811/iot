<template>
  <div class="mainPage">
    <router-view/>
    <van-tabbar v-model="state.pageIndex">
      <van-tabbar-item
          v-for="(item, index) in state.pageView"
          :key="index"
          :icon=" index===state.pageIndex? item.icon: item.select">
        {{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import {ref, reactive, watch} from 'vue';
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

const state = reactive({
  pageIndex: 2,
  pageView: [
    {
      name: '设备',
      icon: 'wap-home',
      select: 'wap-home-o',
      routeName: 'home'
    },
    {
      name: '任务',
      icon: 'clock',
      select: 'clock-o',
      routeName: 'task'
    },
    {
      name: '消息',
      icon: 'volume',
      select: 'volume-o',
      routeName: 'message'
    },
    {
      name: '我的',
      icon: 'contact',
      select: 'contact-o',
      routeName: 'my'
    }
  ]
})

watch(() => state.pageIndex, (val) => {
  router.push({name: state.pageView[val].routeName})
})

</script>

<style scoped lang="less">
.mainPage {
  background: #f7f8fa;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 80px;
}
</style>