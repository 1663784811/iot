<template>

  <div class="headerBar">
    <div>沙粒飞过的家</div>
    <div>
      <div class="addMenu">


        <van-popover v-model:show="state.showAddMenu" :actions="state.actions" theme="dark"  @select="onSelect" placement="bottom-end">
          <template #reference>
            <van-icon name="add-o"/>
          </template>
        </van-popover>

      </div>

    </div>
  </div>


  <van-tabs>
    <van-tab title="全部"/>
    <van-tab title="客厅"/>
    <van-tab title="房间1"/>
  </van-tabs>

  <div class="equipmentBox">
    <div v-for="i in 100" :key="i">
      <div class="equipmentItem">
        <div class="imgBox">
          <img
              src="https://dgss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=631209715,244924259&fm=30&app=106&f=JPEG?w=312&h=208&s=5283B8AE4ABFB0CC42AF13820300F08D"
              alt="">
        </div>
        <div class="equipmentName">
          手机红个遥感器
        </div>
        <div>
          <div>客厅</div>
          <div>设备2</div>
        </div>
        <div>在线|离线</div>
        <div>开关</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import { showToast } from 'vant';

const state = reactive({
  showAddMenu: false,
  actions: [
    {text: '添加设备'},
    {text: '扫一扫'},
    {text: '添加场景'},
  ]

})

const onSelect = (action) => showToast(action.text);

</script>

<style scoped lang="less">
.headerBar {
  margin: 10px 16px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;

  .addMenu {
    font-size: 24px;
  }
}


.equipmentBox {
  margin: 0 10px;
  display: flex;
  flex-wrap: wrap;

  & > div {
    width: 50%;
    margin-bottom: 10px;

    &:nth-child(2n -1) {
      padding-right: 5px;
    }

    &:nth-child(2n) {
      padding-left: 5px;
    }
  }

  .equipmentItem {
    background: #fff;
    border-radius: 10px;
    padding: 10px;

    .imgBox {
      height: 60px;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }


}
</style>