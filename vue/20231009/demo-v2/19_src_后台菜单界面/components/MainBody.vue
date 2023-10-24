<template>
  <div class="center">
    <div class="navigation">
      <div class="nav_left">{{ $route.query.title }}</div>
      <div class="nav_right">
        {{ $route.query.title }} > {{ $route.query.son }}
      </div>
    </div>
    <div class="condition">
      条件展示区
      <el-button type="text" @click="dialogFormVisible = true"
        >打开嵌套表单的 Dialog</el-button
      >

      <el-dialog :visible.sync="dialogFormVisible" width="30%">
        <div class="title">
          <div class="title_img">
            <span>定制场景</span>
          </div>
          <div class="title_icon" @click="dialogFormVisible = false">X</div>
        </div>
        <form action="">
          <div class="every_particular">
            <div class="lab">
              <label for="quality">质检场景</label>
            </div>
            <div class="inp">
              <input
                type="text"
                id="quality"
                name=""
                placeholder="请输入内容"
              />
            </div>
          </div>
          <div class="every_particular">
            <div class="lab">
              <label for="scene">场景描述</label>
            </div>
            <div class="inp">
              <input type="text" id="scene" name="" placeholder="请输入内容" />
            </div>
          </div>
          <div class="every_particular">
            <div class="lab">
              <label for="suanfa">场景算法库</label>
            </div>
            <div class="inp">
              <select name="" id="suanfa">
                <option value="">算法1</option>
                <option value="">算法2</option>
                <option value="">算法3</option>
              </select>
            </div>
          </div>
          <div class="every_particular big">
            <div class="lab">
              <label for="scene">上传图片</label>
            </div>
            <div class="inp upload">
              <div class="shang">
                <img
                  ref="img1"
                  src="../assets/imgs/QQ截图20231023144547.png"
                  alt=""
                />
                <span>+ 点击上传图片</span>
              </div>
              <input
                @change="say"
                type="file"
                id="scene"
                name=""
                placeholder="请输入内容"
              />
            </div>
          </div>
          <div class="every_particular_button">
            <span>提交</span>
          </div>
        </form>
      </el-dialog>
    </div>
    <div class="list">列表展示区</div>
  </div>
</template>

<script>
export default {
  name: "MainBody",

  data() {
    return {
      dialogFormVisible: true,
    };
  },

  mounted() {},

  methods: {
    say(e) {
      this.$refs.img1.src = window.URL.createObjectURL(e.target.files[0]);
    },
  },
};
</script>

<style lang="scss">
.center {
  position: absolute;
  left: 0;
  right: 0;
  top: 8vh;
  bottom: 0;
  display: felx;
  padding-top: 2vh;
  padding-left: 1vw;
  padding-right: 1vw;
  box-sizing: border-box;
  color: white;
  .navigation {
    width: 100%;
    height: 5vh;
    // background-color: red;
    display: flex;
    justify-content: space-between;
    .nav_left {
      width: 165px;
      height: 36px;
      background: url("../assets/imgs/图片6.png") no-repeat;
      background-size: 100% 100%;
      line-height: 36px;
      box-sizing: border-box;
      padding-left: 40px;
      font-size: 14px;
    }
    .nav_right {
      width: 165px;
      height: 36px;
      line-height: 36px;
      box-sizing: border-box;
      padding-left: 40px;
      font-size: 14px;
    }
  }
  .condition {
    width: 100%;
    height: 10vh;
    background-color: red;
    margin-top: 3vh;
    background: linear-gradient(rgba(24, 72, 158, 0.6), rgba(24, 72, 158, 0));
    text-align: center;
    padding-top: 10px;
    box-sizing: border-box;
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      padding: 0px;
      background: url("../assets/imgs/图片5.png");
    }
    .title {
      display: flex;
      justify-content: space-between;
      background-color: transparent;
      margin-bottom: 20px;
      .title_img {
        box-sizing: border-box;
        padding-left: 50px;
        text-align: left;
        line-height: 45px;
        width: 250px;
        height: 45px;
        background: url("../assets/imgs/图片7.png") no-repeat;
        span {
          background-image: linear-gradient(180deg, white, rgb(35, 154, 212));
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      }
      .title_icon {
        width: 50px;
        line-height: 45px;
        color: white;
        font-weight: 700;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: right;
      .every_particular {
        display: flex;
        width: 85%;
        height: 2em;
        // border: solid;
        margin-bottom: 15px;

        .lab {
          width: 25%;
          margin-right: 15px;
          color: rgba(1, 125, 175);
          label {
            width: 100%;
            text-align: right;
            line-height: 2em;
          }
        }
        .inp {
          flex: 1;
          input,
          select {
            width: 100%;
            height: 100%;
            color: rgba(145, 154, 170);
            border: solid rgba(0, 75, 139);
            background: linear-gradient(
              rgba(24, 72, 158, 0.6),
              rgba(24, 72, 158, 0)
            );
            outline: none;
            border-radius: 3px;
            box-sizing: border-box;
          }
        }

        .upload {
          position: relative;
          .shang {
            box-sizing: border-box;
            padding: 5px 5px;
            width: 100%;
            height: 100%;
            border: solid;
            border-radius: 5px;
            position: absolute;
            top: 0;
            left: 25;
            display: flex;
            align-items: center;
            img {
              height: 100%;
            }
            span {
              color: rgba(145, 154, 170);
              margin-left: 10px;
            }
          }
          input {
            opacity: 0;
            border: solid;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
      .big {
        height: 3em;
        .lab {
          label {
            line-height: 3em;
          }
        }
      }
      .every_particular_button {
        margin: 30px 0;
        width: 120px;
        height: 50px;
        background: url("../assets/imgs/图片8.png");
        text-align: center;
        line-height: 50px;
        span {
          color: rgb(218, 166, 20);
          font-size: 20px;
        }
      }
    }
  }
  .list {
    width: 100%;
    height: 100%;
    background-color: red;
    margin-top: 1vh;
    background: linear-gradient(rgba(24, 72, 158, 0.6), rgba(24, 72, 158, 0));
    text-align: center;
    padding-top: 10px;
    box-sizing: border-box;
  }
}
</style>