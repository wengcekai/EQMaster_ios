<template>
  <view class="container">
    <!-- 调试信息显示区域 -->
    <view class="debug-info">
      <!-- <text>User ID: {{ userId }}</text> -->
      <!-- <text>Username: {{ username }}</text> -->
      <!-- <text>Gender: {{ gender }}</text> -->
      <!-- <text>Selected Options: {{ selectedOptions.join(', ') }}</text> -->
      <text>Number of Selected Options: {{ selectedOptions.length }}</text>
      <!-- <text>Birthday: {{ birthday ? JSON.stringify(birthday) : '未设置' }}</text> -->
      <!-- <text>Scenario Data: {{ JSON.stringify(scenarioData) }}</text> -->
      <!-- <text>Background: {{ background }}</text> -->
      <text>Num: {{ num }}</text>
    </view>

    <image class="background-image" src="/static/bg1.png" mode="aspectFill" />
    <view class="room-info">
      <text class="room-text">三楼电梯间</text>
    </view>
    <view class="gray-circle">
      <image class="logo" src="/static/Vector.png" mode="aspectFit" />
    </view>
    
	
    <!-- 动态生成选项列表 -->
    <view v-for="(option, index) in scenarioData?.scenes?.options" :key="index"
          :class="['text-box', { 'selected': selectedOptionIndex === index }]" 
          :style="{ top: `${350 + index * 80}px` }"
          @click="selectOption(index)">
      <text class="text-content">{{ option.text }}</text>
    </view>
	
    <view class="continue-button" @click="nextStep">
      <text class="arrow">→</text>
    </view>
	
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfoStyle: {
        bottom: '180px',
        left: '50%',
        transform: 'translateX(-50%)'
      },
      userId: '',
      username: '',
      gender: '',
      selectedOptions: [],
      birthday: null,
      scenarioData: null,
      background: '',
      description: '' ,
      num: null, // Ensure this is included in data
      selectedOptionIndex: null // Add this line to track the selected option
    }
  },
  onLoad(option) {
    console.log('Received options:', option);

    // 接收上一个页面传递的所有数据
    this.userId = option.userId || '';
    this.username = decodeURIComponent(option.username || '');
    this.gender = option.gender || '';

    if (option.options) {
      try {
        this.selectedOptions = JSON.parse(decodeURIComponent(option.options));
      } catch (e) {
        console.error('Error parsing options:', e);
        this.selectedOptions = [];
      }
    }

    if (option.birthday) {
      try {
        this.birthday = JSON.parse(decodeURIComponent(option.birthday));
      } catch (e) {
        console.error('Error parsing birthday:', e);
        this.birthday = null;
      }
    }

    // Add this to receive the num parameter
    this.num = option.num || null;

    console.log('Parsed data:', {
      userId: this.userId,
      username: this.username,
      gender: this.gender,
      selectedOptions: this.selectedOptions,
      birthday: this.birthday,
      num: this.num // Log the received num
    });

    // 发送数据到后端
    this.sendDataToBackend();
  },
  methods: {
    updateUserInfoPosition(x, y) {
      this.userInfoStyle.left = `${x}px`;
      this.userInfoStyle.bottom = `${y}px`;
      this.userInfoStyle.transform = 'none';
    },
    navigateToTest1() {
      const testPageUrl = `/pages/test/test6?userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(JSON.stringify(this.birthday))}&options=${encodeURIComponent(JSON.stringify(this.selectedOptions))}&num=${this.num}`;
      
      uni.navigateTo({
        url: testPageUrl
      });
    },
    sendDataToBackend() {
      // 调试信息，确认 num 的值和类型
      console.log('发送之前的 num:', this.num); 
      console.log('num 的类型:', typeof this.num); // 应该是 'number'

      uni.request({
        url: 'http://127.0.0.1:8180/api/new-scenario',  // 请确保这是正确的后端地址
        method: 'POST',
        data: {
          userId: this.userId,
          username: this.username,
          gender: this.gender,
          selectedOptions: this.selectedOptions,
          answernum: this.num // 确保这个值被发送并且是一个数字
        },
        success: (res) => {
          console.log('后端响应:', res.data);
          this.scenarioData = res.data;
          this.extractBackground();
        },
        fail: (err) => {
          console.error('发送数据到后端出错:', err);
        }
      });
    },
    extractBackground() {
      if (this.scenarioData && this.scenarioData.scenes && this.scenarioData.scenes.description) {
        this.description = this.scenarioData.scenes.description;
      } else {
        console.warn('Background information not found in scenario data');
        this.background = '无法获取背景信息';
      }
    },
    selectOption(index) {
      this.selectedOptionIndex = index;
    },
    nextStep() {
      if (this.selectedOptionIndex === null) {
        uni.showToast({
          title: '请选择一个选项',
          icon: 'none'
        });
        return;
      }

      // Update num by appending the selected option index + 1
      this.num = parseInt(this.num.toString() + (this.selectedOptionIndex + 1).toString());

      // Check if num is a five-digit number
      if (this.num >= 10000 && this.num <= 99999) {
        // Navigate to cta/cta page
        uni.navigateTo({
          url: '/pages/cta/cta'
        });
      } else {
        // Navigate to the next page (test3)
        this.navigateToTest1();
      }
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.room-info {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #37374266;
  border-radius: 20px;
  padding: 12px 10px;
  width: 140px;
  box-sizing: border-box;
}

.room-text {
  color: #F6ECC9;
  font-size: 16px;
  text-align: right;
  padding-right: 10px;
}

.gray-circle {
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: #373742;
  border-radius: 50%;
  top: 61px;
  left: 130px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 20px;
  height: 20px;
}

.text-box {
  position: absolute;
  left: 20px;
  right: 20px;
  background-color: rgba(55, 55, 66, 0.8);
  border-radius: 50px;
  padding: 15px 25px;
  min-height: 50px;
  max-height: 200px;
  overflow: auto;
  transition: background-color 0.3s;
}

.text-content {
  color: white;
  font-size: 14px;
  line-height: 1.4;
}

.text-box.selected {
  background-color: #30d158;
}

.continue-button {
  opacity: 1;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #30d158;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  text-align: center;
  z-index: 1;
}

.arrow {
  color: #ffffff;
}

.continue-button:active {
  opacity: 1;
}
.debug-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  font-size: 10px;
  z-index: 100;
  max-height: 50vh;
  overflow-y: auto;
}

.debug-info text {
  display: block;
  margin-bottom: 2px;
}

</style>

