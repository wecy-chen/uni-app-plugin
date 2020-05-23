<!--
 * @Descripttion:
 * @version:
 * @Author: xxx
 * @Date: 2020-02-07 09:46:29
 * @LastEditors: wecy-chen
 * @LastEditTime: 2020-04-14 16:23:20
 -->

- @Descripttion:
- @version:项目介绍
- @Author: wecy-chen
- @Date: 2020-02-07 09:46:29
- @LastEditors: wecy-chen
- @LastEditTime: 2020-04-02 16:15:35

# 组件

- authCode-发送短信倒计时
- calculate-uni-计数器
- good-detail-商品详情
- image-uni-头像
- mescroll-uni-滚动条
- mescroll-unis-滚动条
- popup-uni-弹窗
- pwdDialog-密码输入
- select-address-地区选择
- swipe-action-滑动删除
- switch-item-滑块
- uni-load-more
- upload-img-批量图片上传

# 主页面

## tab-pages

导航页面

- home-首页
- myPatient-患者管理
- message-消息中心
- my-我的

## pages

主页面

- openRx/onlineRx 在线开方
- openRx/otcTakeRx 拍照开方
- otcManage 处方管理
- teleList 在线问诊
- appointmentList 预约问诊
- E_wallet 电子钱包
- state 我的动态
- appointmentSetting 问诊设置
- leaveWord 留言回复
- leaveWord/reply 留言回复
- autoRes 自动回复
- drugsManage 药品分组
- drInquiryTable 问诊单
- drug-list/drug-select 已选商品
- decoction-rule 煎药规则
- service-chat 在线客服
- inquiry-list 问诊单
- inquiry-list/inquiry 通用问诊单
- drInquiryTable/index 问诊单 (待删)
- inquiry-list/drInquiryDetail/index 通用问诊单(待删)

# 分包

## sub-pages

# 接口

用法

```javascript
this.$api.dr_file.get_dr_one(data, options)
```

# 校验

用法

```javascript
const rule = {
  phone: ['required:true|请输入手机号码', 'tel:true|手机号码格式有误']
}
this.$util.checkForm({ phone: this.phone }, rule) //返回true 检验成功通过 false不通过
```

# 工具

1. 弹窗

```javascript
this.$toast({}) //$showTost
this.**$hide**() //$hideToast
this.$loading({}) //显示加载中
this.$hideLoading() //隐藏加载中
this.$modal({}) //模态框
```

2. 其它

```javascript
this.$backPageFn(fnName, (param = null), (back = false), (page = 1)) //触发上个页面的方法
```

# 样式

通用样式路径 src--->styles--->app.scss

1. 底部按钮

```html
<view class="global-footer-view">
  <button class="global-footer-btn" form-type="reset">取消</button>
  <button class="global-footer-btn global-confirm" form-type="submit">
    提交
  </button>
</view>
```

# 格式

1. 导航栏数据

```javascript
navArr: [{ label: '全部', value: 0, select: false }]
```

# socket

1. 接收消息

```javascript
this.$ws.onmessage(async msg => {})
```

2. 发送消息

```javascript
this.$ws.send({})
```
