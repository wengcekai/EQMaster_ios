<template>
  <view class="container">
    <!-- 调试信息显示区域 -->
    <view class="debug-info">
      <!-- <text>User ID: {{ userId }}</text> -->
      <!-- <text>Username: {{ username }}</text> -->
      <!-- <text>Gender: {{ gender }}</text> -->
      <!-- <text>Selected Options: {{ selectedOptions.join(', ') }}</text> -->
      <!-- <text>Number of Selected Options: {{ selectedOptions.length }}</text> -->
      <!-- <text>Birthday: {{ birthday ? JSON.stringify(birthday) : '未设置' }}</text> -->
      <!-- <text>Scenario Data: {{ JSON.stringify(scenarioData) }}</text> -->
      <!-- <text>Background: {{ background }}</text> -->
    </view>

    <image class="background-image" src="/static/bg1.png" mode="aspectFill" />
    <view class="room-info">
      <text class="room-text">三楼电梯间</text>
    </view>
    <view class="gray-circle">
      <image class="logo" src="/static/Vector.png" mode="aspectFit" />
    </view>
    
	<image class="user-avatar" src="/static/npc2.png" mode="aspectFill" />
    <!-- 调整用户信息模块的位置 -->
    <view class="user-info" :style="userInfoStyle">
      <text class="user-name">小李</text>
    </view>
    
    <!-- 文字框 -->
    <view class="text-box">
      <text class="text-content">{{ description }}</text>
      <view class="expand-icon" @click="navigateToTest1">▼</view>
    </view>


  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfoStyle: {
        bottom: '180px', // 将这个值从 '220px' 改为 '180px'
        left: '50%',
        transform: 'translateX(-50%)'
      },
      userId: '',
      username: '',
      gender: '',
      selectedOptions: [], // 添加这个属性
      birthday: null, // 添加这个属性
      scenarioData: null,
      background: '' ,// 新增属性用于存储背景信息
	  description: '' ,
      jobId: '' // 新增属性用于存储job_id
    }
  },
  onLoad(option) {
    console.log('Received options:', option);

    // 接收上一个页面传递的数据
    this.userId = option.userId || '';
    this.username = decodeURIComponent(option.username || '');
    this.gender = option.gender || '';
    this.jobId = option.jobId; // 添加这行来接收 jobId
	
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

    console.log('Parsed data:', {
      userId: this.userId,
      username: this.username,
      gender: this.gender,
      selectedOptions: this.selectedOptions,
      birthday: this.birthday
    });

    // 发送数据到后端
    this.getScenarioData();
  },
  methods: {
    updateUserInfoPosition(x, y) {
      this.userInfoStyle.left = `${x}px`;
      this.userInfoStyle.bottom = `${y}px`;
      this.userInfoStyle.transform = 'none'; // 移除居中效果
    },
    navigateToTest1() {
      const testPageUrl = `/pages/test/test5?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(JSON.stringify(this.birthday))}&options=${encodeURIComponent(JSON.stringify(this.selectedOptions))}`;
      
      uni.navigateTo({
        url: testPageUrl
      });
    },
    // sendDataToBackend() {
    //   uni.request({
    //     url: 'http://10.32.69.27:8180/create_profile',
    //     method: 'POST',
    //     data: {
    //       name: this.username,
    //       job_level: this.jobLevel || '',
    //       gender: this.gender,
    //       concerns: this.selectedOptions,
    //     },
    //     success: (res) => {
    //       console.log('Backend response:', res.data);
    //       this.jobId = res.data.job_id; // 存储返回的job_id

    //       // 获取job_id后立即调用start_scenario
    //       this.getScenarioData();
    //     },
    //     fail: (err) => {
    //       console.error('Error sending data to backend:', err);
    //     }
    //   });
    // },
    getScenarioData() {
      uni.request({
        url: 'http://10.32.69.27:8180/get_current_scenario',
        method: 'GET',
        success: (res) => {
          console.log('Scenario data:', res.data);
          this.scenarioData = res.data.scenes;
          this.handleScenarioData();
        },
        fail: (err) => {
          console.error('Error getting scenario data:', err);
        }
      });
    },
    handleScenarioData() {
      if (this.scenarioData) {
        // 假设scenarioData包含一个background字段
        this.description = this.scenarioData.description;
		
      // if (this.scenarioData && this.scenarioData.scenes && this.scenarioData.scenes.description) {
      //   this.description = this.scenarioData.scenes.description;
      } else {
        console.warn('Background information not found in scenario data');
        this.background = '无法获取背景信息';
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
  width: 20px;  /* 调整logo大小 */
  height: 20px; /* 调整logo大小 */
}

.text-box {
  position: absolute;
  top: 470px; /* 固定上边缘 */
  left: 20px;
  right: 20px;
  background-color: rgba(55, 55, 66, 0.8);
  border-radius: 50px;
  padding-top: 25px;
  padding-bottom: 15px;
  padding-left: 25px; /* 增加左边距 */
  padding-right: 25px; /* 增加右边距 */
  z-index: 0; /* 确保文字框在用户信息框之下 */
  min-height: 50px; /* 设置最小高度 */
  max-height: 200px; /* 设置最大高度 */
  overflow: auto; /* 内容溢出时滚动 */
}

.text-content {
  color: white;
  font-size: 14px;
  line-height: 1.4;
}


.expand-icon {
  text-align: center;
  color: white;
  font-size: 12px;
  margin-top: 5px;
}

.user-info {
  position: absolute;
  
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  width: 130px;
  z-index: 1; /* 确保用户信息框在文字框之上 */
}

.user-avatar {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 452px;
  left: 120px;
  border-radius: 50%;
  margin-right: 10px;
  z-index: 2;
}

.user-name {
  color: white;
  font-size: 16px;
  padding: 5px 5px 5px 25px ;

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
