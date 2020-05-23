<template>
	<view>
		<view class="form">
			<view class="form-item">
				<view class="form-item-label">应用sdkAppId</view>
				<view class="form-item-input-wrapper">
					<input :value="form.sdkAppId" class="form-item-input" @input="handleFormDataChange($event, 'sdkAppId')" :disabled="status != 'common'" />
				</view>
			</view>
			<view class="form-item">
				<view class="form-item-label">应用secretKey</view>
				<view class="form-item-input-wrapper">
					<input :value="form.secretKey" class="form-item-input" @input="handleFormDataChange($event, 'secretKey')" :disabled="status != 'common'" />
				</view>
			</view>
			<view class="form-item">
				<view class="form-item-label">用户userSig</view>
				<view class="form-item-input-wrapper">
					
					<textarea maxlength="800" :value="form.userSig" class="form-item-input" @input="handleFormDataChange($event, 'userSig')" :disabled="status != 'common'"></textarea>
				</view>
			</view>
			<view class="form-item">
				<view class="form-item-label">用户ID</view>
				<view class="form-item-input-wrapper">
					<input :value="form.userId" class="form-item-input" @input="handleFormDataChange($event, 'userId')" :disabled="status != 'common'" />
				</view>
			</view>
			<view class="form-item">
				<view class="form-item-label">房间ID</view>
				<view class="form-item-input-wrapper">
					<input :value="form.roomId" class="form-item-input" @input="handleFormDataChange($event, 'roomId')" :disabled="status != 'common'" />
				</view>
			</view>
		</view>

		<view class="tips">
			
		</view>

		<view class="action-bar">
			<button class="button sm" @click="handleStartCall">开始通话</button>
		</view>
	</view>
</template>

<script>
const Trtc = uni.requireNativePlugin('nie-trtcview');
export default {
	data() {
		return {
			status:'common',
			form: {
				userId: '123456', //用户id
				roomId: '123456', //房间id
				userSig: '', //用户签名
				secretKey: 'fbf374aa3cb3113b536a968760046e18b170292d8ad5b98bcb434e01e49d6081', //SDK密钥
				sdkAppId: 1400324288 //appid 
			}
		};
	},
	onLoad() {},
	methods: {
		handleFormDataChange(e, key) {
			this.form[key] = e.detail.value;
		},
		handleStartCall() {
			
			
			 	Trtc.startCall(JSON.parse(JSON.stringify(this.form)), e => {

					//没有返回值，菜
			});
			
				
			
		}
	}
};
</script>

<style>


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
