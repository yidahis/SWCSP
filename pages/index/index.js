//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    array:[{text:'I am teacher'}],
    text:'I am a student!'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeText: function(){
    this.setData({
      text: 'changed data'
    })
  },
  pushToHome:function(){
    wx.navigateTo({
      url: '../home/home',
      success: function(res){
        // success
        console.log('push to home success');
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  changeTextArray: function(){
    this.setData({
      'array[0].text':'factory'
    })
  },
  //下拉刷新
  onPullDownRefresh:function(){

  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/page/user?id=123'
    }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
