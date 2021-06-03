<template>
  <div>
      <!-- <nav-bar></nav-bar> -->
    <div class="studioWrap">
      <div class="stuioinner">
        <div class="imgcontent">
          <!-- <img :src="chengxuyuan" alt="" /> -->
        </div>
        <div class="contentRight">
          <div class="studioMessage">
            <div class="messagecontent">工作室信息</div>
          </div>
          <div class="aboutour">
            <p>关于我们</p>
            <p>程序员</p>
            <div class="nametime">
             <div class="natb">
                  <div class="nat">
                <span class="ntma"><i>我</i></span> <span ><i>1</i></span>
              </div>
              <div class="nat">
                <span class="ntma">公司名称</span>
                <span>成立时间</span>
                 <div class="nat">
                <span class="ntma">程序员</span>
                <span>2021/5/19</span>
              </div>
              </div>
             </div>
             <div class="natb">
                 
              <div class="nat nat2">
                <span class="ntma"><i>1</i></span>
                <span><i>1</i></span>
              </div>
              <div class="nat">
                <span class="ntma">公司地址</span>
                <span>公司电话</span>
              </div>
              <div class="nat"><span class="ntma">陕西</span> <span>110和119和120</span></div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style sscoped>
.studioWrap{
    height: 600px;
    position: relative;
    /* background-color: antiquewhite; */
}
.studioWrap .stuioinner{
  width: 900px;
  height: 400px;
  /* border: 1px solid aqua; */
  margin-left: 50%;
  /* margin-top: 200px; */
  position: absolute;
  left: -450px;
  top: 40px;
  background-color: rgb(185, 255, 232);
}
.imgcontent img{
    width: 300px;
    height: 300px;
    margin-top: 20px;
}
.contentRight{
    width: 500px;
    height: 300px;
    /* background-color: rgb(184, 168, 168); */
    position: absolute;
    right: 10px;
    top: 20px;
    /* box-shadow: 2px 2px red; */
}
.studioMessage{
width: 450px;
height: 40px;
/* background-color: royalblue; */
margin-top: 20px;
margin-left: 25px;
}
.messagecontent{
    width: 100px;
    height: 100%;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    /* background-color: sandybrown; */
}
.aboutour{
    width: 450px;
    height: 200px;
    margin: 20px 25px;
    /* background-color: seagreen; */
}

.nat .ntma{
     display: inline-block;
    width: 100px;
    height: 20px;
    margin-right: 200px;
    /* background-color: skyblue; */
}
.natb{
    /* background-color: slateblue; */
     margin-bottom: 15px;
    }
</style>