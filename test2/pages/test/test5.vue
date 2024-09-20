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
    
    
    <!-- 文字框 -->
<!--    <view class="text-box">
      <text class="text-content">{{ description }}</text>
      <view class="expand-icon" @click="navigateToTest1">▼</view>
    </view> -->

    <!-- 动态生成选项列表 -->
    <view v-for="(option, index) in scenarioData?.options" :key="index"
          :class="['text-box', { 'selected': selectedOptionIndex === index }]" 
          :style="{ top: `${350 + index * 80}px` }"
          @click="selectOption(index)">
      <text class="text-content">{{ option.text }}</text>
    </view>


    <!-- 继续按钮 -->
    <view class="continue-button" @click="nextPage">
      <text class="arrow">→</text>
    </view>

  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfoStyle: {
        bottom: '180px', // 将这个 '220px' 改为 '180px'
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
	  selectedOptionIndex: null, 
	  num: null, // 添加 num
	  jobId: null, // 添加 jobId
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
      // userId: this.userId,
      // username: this.username,
      // gender: this.gender,
      // selectedOptions: this.selectedOptions,
      // birthday: this.birthday,
      jobId: this.jobId // 添加这行来确认 jobId 被正确接收
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
	selectOption(index) {
	  this.selectedOptionIndex = index;
	  this.num = index + 1; // 设置 num 为选项的索引 + 1
	  console.log('Selected option:', this.num, this.scenarioData.options[index].text);
	},
	
    navigateToTest1() {
      const testPageUrl = `/pages/test/test3?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(JSON.stringify(this.birthday))}&options=${encodeURIComponent(JSON.stringify(this.selectedOptions))}&num=${this.num}`;
      // const testPageUrl = `/pages/test/test4?userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(JSON.stringify(this.birthday))}&options=${encodeURIComponent(JSON.stringify(this.selectedOptions))}&num=${this.num}`;
      
      uni.navigateTo({
        url: testPageUrl
      });
    },
    async nextPage() {
      if (this.num === null) {
        uni.showToast({
          title: '请选择一个选项',
          icon: 'none'
        });
        return;
      }

      console.log('Sending data to backend:', {
        choice: this.num,
        job_id: this.jobId
      });

      try {
        const response = await uni.request({
          url: 'http://10.32.69.27:8180/choose_scenario',
          method: 'POST',
          data: {
            choice: this.num,
            job_id: this.jobId
          }
        });

        console.log('Full response:', response);

        if (response.statusCode === 200) {
          const result = response.data;
          console.log('Response data:', result);

          let nextPageUrl;
          if (result.message === "Final choice made. Processing data in background.") {
            nextPageUrl = `/pages/result/result?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(JSON.stringify(this.birthday))}&options=${encodeURIComponent(JSON.stringify(this.selectedOptions))}&num=${this.num}`;
          } else {
            nextPageUrl = `/pages/test/test3?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(JSON.stringify(this.birthday))}&options=${encodeURIComponent(JSON.stringify(this.selectedOptions))}&num=${this.num}`;
          }

          console.log('Navigating to:', nextPageUrl);

          uni.navigateTo({
            url: nextPageUrl,
            fail: (err) => {
              console.error('Navigation failed:', err);
              uni.showToast({
                title: '页面跳转失败',
                icon: 'none'
              });
            }
          });
        } else {
          throw new Error(`Request failed with status ${response.statusCode}`);
        }
      } catch (error) {
        console.error('Detailed error:', error);
        uni.showToast({
          title: `发生错误：${error.message}`,
          icon: 'none'
        });
      }
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

