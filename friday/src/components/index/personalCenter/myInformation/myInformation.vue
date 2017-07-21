<template>
  <div class="myInformation">
    <div id="c_information">
      <h4>我的消息</h4>
      <div id="c_Content">
        <table border="1" cellspacing="0" cellpadding="0">
          <tr>
            <th>标题</th>
            <th>发送时间</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          <tr>
            <td>您的货物已发货,请关注物流信息</td>
            <td>2017-07-18</td>
            <td>未查看</td>
            <td>
              <button>查看</button>
              <span>|</span>
              <button>删除</button>
            </td>
          </tr>
          <tr>
            <td>您的货物已发货,请关注物流信息</td>
            <td>2017-07-18</td>
            <td>未查看</td>
            <td>
              <button>查看</button>
              <span>|</span>
              <button>删除</button>
            </td>
          </tr>
          <tr>
            <td>您的货物已发货,请关注物流信息</td>
            <td>2017-07-18</td>
            <td>未查看</td>
            <td>
              <button>查看</button>
              <span>|</span>
              <button>删除</button>
            </td>
          </tr>
          <tr>
            <td>您的货物已发货,请关注物流信息</td>
            <td>2017-07-18</td>
            <td>未查看</td>
            <td>
              <button>查看</button>
              <span>|</span>
              <button>删除</button>
            </td>
          </tr><tr>
          <td>您的货物已发货,请关注物流信息</td>
          <td>2017-07-18</td>
          <td>未查看</td>
          <td>
            <button>查看</button>
            <span>|</span>
            <button>删除</button>
          </td>
        </tr>
          <tr>
            <td>您的货物已发货,请关注物流信息</td>
            <td>2017-07-18</td>
            <td>未查看</td>
            <td>
              <button>查看</button>
              <span>|</span>
              <button>删除</button>
            </td>
          </tr>

        </table>

      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'myInformation',
        data(){
            return {}
        },
        components: {}
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  #c_information{
    width: 1085px;
    height: 628px;
    border: 1px solid #e9e9e9;
    float: left;
    /*text-align: center;*/
  }
  #c_Content{
    text-align: center;
  }
  #c_information h4 {
    border-bottom: 1px solid #e9e9e9;
    font-size: 20px;
    color: #828282;
    line-height: 60px;
    padding-left: 20px;
  }
  #c_Content table{
    margin:20px auto;
    width: 1045px;
    border-collapse: collapse;
    border: 1px solid #e9e9e9;
  }
  #c_Content table tr{
    line-height: 55px;
    border:1px solid #e9e9e9;
  }
  #c_Content table tr td{
    font-size: 14px;
    color: #969696;
    border: 0px;
  }
  #c_Content table tr th{
    border: 0px;
    color: #6d6d6d;
  }
  #c_Content table tr:nth-child(n+2):hover{
    background: #f3fff3;
  }
  #c_Content table tr td button{
    border:none;
    outline: none;
    background: transparent;
    color: #3e9444;
    font-size: 14px;
  }

</style>
