<template>
  <view class="container">
    <!-- Progress Bar -->
    <view class="progress-bar">
      <view class="progress-indicator" :style="{ width: progressWidth }"></view>
    </view>
	  
    <!-- Question Text -->
    <text class="question">{{ questions[currentStep].text }}</text>
	  
    <!-- Conditional Illustration Image for Each Page -->
    <image
      v-if="currentStep === 0"
      src="/static/image1.png" 
      class="illustration-image"
      mode="widthFix"
    />
    <image
      v-if="currentStep === 1"
      src="/static/image2.png" 
      class="illustration-image"
      mode="widthFix"
    />
    <image
      v-if="currentStep === 2"
      src="/static/image3.png" 
      class="illustration-image"
      mode="widthFix"
    />
    <image
      v-if="currentStep === 3"
      src="/static/image4.png" 
      class="illustration-image"
      mode="widthFix"
    />

    <!-- Answer Options -->
    <view class="options">
      <view
        v-for="(option, index) in questions[currentStep].options"
        :key="index"
        class="option-container"
        :class="{ 'active': selectedAnswer === option }"
        @click="selectAnswer(option)"
      >
        <text class="option-text">{{ option }}</text>
        <!-- Conditional Icon Rendering -->
        <view v-if="selectedAnswer === option" class="icon-container">
          <image src="/static/icon1.png" class="icon" mode="widthFix"></image>
        </view>
      </view>
    </view>

    <!-- Conditional Button Rendering -->
    <image 
      v-if="currentStep !== 3" 
      class="continue-button" 
      src="/static/icon.png" 
      @click="nextQuestion" 
      mode="widthFix"
    ></image>

    <!-- Custom Button for Step 4 -->
    <view 
      v-if="currentStep === 3" 
      class="custom-complete-button" 
      @click="nextQuestion"
    >
      <text class="button-text">完成</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 0, // Current question index
      selectedAnswer: '', // User's selected answer
      questions: [
        {
          text: '在开会时，你同事忽然表示，小王需要做检讨，等待你发言：',
          options: ['支持小王', '冷静分析并提出改进意见', '询问大家对事情的意见', '等待别人发言']
        },
        {
          text: '饭局上，看似领导聊了一些无关紧要的话题，让领导尴尬时，你选择：',
          options: ['不理会', '帮忙开玩笑', '开玩笑但保持气氛轻松不尴尬']
        },
        {
          text: '喝酒上，需要客户“肉饼”给客户敬酒时：',
          options: ['我拒绝喝酒，保持干净', '不喜欢就不喝，看情况而定', '我喝我的酒']
        },
        {
          text: '商场练习上，当客户用不同的声音和语气与你对话时，你选择用同样的方式回应：',
          options: ['马上道歉并解释不是有意', '保持冷静并解释情况']
        }
      ]
    };
  },
  computed: {
    progressWidth() {
      // Calculate the width percentage based on current step
      return `${((this.currentStep) / this.questions.length) * 100}%`;
    }
  },
  methods: {
    selectAnswer(option) {
      this.selectedAnswer = option; // Update the selected answer
    },
    nextQuestion() {
      if (this.selectedAnswer === '') {
        uni.showToast({
          title: '请选择一个选项',
          icon: 'none'
        });
        return;
      }

      if (this.currentStep < this.questions.length - 1) {
        this.currentStep++;
        this.selectedAnswer = ''; // Clear the selected answer
      } else {
        uni.showToast({
          title: '测试完成',
          icon: 'success'
        });

        // Navigate to dashboard/dashboard page
        uni.navigateTo({
          // url: '/pages/dashboard/dashboard'
          url: '/pages/cta/cta'
        });
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
}

.progress-bar {
  width: 85%;
  height: 5px;
  background-color: #e0e0e0;
  margin-bottom: 20px;
  position: absolute;
  top: 0;
  left: 50%; /* 将left设为50% */
  transform: translateX(-50%); /* 使用transform使其水平居中 */
}


.progress-indicator {
  height: 100%;
  background-color: #4b9eff;
  position: absolute;
  top: 0;
  left: 0;
}

.illustration-image {
  width: 60%;
  height: auto;
  margin-bottom: -30px;
}

.question {
  font-size: 14px;
  text-align: left;
  margin-top: 30px;
  width: 85%;
  font-weight: bold;
}

.options {
  width: 85%;
  margin-bottom: 150px;
}

.option-container {
  display: flex;
  align-items: left;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #ffffff;
  transition: background-color 0.3s, border-color 0.3s;
  position: relative;
}

.option-container.active {
  border-color: #4b9eff;
  background-color: #e0f7ff;
}

.option-text {
  font-size: 14px;
}

.icon-container {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.icon {
  width: 20px;
  height: 20px;
}

.continue-button {
  width: 13%;
  height: 45px;
  margin-bottom: 30px;
  position: absolute;
  bottom: 0px;
  left: 85%;
  top: 85%;
  transform: translateX(-50%);
}

.custom-complete-button {
  width: 300px; /* 按钮的宽度 */
  height: 45px; /* 按钮的高度 */
  background-color: #6674ff; /* 按钮的背景颜色 */
  border-radius: 22.5px; /* 圆角设置 */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  left: 50%;
  top: 85%;
  transform: translateX(-50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 按钮阴影 */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.custom-complete-button:hover {
  background-color: #4a57cc; /* 悬停时的背景颜色 */
}

.button-text {
  color: #fff; /* 按钮文字颜色 */
  font-size: 16px;
  font-weight: bold;
}
</style>
