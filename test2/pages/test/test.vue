<template>
  <view class="container">
    <!-- Background Image -->
    <image :src="questions[currentStep].image" class="background-image" />

    <!-- Question Text -->
    <text class="question">{{ questions[currentStep].text }}</text>

    <!-- Answer Options -->
    <view class="options">
      <radio-group v-model="selectedAnswer">
        <label v-for="(option, index) in questions[currentStep].options" :key="index" class="option-label">
          <radio :value="option">{{ option }}</radio>
        </label>
      </radio-group>
    </view>

    <!-- Custom Image Button for Next Step -->
    <image class="continue-button" src="/static/icon.png" @click="nextQuestion" mode="widthFix"></image>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 0, // 当前问题的索引
      selectedAnswer: '', // 用户选择的答案
      questions: [
        {
          text: '在开会时，你同事忽然表示，小王需要做检讨，等待你发言：',
          options: ['支持小王', '冷静分析并提出改进意见', '询问大家对事情的意见', '等待别人发言'],
          image: 'path/to/image1.png'
        },
        {
          text: '饭局上，看似领导聊了一些无关紧要的话题，让领导尴尬时，你选择：',
          options: ['不理会', '帮忙开玩笑', '开玩笑但保持气氛轻松不尴尬'],
          image: 'path/to/image2.png'
        },
        {
          text: '喝酒上，需要客户“肉饼”给客户敬酒时：',
          options: ['我拒绝喝酒，保持干净', '不喜欢就不喝，看情况而定', '我喝我的酒'],
          image: 'path/to/image3.png'
        },
        {
          text: '商场练习上，当客户用不同的声音和语气与你对话时，你选择用同样的方式回应：',
          options: ['马上道歉并解释不是有意', '保持冷静并解释情况'],
          image: 'path/to/image4.png'
        }
      ]
    };
  },
  methods: {
    nextQuestion() {
      if (this.currentStep < this.questions.length - 1) {
        this.currentStep++;
        this.selectedAnswer = ''; // 清空选中的答案
      } else {
        uni.showToast({
          title: '测试完成',
          icon: 'success'
        });

        // 导航到dashboard/dashboard页面
        uni.navigateTo({
          url: '/pages/dashboard/dashboard'
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
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  position: relative; /* 确保子元素相对于容器进行定位 */
}

.background-image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.question {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}

.options {
  width: 80%;
  margin-bottom: 20px;
}

.option-label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.continue-button {
  width: 13%; /* 调整按钮宽度 */
  height: 45px; /* 调整按钮高度 */
  margin-bottom: 30px;
  position: absolute; /* 使用绝对定位 */
  bottom: 0px; /* 距离底部的距离 */
  left: 50%; /* 距离左边的距离 */
  transform: translateX(-50%); /* 水平居中 */
}
</style>
