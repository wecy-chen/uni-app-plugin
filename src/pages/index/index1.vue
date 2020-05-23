<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{title}}</text>
    </view>
    <view>
      <button @click="dciosdialogShowToast()">dciosdialogShowToast</button>
    </view>
    <!-- 语音通话 -->
    <view class="fb-trtc">
      <view class="form">
        <view class="form-item">
          <view class="form-item-label">用户ID</view>
          <view class="form-item-input-wrapper">
            <input
              :value="form.userId"
              class="form-item-input"
              @input="handleFormDataChange($event,'userId')"
              :disabled="status != 'common'"
            />
          </view>
        </view>

        <view class="form-item">
          <view class="form-item-label">房间ID</view>
          <view class="form-item-input-wrapper">
            <input
              :value="form.roomId"
              class="form-item-input"
              @input="handleFormDataChange($event,'roomId')"
              :disabled="status != 'common'"
            />
          </view>
        </view>
      </view>

      <view class="tips">
        <text v-if="status === 'common' ">未发起通话</text>
        <text v-if="status === 'calling' ">正在链接中...</text>
        <text v-if="status === 'doing' ">正在通话中</text>
      </view>

      <view class="action-bar">
        <button v-if="status === 'common'" class="button start-btn" @click="handleStartCall">开始通话</button>
        <button v-if="status === 'doing'" class="button mute-btn" @click="handleChangeMute">
          <text v-if="!mute">开启静音</text>
          <text v-if="mute">关闭静音</text>
        </button>
        <button
          type="warn"
          v-if="status === 'calling' || status === 'doing'"
          class="button stop-btn"
          @click="handleStopCall"
        >停止通话</button>
        <button v-if="status === 'doing'" class="button speaker-btn" @click="handleChangeSpeaker">
          <text v-if="speaker == 0">切换听筒</text>
          <text v-if="speaker == 1">切换扬声器</text>
        </button>
      </view>
    </view>
  </view>
</template>

<script>
const dciosdialog = uni.requireNativePlugin('ios-dialog')
const fbTrtc = uni.requireNativePlugin('fb-trtc')
export default {
  data() {
    return {
      title: 'Hello',
      status: 'common',
      mute: false,
      speaker: 0,
      form: {
        userId: '', //用户id
        roomId: '', //房间id
        userSig: '', //用户签名
        secretKey:
          'ffea287c327cfd7a3b650bd93fdcd864d6bc5b4081e486402e3cb4b53d5dae11', //SDK密钥
        sdkAppId: 1400294273 //appid
      }
    }
  },
  onLoad() {},
  methods: {
    dciosdialogShowToast() {
      //dciosdialog.showToast('测试方法', res => {});
      switch (uni.getSystemInfoSync().platform) {
        case 'android':
          dciosdialog.showToast('这是一个模态弹窗', res => {
            console.log(res)
          })
          break
        default:
          // uni.showModal({
          //     title: '提示',
          //     content: '这是一个模态弹窗',
          //     success: function (res) {});
          break
      }
    },
    handleFormDataChange(e, key) {
      this.form[key] = e.detail.value
    },
    handleStartCall() {
      fbTrtc.startCall(JSON.parse(JSON.stringify(this.form)), e => {
        if (e.status == 200) {
          this.status = 'calling'
        } else if (e.status == 10001) {
          this.status = 'doing'
        } else if (e.status == 10002) {
          fbTrtc.closeCall(e => {
            if (e.status == 200) {
              this.status = 'common'
            } else {
              uni.showToast({
                icon: 'none',
                title: e.message
              })
            }
          })
        } else {
          uni.showToast({
            icon: 'none',
            title: e.message
          })
        }
      })
    },
    handleStopCall() {
      fbTrtc.closeCall(e => {
        if (e.status == 200) {
          this.status = 'common'
        } else {
          uni.showToast({
            icon: 'none',
            title: e.message
          })
        }
      })
    },
    handleChangeSpeaker() {
      fbTrtc.changeSpeaker(this.speaker == 0 ? 1 : 0, e => {
        if (e.status == 200) {
          this.speaker = e.data.route
        } else {
          uni.showToast({
            icon: 'none',
            title: e.message
          })
        }
      })
    },
    handleChangeMute() {
      fbTrtc.changeMute(!this.mute, e => {
        if (e.status == 200) {
          this.mute = e.data.mute
        } else {
          uni.showToast({
            icon: 'none',
            title: e.message
          })
        }
      })
    }
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.fb-trtc {
  padding: 20rpx;
}

.form {
  border: 1rpx solid #f8f8f8;
  padding: 20rpx;
}

.form-item {
  padding-left: 20rpx;
  padding-right: 20rpx;
  display: flex;
  justify-content: space-between;
  line-height: 80rpx;
  font-size: 32rpx;
  margin-bottom: 20upx;
  color: #999999;
}

.form-item:last-child {
  margin-bottom: 0;
}

.form-item-label {
  width: 180rpx;
}

.form-item-input-wrapper {
  background-color: #f8f8f8;
  border-radius: 15rpx;
  padding-left: 20rpx;
  padding-right: 20rpx;
  display: flex;
  align-items: center;
}

.form-item-input {
  //background-color: #007AFF;
}

.action-bar {
  margin-top: 50rpx;
  display: flex;
  font-size: 32rpx;
}

.button {
  font-size: 32rpx;
  width: 230rpx;
}

.tips {
  text-align: center;
  margin-top: 50rpx;
  font-size: 32rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
