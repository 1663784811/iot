<template>


  <div class="myHeader">
    <div class="userInfo">
      <div class="faceBox">
        <img src="https://img14.360buyimg.com/n7/jfs/t1/164446/38/46268/9586/664b0b34Ffc943002/aeba395f8522f1cc.jpg.avif">
      </div>
      <div class="userInfoText">
        <div class="userName">沙粒飞过</div>
        <div>今天又是元气满满的一天</div>
      </div>
      <div class="moreInfo">
        see
      </div>
    </div>

    <div class="numBox">
      <div class="Item">
        <div>30</div>
        <div>设备</div>
      </div>
      <div>
        <div>30</div>
        <div>任务</div>
      </div>
      <div>
        <div>30</div>
        <div>设备</div>
      </div>
    </div>

  </div>

  <van-cell-group inset>
    <van-cell icon="location-o" is-link title="通知设置"/>
    <van-cell icon="location-o" is-link title="安全设置"/>
    <van-cell icon="location-o" is-link title="系统权限"/>
    <van-cell icon="location-o" is-link title="个人信息收集清单"/>
    <van-cell icon="location-o" is-link title="帮助与服务"/>
    <van-cell icon="location-o" is-link title="检查更新"/>
  </van-cell-group>


</template>

<script setup>

</script>

<style scoped lang="less">
.myHeader {
  background: #00b4b3;
  background: linear-gradient(to bottom, #F42937, #F4293700);
  .userInfo {
    display: flex;
    align-items: center;
    padding: 0 16px;
    .faceBox {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      overflow: hidden;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .userInfoText{
      flex: 1;
      padding-left: 10px;
      .userName{
        font-size: 18px;

      }
    }
    .moreInfo{

    }
  }
  .numBox{
    display: flex;
    justify-content: space-around;
  }
}
</style>