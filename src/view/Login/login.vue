<template>
    <div class="loginbg">
        <div class="logo-top">
            <div class="logo-img-box">
                <!-- <img src="../../assets/images/logo.png" class="logo" /> -->
            </div>
            <div class="font48">枣庄项目</div>
        </div>

        <div class="input-box">
            <div class="flex-box font28 border-bottom">
                <span class="iconfont iconshouji"></span>
                <van-field v-model="account" autocomplete="new-password" placeholder="请输入手机号" />
            </div>
            <div class="flex-box font28 border-bottom">
                <span class="iconfont iconmima"></span>
                <van-field
                    v-model="password"
                    type="password"
                    autocomplete="new-password"
                    placeholder="请输入密码"
                    />
            </div>
        </div>
        <div class="width90">
            <van-button type="info" @click="login()" block>登录</van-button>
        </div>
    </div>
</template>

<script>
import * as accountApi from "../../axios/account"
export default {
    data() {
        return {
        account: "",
        password: ""
        };
    },
    async created(){
    //  console.log(localStorage.getItem("yimeng_tel"))
    //  this.account = localStorage.getItem("yimeng_tel");
    },
    methods: {
        download() {
        // window.location.href = "http://www.emengshop.com/app/";
        },
        async login() {
        const res = await accountApi.login(this.account, this.password);
        // console.log(res);
        if (res.code == 1) {
            this.$toast(res.msg);
            localStorage.removeItem("yimeng_tel");
            localStorage.setItem("yimeng_tel",this.account);
            localStorage.removeItem("ght_token");
            localStorage.setItem("ght_token", res.data.token);
            this.$router.push({
            path: "/home"
            });
        } else {
            this.$toast(res.msg);
        }
        },
        forgetPassword() {
        this.$router.push({ path: "/forgetPassword" });
        }
    }
}
</script>

<style lang='less' scope>
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
</style>