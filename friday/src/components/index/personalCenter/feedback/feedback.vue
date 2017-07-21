<template>
  <div class="feedback">
    <div id="c_ideaContent">
      <h4>意见反馈</h4>
      <div id="c_iContent">
        <textarea name="" rows="" cols="" placeholder="请输入您的意见我们将期待与您共同成长"></textarea>
        <button>取消</button>
        <button>提交</button>

      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'feedback',
        data(){
            return {}
        },
        components: {}
    }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #c_ideaContent {
    width: 1085px;
    height: 628px;
    border: 1px solid #e9e9e9;
    float: left;
    /*text-align: center;*/
  }
  #c_iContent{
    text-align: center;
  }
  #c_ideaContent h4 {
    border-bottom: 1px solid #e9e9e9;
    font-size: 20px;
    color: #373737;
    line-height: 60px;
    padding-left: 20px;
  }

  #c_iContent textarea {
    width: 1000px;
    height: 375px;
    border: 1px solid #e9e9e9;
    outline: none;
    display: block;
    margin: 0 auto;
    resize: none;
    margin-top: 40px;
    color: #948876;
    padding: 5px;
    font-size: 16px;
    word-wrap: break-word;
  }

  #c_iContent button {
    width: 150px;
    height: 50px;
    font-size: 20px;
    color: white;
    border-radius: 5px;
    outline: none;
    border: none;
    display: inline-block;
    margin: 40px auto;

  }
  #c_iContent button:nth-child(2){
    margin-right: 100px;
    background: #999;
  }
  #c_iContent button:nth-child(3){
    background: #f78327;
  }

</style>
