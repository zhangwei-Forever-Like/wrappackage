<template>
  <div id="help">
    <SNavBar></SNavBar>
    <div id="point">
      <div id="biaoqian">
        <li class="dropdown head-dpdn">
          <a style="color: black" class="dropdown-toggle"
            ><i class="el-icon-info"></i> 联系我们</a
          >
          <br />
        </li>
      </div>

      <div id="center">
        <div id="tittle" class="in">
          <h1>Get In Touch</h1>
          <span>__________</span>
        </div>
        <div class="in">
          <el-input v-model="input1" placeholder="Name"></el-input>
        </div>
        <div class="in">
          
        <el-input v-model="input2" placeholder="Email"></el-input>
        </div>
        <div class="in">
        <el-input v-model="input3" placeholder="Subject"></el-input>
        </div>
        <div class="in">
          <el-input
          class="in"
          id="message"
          type="textarea"
          :rows="2"
          placeholder="Your Message"
          v-model="textarea"
        ></el-input>
        </div>
        
        <div class="bu">
          <el-button id="submit" type="primary">SENT MESSAGE</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SNavBar from "../../components/NavBar/studio";
export default {
  components: { SNavBar },
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      textarea: "",
    };
  },
};
</script>

<style>
#center {
  position: relative;
  text-align: center;
  width: 600px;
  margin: 90px auto;
}
.el-input {
  margin-top: 20px;
}
#biaoqian {
  float: left;
  margin: -60px 30px;
  position: fixed;
}

#tittle {
  text-align: center;
}

.in {
  width: 500px;
  position: relative;
  margin: 0 auto;
}
#message {
  height: 200px;
  margin: 20px auto;
}
.bu{
  width: 500px;
height: 50px;
    position: relative;
  margin: 0 auto;


}
#submit {
  width: 200px;
  color: white;
  float: left;
  margin-left: 160px;
}

</style>