<template>
  <div>
    <home>
      <div slot="center" class="center">商城</div>
    </home>
    <div class="Sign">
      <div class="heads">
      <div class="head"><img src="../assets/img/未登录-头像.png" alt=""></div>
      <div class="left">
        <p class="Sig">登录/注册</p>
        <p class="yet">📱暂无绑定手机号</p>
      </div>
      <div class="arrow">></div>
      </div>
    </div>
    <div class="dist">
      <div class="balance">
        <p><span class="balance-one">0.00</span><span class="balance-two">元</span></p>
        <p>我的余额</p>
      </div>
      <div class="Vertical"></div>
      <div class="Discount">
        <p><span class="discount-one">0</span><span class="discout-two">个</span></p>
        <p>我的优惠</p>
      </div>
      <div class="Vertical"></div>
      <div class="integral">
        <p><span class="integral-one">0</span><span class="integral-two">分</span></p>
        <p>我的积分</p>
      </div>
    </div>
    <div class="inters"></div>
    <div class="news">
      <span><img src="../assets/img/我的/我的消息.png" alt=""></span>
      <span class="three">我的消息</span>
    </div>
    <div class="four"></div>
    <div class="Shopping">
      <span><img src="../assets/img/我的/积分商城.png" alt=""></span>
      <span class="three">积分商城</span>
    </div>
    <div class="four"></div>
    <div class="card">
      <span><img src="../assets/img/我的/会员卡.png" alt=""></span>
      <span class="three">会员卡</span>
    </div>
    <div class="inters">
    </div>
    <div class="car">
      <span><img src="../assets/img/我的/我的购物车.png" alt=""></span>
      <span class="three">我的购物车</span>
    </div>
    <div class="four"></div>
    <div class="download">
      <span><img src="../assets/img/我的/下载购物App.png" alt=""></span>
      <span class="three">下载购物App</span>
    </div>
  </div>
</template>

<script>
import home from '../view/home.vue'
export default {
  name:"my",
  components:{
    home
  }
}
</script>

<style scoped>
.center{
  color: #ffffff;
}
.Sign{
  height: 100px;
  background-color: crimson;
  margin-top: 38px;
}
.head img{
  width: 60px;
  height: 60px;
  margin-top: 15px;
  margin-left: 10px;
}
.heads{
  margin-top: 15px;
  display: flex;
}
.left{
  margin-top: 22px;
  margin-left: 5px;
}
.left p{
    color: #ffffff;
}
.left .yet{
  font-size: 14px;
}
.arrow{
  margin-top: 25px;
  color: #ffffff;
  font-size: 24px;
  margin-right: 10px;
}
.dist{
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  text-align: center;
}
.balance{
  flex: 1;
}
.Discount{
  flex: 1;
}
.integral{
  flex: 1;
}
.balance p .balance-one{
  color: red;
  font-size: 30px;
}
.Discount p .discount-one{
  color: red;
  font-size: 30px;
}
.integral p .integral-one{
  color: red;
  font-size: 30px;
}
.inters{
  height: 10px;
  background-color: darkgray;
}
.Vertical{
  height: 100px;
  width: 0.5px;
  background-color: darkgray;
  border: 1px solid darkgray;
  margin-top: -20px;
}
.news span img {
  width: 30px;
  height: 30px;
  vertical-align:middle;
}
.Shopping span img{
  width: 30px;
  height: 30px;
  vertical-align:middle;
}
.card span img{
  width: 30px;
  height: 30px;
  vertical-align:middle;
}
.car span img{
  width: 30px;
  height: 30px;
  vertical-align:middle;
}
.download span img{
  width: 30px;
  height: 30px;
  vertical-align:middle;
}
.news .three{
  margin-left: 10px;
}
.Shopping .three{
  margin-left: 10px;
}
.card .three{
  margin-left: 10px;
}
.car .three{
  margin-left: 10px;
}
.download .three{
  margin-left: 10px;
}
.news{
  margin-top: 10px;
}
.Shopping{
  margin-top: 10px;
}
.card{
  margin-top: 10px;
  margin-bottom: 5px;
}
.car{
  margin-top: 10px;
}
.download{
  margin-top: 10px;
}
.four{
  border: 0.5px solid darkgray;
  margin-left: 30px;
  background-color: darkgray;
}
</style>