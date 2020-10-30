<template>
    <div>
        <navbar title="枣庄项目（一）"></navbar>
            <div class="middle-box">
                <van-grid clickable :border="false" :column-num="2">
                    <van-grid-item to = "/Annual">
                        <div>
                            123
                            <span>年度工作管理</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item to = "/Safe">
                        <div>
                            123
                            <span>安全生产执法检查</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item to = "/mine">
                        <div>
                            123
                            <span>安全监管文件管理</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item to = "/mine">
                        <div>
                            123
                            <span>提请、转发管理</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item to = "/mine">
                        <div>
                            123
                            <span>待办事项管理</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item to = "/mine">
                        <div>
                            123
                            <span>监管分布图</span>
                        </div>
                    </van-grid-item>
                </van-grid>
            </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import navbar from "@/components/navBar"
import tabbar from "@/components/tabbar"
export default {
    components: {
        navbar, tabbar
    }
}
</script>

<style lang="less" scope>
.logo-img-box {
  width: 2rem;
  height: 2.01rem;
  margin: 0rem auto 0.5rem auto;
  padding-top: 1rem;
}
.logo {
  width: 100%;
  border-radius: 0.1rem;
}
body,
html {
  height: 100%;
}
.loginbg {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.input-box {
  width: 90%;
  margin: 1rem auto 0.2rem auto;
}
.input-box .iconfont {
  font-size: 0.42rem;
  color: #59a4fe;
}
.logo-top {
  width: 100%;
  height: 5rem;
}
.font48{
  font-size: 0.48rem;
  font-weight: 600;
}
.reg-box{
  display:flex;

  .register{
    text-align:center !important;
  }
  .forget{
    text-align:center !important;
  }
}
.middle-box{

}
</style>