(function (vue) {
  'use strict';

  const _sfc_main$l = vue.defineComponent({
      props: {
          isActive: {
              type: Boolean,
              default: false, // 默认是非active状态
          },
      },
  });

  const _style_0$k = {"progress-bar":{"":{"width":"90%","height":"100%","backgroundColor":"rgba(128,128,128,0.5)","borderRadius":20}},"active":{"":{"backgroundColor":"rgba(255,255,255,1)"}}};

  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["progress-bar", { active: $props.isActive }])
      },
      null,
      2
      /* CLASS */
    );
  }
  const ProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["styles", [_style_0$k]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/components/ProgressBar.vue"]]);

  const _sfc_main$k = vue.defineComponent({
      components: {
          ProgressBar, // 注册组件
      },
      methods: {
          navigateToNextPage() {
              uni.navigateTo({
                  url: '/pages/battlefield/battlefield-task' // Replace this with the actual path to your next page
              });
              uni.__log__('log', 'at pages/battlefield/battlefield-intro.uvue:42', "Clicked");
          }
      }
  });

  const _imports_0$8 = "/static/battlefield/background.png";

  const _style_0$j = {"continue-btn":{"":{"width":"100%","paddingTop":10,"paddingRight":0,"paddingBottom":10,"paddingLeft":0,"backgroundColor":"#ffcc66","borderWidth":"medium","borderStyle":"none","borderColor":"#000000","borderRadius":25,"fontSize":18,"color":"#333333"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%","zIndex":1}},"overlay":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%","backgroundColor":"rgba(46,46,47,0.75)","zIndex":2}},"container":{"":{"position":"relative","width":"100%","height":"100%","color":"#ffffff"}},"navbar":{"":{"display":"flex","justifyContent":"space-between","alignItems":"center","paddingTop":20,"paddingRight":20,"paddingBottom":20,"paddingLeft":20,"position":"relative","zIndex":3}},"back-button":{"":{"width":24,"height":24,"backgroundSize":"contain"}},"progress-bar":{"":{"flex":1,"height":20,"backgroundColor":"#cccccc","marginTop":0,"marginRight":10,"marginBottom":0,"marginLeft":10,"width":"100%"}},"content":{"":{"paddingTop":20,"paddingRight":20,"paddingBottom":20,"paddingLeft":20,"textAlign":"center","position":"relative","zIndex":3}},"title":{"":{"fontSize":24,"fontWeight":"bold","color":"#ffffff"}},"subtitle":{"":{"fontSize":20,"marginTop":10,"marginRight":0,"marginBottom":10,"marginLeft":0,"color":"#ffffff"}},"time-info":{"":{"fontSize":16,"color":"#bbbbbb","marginBottom":20}},"description":{"":{"fontSize":16,"lineHeight":1.6,"color":"#ffffff"}},"bottom-button":{"":{"paddingTop":20,"paddingRight":20,"paddingBottom":20,"paddingLeft":20,"textAlign":"center","position":"relative","zIndex":3}}};

  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_progress_bar = vue.resolveComponent("progress-bar");
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0$8,
        mode: "aspectFill"
      }),
      vue.createElementVNode("view", { class: "overlay" }),
      vue.createElementVNode("view", { class: "navbar" }, [
        vue.createElementVNode("view", { class: "back-button" }),
        vue.createElementVNode("view", { class: "progress-bar" }, [
          vue.createVNode(_component_progress_bar, { isActive: true }),
          vue.createVNode(_component_progress_bar, { isActive: false })
        ])
      ]),
      vue.createCommentVNode(" Content "),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("text", { class: "title" }, "\u7B2C\u4E00\u5173"),
        vue.createElementVNode("text", { class: "subtitle" }, "\u8001\u677F\u809A\u5B50\u91CC\u7684\u86D4\u866B"),
        vue.createElementVNode("text", { class: "time-info" }, "3-4\u5206\u949F"),
        vue.createElementVNode("text", { class: "description" }, " \u5728\u4E00\u4E2A\u7CBE\u81F4\u7684\u4F1A\u6240\u5305\u53A2\u91CC\uFF0C\u4F60\u4E0E\u4E00\u4F4D\u9AD8\u5C42\u9886\u5BFC\u548C\u4E24\u540D\u540C\u4E8B\u5171\u8FDB\u665A\u9910\u3002\u770B\u4F3C\u8F7B\u677E\u7684\u805A\u4F1A\uFF0C\u5B9E\u9645\u4E0A\u9886\u5BFC\u5728\u6697\u4E2D\u89C2\u5BDF\u4F60\u4EEC\uFF0C\u51C6\u5907\u51B3\u5B9A\u8C01\u5C06\u53C2\u4E0E\u91CD\u8981\u9879\u76EE\u3002\u4F60\u5FC5\u987B\u8BA8\u597D\u9886\u5BFC\uFF0C\u540C\u65F6\u5E73\u8861\u540C\u4E8B\u5173\u7CFB\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u5C0F\u5C0F\u7684\u5931\u8BEF\u53EF\u80FD\u6539\u53D8\u4F60\u7684\u672A\u6765\u3002 ")
      ]),
      vue.createCommentVNode(" Bottom Button "),
      vue.createElementVNode("view", { class: "bottom-button" }, [
        vue.createElementVNode("button", {
          class: "continue-btn",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToNextPage && $options.navigateToNextPage(...args))
        }, "\u7EE7\u7EED")
      ])
    ]);
  }
  const PagesBattlefieldBattlefieldIntro = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["styles", [_style_0$j]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/battlefield/battlefield-intro.uvue"]]);

  const _style_0$i = {"container":{"":{"position":"relative","width":"100%","height":"100%","color":"#ffffff"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%","zIndex":-1}},"task-word":{"":{"color":"#ffffff"}},"task-header":{"":{"marginTop":"30rpx","textAlign":"center","color":"#ffffff","flex":1,"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}},"main-title":{"":{"fontSize":"40rpx","fontWeight":"bold","color":"#ffffff"}},"sub-title":{"":{"fontSize":"32rpx","marginTop":"10rpx","color":"#ffffff"}},"task-list":{"":{"marginTop":"50rpx","flex":1,"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}},"task-item":{"":{"fontSize":"28rpx","marginBottom":"20rpx"}},"continue-btn":{"":{"width":"100%","paddingTop":10,"paddingRight":0,"paddingBottom":10,"paddingLeft":0,"backgroundColor":"#ffcc66","borderWidth":"medium","borderStyle":"none","borderColor":"#000000","borderRadius":25,"fontSize":18,"color":"#333333"}},"confirm-button":{"":{"flex":1,"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center"}}};

  const _sfc_main$j = {};


  function _sfc_render$i(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 背景图片 "),
      vue.createElementVNode("image", {
        src: _imports_0$8,
        class: "background-image"
      }),
      vue.createCommentVNode(" 标题 "),
      vue.createElementVNode("view", { class: "task-header" }, [
        vue.createElementVNode("text", { class: "main-title" }, "老板肚子里的蛔虫"),
        vue.createElementVNode("text", { class: "sub-title" }, "本关任务")
      ]),
      vue.createCommentVNode(" 任务列表 "),
      vue.createElementVNode("view", { class: "task-list" }, [
        vue.createElementVNode("view", { class: "task-item" }, [
          vue.createElementVNode("text", { class: "task-word" }, "1. 得到领导的夸赞")
        ]),
        vue.createElementVNode("view", { class: "task-item" }, [
          vue.createElementVNode("text", { class: "task-word" }, "2. 点出让众人满意的菜品")
        ])
      ]),
      vue.createCommentVNode(" 按钮 "),
      vue.createElementVNode("button", { class: "continue-btn" }, "我知道了")
    ]))
  }
  const PagesBattlefieldBattlefieldTask = /*#__PURE__*/_export_sfc(_sfc_main$j, [['render',_sfc_render$i],['styles',[_style_0$i]],['__file',"/Users/taokai/codes/EQMaster_ios/test2/pages/battlefield/battlefield-task.uvue"]]);

  const _sfc_main$i = vue.defineComponent({
      data() {
          return {};
      },
      methods: {}
  });

  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesBattlefieldBattlefieldPlayground = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/battlefield/battlefield-playground.uvue"]]);

  const _sfc_main$h = vue.defineComponent({
      data() {
          return {
              showSplash: true,
              username: '' // 用于存储从上一页接收的用户名
          };
      },
      methods: {
          startQuiz() {
              // 生成随机用户名
              this.username = 'user_' + Math.floor(Math.random() * 10000); // 生成随机用户名
              // 跳转到问题页面并传递用户名
              uni.navigateTo({
                  url: `/pages/experience/experience?username=${this.username}`
              });
          },
          goToLogin() {
              // 跳转到登录页面
              uni.navigateTo({
                  url: '/pages/login/login'
              });
          }
      },
      onLoad(options = null) {
          // 获取URL传递的参数
          if (options.username) {
              this.username = options.username; // 将传递过来的用户名存储起来
          }
      },
      mounted() {
          uni.__log__('log', 'at pages/landing/landing.uvue:58', '页面已挂载');
          // 获取URL传递的参数
          if (this.$route && this.$route.query.username) {
              this.username = this.$route.query.username;
              uni.__log__('log', 'at pages/landing/landing.uvue:62', '接收到的用户名:', this.username);
          }
          // 设置闪屏持续时间（例如 2 秒）
          setTimeout(() => {
              uni.__log__('log', 'at pages/landing/landing.uvue:67', '隐藏闪屏');
              this.showSplash = false;
          }, 2000);
      }
  });

  const _imports_0$7 = "/static/启动页闪屏.png";

  const _imports_1$5 = "/static/landingB.png";

  const _style_0$h = {"container":{"":{"width":"100%","height":"100%","overflow":"hidden"}},"splash-screen":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%","backgroundColor":"#ffffff","display":"flex","alignItems":"center","justifyContent":"center","zIndex":1000}},"splash-image":{"":{"width":"100%","height":"100%","objectFit":"cover"}},"welcome-box":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","width":"100%","height":"100%"}},"button":{"":{"width":"600rpx","height":"80rpx","borderWidth":"medium","borderStyle":"none","borderColor":"#ffffff","position":"absolute","left":"50%","transform":"translateX(-50%)","transitionProperty":"transform","transitionDuration":"0.2s","backgroundColor":"#ffffff"}},"button1":{"":{"backgroundColor":"#9EE44D","borderRadius":"45rpx","display":"flex","alignItems":"center","justifyContent":"center","bottom":"265rpx","transform":"translateX(-50%)"}},"login-text":{"":{"color":"#9EE44D","fontSize":"32rpx","textDecoration":"underline","position":"absolute","bottom":"190rpx","left":"50%","transform":"translateX(-50%)"}},"button-text":{"":{"color":"#252529","fontSize":"32rpx","fontWeight":"bold"}},"@TRANSITION":{"button":{"property":"transform","duration":"0.2s"}}};

  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      $data.showSplash ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "splash-screen"
      }, [
        vue.createElementVNode("image", {
          class: "splash-image",
          src: _imports_0$7,
          mode: "widthFix"
        })
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "welcome-box" }, [
        vue.createCommentVNode(" \u6DFB\u52A0\u80CC\u666F\u56FE\u7247 "),
        vue.createElementVNode("image", {
          class: "background-image",
          src: _imports_1$5,
          mode: "aspectFill"
        }),
        vue.createCommentVNode(" \u5F00\u59CB\u4F53\u9A8C\u6309\u94AE "),
        vue.createElementVNode("view", {
          class: "button button1",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.startQuiz && $options.startQuiz(...args))
        }, [
          vue.createElementVNode("text", { class: "button-text" }, "\u5F00\u59CB\u4F53\u9A8C")
        ]),
        vue.createCommentVNode(" \u767B\u5F55\u5DF2\u6709\u8D26\u53F7\u6587\u672C "),
        vue.createCommentVNode(' <text class="login-text" @tap="goToLogin">\u767B\u5F55\u5DF2\u6709\u8D26\u53F7</text> '),
        vue.createElementVNode("text", { class: "login-text" }, "\u767B\u5F55\u5DF2\u6709\u8D26\u53F7")
      ])
    ]);
  }
  const PagesLandingLanding = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["styles", [_style_0$h]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/landing/landing.uvue"]]);

  const _sfc_main$g = vue.defineComponent({
      data() {
          return {
              selectedGender: null,
              userId: '',
              username: '',
              backgroundImage: '/static/picture1.png', // 确保背景图片路径正确
          };
      },
      onLoad(options = null) {
          // 从路由参数中获取 userId 和 username
          this.userId = options.userId;
          this.username = decodeURIComponent(options.username);
          uni.__log__('log', 'at pages/preference/preference.uvue:54', 'User ID:', this.userId);
          uni.__log__('log', 'at pages/preference/preference.uvue:55', 'Username:', this.username);
      },
      methods: {
          selectGender(gender = null) {
              this.selectedGender = gender;
          },
          nextStep() {
              if (this.selectedGender) {
                  // 保存性别信息
                  uni.setStorageSync('gender', this.selectedGender);
                  // 导航到下一页，并传递所有参数
                  uni.navigateTo({
                      url: `/pages/preference/preference1?userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.selectedGender}`
                  });
              }
              else {
                  uni.showToast({ title: '请选择性别', icon: 'none' });
              }
          },
      },
  });

  const _imports_0$6 = "/static/female.png";

  const _imports_1$4 = "/static/male.png";

  const _imports_2$2 = "/static/4.png";

  const _style_0$g = {"container":{"":{"display":"flex","flexDirection":"column","backgroundColor":"#1c1c1e","paddingTop":40,"paddingRight":20,"paddingBottom":40,"paddingLeft":20}},"background-image":{"":{"position":"absolute","top":40,"right":0,"width":"30%","zIndex":1}},"text-content":{"":{"marginTop":60,"marginBottom":70}},"question":{"":{"fontSize":20,"color":"#ffffff","marginBottom":8}},"subtitle":{"":{"fontSize":14,"color":"#8e8e93"}},"gender-options":{"":{"display":"flex","flexDirection":"row","justifyContent":"space-around","marginTop":160,"gap":"10px"}},"gender-options1":{"":{"display":"flex","flexDirection":"row","justifyContent":"space-around","marginTop":10,"gap":"10px"}},"gender-option":{"":{"width":80,"height":80,"backgroundColor":"#2c2c2e","borderRadius":"100rpx","display":"flex","justifyContent":"center","alignItems":"center","borderWidth":2,"borderStyle":"solid","borderColor":"rgba(0,0,0,0)"},".selected":{"borderColor":"#30d158"}},"gender-icon":{"":{"width":66,"height":60,"marginBottom":5}},"gender-label":{"":{"fontSize":14,"color":"#ffffff","marginBottom":500}},"continue-button":{"":{"width":50,"height":50,"position":"absolute","backgroundColor":"#8BC34A","borderRadius":25,"display":"flex","justifyContent":"center","alignItems":"center","alignSelf":"center","marginTop":700}},"arrow":{"":{"color":"#242424","fontSize":20}}};

  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("image", {
            class: "background-image",
            src: $data.backgroundImage,
            mode: "widthFix"
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "text-content" }, [
            vue.createElementVNode("text", { class: "question" }, "\u4F60\u7684\u6027\u522B\u662F\uFF1F"),
            vue.createElementVNode("text", { class: "subtitle" }, "\u5B8C\u5584\u4E2A\u4EBA\u4FE1\u606F")
          ]),
          vue.createElementVNode("view", { class: "gender-options" }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["gender-option", { "selected": $data.selectedGender === "female" }]),
                onClick: _cache[0] || (_cache[0] = ($event) => $options.selectGender("female"))
              },
              [
                vue.createElementVNode("image", {
                  class: "gender-icon",
                  src: _imports_0$6
                }),
                vue.createCommentVNode(" \u66FF\u6362\u4E3A\u5973\u6027\u56FE\u7247 ")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["gender-option", { "selected": $data.selectedGender === "male" }]),
                onClick: _cache[1] || (_cache[1] = ($event) => $options.selectGender("male"))
              },
              [
                vue.createElementVNode("image", {
                  class: "gender-icon",
                  src: _imports_1$4
                }),
                vue.createCommentVNode(" \u66FF\u6362\u4E3A\u7537\u6027\u56FE\u7247 ")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["gender-option", { "selected": $data.selectedGender === "other" }]),
                onClick: _cache[2] || (_cache[2] = ($event) => $options.selectGender("other"))
              },
              [
                vue.createElementVNode("image", {
                  class: "gender-icon",
                  src: _imports_2$2
                }),
                vue.createCommentVNode(" \u66FF\u6362\u4E3A\u5176\u4ED6\u56FE\u7247 ")
              ],
              2
              /* CLASS */
            )
          ]),
          vue.createElementVNode("view", { class: "gender-options1" }, [
            vue.createCommentVNode(" \u6027\u522B\u6807\u7B7E "),
            vue.createElementVNode("text", { class: "gender-label" }, "\u5973\u751F"),
            vue.createElementVNode("text", { class: "gender-label" }, "\u7537\u751F"),
            vue.createElementVNode("text", { class: "gender-label" }, "\u5176\u4ED6")
          ])
        ]),
        vue.createElementVNode("view", {
          class: "continue-button",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.nextStep && $options.nextStep(...args))
        }, [
          vue.createElementVNode("text", { class: "arrow" }, "\u2192")
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesPreferencePreference = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["styles", [_style_0$g]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/preference/preference.uvue"]]);

  const _sfc_main$f = vue.defineComponent({
      data() {
          const date = new Date();
          const _years = [];
          const _year = date.getFullYear();
          const _months = [];
          const _month = date.getMonth() + 1;
          const _days = [];
          const _day = date.getDate();
          for (let i = 2000; i <= _year; i++) {
              _years.push(i);
          }
          for (let i = 1; i <= 12; i++) {
              _months.push(i);
          }
          for (let i = 1; i <= 31; i++) {
              _days.push(i);
          }
          return {
              title: 'picker-view',
              years: _years,
              year: _year,
              months: _months,
              month: _month,
              days: _days,
              day: _day,
              value: [_year - 2000, _month - 1, _day - 1],
              result: [],
              indicatorStyle: 'height: 50px;',
              userId: '',
              username: '',
              gender: '',
          };
      },
      onLoad(options = null) {
          // Retrieve data from the previous page
          this.userId = options.userId;
          this.username = decodeURIComponent(options.username);
          this.gender = options.gender;
      },
      methods: {
          bindChange(e = null) {
              const val = e.detail.value;
              this.result = val;
              this.year = this.years[val[0]];
              this.month = this.months[val[1]];
              this.day = this.days[val[2]];
          },
          goToNextPage() {
              // Prepare the selected date as a JSON string
              const selectedDate = new UTSJSONObject({
                  year: this.year,
                  month: this.month,
                  day: this.day,
              });
              // Navigate to the next page with all data passed as URL parameters
              const nextPageUrl = `/pages/preference/preference2?userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(selectedDate))}`;
              uni.navigateTo({
                  url: nextPageUrl,
              });
          },
      },
  });

  const _style_0$f = {"container":{"":{"display":"flex","flexDirection":"column","backgroundColor":"#1c1c1e","paddingTop":40,"paddingRight":20,"paddingBottom":40,"paddingLeft":20}},"text-content":{"":{"marginTop":60,"marginBottom":40}},"question":{"":{"fontSize":20,"color":"#ffffff","marginBottom":8}},"subtitle":{"":{"fontSize":14,"color":"#8e8e93"}},"date-picker-container":{"":{"position":"relative","width":"100%","height":250,"marginTop":10,"backgroundColor":"#1c1c1e","marginBottom":500}},"picker-view":{"":{"width":"100%","height":250,"position":"relative","zIndex":1,"backgroundColor":"#1c1c1e"}},"item":{"":{"height":50}},"text":{"":{"lineHeight":"50px","textAlign":"center","color":"#ffffff"}},"mask":{"":{"position":"absolute","left":0,"right":0,"height":100,"backgroundColor":"rgba(28,28,30,1)","zIndex":2},".top":{"top":0},".bottom":{"bottom":0}},"continue-button":{"":{"width":50,"height":50,"position":"absolute","backgroundColor":"#8BC34A","borderRadius":25,"display":"flex","justifyContent":"center","alignItems":"center","alignSelf":"center","marginTop":700}},"arrow":{"":{"color":"#242424","fontSize":20}}};

  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_picker_view_column = vue.resolveComponent("picker-view-column");
    const _component_picker_view = vue.resolveComponent("picker-view");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "text-content" }, [
            vue.createElementVNode("text", { class: "question" }, "\u{1F382} \u4F60\u7684\u751F\u65E5\u662F\u4EC0\u4E48\u65F6\u5019\uFF1F"),
            vue.createElementVNode("text", { class: "subtitle" }, "\u5B8C\u5584\u4E2A\u4EBA\u4FE1\u606F")
          ]),
          vue.createElementVNode("view", { class: "date-picker-container" }, [
            vue.createElementVNode("view", { class: "mask top" }),
            vue.createVNode(_component_picker_view, {
              class: "picker-view",
              "indicator-style": $data.indicatorStyle,
              value: $data.value,
              onChange: $options.bindChange
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_picker_view_column, { class: "picker-view-column" }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList($data.years, (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "item",
                          key: index
                        }, [
                          vue.createElementVNode(
                            "text",
                            { class: "text" },
                            vue.toDisplayString(item) + "\u5E74",
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_picker_view_column, { class: "picker-view-column" }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList($data.months, (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "item",
                          key: index
                        }, [
                          vue.createElementVNode(
                            "text",
                            { class: "text" },
                            vue.toDisplayString(item) + "\u6708",
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_picker_view_column, { class: "picker-view-column" }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList($data.days, (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "item",
                          key: index
                        }, [
                          vue.createElementVNode(
                            "text",
                            { class: "text" },
                            vue.toDisplayString(item) + "\u65E5",
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["indicator-style", "value", "onChange"]),
            vue.createElementVNode("view", { class: "mask bottom" })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "continue-button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goToNextPage && $options.goToNextPage(...args))
        }, [
          vue.createElementVNode("text", { class: "arrow" }, "\u2192")
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesPreferencePreference1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["styles", [_style_0$f]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/preference/preference1.uvue"]]);

  const _sfc_main$e = vue.defineComponent({
      data() {
          return {
              jobOptions: ['难以融入新环境', '棘手的同事关系', '与上级维持良好关系', '难回的消息', '尴尬的饭局等社交场合', '困难的工作沟通'],
              relationshipOptions: ['难以维持长期关系', '感情平淡期', '得不到回应的喜欢', '感情受到伤害'],
              selectedOptions: [],
              userId: '',
              username: '',
              gender: '',
              birthday: null,
          };
      },
      onLoad(options = null) {
          // 接收上一页传递的参数
          this.userId = options.userId;
          this.username = decodeURIComponent(options.username);
          this.gender = options.gender;
          this.birthday = UTS.JSON.parse(decodeURIComponent(options.birthday));
          uni.__log__('log', 'at pages/preference/preference2.uvue:64', 'Received data:', { userId: this.userId, username: this.username, gender: this.gender, birthday: this.birthday });
      },
      methods: {
          toggleOption(option = null) {
              const index = this.selectedOptions.indexOf(option);
              if (index > -1) {
                  this.selectedOptions.splice(index, 1);
              }
              else {
                  this.selectedOptions.push(option);
              }
              uni.__log__('log', 'at pages/preference/preference2.uvue:74', 'Selected options:', this.selectedOptions);
          },
          goToNextPage() {
              if (this.selectedOptions.length > 0) {
                  // 构建包含所有信息的URL
                  const url = `/pages/preference/preference3?userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}`;
                  uni.__log__('log', 'at pages/preference/preference2.uvue:81', 'Navigating to:', url);
                  uni.navigateTo({
                      url: url,
                      fail: (err) => {
                          uni.__log__('error', 'at pages/preference/preference2.uvue:85', 'Navigation failed:', err);
                          uni.showToast({
                              title: '页面跳转失败',
                              icon: 'none'
                          });
                      }
                  });
              }
              else {
                  uni.__log__('log', 'at pages/preference/preference2.uvue:93', 'No options selected');
                  uni.showToast({
                      title: '请至少选择一个选项',
                      icon: 'none'
                  });
              }
          }
      }
  });

  const _imports_0$5 = "/static/jobicon.png";

  const _imports_1$3 = "/static/relationshipicon.png";

  const _style_0$e = {"container":{"":{"display":"flex","flexDirection":"column","backgroundColor":"#1c1c1e","paddingTop":40,"paddingRight":20,"paddingBottom":80,"paddingLeft":20}},"text-content":{"":{"marginTop":60,"marginBottom":0}},"question":{"":{"fontSize":20,"color":"#ffffff","marginBottom":8}},"subtitle":{"":{"fontSize":14,"color":"#8e8e93"}},"options-container":{"":{"width":"100%","marginBottom":20}},"option-group":{"":{"display":"flex","alignItems":"flex-start","marginBottom":50}},"option-group1":{"":{"top":-140,"display":"flex","alignItems":"flex-start","marginBottom":15}},"group-icon":{"":{"marginTop":60,"marginRight":15,"flexShrink":0,"marginBottom":0}},"option-buttons":{"":{"display":"flex","flexDirection":"column","alignItems":"flex-start","gap":"5px","left":50,"top":-45,"width":"100%"}},"option-button":{"":{"backgroundColor":"#2c2c2e","color":"#ffffff","borderRadius":25,"paddingTop":5,"paddingRight":15,"paddingBottom":5,"paddingLeft":15,"fontSize":14,"textAlign":"left","whiteSpace":"nowrap","marginBottom":5,"lineHeight":"40px"},".active":{"backgroundColor":"#8BC34A"}},"button-1":{"":{"position":"relative","left":0,"top":0}},"button-2":{"":{"position":"relative","left":140,"top":-55}},"button-3":{"":{"position":"relative","left":0,"top":-55}},"button-4":{"":{"position":"relative","left":160,"top":-110}},"button-5":{"":{"position":"relative","left":0,"top":-110}},"button-6":{"":{"position":"relative","left":0,"top":-110}},"continue-button":{"":{"width":50,"height":50,"position":"absolute","backgroundColor":"#8BC34A","borderRadius":25,"display":"flex","justifyContent":"center","alignItems":"center","alignSelf":"center","marginTop":700}},"arrow":{"":{"color":"#242424","fontSize":20}},"colleague-button":{"":{"position":"relative","left":140,"top":-55}},"button-7":{"":{"position":"relative","left":0,"top":0}},"button-8":{"":{"position":"relative","left":150,"top":-55}},"button-9":{"":{"position":"relative","top":-55}},"button-10":{"":{"position":"relative","left":150,"top":-110}},"button-11":{"":{"position":"relative","left":10,"top":0}},"button-12":{"":{"position":"relative","left":60,"top":0}}};

  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "text-content" }, [
        vue.createElementVNode("text", { class: "question" }, "\u{1F914}\u4F60\u901A\u5E38\u4F1A\u88AB\u54EA\u4E9B\u573A\u666F\u56F0\u6270\u5462\uFF1F"),
        vue.createElementVNode("text", { class: "subtitle" }, "\u4E2A\u6027\u5316\u504F\u597D")
      ]),
      vue.createElementVNode("view", { class: "options-container" }, [
        vue.createElementVNode("view", { class: "option-group" }, [
          vue.createElementVNode("view", { class: "group-icon" }, [
            vue.createElementVNode("image", {
              src: _imports_0$5,
              mode: "aspectFit",
              style: { "width": "36px", "height": "36px" }
            })
          ]),
          vue.createElementVNode("view", { class: "option-buttons" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.jobOptions, (option, index) => {
                return vue.openBlock(), vue.createElementBlock("button", {
                  key: index,
                  class: vue.normalizeClass(["option-button", `button-${index + 1}`, { active: $data.selectedOptions.includes(option) }]),
                  onClick: ($event) => $options.toggleOption(option)
                }, vue.toDisplayString(option), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createElementVNode("view", { class: "option-group1" }, [
          vue.createElementVNode("view", { class: "group-icon" }, [
            vue.createElementVNode("image", {
              src: _imports_1$3,
              mode: "aspectFit",
              style: { "width": "36px", "height": "36px" }
            })
          ]),
          vue.createElementVNode("view", { class: "option-buttons" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.relationshipOptions, (option, index) => {
                return vue.openBlock(), vue.createElementBlock("button", {
                  key: index,
                  class: vue.normalizeClass(["option-button", `button-${index + 7}`, { active: $data.selectedOptions.includes(option) }]),
                  onClick: ($event) => $options.toggleOption(option)
                }, vue.toDisplayString(option), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ]),
      vue.createElementVNode("view", {
        class: "continue-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.goToNextPage && $options.goToNextPage(...args))
      }, [
        vue.createElementVNode("text", { class: "arrow" }, "\u2192")
      ])
    ]);
  }
  const PagesPreferencePreference2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["styles", [_style_0$e]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/preference/preference2.uvue"]]);

  const _sfc_main$d = vue.defineComponent({
      data() {
          return {
              scenarioText: '',
              userId: '',
              username: '',
              gender: '',
              // 显式指定 `birthday` 的类型
              birthday: null,
              // 显式指定 `selectedOptions` 为字符串数组
              selectedOptions: []
          };
      },
      onLoad(options = null) {
          uni.__log__('log', 'at pages/preference/preference3.uvue:43', 'Raw options received in preference3:', options);
          this.userId = options.userId || '';
          this.username = decodeURIComponent(options.username || '');
          this.gender = options.gender || '';
          uni.__log__('log', 'at pages/preference/preference3.uvue:49', 'Parsed basic data in preference3:', {
              userId: this.userId,
              username: this.username,
              gender: this.gender
          });
          // 解析 birthday
          try {
              this.birthday = options.birthday ? UTS.JSON.parse(decodeURIComponent(options.birthday)) : null;
              uni.__log__('log', 'at pages/preference/preference3.uvue:58', 'Parsed birthday in preference3:', this.birthday);
          }
          catch (e) {
              uni.__log__('error', 'at pages/preference/preference3.uvue:60', 'Error parsing birthday in preference3:', e);
              uni.__log__('log', 'at pages/preference/preference3.uvue:61', 'Raw birthday data in preference3:', options.birthday);
              this.birthday = null;
          }
          // 解析 selectedOptions
          try {
              const parsedOptions = options.options ? UTS.JSON.parse(decodeURIComponent(options.options)) : [];
              uni.__log__('log', 'at pages/preference/preference3.uvue:68', 'Parsed options:', parsedOptions);
              // 使用显式类型赋值，避免类型错误
              this.selectedOptions = Array.isArray(parsedOptions) ? parsedOptions : [];
              uni.__log__('log', 'at pages/preference/preference3.uvue:73', 'Assigned selectedOptions:', this.selectedOptions);
              uni.__log__('log', 'at pages/preference/preference3.uvue:74', 'selectedOptions length:', this.selectedOptions.length);
              uni.__log__('log', 'at pages/preference/preference3.uvue:75', 'selectedOptions contents:', UTS.JSON.stringify(this.selectedOptions));
          }
          catch (e) {
              uni.__log__('error', 'at pages/preference/preference3.uvue:77', 'Error parsing selectedOptions in preference3:', e);
              uni.__log__('log', 'at pages/preference/preference3.uvue:78', 'Raw options data in preference3:', options.options);
              this.selectedOptions = [];
          }
          // 打印最终的数据状态
          // uni.__log__('log','at pages/preference/preference3.uvue:83','Final data state in preference3:', {
          //   userId: this.userId,
          //   username: this.username,
          //   gender: this.gender,
          //   birthday: this.birthday,
          //   selectedOptions: this.selectedOptions
          // });
          if (!this.userId || !this.username || !this.gender || !this.birthday || this.selectedOptions.length === 0) {
              uni.__log__('error', 'at pages/preference/preference3.uvue:92', 'Some required data is missing or invalid in preference3');
          }
      },
      methods: {
          startTest() {
              uni.__log__('log', 'at pages/preference/preference3.uvue:97', 'Start test button clicked');
              this.navigateToNextPage();
          },
          navigateToNextPage() {
              const testPageUrl = `/pages/test/test?userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}`;
              uni.__log__('log', 'at pages/preference/preference3.uvue:103', 'Navigating to:', testPageUrl);
              uni.navigateTo({
                  url: testPageUrl,
                  success: () => {
                      uni.__log__('log', 'at pages/preference/preference3.uvue:108', 'Navigation to test page successful');
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/preference/preference3.uvue:111', 'Navigation to test page failed:', err);
                      uni.showToast({
                          title: '页面跳转失败',
                          icon: 'none'
                      });
                  }
              });
          }
      }
  });

  const _imports_0$4 = "/static/Group 3.png";

  const _style_0$d = {"container":{"":{"display":"flex","flexDirection":"column","backgroundColor":"#1c1c1e","paddingTop":40,"paddingRight":20,"paddingBottom":80,"paddingLeft":20}},"text-content":{"":{"marginTop":60,"marginBottom":0}},"question":{"":{"fontSize":20,"color":"#ffffff","marginBottom":8}},"subtitle":{"":{"fontSize":14,"color":"#8e8e93"}},"card":{"":{"backgroundColor":"#1c1c1e","borderRadius":20,"top":120,"overflow":"hidden","marginBottom":400}},"card-image":{"":{"width":"100%","height":280}},"start-button":{"":{"position":"absolute","left":"50%","top":490,"transform":"translateX(-50%)","backgroundColor":"#1c1c1e","color":"#ffffff","borderWidth":"medium","borderStyle":"none","borderColor":"#000000","borderRadius":20,"paddingTop":3,"paddingRight":20,"paddingBottom":3,"paddingLeft":20,"fontSize":14}},"arrow":{"":{"marginLeft":2}},"welcome":{"":{"fontSize":18,"color":"#ffffff","marginBottom":8}},"debug-info":{"":{"marginTop":20,"paddingTop":10,"paddingRight":10,"paddingBottom":10,"paddingLeft":10,"backgroundColor":"#2c2c2e","borderRadius":10}}};

  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "text-content" }, [
        vue.createElementVNode(
          "text",
          { class: "question" },
          vue.toDisplayString(_ctx.scenarioText || "\u5C0F\u767D\uFF1F\u9AD8\u624B\uFF1F\u4F60\u7684\u60C5\u5546\u5728\u804C\u573A\u4E2D\u5C5E\u4E8E\u54EA\u4E00\u4E2A\u6BB5\u4F4D\u5462\uFF1F"),
          1
          /* TEXT */
        ),
        vue.createElementVNode("text", { class: "subtitle" }, "\u4E2A\u6027\u5316\u504F\u597D")
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "card-image-container" }, [
          vue.createElementVNode("image", {
            class: "card-image",
            src: _imports_0$4,
            mode: "aspectFit"
          })
        ])
      ]),
      vue.createElementVNode("button", {
        class: "start-button",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.startTest && _ctx.startTest(...args))
      }, [
        vue.createElementVNode("text", { class: "arrow" }, "\u5F00\u59CB\u6D4B\u8BD5 \u2197")
      ]),
      vue.createCommentVNode(" \u8C03\u8BD5\u4FE1\u606F\u663E\u793A\u533A\u57DF "),
      vue.createCommentVNode(`    <view class="debug-info">
      <text>Selected Options: {{ selectedOptions.join(', ') }}</text>
      <text>Number of Selected Options: {{ selectedOptions.length }}</text>
      <text>Birthday: {{ birthday ? JSON.stringify(birthday) : '\u672A\u8BBE\u7F6E' }}</text>
    </view> `)
    ]);
  }
  const PagesPreferencePreference3 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["styles", [_style_0$d]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/preference/preference3.uvue"]]);

  const _sfc_main$c = vue.defineComponent({
      data() {
          return {
              userId: '',
              username: '',
              gender: '',
              selectedOptions: [],
              birthday: null,
              scenarioData: null,
              background: '请点击下方箭头继续',
              jobId: ''
          };
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/test/test.uvue:49', 'Received options:', option);
          // 接收上一个页面传递的数据
          this.userId = option.userId || '';
          this.username = decodeURIComponent(option.username || '');
          this.gender = option.gender || '';
          if (option.options) {
              try {
                  this.selectedOptions = UTS.JSON.parse(decodeURIComponent(option.options));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test.uvue:60', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test.uvue:69', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/test/test.uvue:74', 'Parsed data:', {
              userId: this.userId,
              username: this.username,
              gender: this.gender,
              selectedOptions: this.selectedOptions,
              birthday: this.birthday
          });
          // 发送数据到后端
          this.sendDataToBackend();
      },
      methods: {
          navigateToTest1() {
              const testPageUrl = `/pages/test/test1?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}`;
              uni.navigateTo({
                  url: testPageUrl
              });
          },
          sendDataToBackend() {
              uni.request({
                  url: 'https://eqmaster.azurewebsites.net/create_profile',
                  method: 'POST',
                  data: {
                      name: this.username,
                      job_level: this.jobLevel || '',
                      gender: this.gender,
                      concerns: this.selectedOptions,
                  },
                  success: (res) => {
                      uni.__log__('log', 'at pages/test/test.uvue:104', 'Backend response:', res.data);
                      this.jobId = res.data.job_id; // 存储返回的 job_id
                      // 获取 job_id 后立即调用 start_scenario
                      this.getScenarioData();
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test.uvue:111', 'Error sending data to backend:', err);
                  }
              });
          },
          getScenarioData() {
              uni.request({
                  url: 'https://eqmaster.azurewebsites.net/start_scenario',
                  method: 'POST',
                  success: (res) => {
                      try {
                          const data = typeof res.data === 'string' ? UTS.JSON.parse(res.data) : res.data;
                          uni.__log__('log', 'at pages/test/test.uvue:122', 'Scenario data:', data);
                          this.scenarioData = data.scenes || null;
                          this.handleScenarioData();
                      }
                      catch (error) {
                          uni.__log__('error', 'at pages/test/test.uvue:126', 'Error parsing scenario data:', error);
                          this.background = '获取场景数据时出错。';
                      }
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test.uvue:131', 'Error getting scenario data:', err);
                      this.background = '无法获取场景数据。';
                  }
              });
          },
          handleScenarioData() {
              if (this.scenarioData) {
                  this.background = this.scenarioData.background || '请点击下方箭头继续';
              }
              else {
                  this.background = '请点击下方箭头继续';
              }
          }
      }
  });

  const _imports_0$3 = "/static/bg1.png";

  const _imports_1$2 = "/static/sign.png";

  const _imports_3 = "/static/icon3.png";

  const _style_0$c = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":"80rpx","left":"50%","transform":"translateX(-50%)","backgroundColor":"rgba(55,55,66,0.4)","borderRadius":"40rpx","paddingTop":"24rpx","paddingRight":"20rpx","paddingBottom":"24rpx","paddingLeft":"20rpx","width":"280rpx","boxSizing":"border-box"}},"room-text":{"":{"color":"#ffffff","fontSize":"32rpx","textAlign":"center","top":"10.5%"}},"logo":{"":{"width":"300rpx","height":"300rpx","position":"absolute","top":"11%","left":"50%","transform":"translate(-50%, -50%)"}},"text-box":{"":{"position":"absolute","bottom":"80rpx","left":"40rpx","right":"40rpx","backgroundColor":"rgba(55,55,66,0.8)","borderRadius":"50rpx","paddingTop":"50rpx","paddingBottom":"50rpx","paddingLeft":"50rpx","paddingRight":"50rpx","zIndex":1,"minHeight":"100rpx","maxHeight":"400rpx","borderWidth":"6rpx","borderStyle":"solid","borderColor":"#F2BC74"}},"text-content":{"":{"color":"#FFFFFF","fontSize":"28rpx","lineHeight":1.4}},"expand-icon":{"":{"textAlign":"center","color":"#FFFFFF","fontSize":"24rpx","marginTop":"10rpx"}},"icon-image":{"":{"width":20,"height":20}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":"10rpx","paddingRight":"10rpx","paddingBottom":"10rpx","paddingLeft":"10rpx","fontSize":"20rpx","zIndex":100,"overflowY":"auto"}}};

  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u8C03\u8BD5\u4FE1\u606F\u663E\u793A\u533A\u57DF "),
      vue.createCommentVNode(' <view class="debug-info"> '),
      vue.createCommentVNode(" <text>Scenario Data: {{ JSON.stringify(scenarioData) }}</text> "),
      vue.createCommentVNode(" </view> "),
      vue.createCommentVNode(" \u80CC\u666F\u56FE\u7247 "),
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0$3,
        mode: "aspectFill"
      }),
      vue.createCommentVNode(" \u623F\u95F4\u4FE1\u606F "),
      vue.createCommentVNode('    <view class="room-info">\n      <text class="room-text">\u4E09\u697C\u7535\u68AF\u95F4</text>\n    </view> '),
      vue.createElementVNode("image", {
        class: "logo",
        src: _imports_1$2,
        mode: "aspectFit"
      }),
      vue.createElementVNode("text", { class: "room-text" }, "\u4E09\u697C\u7535\u68AF\u95F4"),
      vue.createCommentVNode(" \u7070\u8272\u5706\u5708\u548C\u56FE\u6807 "),
      vue.createCommentVNode('    <view class="gray-circle">\n      <image class="logo" src="/static/sign.png" mode="aspectFit" />\n    </view> '),
      vue.createCommentVNode(" \u6587\u5B57\u6846 "),
      vue.createElementVNode("view", { class: "text-box" }, [
        vue.createElementVNode(
          "text",
          { class: "text-content" },
          vue.toDisplayString($data.background),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "expand-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToTest1 && $options.navigateToTest1(...args)),
          style: { "margin-left": "auto" }
        }, [
          vue.createElementVNode("image", {
            class: "icon-image",
            src: _imports_3,
            mode: "aspectFit"
          })
        ])
      ])
    ]);
  }
  const PagesTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["styles", [_style_0$c]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/test/test.uvue"]]);

  const _sfc_main$b = vue.defineComponent({
      data() {
          return {
              userInfoStyle: {
                  bottom: '180px',
                  left: '50%',
                  marginLeft: '-65px' // 替换 transform
              },
              userId: '',
              username: '',
              gender: '',
              selectedOptions: [],
              birthday: null,
              scenarioData: null,
              background: '',
              description: '',
              jobId: '',
              baseURL: 'https://eqmaster.azurewebsites.net' // 请替换为您的实际后端地址
          };
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/test/test1.uvue:57', 'Received options:', option);
          // 接收上一个页面传递的数据
          this.userId = option.userId || '';
          this.username = decodeURIComponent(option.username || '');
          this.gender = option.gender || '';
          this.jobId = option.jobId || ''; // 添加默认值
          if (option.options) {
              try {
                  this.selectedOptions = UTS.JSON.parse(decodeURIComponent(option.options));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test1.uvue:69', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test1.uvue:78', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/test/test1.uvue:83', 'Parsed data:', {
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
          updateUserInfoPosition(x = null, y = null) {
              this.userInfoStyle.left = `${x}px`;
              this.userInfoStyle.bottom = `${y}px`;
              this.userInfoStyle.marginLeft = '0px'; // 移除居中效果
          },
          navigateToTest1() {
              // const testPageUrl = `/pages/test/test5?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(JSON.stringify(this.birthday))}&options=${encodeURIComponent(JSON.stringify(this.selectedOptions))}`;
              const testPageUrl = `/pages/test/test2?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}`;
              uni.navigateTo({
                  url: testPageUrl
              });
          },
          getScenarioData() {
              uni.request({
                  url: 'https://eqmaster.azurewebsites.net/start_scenario',
                  method: 'POST',
                  success: (res) => {
                      uni.__log__('log', 'at pages/test/test1.uvue:113', 'Scenario data:', res.data);
                      this.scenarioData = res.data; // 修改为直接获取 res.data
                      this.handleScenarioData();
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test1.uvue:118', 'Error getting scenario data:', err);
                  }
              });
          },
          handleScenarioData() {
              if (this.scenarioData) {
                  // 假设 scenarioData 包含一个 description 字段
                  this.description = this.scenarioData.scenes.description || '无法获取背景信息';
              }
              else {
                  uni.__log__('warn', 'at pages/test/test1.uvue:127', 'Background information not found in scenario data');
                  this.description = '无法获取背景信息';
              }
          }
      }
  });

  const _imports_2$1 = "/static/npc2.png";

  const _style_0$b = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":"80rpx","left":"50%","transform":"translateX(-50%)","backgroundColor":"rgba(55,55,66,0.4)","borderRadius":"40rpx","paddingTop":"24rpx","paddingRight":"20rpx","paddingBottom":"24rpx","paddingLeft":"20rpx","width":"280rpx","boxSizing":"border-box"}},"room-text":{"":{"color":"#ffffff","fontSize":"32rpx","textAlign":"center","top":"10.5%"}},"logo":{"":{"width":"300rpx","height":"300rpx","position":"absolute","top":"11%","left":"50%","transform":"translate(-50%, -50%)"}},"text-box":{"":{"position":"absolute","bottom":"80rpx","left":"40rpx","right":"40rpx","backgroundColor":"rgba(55,55,66,0.8)","borderRadius":"50rpx","paddingTop":"50rpx","paddingBottom":"50rpx","paddingLeft":"50rpx","paddingRight":"50rpx","zIndex":1,"minHeight":"100rpx","maxHeight":"400rpx","borderWidth":"6rpx","borderStyle":"solid","borderColor":"#F2BC74"}},"text-content":{"":{"color":"#FFFFFF","fontSize":"28rpx","lineHeight":1.4}},"expand-icon":{"":{"textAlign":"center","color":"#FFFFFF","fontSize":"24rpx","marginTop":"10rpx"}},"icon-image":{"":{"width":20,"height":20}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":"10rpx","paddingRight":"10rpx","paddingBottom":"10rpx","paddingLeft":"10rpx","fontSize":"20rpx","zIndex":100,"overflowY":"auto"}},"user-avatar":{"":{"width":60,"height":60,"position":"absolute","bottom":185,"left":"90%","top":"73%","marginLeft":-63,"marginRight":10,"zIndex":2,"borderWidth":"6rpx","borderStyle":"solid","borderColor":"#F2BC74"}},"user-info":{"":{"position":"absolute","left":"70%","marginLeft":-65,"backgroundColor":"#F2BC74","paddingTop":5,"paddingRight":15,"paddingBottom":5,"paddingLeft":15,"display":"flex","alignItems":"center","width":130,"clipPath":"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)","zIndex":1}},"user-name":{"":{"color":"#FFFFFF","fontSize":16,"paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":25}}};

  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u8C03\u8BD5\u4FE1\u606F\u663E\u793A\u533A\u57DF "),
      vue.createCommentVNode(' <view class="debug-info"> '),
      vue.createCommentVNode(" <text>Scenario Data: {{ JSON.stringify(scenarioData) }}</text> "),
      vue.createCommentVNode(" </view> "),
      vue.createCommentVNode(" \u80CC\u666F\u56FE\u7247 "),
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0$3,
        mode: "aspectFill"
      }),
      vue.createElementVNode("image", {
        class: "logo",
        src: _imports_1$2,
        mode: "aspectFit"
      }),
      vue.createElementVNode("text", { class: "room-text" }, "\u4E09\u697C\u7535\u68AF\u95F4"),
      vue.createElementVNode("image", {
        class: "user-avatar",
        src: _imports_2$1,
        mode: "aspectFill"
      }),
      vue.createCommentVNode(" \u8C03\u6574\u7528\u6237x\u4FE1\u606F\u6A21\u5757\u7684\u4F4D\u7F6E "),
      vue.createElementVNode(
        "view",
        {
          class: "user-info",
          style: vue.normalizeStyle($data.userInfoStyle)
        },
        [
          vue.createElementVNode("text", { class: "user-name" }, "\u5C0F\u674E")
        ],
        4
        /* STYLE */
      ),
      vue.createCommentVNode(" \u7070\u8272\u5706\u5708\u548C\u56FE\u6807 "),
      vue.createCommentVNode('    <view class="gray-circle">\n      <image class="logo" src="/static/sign.png" mode="aspectFit" />\n    </view> '),
      vue.createCommentVNode(" \u6587\u5B57\u6846 "),
      vue.createElementVNode("view", { class: "text-box" }, [
        vue.createElementVNode(
          "text",
          { class: "text-content" },
          vue.toDisplayString($data.description),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "expand-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToTest1 && $options.navigateToTest1(...args)),
          style: { "margin-left": "auto" }
        }, [
          vue.createElementVNode("image", {
            class: "icon-image",
            src: _imports_3,
            mode: "aspectFit"
          })
        ])
      ])
    ]);
  }
  const PagesTestTest1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["styles", [_style_0$b]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/test/test1.uvue"]]);

  const _sfc_main$a = vue.defineComponent({
      data() {
          return {
              userInfoStyle: {
                  bottom: '180px',
                  left: '50%',
                  marginLeft: '-65px' // 替换 transform
              },
              userId: '',
              username: '',
              gender: '',
              selectedOptions: [],
              birthday: null,
              scenarioData: null,
              background: '',
              description: '',
              selectedOptionIndex: null,
              num: null,
              jobId: null,
              baseURL: 'https://eqmaster.azurewebsites.net' // 请替换为您的实际后端地址
          };
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/test/test2.uvue:59', 'Received options:', option);
          // 接收上一个页面传递的数据
          this.userId = option.userId || '';
          this.username = decodeURIComponent(option.username || '');
          this.gender = option.gender || '';
          this.jobId = option.jobId || '';
          if (option.options) {
              try {
                  this.selectedOptions = UTS.JSON.parse(decodeURIComponent(option.options));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test2.uvue:71', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test2.uvue:80', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/test/test2.uvue:85', 'Parsed data:', {
              userId: this.userId,
              username: this.username,
              gender: this.gender,
              selectedOptions: this.selectedOptions,
              birthday: this.birthday,
              jobId: this.jobId
          });
          // 发送数据到后端
          this.getScenarioData();
      },
      methods: {
          updateUserInfoPosition(x = null, y = null) {
              this.userInfoStyle.left = `${x}px`;
              this.userInfoStyle.bottom = `${y}px`;
              this.userInfoStyle.marginLeft = '0px'; // 移除居中效果
          },
          selectOption(index = null) {
              this.selectedOptionIndex = index;
              this.num = index + 1; // 设置 num 为选项的索引 + 1
              uni.__log__('log', 'at pages/test/test2.uvue:106', 'Selected option:', this.num, this.scenarioData.options[index].text);
          },
          navigateToTest1() {
              const testPageUrl = `/pages/test/test3?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}&num=${this.num}`;
              uni.navigateTo({
                  url: testPageUrl
              });
          },
          nextPage() {
              if (this.num === null) {
                  uni.showToast({
                      title: '请选择一个选项',
                      icon: 'none'
                  });
                  return null;
              }
              uni.__log__('log', 'at pages/test/test2.uvue:124', 'Sending data to backend:', {
                  choice: this.num,
                  job_id: this.jobId
              });
              uni.request({
                  url: `${this.baseURL}/choose_scenario`,
                  method: 'POST',
                  data: {
                      choice: this.num,
                      job_id: this.jobId
                  },
                  success: (response) => {
                      uni.__log__('log', 'at pages/test/test2.uvue:137', 'Full response:', response);
                      if (response.statusCode === 200) {
                          const result = response.data;
                          uni.__log__('log', 'at pages/test/test2.uvue:141', 'Response data:', result);
                          let nextPageUrl = null;
                          if (result.message === "Final choice made. Processing data in background.") {
                              nextPageUrl = `/pages/result/result?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}&num=${this.num}`;
                          }
                          else {
                              nextPageUrl = `/pages/test/test3?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}&num=${this.num}`;
                          }
                          uni.__log__('log', 'at pages/test/test2.uvue:150', 'Navigating to:', nextPageUrl);
                          uni.navigateTo({
                              url: nextPageUrl,
                              fail: (err) => {
                                  uni.__log__('error', 'at pages/test/test2.uvue:155', 'Navigation failed:', err);
                                  uni.showToast({
                                      title: '页面跳转失败',
                                      icon: 'none'
                                  });
                              }
                          });
                      }
                      else {
                          uni.showToast({
                              title: `请求失败，状态码：${response.statusCode}`,
                              icon: 'none'
                          });
                      }
                  },
                  fail: (error) => {
                      uni.__log__('error', 'at pages/test/test2.uvue:170', 'Detailed error:', error);
                      uni.showToast({
                          title: `发生错误：${error.errMsg}`,
                          icon: 'none'
                      });
                  }
              });
          },
          getScenarioData() {
              uni.request({
                  url: `${this.baseURL}/get_current_scenario`,
                  method: 'POST',
                  success: (res) => {
                      uni.__log__('log', 'at pages/test/test2.uvue:183', 'Scenario data:', res.data);
                      // 根据返回的数据结构调整
                      this.scenarioData = res.data.scenes || res.data;
                      this.handleScenarioData();
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test2.uvue:189', 'Error getting scenario data:', err);
                  }
              });
          },
          handleScenarioData() {
              if (this.scenarioData) {
                  this.description = this.scenarioData.description || '无法获取背景信息';
              }
              else {
                  uni.__log__('warn', 'at pages/test/test2.uvue:197', 'Background information not found in scenario data');
                  this.description = '无法获取背景信息';
              }
          }
      }
  });

  const _imports_1$1 = "/static/Vector.png";

  const _style_0$a = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":40,"left":"50%","marginLeft":-70,"backgroundColor":"rgba(55,55,66,0.4)","borderRadius":20,"paddingTop":12,"paddingRight":10,"paddingBottom":12,"paddingLeft":10,"width":140,"boxSizing":"border-box"}},"room-text":{"":{"color":"#F6ECC9","fontSize":16,"textAlign":"right","paddingRight":10}},"gray-circle":{"":{"position":"absolute","width":35,"height":35,"backgroundColor":"#373742","top":61,"left":130,"display":"flex","justifyContent":"center","alignItems":"center"}},"logo":{"":{"width":20,"height":20}},"options-container":{"":{"position":"absolute","top":500,"left":0,"right":0,"display":"flex","flexDirection":"column","alignItems":"center","gap":"30px"}},"text-box":{"":{"width":"80%","backgroundColor":"rgba(55,55,66,0.8)","borderRadius":50,"paddingTop":15,"paddingRight":25,"paddingBottom":15,"paddingLeft":25,"minHeight":50,"maxHeight":200,"transitionProperty":"backgroundColor","transitionDuration":"0.3s","marginBottom":20},".selected":{"backgroundColor":"#30d158"}},"text-content":{"":{"color":"#FFFFFF","fontSize":14,"lineHeight":1.4}},"continue-button":{"":{"position":"absolute","bottom":20,"left":"50%","marginLeft":-30,"backgroundColor":"#30d158","borderRadius":30,"WebkitBorderRadius":"30px","width":60,"height":60,"display":"flex","justifyContent":"center","alignItems":"center","color":"#FFFFFF","fontSize":24,"textAlign":"center","zIndex":1,"boxSizing":"border-box"}},"arrow":{"":{"color":"#ffffff"}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5,"fontSize":10,"zIndex":100,"overflowY":"auto"}},"@TRANSITION":{"text-box":{"property":"backgroundColor","duration":"0.3s"}}};

  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u8C03\u8BD5\u4FE1\u606F\u663E\u793A\u533A\u57DF "),
      vue.createCommentVNode(' <view class="debug-info"> '),
      vue.createCommentVNode(" \u5982\u9700\u8C03\u8BD5\u4FE1\u606F\uFF0C\u53EF\u53D6\u6D88\u6CE8\u91CA\u4EE5\u4E0B\u884C "),
      vue.createCommentVNode(" <text>Scenario Data: {{ JSON.stringify(scenarioData) }}</text> "),
      vue.createCommentVNode(" </view> "),
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0$3,
        mode: "aspectFill"
      }),
      vue.createElementVNode("view", { class: "room-info" }, [
        vue.createElementVNode("text", { class: "room-text" }, "\u4E09\u697C\u7535\u68AF\u95F4")
      ]),
      vue.createElementVNode("view", { class: "gray-circle" }, [
        vue.createElementVNode("image", {
          class: "logo",
          src: _imports_1$1,
          mode: "aspectFit"
        })
      ]),
      vue.createCommentVNode(" \u5305\u88F9\u9009\u9879\u5217\u8868\u7684\u5BB9\u5668 "),
      vue.createElementVNode("view", { class: "options-container" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.scenarioData && $data.scenarioData.options ? $data.scenarioData.options : [], (option, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: vue.normalizeClass(["text-box", { "selected": $data.selectedOptionIndex === index }]),
              onClick: ($event) => $options.selectOption(index)
            }, [
              vue.createElementVNode(
                "text",
                { class: "text-content" },
                vue.toDisplayString(option.text),
                1
                /* TEXT */
              )
            ], 10, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" \u7EE7\u7EED\u6309\u94AE "),
      vue.createElementVNode("view", {
        class: "continue-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.nextPage && $options.nextPage(...args))
      }, [
        vue.createElementVNode("text", { class: "arrow" }, "\u2192")
      ])
    ]);
  }
  const PagesTestTest2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["styles", [_style_0$a]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/test/test2.uvue"]]);

  const _sfc_main$9 = vue.defineComponent({
      data() {
          return {
              userInfoStyle: {
                  bottom: '180px',
                  left: '50%',
                  marginLeft: '-65px' // 替换 transform
              },
              userId: '',
              username: '',
              gender: '',
              selectedOptions: [],
              birthday: null,
              scenarioData: null,
              background: '',
              jobId: '',
              roundCount: 0,
              num: null,
              baseURL: 'https://eqmaster.azurewebsites.net' // 请替换为您的实际后端地址
          };
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/test/test3.uvue:48', 'Received options:', option);
          // 接收上一个页面传递的数据
          this.userId = option.userId || '';
          this.username = decodeURIComponent(option.username || '');
          this.gender = option.gender || '';
          this.jobId = option.jobId || '';
          if (option.options) {
              try {
                  this.selectedOptions = UTS.JSON.parse(decodeURIComponent(option.options));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test3.uvue:60', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test3.uvue:69', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          // 接收来自其他页面的新信息
          if (option.roundCount) {
              this.roundCount = parseInt(option.roundCount, 10);
          }
          if (option.num) {
              this.num = parseInt(option.num, 10);
          }
          uni.__log__('log', 'at pages/test/test3.uvue:82', 'Parsed data:', {
              userId: this.userId,
              username: this.username,
              gender: this.gender,
              selectedOptions: this.selectedOptions,
              birthday: this.birthday,
              roundCount: this.roundCount,
              num: this.num,
              jobId: this.jobId
          });
          // 获取场景数据
          this.getScenarioData();
      },
      methods: {
          navigateToTest1() {
              const testPageUrl = `/pages/test/test4?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}&roundCount=${this.roundCount}&num=${this.num}`;
              uni.navigateTo({
                  url: testPageUrl
              });
          },
          getScenarioData() {
              uni.request({
                  url: `${this.baseURL}/get_current_scenario`,
                  method: 'POST',
                  success: (res) => {
                      uni.__log__('log', 'at pages/test/test3.uvue:109', 'Scenario data:', res.data);
                      // 根据返回的数据结构调整
                      this.scenarioData = res.data;
                      this.handleScenarioData();
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test3.uvue:115', 'Error getting scenario data:', err);
                  }
              });
          },
          handleScenarioData() {
              if (this.scenarioData) {
                  // 假设 scenarioData 包含一个 background 字段
                  this.background = this.scenarioData.scenes.background || '请点击下方箭头继续';
                  // ... 处理其他数据
              }
              else {
                  this.background = '请点击下方箭头继续';
              }
          },
      }
  });

  const _style_0$9 = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":40,"left":"50%","marginLeft":-70,"backgroundColor":"rgba(55,55,66,0.4)","borderRadius":20,"paddingTop":12,"paddingRight":10,"paddingBottom":12,"paddingLeft":10,"width":140,"boxSizing":"border-box"}},"room-text":{"":{"color":"#F6ECC9","fontSize":16,"textAlign":"right","paddingRight":10}},"gray-circle":{"":{"position":"absolute","width":35,"height":35,"backgroundColor":"#373742","top":61,"left":130,"display":"flex","justifyContent":"center","alignItems":"center"}},"logo":{"":{"width":20,"height":20}},"text-box":{"":{"position":"absolute","bottom":100,"left":20,"right":20,"backgroundColor":"rgba(55,55,66,0.8)","borderRadius":50,"paddingTop":25,"paddingBottom":15,"paddingLeft":25,"paddingRight":25,"minHeight":50,"maxHeight":200}},"text-content":{"":{"color":"#FFFFFF","fontSize":14,"lineHeight":1.4}},"expand-icon":{"":{"textAlign":"center","color":"#FFFFFF","fontSize":12,"marginTop":5}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5,"fontSize":10,"zIndex":100,"overflowY":"auto"}}};

  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u8C03\u8BD5\u4FE1\u606F\u663E\u793A\u533A\u57DF "),
      vue.createCommentVNode(' <view class="debug-info"> '),
      vue.createCommentVNode(" \u5982\u9700\u8C03\u8BD5\u4FE1\u606F\uFF0C\u53EF\u53D6\u6D88\u6CE8\u91CA\u4EE5\u4E0B\u884C "),
      vue.createCommentVNode(" // <text>Scenario Data: {{ JSON.stringify(scenarioData) }}</text> "),
      vue.createCommentVNode(" </view> "),
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0$3,
        mode: "aspectFill"
      }),
      vue.createElementVNode("view", { class: "room-info" }, [
        vue.createElementVNode("text", { class: "room-text" }, "\u4E09\u697C\u7535\u68AF\u95F4")
      ]),
      vue.createElementVNode("view", { class: "gray-circle" }, [
        vue.createElementVNode("image", {
          class: "logo",
          src: _imports_1$1,
          mode: "aspectFit"
        })
      ]),
      vue.createCommentVNode(" \u6587\u5B57\u6846 "),
      vue.createElementVNode("view", { class: "text-box" }, [
        vue.createElementVNode(
          "text",
          { class: "text-content" },
          vue.toDisplayString($data.background),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "expand-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToTest1 && $options.navigateToTest1(...args))
        }, "\u25BC")
      ])
    ]);
  }
  const PagesTestTest3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["styles", [_style_0$9]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/test/test3.uvue"]]);

  const _sfc_main$8 = vue.defineComponent({
      data() {
          return {
              userInfoStyle: {
                  bottom: '180px',
                  left: '50%',
                  marginLeft: '-65px' // 替换 transform
              },
              userId: '',
              username: '',
              gender: '',
              selectedOptions: [],
              birthday: null,
              scenarioData: null,
              background: '',
              description: '',
              jobId: '',
              baseURL: 'https://eqmaster.azurewebsites.net' // 请替换为您的实际后端地址
          };
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/test/test4.uvue:54', 'Received options:', option);
          // 接收上一个页面传递的数据
          this.userId = option.userId || '';
          this.username = decodeURIComponent(option.username || '');
          this.gender = option.gender || '';
          this.jobId = option.jobId || ''; // 添加默认值
          if (option.options) {
              try {
                  this.selectedOptions = UTS.JSON.parse(decodeURIComponent(option.options));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test4.uvue:66', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test4.uvue:75', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/test/test4.uvue:80', 'Parsed data:', {
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
          updateUserInfoPosition(x = null, y = null) {
              this.userInfoStyle.left = `${x}px`;
              this.userInfoStyle.bottom = `${y}px`;
              this.userInfoStyle.marginLeft = '0px'; // 移除居中效果
          },
          navigateToTest1() {
              const testPageUrl = `/pages/test/test5?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}`;
              uni.navigateTo({
                  url: testPageUrl
              });
          },
          getScenarioData() {
              uni.request({
                  url: `${this.baseURL}/get_current_scenario`,
                  method: 'POST',
                  success: (res) => {
                      uni.__log__('log', 'at pages/test/test4.uvue:109', 'Scenario data:', res.data);
                      this.scenarioData = res.data; // 修改为直接获取 res.data
                      this.handleScenarioData();
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test4.uvue:114', 'Error getting scenario data:', err);
                  }
              });
          },
          handleScenarioData() {
              if (this.scenarioData) {
                  // 假设 scenarioData 包含一个 description 字段
                  this.description = this.scenarioData.scenes.description || '无法获取背景信息';
              }
              else {
                  uni.__log__('warn', 'at pages/test/test4.uvue:123', 'Background information not found in scenario data');
                  this.description = '无法获取背景信息';
              }
          }
      }
  });

  const _style_0$8 = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":40,"left":"50%","marginLeft":-70,"backgroundColor":"rgba(55,55,66,0.4)","borderRadius":20,"paddingTop":12,"paddingRight":10,"paddingBottom":12,"paddingLeft":10,"width":140,"boxSizing":"border-box"}},"room-text":{"":{"color":"#F6ECC9","fontSize":16,"textAlign":"right","paddingRight":10}},"gray-circle":{"":{"position":"absolute","width":35,"height":35,"backgroundColor":"#373742","top":61,"left":130,"display":"flex","justifyContent":"center","alignItems":"center"}},"logo":{"":{"width":20,"height":20}},"text-box":{"":{"position":"absolute","bottom":100,"left":20,"right":20,"backgroundColor":"rgba(55,55,66,0.8)","borderRadius":50,"paddingTop":25,"paddingBottom":15,"paddingLeft":25,"paddingRight":25,"minHeight":50,"maxHeight":200}},"text-content":{"":{"color":"#FFFFFF","fontSize":14,"lineHeight":1.4}},"expand-icon":{"":{"textAlign":"center","color":"#FFFFFF","fontSize":12,"marginTop":5}},"user-info":{"":{"position":"absolute","bottom":180,"left":"50%","marginLeft":-65,"backgroundColor":"rgba(0,0,0,0.6)","borderRadius":20,"paddingTop":5,"paddingRight":15,"paddingBottom":5,"paddingLeft":15,"display":"flex","alignItems":"center","width":130,"zIndex":1}},"user-avatar":{"":{"width":30,"height":30,"position":"absolute","bottom":185,"left":"50%","marginLeft":-63,"marginRight":10,"zIndex":2}},"user-name":{"":{"color":"#FFFFFF","fontSize":16,"paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":25}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5,"fontSize":10,"zIndex":100,"overflowY":"auto"}}};

  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u8C03\u8BD5\u4FE1\u606F\u663E\u793A\u533A\u57DF "),
      vue.createCommentVNode(' <view class="debug-info"> '),
      vue.createCommentVNode(" \u5982\u9700\u8C03\u8BD5\u4FE1\u606F\uFF0C\u53EF\u53D6\u6D88\u6CE8\u91CA\u4EE5\u4E0B\u884C "),
      vue.createCommentVNode(" <text>Scenario Data: {{ JSON.stringify(scenarioData) }}</text> "),
      vue.createCommentVNode(" </view> "),
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0$3,
        mode: "aspectFill"
      }),
      vue.createElementVNode("view", { class: "room-info" }, [
        vue.createElementVNode("text", { class: "room-text" }, "\u4E09\u697C\u7535\u68AF\u95F4")
      ]),
      vue.createElementVNode("view", { class: "gray-circle" }, [
        vue.createElementVNode("image", {
          class: "logo",
          src: _imports_1$1,
          mode: "aspectFit"
        })
      ]),
      vue.createElementVNode("image", {
        class: "user-avatar",
        src: _imports_2$1,
        mode: "aspectFill"
      }),
      vue.createCommentVNode(" \u8C03\u6574\u7528\u6237\u4FE1\u606F\u6A21\u5757\u7684\u4F4D\u7F6E "),
      vue.createElementVNode(
        "view",
        {
          class: "user-info",
          style: vue.normalizeStyle($data.userInfoStyle)
        },
        [
          vue.createElementVNode("text", { class: "user-name" }, "\u5C0F\u674E")
        ],
        4
        /* STYLE */
      ),
      vue.createCommentVNode(" \u6587\u5B57\u6846 "),
      vue.createElementVNode("view", { class: "text-box" }, [
        vue.createElementVNode(
          "text",
          { class: "text-content" },
          vue.toDisplayString($data.description),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "expand-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToTest1 && $options.navigateToTest1(...args))
        }, "\u25BC")
      ])
    ]);
  }
  const PagesTestTest4 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["styles", [_style_0$8]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/test/test4.uvue"]]);

  const _sfc_main$7 = vue.defineComponent({
      data() {
          return {
              userInfoStyle: {
                  bottom: '180px',
                  left: '50%',
                  marginLeft: '-65px' // 替换 transform
              },
              userId: '',
              username: '',
              gender: '',
              selectedOptions: [],
              birthday: null,
              scenarioData: null,
              background: '',
              description: '',
              selectedOptionIndex: null,
              num: null,
              jobId: null,
              baseURL: 'https://eqmaster.azurewebsites.net' // 请替换为您的实际后端地址
          };
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/test/test5.uvue:59', 'Received options:', option);
          // 接收上一个页面传递的数据
          this.userId = option.userId || '';
          this.username = decodeURIComponent(option.username || '');
          this.gender = option.gender || '';
          this.jobId = option.jobId || '';
          if (option.options) {
              try {
                  this.selectedOptions = UTS.JSON.parse(decodeURIComponent(option.options));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test5.uvue:71', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test5.uvue:80', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/test/test5.uvue:85', 'Parsed data:', {
              userId: this.userId,
              username: this.username,
              gender: this.gender,
              selectedOptions: this.selectedOptions,
              birthday: this.birthday,
              jobId: this.jobId
          });
          // 发送数据到后端
          this.getScenarioData();
      },
      methods: {
          updateUserInfoPosition(x = null, y = null) {
              this.userInfoStyle.left = `${x}px`;
              this.userInfoStyle.bottom = `${y}px`;
              this.userInfoStyle.marginLeft = '0px'; // 移除居中效果
          },
          selectOption(index = null) {
              this.selectedOptionIndex = index;
              this.num = index + 1; // 设置 num 为选项的索引 + 1
              uni.__log__('log', 'at pages/test/test5.uvue:106', 'Selected option:', this.num, this.scenarioData.options[index].text);
          },
          navigateToTest1() {
              const testPageUrl = `/pages/test/test3?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}&num=${this.num}`;
              uni.navigateTo({
                  url: testPageUrl
              });
          },
          nextPage() {
              if (this.num === null) {
                  uni.showToast({
                      title: '请选择一个选项',
                      icon: 'none'
                  });
                  return null;
              }
              uni.__log__('log', 'at pages/test/test5.uvue:124', 'Sending data to backend:', {
                  choice: this.num,
                  job_id: this.jobId
              });
              uni.request({
                  url: `${this.baseURL}/choose_scenario`,
                  method: 'POST',
                  data: {
                      choice: this.num,
                      job_id: this.jobId
                  },
                  success: (response) => {
                      uni.__log__('log', 'at pages/test/test5.uvue:137', 'Full response:', response);
                      if (response.statusCode === 200) {
                          const result = response.data;
                          uni.__log__('log', 'at pages/test/test5.uvue:141', 'Response data:', result);
                          let nextPageUrl = null;
                          if (result.message === "Final choice made. Processing data in background.") {
                              nextPageUrl = `/pages/result/result?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}&num=${this.num}`;
                          }
                          else {
                              nextPageUrl = `/pages/test/test3?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}&num=${this.num}`;
                          }
                          uni.__log__('log', 'at pages/test/test5.uvue:150', 'Navigating to:', nextPageUrl);
                          uni.navigateTo({
                              url: nextPageUrl,
                              fail: (err) => {
                                  uni.__log__('error', 'at pages/test/test5.uvue:155', 'Navigation failed:', err);
                                  uni.showToast({
                                      title: '页面跳转失败',
                                      icon: 'none'
                                  });
                              }
                          });
                      }
                      else {
                          uni.showToast({
                              title: `请求失败，状态码：${response.statusCode}`,
                              icon: 'none'
                          });
                      }
                  },
                  fail: (error) => {
                      uni.__log__('error', 'at pages/test/test5.uvue:170', 'Detailed error:', error);
                      uni.showToast({
                          title: `发生错误：${error.errMsg}`,
                          icon: 'none'
                      });
                  }
              });
          },
          getScenarioData() {
              uni.request({
                  url: `${this.baseURL}/get_current_scenario`,
                  method: 'POST',
                  success: (res) => {
                      uni.__log__('log', 'at pages/test/test5.uvue:183', 'Scenario data:', res.data);
                      // 根据返回的数据结构调整
                      this.scenarioData = res.data.scenes || res.data;
                      this.handleScenarioData();
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test5.uvue:189', 'Error getting scenario data:', err);
                  }
              });
          },
          handleScenarioData() {
              if (this.scenarioData) {
                  this.description = this.scenarioData.description || '无法获取背景信息';
              }
              else {
                  uni.__log__('warn', 'at pages/test/test5.uvue:197', 'Background information not found in scenario data');
                  this.description = '无法获取背景信息';
              }
          }
      }
  });

  const _style_0$7 = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":40,"left":"50%","marginLeft":-70,"backgroundColor":"rgba(55,55,66,0.4)","borderRadius":20,"paddingTop":12,"paddingRight":10,"paddingBottom":12,"paddingLeft":10,"width":140,"boxSizing":"border-box"}},"room-text":{"":{"color":"#F6ECC9","fontSize":16,"textAlign":"right","paddingRight":10}},"gray-circle":{"":{"position":"absolute","width":35,"height":35,"backgroundColor":"#373742","top":61,"left":130,"display":"flex","justifyContent":"center","alignItems":"center"}},"logo":{"":{"width":20,"height":20}},"options-container":{"":{"position":"absolute","top":500,"left":0,"right":0,"display":"flex","flexDirection":"column","alignItems":"center","gap":"30px"}},"text-box":{"":{"width":"80%","backgroundColor":"rgba(55,55,66,0.8)","borderRadius":50,"paddingTop":15,"paddingRight":25,"paddingBottom":15,"paddingLeft":25,"minHeight":50,"maxHeight":200,"transitionProperty":"backgroundColor","transitionDuration":"0.3s","marginBottom":20},".selected":{"backgroundColor":"#30d158"}},"text-content":{"":{"color":"#FFFFFF","fontSize":14,"lineHeight":1.4}},"continue-button":{"":{"position":"absolute","bottom":20,"left":"50%","marginLeft":-30,"backgroundColor":"#30d158","borderRadius":30,"WebkitBorderRadius":"30px","width":60,"height":60,"display":"flex","justifyContent":"center","alignItems":"center","color":"#FFFFFF","fontSize":24,"textAlign":"center","zIndex":1,"boxSizing":"border-box"}},"arrow":{"":{"color":"#ffffff"}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5,"fontSize":10,"zIndex":100,"overflowY":"auto"}},"@TRANSITION":{"text-box":{"property":"backgroundColor","duration":"0.3s"}}};

  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u8C03\u8BD5\u4FE1\u606F\u663E\u793A\u533A\u57DF "),
      vue.createCommentVNode(' <view class="debug-info"> '),
      vue.createCommentVNode(" \u5982\u9700\u8C03\u8BD5\u4FE1\u606F\uFF0C\u53EF\u53D6\u6D88\u6CE8\u91CA\u4EE5\u4E0B\u884C "),
      vue.createCommentVNode(" <text>Scenario Data: {{ JSON.stringify(scenarioData) }}</text> "),
      vue.createCommentVNode(" </view> "),
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0$3,
        mode: "aspectFill"
      }),
      vue.createElementVNode("view", { class: "room-info" }, [
        vue.createElementVNode("text", { class: "room-text" }, "\u4E09\u697C\u7535\u68AF\u95F4")
      ]),
      vue.createElementVNode("view", { class: "gray-circle" }, [
        vue.createElementVNode("image", {
          class: "logo",
          src: _imports_1$1,
          mode: "aspectFit"
        })
      ]),
      vue.createCommentVNode(" \u5305\u88F9\u9009\u9879\u5217\u8868\u7684\u5BB9\u5668 "),
      vue.createElementVNode("view", { class: "options-container" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.scenarioData && $data.scenarioData.options ? $data.scenarioData.options : [], (option, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: vue.normalizeClass(["text-box", { "selected": $data.selectedOptionIndex === index }]),
              onClick: ($event) => $options.selectOption(index)
            }, [
              vue.createElementVNode(
                "text",
                { class: "text-content" },
                vue.toDisplayString(option.text),
                1
                /* TEXT */
              )
            ], 10, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" \u7EE7\u7EED\u6309\u94AE "),
      vue.createElementVNode("view", {
        class: "continue-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.nextPage && $options.nextPage(...args))
      }, [
        vue.createElementVNode("text", { class: "arrow" }, "\u2192")
      ])
    ]);
  }
  const PagesTestTest5 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["styles", [_style_0$7]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/test/test5.uvue"]]);

  const _sfc_main$6 = vue.defineComponent({
      data() {
          return {
              people: [
                  { name: 'Chelsea Chen', tags: ['PUA达人', '厚脸皮', '业务经验丰富'], avatar: '/static/chelsea.png' },
                  { name: '一口奶黄包', tags: ['笑面虎', '平级同事'], avatar: '/static/naibao.png' },
                  { name: 'TK', tags: ['摸鱼高手', '实习生'], avatar: '/static/tk.png' },
                  { name: '花开富贵', tags: ['茶水间闲谈', '排队抢购', '打八折'], avatar: '/static/huakai.png' },
              ]
          };
      },
      methods: {
          navigateToDetails() {
              // Use Uniapp's navigation method
              uni.navigateTo({
                  url: '/pages/details/details' // Update the path as needed
              });
          }
      }
  });

  const _imports_0$2 = "/static/hedgehog.png";

  const _style_0$6 = {"container":{"":{"backgroundColor":"#f0f0f0","paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"boxSizing":"border-box"}},"section":{"":{"marginBottom":24,"backgroundColor":"#f0f0f0"}},"header":{"":{"marginBottom":16}},"title":{"":{"fontSize":18}},"greeting":{"":{"fontSize":14,"marginTop":8}},"cards":{"":{"display":"flex","flexDirection":"row","justifyContent":"space-between"}},"large-card":{"":{"backgroundColor":"#ccff00","paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"borderRadius":10,"width":"60%","display":"flex","flexDirection":"column","justifyContent":"space-between"}},"small-cards":{"":{"display":"flex","flexDirection":"column","width":"35%","justifyContent":"space-between"}},"card":{"":{"backgroundColor":"#ffffff","paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"borderRadius":10,"marginBottom":12}},"small-card":{"":{"backgroundColor":"#e0f7fa","paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"borderRadius":10}},"highlight":{"":{"backgroundColor":"#ccff00"}},"card-header":{"":{"marginBottom":8}},"card-title":{"":{"fontSize":16,"fontWeight":"bold"}},"card-description":{"":{"fontSize":14,"marginTop":4}},"card-body":{"":{"display":"flex","justifyContent":"space-between","alignItems":"center"}},"icon":{"":{"width":160,"height":160}},"score-info":{"":{"display":"flex","flexDirection":"column","alignItems":"flex-end"}},"card-score":{"":{"fontSize":40,"fontWeight":"bold","color":"#000000"}},"card-score-label":{"":{"fontSize":18,"fontWeight":"bold","color":"#000000"}},"card-max-score":{"":{"fontSize":14,"color":"#000000"}},"action-link":{"":{"fontSize":14,"color":"#00bcd4","textDecoration":"underline","marginTop":8}},"network-title":{"":{"fontSize":18,"fontWeight":"bold","marginBottom":12,"color":"#ffffff"}},"network-list":{"":{"display":"flex","flexDirection":"column","backgroundColor":"#2c2c2e","paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"borderRadius":10}},"network-item":{"":{"display":"flex","alignItems":"center","marginBottom":12,"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"backgroundColor":"#3a3a3c","borderRadius":10}},"avatar":{"":{"width":40,"height":40,"marginRight":12}},"person-info":{"":{"display":"flex","flexDirection":"column"}},"name":{"":{"fontSize":16,"fontWeight":"bold","color":"#ffffff"}},"tags":{"":{"fontSize":12,"color":"#a1a1a1","marginTop":4}},"view-more":{"":{"fontSize":14,"color":"#00bcd4","textAlign":"center","marginTop":16}}};

  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      "scroll-y": "true",
      class: "container"
    }, [
      vue.createCommentVNode(" \u804C\u573A\u7BC7\u6A21\u5757 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("view", { class: "header" }, [
          vue.createElementVNode("text", { class: "title" }, "\u804C\u573A\u7BC7"),
          vue.createElementVNode("text", { class: "greeting" }, "\u563F\uFF0C\u7784\u7784\u4F60\u5728\u804C\u573A\u4E2D\u7684\u60C5\u5546\u5C5E\u6027")
        ]),
        vue.createElementVNode("view", { class: "cards" }, [
          vue.createElementVNode("view", { class: "card large-card highlight" }, [
            vue.createElementVNode("view", { class: "card-header" }, [
              vue.createElementVNode("text", { class: "card-title" }, "#\u804C\u573A\u523A\u732C"),
              vue.createElementVNode("text", { class: "card-description" }, "\u6E17\u8EAB\u5E26\u523A\u4F46\u80FD\u529B\u4E0D\u4FD7\uFF0C\u4F9D\u9760\u600E\u4E48\u601D\u5E73\u6838\u9C7C\uFF0C\u60C5\u5546\u5347\u7EA7\uFF01")
            ]),
            vue.createElementVNode("view", { class: "card-body" }, [
              vue.createElementVNode("image", {
                class: "icon",
                src: _imports_0$2
              }),
              vue.createElementVNode("view", { class: "score-info" }, [
                vue.createElementVNode("text", { class: "card-score" }, "45"),
                vue.createElementVNode("text", { class: "card-score-label" }, "\u5206"),
                vue.createElementVNode("text", { class: "card-max-score" }, "/100\u5206")
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "small-cards" }, [
            vue.createElementVNode("view", { class: "card small-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "\u60C5\u7EEA\u7A33\u5B9A\u80FD\u529B"),
              vue.createElementVNode("text", { class: "card-description" }, "\u5F53\u524D\u4F60\u6700\u9700\u8981\u63D0\u5347\u8BE5\u9879\u80FD\u529B\uFF01\u4F60\u5BB9\u6613\u56E0\u5DE5\u4F5C\u4E2D\u7684\u5C0F\u632B\u6298\u6216\u4ED6\u4EBA\u7684\u4E0D\u540C\u610F\u89C1\u800C\u4EA7\u751F\u8F83\u5927\u7684\u60C5\u7EEA\u6CE2\u52A8\u3002"),
              vue.createElementVNode("text", { class: "card-score" }, "22%")
            ]),
            vue.createElementVNode("view", { class: "card small-card" }, [
              vue.createElementVNode("text", { class: "card-title" }, "\u9AD8\u60C5\u5546\u5C0F\u8D34\u58EB"),
              vue.createElementVNode("text", { class: "card-description" }, "\u51B2\u52A8\u662F\u9B54\u9B3C\u3002\u5B66\u4F1A\u51B7\u9759\u662F\u5F53\u524D\u4F60\u6700\u9700\u8981\u6539\u5584\u7684\u80FD\u529B\u3002"),
              vue.createElementVNode("text", {
                class: "action-link",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToDetails && $options.navigateToDetails(...args))
              }, "\u67E5\u770B\u5B8C\u6574\u62A5\u544A\u548C\u4FEE\u6539\u6863\u6848")
            ])
          ])
        ])
      ]),
      vue.createCommentVNode(" \u6211\u7684\u804C\u573A\u60C5\u5546\u7F51\u6A21\u5757 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("text", { class: "network-title" }, "\u6211\u7684\u804C\u573A\u60C5\u5546\u7F51 \u2014\u2014 \u6DF1\u5EA6\u89E3\u6790\u804C\u573A\u4EBA\u9645\u5173\u7CFB"),
        vue.createElementVNode("view", { class: "network-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.people, (person, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "network-item",
                key: index
              }, [
                vue.createElementVNode("image", {
                  src: person.avatar,
                  class: "avatar"
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "person-info" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "name" },
                    vue.toDisplayString(person.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "tags" },
                    vue.toDisplayString(person.tags.join(" | ")),
                    1
                    /* TEXT */
                  )
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("text", { class: "view-more" }, "\u67E5\u770B\u66F4\u591A")
      ])
    ]);
  }
  const PagesDashboardDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["styles", [_style_0$6]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/dashboard/dashboard.uvue"]]);

  const _sfc_main$5 = vue.defineComponent({
      data() {
          return {
              score: 28,
              maxScore: 100 // 假设最大分数是100
          };
      },
      mounted() {
          this.drawRadar();
      },
      methods: {
          progressWidth(value = null) {
              // 计算进度条的宽度百分比
              const percentage = (value / this.maxScore) * 100;
              return `${percentage}%`;
          },
          drawRadar() {
              const canvas = document.getElementById('radarCanvas');
              if (!canvas)
                  return null;
              const radarCtx = canvas.getContext('2d');
              // 控制中心点和半径
              const center = new UTSJSONObject({ x: 150, y: 70 }); // 调整 y 值以便图形不被遮挡
              const radius = 50;
              // 控制xy两个方向的比例
              const scaleX = 1.7; // X方向放大1.5倍
              const scaleY = 1.2; // Y方向保持原比例
              const data = [80, 70, 85, 60, 90]; // 五个维度的数据
              const labels = ['', '', '', '', ''];
              // 绘制多边形网格，只绘制两层
              radarCtx.strokeStyle = '#757CE0'; // 浅蓝色线条
              radarCtx.lineWidth = 0.5;
              for (let i = 0; i <= 1; i++) {
                  radarCtx.beginPath();
                  for (let j = 0; j < 5; j++) {
                      const angle = (Math.PI / 2 + (2 * Math.PI * j) / 5);
                      const x = center.x + scaleX * (radius * (2 - i) / 2) * Math.cos(angle);
                      const y = center.y - scaleY * (radius * (2 - i) / 2) * Math.sin(angle);
                      radarCtx.lineTo(x, y);
                  }
                  radarCtx.closePath();
                  radarCtx.stroke();
              }
              // 绘制从中心点到每个顶点的径向线
              radarCtx.strokeStyle = '#757CE0'; // 浅蓝色线条，半透明
              radarCtx.lineWidth = 0.5;
              for (let j = 0; j < 5; j++) {
                  radarCtx.beginPath();
                  const angle = (Math.PI / 2 + (2 * Math.PI * j) / 5);
                  const x = center.x + scaleX * radius * Math.cos(angle);
                  const y = center.y - scaleY * radius * Math.sin(angle);
                  radarCtx.moveTo(center.x, center.y); // 移动到中心点
                  radarCtx.lineTo(x, y); // 画线到每个顶点
                  radarCtx.stroke();
              }
              // 绘制数据多边形
              radarCtx.fillStyle = 'rgba(117, 124, 224, 0.3)'; // 使用半透明的#757CE0颜色
              radarCtx.strokeStyle = 'rgba(117, 124, 224, 0.8)'; // 边框使用更深的半透明颜色
              radarCtx.lineWidth = 1;
              radarCtx.beginPath();
              for (let i = 0; i < 5; i++) {
                  const angle = (Math.PI / 2 + (2 * Math.PI * i) / 5);
                  const x = center.x + scaleX * (radius * data[i] / 100) * Math.cos(angle);
                  const y = center.y - scaleY * (radius * data[i] / 100) * Math.sin(angle);
                  radarCtx.lineTo(x, y);
              }
              radarCtx.closePath();
              radarCtx.fill(); // 填充多边形
              radarCtx.stroke(); // 绘制边框
              // 绘制标签
              radarCtx.fillStyle = '#666666'; // 灰色字体
              radarCtx.font = '14px Arial';
              labels.forEach((label, i) => {
                  const angle = (Math.PI / 2 + (2 * Math.PI * i) / 5);
                  const x = center.x + scaleX * (radius + 20) * Math.cos(angle);
                  const y = center.y - scaleY * (radius + 20) * Math.sin(angle);
                  radarCtx.fillText(label, x - 20, y + 5);
              });
          },
          navigateToGuide() {
              // Use Uniapp's navigation method
              uni.navigateTo({
                  url: '/pages/details/details' // Update the path as needed
              });
          }
      }
  });

  const _imports_0$1 = "/static/插图1.png";

  const _imports_1 = "/static/img.png";

  const _imports_2 = "/static/emoji.png";

  const _imports_4 = "/static/Frame 1321316998.png";

  const _style_0$5 = {"container":{"":{"width":"100%","position":"relative","backgroundColor":"#F4F6FF","display":"flex","flexDirection":"column","alignItems":"center","overflowY":"auto"}},"background-curve":{"":{"width":"200%","height":"500rpx","backgroundColor":"#F4F6FF","position":"absolute","top":"-100rpx","left":-300,"transform":"rotate(35deg)"}},"illustration":{"":{"width":"300rpx","height":"auto","position":"relative","zIndex":10,"left":"30%","marginBottom":"20rpx"}},"illustration1":{"":{"width":"700rpx","height":"auto","position":"relative","zIndex":10,"top":"-25%","left":"-3%","marginBottom":"0rpx"}},"card":{"":{"width":"95%","height":"auto","backgroundColor":"#FFFFFF","borderRadius":"20rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"60rpx","paddingRight":"30rpx","paddingBottom":"0rpx","paddingLeft":"30rpx","top":"-25%"}},"card1":{"":{"width":"95%","height":"auto","backgroundColor":"#FFFFFF","borderRadius":"20rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"60rpx","paddingRight":"30rpx","paddingBottom":"0rpx","paddingLeft":"30rpx","top":"-23.5%"}},"card2":{"":{"width":"95%","height":"auto","backgroundColor":"#FFFFFF","borderRadius":"20rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"60rpx","paddingRight":"30rpx","paddingBottom":"20rpx","paddingLeft":"30rpx","top":"-22%"}},"score-container":{"":{"width":"100%","display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":"10rpx"}},"score-container1":{"":{"width":"100%","display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":"10rpx","marginTop":"100rpx"}},"score-title":{"":{"fontSize":"40rpx","fontWeight":"bold","color":"#BABDE0","marginBottom":"5rpx"}},"score-title1":{"":{"fontSize":"36rpx","color":"#212121","marginBottom":"5rpx"}},"score-details":{"":{"display":"flex","marginBottom":"10rpx","width":"100%"}},"score-value-large":{"":{"fontSize":"80rpx","fontWeight":"bold","color":"#BABDE0","marginRight":"5rpx"}},"score-value-small":{"":{"fontSize":"40rpx","fontWeight":"normal","color":"#BABDE0","position":"absolute","top":"40rpx","left":"100rpx"}},"progress-bar":{"":{"width":"100%","height":"10rpx","backgroundColor":"#E5E5E5","borderRadius":"5rpx","overflow":"hidden","marginTop":"5rpx"}},"progress-bar1":{"":{"width":"100%","height":"10rpx","backgroundColor":"#E5E5E5","borderRadius":"5rpx","overflow":"hidden","marginTop":"15rpx","marginRight":"5rpx","marginBottom":"15rpx","marginLeft":"5rpx"}},"progress":{"":{"height":"100%","backgroundColor":"#BABDE0"}},"radar-canvas":{"":{"width":"700rpx","height":"500rpx","marginTop":"10rpx","marginRight":"10rpx","marginBottom":"10rpx","marginLeft":"10rpx","backgroundColor":"rgba(0,0,0,0)"}},"card-content":{"":{"display":"flex","alignItems":"center","justifyContent":"flex-start"}},"emoji":{"":{"width":"60rpx","height":"auto","marginRight":"10rpx"}},"card-text-container":{"":{"display":"flex","justifyContent":"flex-start","marginBottom":"20rpx"}},"icon-text-box":{"":{"display":"flex","alignItems":"center"}},"icon-illustration":{"":{"width":"60rpx","height":"auto","position":"absolute","top":"0%","left":"0%","marginRight":"10rpx"}},"text-box":{"":{"alignItems":"center","borderWidth":"1rpx","borderStyle":"solid","borderColor":"#FFFFFF","paddingTop":"5rpx","paddingRight":"10rpx","paddingBottom":"5rpx","paddingLeft":"10rpx","borderRadius":"10rpx","backgroundColor":"#FFFFFF","boxShadow":"0 0 12rpx 0rpx rgba(0, 0, 0, 0.3)","marginTop":"10rpx","marginRight":"10rpx","marginBottom":"10rpx","marginLeft":"10rpx"}},"text-box1":{"":{"alignItems":"center","borderWidth":"1rpx","borderStyle":"solid","borderColor":"#FFFFFF","paddingTop":"10rpx","paddingRight":"10rpx","paddingBottom":"10rpx","paddingLeft":"10rpx","borderRadius":"10rpx","backgroundColor":"#FFFFFF","boxShadow":"0 0 0rpx 0rpx rgba(0, 0, 0, 0.3)","marginTop":"0rpx","marginRight":"10rpx","marginBottom":"10rpx","marginLeft":"10rpx"}},"card-title":{"":{"fontSize":"28rpx","color":"#BABDE0","marginBottom":"10rpx"}},"card-title1":{"":{"fontSize":"32rpx","color":"#666666","fontWeight":"bold","marginBottom":"10rpx","top":"-10%"}},"card-description":{"":{"fontSize":"32rpx","color":"#6E6E6E","lineHeight":1.5,"marginTop":"10rpx"}},"guide-button":{"":{"width":"90%","height":"100rpx","backgroundColor":"#6871F9","color":"#FFFFFF","fontSize":"36rpx","borderRadius":"50rpx","textAlign":"center","lineHeight":"100rpx","display":"flex","justifyContent":"center","alignItems":"center"}}};

  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u80CC\u666F\u548C\u5F27\u7EBF "),
      vue.createElementVNode("view", { class: "background-curve" }),
      vue.createCommentVNode(" \u6DFB\u52A0\u63D2\u56FE "),
      vue.createElementVNode("image", {
        class: "illustration",
        src: _imports_0$1,
        mode: "widthFix"
      }),
      vue.createCommentVNode(" \u6DFB\u52A0\u63D2\u56FE "),
      vue.createElementVNode("image", {
        class: "illustration1",
        src: _imports_1,
        mode: "widthFix"
      }),
      vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u7247 "),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createCommentVNode(" \u6807\u9898\u548C\u5206\u6570\u663E\u793A "),
        vue.createElementVNode("view", { class: "score-container" }, [
          vue.createElementVNode("text", { class: "score-title" }, "\u60C5\u5546\u5C0F\u767D"),
          vue.createElementVNode("view", { class: "score-details" }, [
            vue.createElementVNode(
              "text",
              { class: "score-value-large" },
              vue.toDisplayString($data.score),
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "score-value-small" }, "\u5206")
          ]),
          vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
          vue.createElementVNode("view", { class: "progress-bar" }, [
            vue.createElementVNode(
              "view",
              {
                class: "progress",
                style: vue.normalizeStyle({ width: $options.progressWidth($data.score) })
              },
              null,
              4
              /* STYLE */
            )
          ])
        ]),
        vue.createCommentVNode(" \u4E94\u7EF4\u96F7\u8FBE\u56FE "),
        vue.createElementVNode("canvas", {
          id: "radarCanvas",
          class: "radar-canvas",
          width: "500",
          height: "500"
        }),
        vue.createElementVNode("view", { class: "text-box1" }, [
          vue.createElementVNode("text", { class: "card-title1" }, "\u95EE\u9898\u8BCA\u65AD")
        ]),
        vue.createElementVNode("view", { class: "card-content" }, [
          vue.createCommentVNode(" \u63D2\u56FE\u6216\u56FE\u6807 "),
          vue.createElementVNode("image", {
            class: "emoji",
            src: _imports_2,
            mode: "widthFix"
          }),
          vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9 "),
          vue.createElementVNode("view", { class: "card-text-container" }, [
            vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9\u6846\u548C\u63D2\u56FE\u5728\u540C\u4E00\u884C "),
            vue.createElementVNode("view", { class: "icon-text-box" }, [
              vue.createCommentVNode(" \u63D2\u56FE\u6216\u56FE\u6807 "),
              vue.createElementVNode("image", {
                class: "icon-illustration",
                src: _imports_4,
                mode: "widthFix"
              }),
              vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9\u6846 "),
              vue.createElementVNode("view", { class: "text-box" }, [
                vue.createElementVNode("text", { class: "card-title" }, "\u51B2\u52A8\u662F\u9B54\u9B3C\uFF0C\u5B66\u4F1A\u51B7\u9759\u624D\u80FD\u638C\u63A7\u5168\u573A\uFF01")
              ])
            ]),
            vue.createElementVNode("text", { class: "card-description" }, "\u4F60\u7684\u60C5\u7EEA\u7A33\u5B9A\u80FD\u529B\u7565\u6709\u6B20\u7F3A\uFF0C\u9700\u8981\u4E00\u4E9B\u63D0\u5347\u3002\u5DE5\u4F5C\u4E2D\u9047\u5230\u632B\u6298\u6216\u4E0E\u4ED6\u4EBA\u610F\u89C1\u4E0D\u548C\uFF0C\u90FD\u53EF\u80FD\u4F1A\u7ED9\u4F60\u5E26\u6765\u8F83\u5927\u7684\u60C5\u7EEA\u6CE2\u52A8\uFF0C\u4ECE\u800C\u5F71\u54CD\u4F60\u7684\u5DE5\u4F5C\u6548\u7387\u548C\u4EBA\u9645\u5173\u7CFB\u3002")
          ])
        ])
      ]),
      vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u72471 "),
      vue.createElementVNode("view", { class: "card1" }, [
        vue.createElementVNode("view", { class: "text-box1" }, [
          vue.createElementVNode("text", { class: "card-title1" }, "\u63D0\u5347\u79D8\u8BC0")
        ]),
        vue.createElementVNode("view", { class: "card-content" }, [
          vue.createCommentVNode(" \u63D2\u56FE\u6216\u56FE\u6807 "),
          vue.createElementVNode("image", {
            class: "emoji",
            src: _imports_2,
            mode: "widthFix"
          }),
          vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9 "),
          vue.createElementVNode("view", { class: "card-text-container" }, [
            vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9\u6846\u548C\u63D2\u56FE\u5728\u540C\u4E00\u884C "),
            vue.createElementVNode("view", { class: "icon-text-box" }, [
              vue.createCommentVNode(" \u63D2\u56FE\u6216\u56FE\u6807 "),
              vue.createElementVNode("image", {
                class: "icon-illustration",
                src: _imports_4,
                mode: "widthFix"
              }),
              vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9\u6846 "),
              vue.createElementVNode("view", { class: "text-box" }, [
                vue.createElementVNode("text", { class: "card-title" }, "\u5BF9\u4E8B\u4E0D\u5BF9\u4EBA\uFF0C\u5B66\u4F1A\u9AD8\u6548\u8868\u8FBE\uFF01")
              ])
            ]),
            vue.createElementVNode("text", { class: "card-description" }, "\u6C9F\u901A\u65F6\uFF0C\u6CE8\u91CD\u503E\u542C\uFF0C\u70B9\u5934\u548C\u773C\u795E\u4EA4\u6D41\u8868\u793A\u5C0A\u91CD\uFF0C\u5148\u542C\u5BF9\u65B9\u8BF4\uFF0C\u518D\u8868\u8FBE\u81EA\u5DF1\u7684\u60F3\u6CD5\u3002"),
            vue.createElementVNode("text", { class: "card-description" }, "\u5904\u7406\u51B2\u7A81\u65F6\uFF0C\u4FDD\u6301\u548C\u5E73\u7406\u6027\uFF0C\u907F\u514D\u5E26\u523A\u7684\u8A00\u8F9E\uFF0C\u4E00\u8D77\u5BFB\u627E\u53CC\u8D62\u7684\u89E3\u51B3\u529E\u6CD5\u3002")
          ])
        ])
      ]),
      vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u72472 "),
      vue.createElementVNode("view", { class: "card2" }, [
        vue.createElementVNode("view", { class: "text-box1" }, [
          vue.createElementVNode("text", { class: "card-title1" }, "\u8BE6\u7EC6\u62A5\u544A")
        ]),
        vue.createCommentVNode(" \u7EF4\u5EA6\u4E00 "),
        vue.createElementVNode("view", { class: "score-container" }, [
          vue.createElementVNode("text", { class: "score-title1" }, "\u7EF4\u5EA6\u540D\u79F0\u4E00"),
          vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
          vue.createElementVNode("view", { class: "progress-bar1" }, [
            vue.createElementVNode(
              "view",
              {
                class: "progress",
                style: vue.normalizeStyle({ width: $options.progressWidth(31) })
              },
              null,
              4
              /* STYLE */
            ),
            vue.createCommentVNode(" \u6839\u636E31%\u7684\u6570\u503C\u52A8\u6001\u53D8\u5316 ")
          ]),
          vue.createElementVNode("text", { class: "score-title1" }, "31%")
        ]),
        vue.createElementVNode("text", { class: "card-description" }, "\u6C9F\u901A\u65F6\uFF0C\u6CE8\u91CD\u503E\u542C\uFF0C\u70B9\u5934\u548C\u773C\u795E\u4EA4\u6D41\u8868\u793A\u5C0A\u91CD\uFF0C\u5148\u542C\u5BF9\u65B9\u8BF4\uFF0C\u518D\u8868\u8FBE\u81EA\u5DF1\u7684\u60F3\u6CD5\u3002"),
        vue.createElementVNode("text", { class: "card-description" }, "\u5904\u7406\u51B2\u7A81\u65F6\uFF0C\u4FDD\u6301\u548C\u5E73\u7406\u6027\uFF0C\u907F\u514D\u5E26\u523A\u7684\u8A00\u8F9E\uFF0C\u4E00\u8D77\u5BFB\u627E\u53CC\u8D62\u7684\u89E3\u51B3\u529E\u6CD5\u3002"),
        vue.createCommentVNode(" \u7EF4\u5EA6\u4E8C "),
        vue.createElementVNode("view", { class: "score-container1" }, [
          vue.createElementVNode("text", { class: "score-title1" }, "\u7EF4\u5EA6\u540D\u79F0\u4E8C"),
          vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
          vue.createElementVNode("view", { class: "progress-bar1" }, [
            vue.createElementVNode(
              "view",
              {
                class: "progress",
                style: vue.normalizeStyle({ width: $options.progressWidth(81) })
              },
              null,
              4
              /* STYLE */
            ),
            vue.createCommentVNode(" \u6839\u636E81%\u7684\u6570\u503C\u52A8\u6001\u53D8\u5316 ")
          ]),
          vue.createElementVNode("text", { class: "score-title1" }, "81%")
        ]),
        vue.createElementVNode("text", { class: "card-description" }, "\u6C9F\u901A\u65F6\uFF0C\u6CE8\u91CD\u503E\u542C\uFF0C\u70B9\u5934\u548C\u773C\u795E\u4EA4\u6D41\u8868\u793A\u5C0A\u91CD\uFF0C\u5148\u542C\u5BF9\u65B9\u8BF4\uFF0C\u518D\u8868\u8FBE\u81EA\u5DF1\u7684\u60F3\u6CD5\u3002"),
        vue.createElementVNode("text", { class: "card-description" }, "\u5904\u7406\u51B2\u7A81\u65F6\uFF0C\u4FDD\u6301\u548C\u5E73\u7406\u6027\uFF0C\u907F\u514D\u5E26\u523A\u7684\u8A00\u8F9E\uFF0C\u4E00\u8D77\u5BFB\u627E\u53CC\u8D62\u7684\u89E3\u51B3\u529E\u6CD5\u3002"),
        vue.createCommentVNode(" \u7EF4\u5EA6\u4E09 "),
        vue.createElementVNode("view", { class: "score-container1" }, [
          vue.createElementVNode("text", { class: "score-title1" }, "\u7EF4\u5EA6\u540D\u79F0\u4E09"),
          vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
          vue.createElementVNode("view", { class: "progress-bar1" }, [
            vue.createElementVNode(
              "view",
              {
                class: "progress",
                style: vue.normalizeStyle({ width: $options.progressWidth(51) })
              },
              null,
              4
              /* STYLE */
            ),
            vue.createCommentVNode(" \u6839\u636E51%\u7684\u6570\u503C\u52A8\u6001\u53D8\u5316 ")
          ]),
          vue.createElementVNode("text", { class: "score-title1" }, "51%")
        ]),
        vue.createElementVNode("text", { class: "card-description" }, "\u6C9F\u901A\u65F6\uFF0C\u6CE8\u91CD\u503E\u542C\uFF0C\u70B9\u5934\u548C\u773C\u795E\u4EA4\u6D41\u8868\u793A\u5C0A\u91CD\uFF0C\u5148\u542C\u5BF9\u65B9\u8BF4\uFF0C\u518D\u8868\u8FBE\u81EA\u5DF1\u7684\u60F3\u6CD5\u3002"),
        vue.createElementVNode("text", { class: "card-description" }, "\u5904\u7406\u51B2\u7A81\u65F6\uFF0C\u4FDD\u6301\u548C\u5E73\u7406\u6027\uFF0C\u907F\u514D\u5E26\u523A\u7684\u8A00\u8F9E\uFF0C\u4E00\u8D77\u5BFB\u627E\u53CC\u8D62\u7684\u89E3\u51B3\u529E\u6CD5\u3002"),
        vue.createCommentVNode(" \u7EF4\u5EA6\u56DB "),
        vue.createElementVNode("view", { class: "score-container1" }, [
          vue.createElementVNode("text", { class: "score-title1" }, "\u7EF4\u5EA6\u540D\u79F0\u56DB"),
          vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
          vue.createElementVNode("view", { class: "progress-bar1" }, [
            vue.createElementVNode(
              "view",
              {
                class: "progress",
                style: vue.normalizeStyle({ width: $options.progressWidth(33) })
              },
              null,
              4
              /* STYLE */
            ),
            vue.createCommentVNode(" \u6839\u636E33%\u7684\u6570\u503C\u52A8\u6001\u53D8\u5316 ")
          ]),
          vue.createElementVNode("text", { class: "score-title1" }, "33%")
        ]),
        vue.createElementVNode("text", { class: "card-description" }, "\u6C9F\u901A\u65F6\uFF0C\u6CE8\u91CD\u503E\u542C\uFF0C\u70B9\u5934\u548C\u773C\u795E\u4EA4\u6D41\u8868\u793A\u5C0A\u91CD\uFF0C\u5148\u542C\u5BF9\u65B9\u8BF4\uFF0C\u518D\u8868\u8FBE\u81EA\u5DF1\u7684\u60F3\u6CD5\u3002"),
        vue.createElementVNode("text", { class: "card-description" }, "\u5904\u7406\u51B2\u7A81\u65F6\uFF0C\u4FDD\u6301\u548C\u5E73\u7406\u6027\uFF0C\u907F\u514D\u5E26\u523A\u7684\u8A00\u8F9E\uFF0C\u4E00\u8D77\u5BFB\u627E\u53CC\u8D62\u7684\u89E3\u51B3\u529E\u6CD5\u3002"),
        vue.createCommentVNode(" \u7EF4\u5EA6\u4E94 "),
        vue.createElementVNode("view", { class: "score-container1" }, [
          vue.createElementVNode("text", { class: "score-title1" }, "\u7EF4\u5EA6\u540D\u79F0\u4E94"),
          vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
          vue.createElementVNode("view", { class: "progress-bar1" }, [
            vue.createElementVNode(
              "view",
              {
                class: "progress",
                style: vue.normalizeStyle({ width: $options.progressWidth(61) })
              },
              null,
              4
              /* STYLE */
            ),
            vue.createCommentVNode(" \u6839\u636E61%\u7684\u6570\u503C\u52A8\u6001\u53D8\u5316 ")
          ]),
          vue.createElementVNode("text", { class: "score-title1" }, "61%")
        ]),
        vue.createElementVNode("text", { class: "card-description" }, "\u6C9F\u901A\u65F6\uFF0C\u6CE8\u91CD\u503E\u542C\uFF0C\u70B9\u5934\u548C\u773C\u795E\u4EA4\u6D41\u8868\u793A\u5C0A\u91CD\uFF0C\u5148\u542C\u5BF9\u65B9\u8BF4\uFF0C\u518D\u8868\u8FBE\u81EA\u5DF1\u7684\u60F3\u6CD5\u3002"),
        vue.createElementVNode("text", { class: "card-description" }, "\u5904\u7406\u51B2\u7A81\u65F6\uFF0C\u4FDD\u6301\u548C\u5E73\u7406\u6027\uFF0C\u907F\u514D\u5E26\u523A\u7684\u8A00\u8F9E\uFF0C\u4E00\u8D77\u5BFB\u627E\u53CC\u8D62\u7684\u89E3\u51B3\u529E\u6CD5\u3002")
      ]),
      vue.createCommentVNode(" \u6DFB\u52A0\u84DD\u8272\u6309\u94AE "),
      vue.createElementVNode("button", {
        class: "guide-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToGuide && $options.navigateToGuide(...args))
      }, "\u67E5\u770B\u6211\u7684\u4FEE\u70BC\u6307\u5357")
    ]);
  }
  const PagesDashboardDashboar1d = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["styles", [_style_0$5]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/dashboard/dashboar1d.uvue"]]);

  const _sfc_main$4 = vue.defineComponent({
      data() {
          return {
              scores: [
                  {
                      title: '情绪稳定能力',
                      value: '22%',
                      description: '工作中一点风吹草动，小心情就像火山一样，说爆发就爆发。得做些练习，不能轻易把自己和小伙伴“烤”伤。',
                  },
                  {
                      title: '语言表达分寸感',
                      value: '22%',
                      description: '你说话活动一个音量，心里暗暗嘲讽他人。表达形式确实有本领，但有时情绪太直接可能会让旁人受伤。'
                  },
                  {
                      title: '倾听能力',
                      value: '22%',
                      description: '在注意力不注意自己的沟通，难以给予下次倾听中人的正面反馈。老是忽略他人的背景和想法。专家建议和伙伴们深层沟通。',
                  },
                  {
                      title: '环境变通能力',
                      value: '22%',
                      description: '能够快速地适应不同任务和变化，并调整自己达到目标方式有待加强。能够好好实践与多人交流合作的情商，拥有良好的情商感受。'
                  }
              ]
          };
      },
      methods: {
          goToDetails() {
              // 使用 Uniapp 的 navigateTo 方法跳转到新页面
              uni.navigateTo({
                  url: '/pages/details/details' // 确保这里的路径是正确的
              });
          }
      }
  });

  const _style_0$4 = {"container":{"":{"backgroundColor":"#f0f0f0","paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"boxSizing":"border-box"}},"header":{"":{"marginBottom":24}},"title":{"":{"fontSize":20,"fontWeight":"bold"}},"score-section":{"":{"marginTop":12}},"score-title":{"":{"fontSize":18,"fontWeight":"bold","marginBottom":4}},"score-details":{"":{"fontSize":14,"color":"#cccccc"}},"progress-bar":{"":{"backgroundColor":"#3a3a3c","height":8,"borderRadius":4,"marginTop":8,"marginRight":0,"marginBottom":8,"marginLeft":0,"overflow":"hidden"}},"progress":{"":{"backgroundColor":"#ffcc00","height":"100%","borderRadius":4}},"score-description":{"":{"fontSize":14,"marginTop":8,"color":"#000000"}},"cards":{"":{"marginBottom":24}},"large-card":{"":{"backgroundColor":"#ccff00","paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"borderRadius":10,"display":"flex","flexDirection":"column","justifyContent":"space-between"}},"card-header":{"":{"marginBottom":8}},"card-title":{"":{"fontSize":16,"fontWeight":"bold"}},"card-description":{"":{"fontSize":14,"marginTop":0,"marginBottom":40}},"card-body":{"":{"display":"flex","justifyContent":"space-between","alignItems":"center"}},"icon":{"":{"width":160,"height":160}},"score-info":{"":{"display":"flex","flexDirection":"column","alignItems":"flex-end"}},"card-score":{"":{"fontSize":40,"fontWeight":"bold","color":"#000000"}},"card-score-label":{"":{"fontSize":18,"fontWeight":"bold","color":"#000000"}},"card-max-score":{"":{"fontSize":14,"color":"#000000"}},"score-evaluation":{"":{"marginBottom":24,"backgroundColor":"#1c1c1e","paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"borderRadius":10}},"score-item":{"":{"marginBottom":16}},"score-item-title":{"":{"fontSize":16,"fontWeight":"bold","color":"#ffffff","marginBottom":4}},"score-item-value":{"":{"fontSize":14,"color":"#ff4500","marginBottom":4}},"score-item-description":{"":{"fontSize":14,"color":"#cccccc"}},"guide":{"":{"backgroundColor":"#3a3a3c","paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"borderRadius":8}},"guide-title":{"":{"fontSize":16,"fontWeight":"bold","marginBottom":12,"color":"#ffcc00"}},"guide-content":{"":{"display":"flex","flexDirection":"column"}},"guide-section":{"":{"fontSize":14,"color":"#ffffff","marginTop":8}}};

  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      "scroll-y": "true",
      class: "container"
    }, [
      vue.createCommentVNode(" Header Section "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("text", { class: "title" }, "\u6211\u7684\u804C\u573A\u60C5\u5546\u6D1E\u5BDF\u7AD9"),
        vue.createElementVNode("view", { class: "score-section" }, [
          vue.createElementVNode("text", { class: "score-title" }, "#\u804C\u573A\u523A\u732C"),
          vue.createElementVNode("text", { class: "score-details" }, "\u5F53\u524D\u7684\u804C\u573A\u60C5\u5546\u80FD\u529B\uFF1A45\u5206/100\u5206"),
          vue.createElementVNode("view", { class: "progress-bar" }, [
            vue.createElementVNode("view", {
              class: "progress",
              style: { width: "45%" }
            })
          ]),
          vue.createElementVNode("text", { class: "score-description" }, "\u6E17\u8EAB\u5E26\u523A\u4F46\u80FD\u529B\u4E0D\u4FD7\uFF0C\u4F9D\u9760\u600E\u4E48\u5E73\u6838\u9C7C\uFF0C\u60C5\u5546\u5347\u7EA7\uFF01")
        ])
      ]),
      vue.createCommentVNode(" Score Evaluation Module "),
      vue.createElementVNode("view", { class: "score-evaluation" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.scores, (item, indpowerex) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "score-item",
              key: _ctx.index
            }, [
              vue.createElementVNode(
                "text",
                { class: "score-item-title" },
                vue.toDisplayString(item.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "score-item-value" },
                vue.toDisplayString(item.value),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "score-item-description" },
                vue.toDisplayString(item.description),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" Guide Section "),
      vue.createElementVNode("view", { class: "guide" }, [
        vue.createElementVNode("text", { class: "guide-title" }, "\u4F60\u7684\u72EC\u5BB6\u804C\u573A\u521A\u60C5\u5546\u4FEE\u70BC\u6307\u5357"),
        vue.createElementVNode("view", { class: "guide-content" }, [
          vue.createElementVNode("text", { class: "guide-section" }, "\u7B2C\u4E00\u8282 - \u60C5\u7EEA\u7A33\u5B9A"),
          vue.createElementVNode("text", { class: "guide-section" }, "\u7B2C\u4E8C\u8282 - \u8BED\u8A00\u8868\u8FBE")
        ])
      ])
    ]);
  }
  const PagesDetailsDetails = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["styles", [_style_0$4]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/details/details.uvue"]]);

  const _sfc_main$3 = vue.defineComponent({
      data() {
          return {
              username: '',
              password: ''
          };
      },
      methods: {
          login() {
              // 发送登录请求到 FastAPI 后端
              uni.request({
                  url: 'http://localhost:8000/login',
                  method: 'POST',
                  data: {
                      username: this.username,
                      password: this.password
                  },
                  success: (res) => {
                      if (res.statusCode === 200) {
                          uni.showToast({
                              title: res.data.message,
                              icon: 'success'
                          });
                          // 跳转到experience页面
                          uni.navigateTo({
                              url: `/pages/experience/experience?username=${this.username}`
                          });
                      }
                      else {
                          uni.showToast({
                              title: res.data.detail,
                              icon: 'none'
                          });
                      }
                  },
                  fail: () => {
                      uni.showToast({
                          title: '请求失败',
                          icon: 'none'
                      });
                  }
              });
          }
      }
  });

  const _style_0$3 = {"container":{"":{"display":"flex","justifyContent":"center","alignItems":"center","backgroundColor":"#f5f5f5"}},"login-box":{"":{"width":"80%","paddingTop":20,"paddingRight":20,"paddingBottom":20,"paddingLeft":20,"backgroundColor":"#ffffff","borderRadius":10,"boxShadow":"0 4px 8px rgba(0, 0, 0, 0.1)","textAlign":"center"}},"title":{"":{"fontSize":24,"marginBottom":20}},"input":{"":{"width":"100%","height":40,"marginBottom":20,"paddingTop":0,"paddingRight":10,"paddingBottom":0,"paddingLeft":10,"borderWidth":1,"borderStyle":"solid","borderColor":"#cccccc","borderRadius":5,"fontSize":16}},"button":{"":{"width":"100%","height":40,"backgroundColor":"#007aff","color":"#ffffff","borderWidth":"medium","borderStyle":"none","borderColor":"#000000","borderRadius":5,"fontSize":16,"marginBottom":10}}};

  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "login-box" }, [
        vue.createElementVNode("text", { class: "title" }, "\u767B\u5F55"),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.username = $event),
            placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.username]
        ]),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "input",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.password = $event),
            placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
            password: ""
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.password]
        ]),
        vue.createElementVNode("button", {
          class: "button",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.login && $options.login(...args))
        }, "\u767B\u5F55")
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["styles", [_style_0$3]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/login/login.uvue"]]);

  const _sfc_main$2 = vue.defineComponent({
      data() {
          return {
              score: 28,
              maxScore: 100,
              userId: '',
              username: '',
              gender: '',
              birthday: null,
              selectedOptions: [],
              jobId: null,
              num: null,
              homepageData: {
                  personal_info: {
                      name: '',
                      tag: '',
                      tag_description: '',
                      job_id: ''
                  },
                  eq_scores: {
                      score: null,
                      dimension1_score: null,
                      dimension1_detail: '',
                      dimension2_score: null,
                      dimension2_detail: '',
                      dimension3_score: null,
                      dimension3_detail: '',
                      dimension4_score: null,
                      dimension4_detail: '',
                      dimension5_score: null,
                      dimension5_detail: '',
                      summary: '',
                      detail: '',
                      overall_suggestion: ''
                  },
                  contacts: []
              },
              intervalId: null,
          };
      },
      computed: {
          formattedBirthday() {
              if (this.birthday) {
                  const date = new Date(this.birthday.year, this.birthday.month - 1, this.birthday.day);
                  return date.toLocaleDateString();
              }
              return '未设置';
          },
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/result/result.uvue:233', 'Received options:', option);
          // 接收上一个页面传递的数据
          this.userId = option.userId || '';
          this.username = decodeURIComponent(option.username || '');
          this.gender = option.gender || '';
          this.jobId = option.jobId || '';
          this.num = option.num || '';
          if (option.options) {
              try {
                  this.selectedOptions = UTS.JSON.parse(decodeURIComponent(option.options));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/result/result.uvue:246', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/result/result.uvue:255', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/result/result.uvue:260', 'Parsed data:', {
              userId: this.userId,
              username: this.username,
              gender: this.gender,
              selectedOptions: this.selectedOptions,
              birthday: this.birthday,
              jobId: this.jobId,
              num: this.num,
          });
          // 立即调用一次
          this.getHomepageData();
          // 设置定时调用
          this.intervalId = setInterval(() => {
              this.getHomepageData();
          }, 50000); // 每50秒调用一次
      },
      onUnload() {
          // 页面卸载时清除定时器
          if (this.intervalId) {
              clearInterval(this.intervalId);
          }
      },
      methods: {
          progressWidth(value = null) {
              // 计算进度条宽度百分比
              const percentage = (value / this.maxScore) * 100;
              return `${percentage}%`;
          },
          drawRadar() {
              const query = uni.createSelectorQuery().in(this);
              query.select('#radarCanvas')
                  .fields({ node: true, size: true, context: true })
                  .exec((res) => {
                  if (!res[0]) {
                      uni.__log__('error', 'at pages/result/result.uvue:296', 'Canvas element not found');
                      return null;
                  }
                  const canvas = res[0].node;
                  const radarCtx = canvas.getContext('2d');
                  if (!radarCtx) {
                      uni.__log__('error', 'at pages/result/result.uvue:302', 'Unable to get 2D context');
                      return null;
                  }
                  // 确保每次都清除之前的缩放，重置 canvas 状态
                  radarCtx.resetTransform();
                  // 设置 canvas 宽高，防止重复缩放
                  const dpr = uni.getSystemInfoSync().pixelRatio;
                  canvas.width = res[0].width * dpr;
                  canvas.height = res[0].height * dpr;
                  radarCtx.scale(dpr, dpr);
                  // 清除之前的绘制内容
                  radarCtx.clearRect(0, 0, canvas.width, canvas.height);
                  // 控制中心点和半径
                  const center = new UTSJSONObject({ x: res[0].width / 2, y: res[0].height / 2 });
                  const radius = Math.min(res[0].width, res[0].height) / 2 - 20;
                  // 检查数据有效性
                  if (!this.homepageData.response || !this.homepageData.response.eq_scores) {
                      uni.__log__('error', 'at pages/result/result.uvue:324', 'Invalid homepage data');
                      return null;
                  }
                  const data = [
                      new UTSJSONObject({ subject: '维度1', A: this.homepageData.response.eq_scores.dimension1_score || 0, fullMark: 100 }),
                      new UTSJSONObject({ subject: '维度2', A: this.homepageData.response.eq_scores.dimension2_score || 0, fullMark: 100 }),
                      new UTSJSONObject({ subject: '维度3', A: this.homepageData.response.eq_scores.dimension3_score || 0, fullMark: 100 }),
                      new UTSJSONObject({ subject: '维度4', A: this.homepageData.response.eq_scores.dimension4_score || 0, fullMark: 100 }),
                      new UTSJSONObject({ subject: '维度5', A: this.homepageData.response.eq_scores.dimension5_score || 0, fullMark: 100 }),
                  ];
                  // 绘制雷达图
                  this.drawRadarChart(radarCtx, center, radius, data);
              });
          },
          drawRadarChart(ctx = null, center = null, radius = null, data = null) {
              const numSides = data.length;
              const angleSlice = (Math.PI * 2) / numSides;
              // 绘制网格
              ctx.strokeStyle = '#E5E5E5';
              ctx.lineWidth = 1;
              for (let i = 1; i <= 2; i++) {
                  ctx.beginPath();
                  for (let j = 0; j <= numSides; j++) {
                      const angle = j * angleSlice;
                      const x = center.x + radius * (i / 2) * Math.cos(angle);
                      const y = center.y + radius * (i / 2) * Math.sin(angle);
                      if (j === 0) {
                          ctx.moveTo(x, y);
                      }
                      else {
                          ctx.lineTo(x, y);
                      }
                  }
                  ctx.closePath();
                  ctx.stroke();
              }
              // 绘制轴线
              for (let i = 0; i < numSides; i++) {
                  const angle = i * angleSlice;
                  const x = center.x + radius * Math.cos(angle);
                  const y = center.y + radius * Math.sin(angle);
                  ctx.beginPath();
                  ctx.moveTo(center.x, center.y);
                  ctx.lineTo(x, y);
                  ctx.stroke();
              }
              // 绘制数据区域
              ctx.beginPath();
              ctx.fillStyle = 'rgba(158, 228, 77, 0.3)';
              ctx.strokeStyle = 'rgba(158, 228, 77, 0.8)';
              for (let i = 0; i <= numSides; i++) {
                  const angle = i * angleSlice;
                  const value = data[i % numSides].A / data[i % numSides].fullMark;
                  const x = center.x + radius * value * Math.cos(angle);
                  const y = center.y + radius * value * Math.sin(angle);
                  if (i === 0) {
                      ctx.moveTo(x, y);
                  }
                  else {
                      ctx.lineTo(x, y);
                  }
              }
              ctx.closePath();
              ctx.fill();
              ctx.stroke();
              // 绘制数据点
              ctx.fillStyle = 'rgba(158, 228, 77, 0.8)';
              for (let i = 0; i < numSides; i++) {
                  const angle = i * angleSlice;
                  const value = data[i].A / data[i].fullMark;
                  const x = center.x + radius * value * Math.cos(angle);
                  const y = center.y + radius * value * Math.sin(angle);
                  ctx.beginPath();
                  ctx.arc(x, y, 3, 0, Math.PI * 2);
                  ctx.fill();
              }
          },
          navigateToGuide() {
              uni.navigateTo({
                  url: '/pages/dashboard/dashboard' // 根据需要更新路径
              });
          },
          getHomepageData() {
              const that = this;
              uni.request({
                  url: `https://eqmaster.azurewebsites.net/get_homepage/${this.jobId}`,
                  method: 'POST',
                  success(response) {
                      if (response.statusCode === 200) {
                          that.homepageData = response.data;
                          uni.__log__('log', 'at pages/result/result.uvue:419', 'Homepage data received:', that.homepageData);
                          that.$nextTick(() => {
                              that.drawRadar();
                          });
                      }
                      else {
                          uni.__log__('error', 'at pages/result/result.uvue:424', 'Failed to fetch homepage data:', response.statusCode);
                      }
                  },
                  fail(error) {
                      uni.__log__('error', 'at pages/result/result.uvue:428', 'Error fetching homepage data:', error);
                  }
              });
          },
      }
  });

  const _imports_0 = "/static/img1.png";

  const _style_0$2 = {"container":{"":{"position":"relative","backgroundColor":"#2F2F38","flexDirection":"column","alignItems":"center","paddingTop":"100rpx","width":"100%","height":"100%","overflowY":"auto","WebkitOverflowScrolling":"touch"}},"content":{"":{"flexDirection":"column","alignItems":"center"}},"background-curve":{"":{"width":"200%","height":"500rpx","backgroundColor":"#2F2F38","position":"absolute","top":"-100rpx","left":"-300rpx","transform":"rotate(35deg)","zIndex":5}},"illustration1":{"":{"width":"700rpx","height":"auto","position":"relative","zIndex":10,"top":-5,"left":0,"marginTop":"80rpx","marginBottom":"0rpx"}},"card":{"":{"width":"95%","backgroundColor":"#373742","borderRadius":"20rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"60rpx","paddingRight":"30rpx","paddingBottom":"0rpx","paddingLeft":"30rpx","marginBottom":"30rpx"}},"card1":{"":{"width":"95%","backgroundColor":"#373742","borderRadius":"20rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"60rpx","paddingRight":"30rpx","paddingBottom":"0rpx","paddingLeft":"30rpx","marginBottom":"30rpx"}},"card2":{"":{"width":"95%","backgroundColor":"#373742","borderRadius":"20rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"60rpx","paddingRight":"30rpx","paddingBottom":"0rpx","paddingLeft":"30rpx","marginBottom":"30rpx"}},"score-title-head":{"":{"fontSize":"40rpx","fontWeight":"bold","color":"#FFFFFF","marginBottom":"5rpx","position":"relative","zIndex":30}},"score-title":{"":{"fontSize":"40rpx","fontWeight":"bold","color":"#9EE44D","marginBottom":"5rpx"}},"score-title1":{"":{"fontSize":"36rpx","color":"#FFFFFF","marginBottom":"5rpx"}},"score-container":{"":{"width":"100%","display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":"80rpx"}},"score-container1":{"":{"width":"100%","display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":"80rpx"}},"score-details":{"":{"display":"flex","marginBottom":"10rpx","width":"100%"}},"score-value-large":{"":{"fontSize":"80rpx","fontWeight":"bold","color":"#9EE44D","marginRight":"5rpx"}},"score-value-small":{"":{"fontSize":"40rpx","fontWeight":"normal","color":"#9EE44D","position":"absolute","top":"40rpx","left":"180rpx"}},"progress-bar":{"":{"width":"100%","height":"10rpx","backgroundColor":"#E5E5E5","borderRadius":"5rpx","overflow":"hidden","marginTop":"5rpx"}},"progress-bar1":{"":{"width":"100%","height":"10rpx","backgroundColor":"#E5E5E5","borderRadius":"5rpx","overflow":"hidden","marginTop":"5rpx"}},"progress":{"":{"height":"100%","backgroundColor":"#9EE44D"}},"radar-canvas":{"":{"width":"700rpx","height":"500rpx","marginTop":"100rpx","marginRight":0,"marginBottom":"100rpx","marginLeft":0,"backgroundColor":"rgba(0,0,0,0)"}},"card-content":{"":{"display":"flex","alignItems":"center","justifyContent":"flex-start","marginBottom":"40rpx"}},"emoji":{"":{"width":"60rpx","height":"auto","marginRight":"10rpx"}},"card-text-container":{"":{"display":"flex","flexDirection":"column","alignItems":"flex-start"}},"icon-text-box":{"":{"display":"flex","alignItems":"center"}},"text-box":{"":{"alignItems":"center","borderWidth":"1rpx","borderStyle":"solid","borderColor":"#373742","paddingTop":"5rpx","paddingRight":"10rpx","paddingBottom":"5rpx","paddingLeft":"10rpx","borderRadius":"10rpx","backgroundColor":"#373742","boxShadow":"0 0 12rpx 0rpx rgba(0, 0, 0, 0.3)","marginTop":"10rpx","marginRight":"10rpx","marginBottom":"10rpx","marginLeft":"10rpx"}},"text-box1":{"":{"alignItems":"center","borderWidth":"1rpx","borderStyle":"solid","borderColor":"#373742","paddingTop":"10rpx","paddingRight":"10rpx","paddingBottom":"10rpx","paddingLeft":"10rpx","borderRadius":"10rpx","backgroundColor":"#373742","boxShadow":"none","marginTop":"0rpx","marginRight":"10rpx","marginBottom":"10rpx","marginLeft":"10rpx"}},"card-title":{"":{"fontSize":"28rpx","color":"#252529","backgroundColor":"#EDFB8B","marginBottom":"10rpx"}},"card-title1":{"":{"fontSize":"32rpx","color":"#FFFFFF","fontWeight":"bold","marginBottom":"10rpx"}},"card-description":{"":{"fontSize":"32rpx","color":"#FFFFFF","lineHeight":1.5,"marginTop":"10rpx"}},"guide-button":{"":{"width":"90%","height":"100rpx","backgroundColor":"#9EE44D","color":"#252529","fontSize":"36rpx","borderRadius":"50rpx","textAlign":"center","lineHeight":"100rpx","display":"flex","justifyContent":"center","alignItems":"center","marginBottom":"30rpx"}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5,"fontSize":10,"zIndex":100,"overflowY":"auto"}},"emotion-detection-box1":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"320rpx"}},"emotion-detection-box2":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"440rpx","left":"35%"}},"emotion-detection-box3":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"440rpx","right":"35%"}},"emotion-detection-box4":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"740rpx","left":"35%"}},"emotion-detection-box5":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"740rpx","right":"35%"}},"emotion-detection-title":{"":{"fontSize":"24rpx","color":"#FFFFFF","fontWeight":"bold","backgroundColor":"#4A4A57","paddingTop":"10rpx","paddingRight":"20rpx","paddingBottom":"10rpx","paddingLeft":"20rpx","borderRadius":"10rpx"}}};

  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u4F7F\u7528 scroll-view \u5B9E\u73B0\u9875\u9762\u6EDA\u52A8 "),
      vue.createElementVNode("scroll-view", {
        "scroll-y": "",
        style: { "height": "100%" }
      }, [
        vue.createElementVNode("view", { class: "content" }, [
          vue.createCommentVNode(" \u6A21\u62DF\u591A\u6BB5\u957F\u6587\u672C "),
          vue.createCommentVNode(' <view class="text-block" v-for="n in 20" :key="n"> '),
          vue.createCommentVNode(" \u8FD9\u662F\u7B2C {{ n }} \u6BB5\u5185\u5BB9\u3002\u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u957F\u7684\u6587\u672C\u6BB5\u843D\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u9875\u9762\u662F\u5426\u53EF\u4EE5\u6B63\u5E38\u6EDA\u52A8\u3002 "),
          vue.createCommentVNode(" </view> "),
          vue.createElementVNode("text", { class: "score-title-head" }, "\u6211\u7684\u68C0\u6D4B\u7ED3\u679C"),
          vue.createCommentVNode(" \u80CC\u666F\u548C\u5F27\u7EBF "),
          vue.createElementVNode("view", { class: "background-curve" }),
          vue.createCommentVNode(" \u6DFB\u52A0\u63D2\u56FE "),
          vue.createElementVNode("image", {
            class: "illustration1",
            src: _imports_0,
            mode: "widthFix"
          }),
          vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u7247 "),
          vue.createElementVNode("view", { class: "card" }, [
            vue.createCommentVNode(" \u6807\u9898\u548C\u5206\u6570\u663E\u793A "),
            vue.createElementVNode("view", { class: "score-container" }, [
              vue.createElementVNode("text", { class: "score-title" }, "\u60C5\u5546\u5C0F\u767D"),
              vue.createElementVNode("view", { class: "score-details" }, [
                vue.createElementVNode(
                  "text",
                  { class: "score-value-large" },
                  vue.toDisplayString($data.homepageData.response.eq_scores.score),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "score-value-small" }, "\u5206")
              ]),
              vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
              vue.createElementVNode("view", { class: "progress-bar" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: "progress",
                    style: vue.normalizeStyle({ width: $options.progressWidth($data.homepageData.response.eq_scores.score) })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ])
            ]),
            vue.createCommentVNode(" \u4E94\u7EF4\u96F7\u8FBE\u56FE "),
            vue.createElementVNode("canvas", {
              id: "radarCanvas",
              class: "radar-canvas",
              width: "500",
              height: "500"
            }),
            vue.createCommentVNode(' <canvas canvas-id="radarCanvas" class="radar-canvas" style="width: 700rpx; height: 500rpx;"></canvas> '),
            vue.createCommentVNode(" \u60C5\u7EEA\u4FA6\u67E5\u529B\u7B49\u6807\u7B7E "),
            vue.createElementVNode("view", { class: "emotion-detection-box1" }, [
              vue.createElementVNode("text", { class: "emotion-detection-title" }, "\u60C5\u7EEA\u4FA6\u67E5\u529B")
            ]),
            vue.createElementVNode("view", { class: "emotion-detection-box2" }, [
              vue.createElementVNode("text", { class: "emotion-detection-title" }, "\u793E\u4EA4\u5F97\u4F53\u5EA6")
            ]),
            vue.createElementVNode("view", { class: "emotion-detection-box3" }, [
              vue.createElementVNode("text", { class: "emotion-detection-title" }, "\u60C5\u7EEA\u638C\u63A7\u529B")
            ]),
            vue.createElementVNode("view", { class: "emotion-detection-box4" }, [
              vue.createElementVNode("text", { class: "emotion-detection-title" }, "\u6C9F\u901A\u8868\u8FBE\u529B")
            ]),
            vue.createElementVNode("view", { class: "emotion-detection-box5" }, [
              vue.createElementVNode("text", { class: "emotion-detection-title" }, "\u4EBA\u9645\u5E73\u8861\u529B")
            ]),
            vue.createElementVNode("view", { class: "text-box1" }, [
              vue.createElementVNode("text", { class: "card-title1" }, "\u95EE\u9898\u8BCA\u65AD")
            ]),
            vue.createElementVNode("view", { class: "card-content" }, [
              vue.createCommentVNode(" \u63D2\u56FE\u6216\u56FE\u6807 "),
              vue.createCommentVNode(' <image class="emoji" src="/static/emoji.png" mode="widthFix"></image> '),
              vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9 "),
              vue.createElementVNode("view", { class: "card-text-container" }, [
                vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9\u6846\u548C\u63D2\u56FE\u5728\u540C\u4E00\u884C "),
                vue.createElementVNode("view", { class: "icon-text-box" }, [
                  vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9\u6846 "),
                  vue.createElementVNode("view", { class: "text-box" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "card-title" },
                      vue.toDisplayString($data.homepageData.response.eq_scores.summary),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode(
                  "text",
                  { class: "card-description" },
                  vue.toDisplayString($data.homepageData.response.eq_scores.overall_suggestion),
                  1
                  /* TEXT */
                )
              ])
            ])
          ]),
          vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u72471 "),
          vue.createElementVNode("view", { class: "card1" }, [
            vue.createElementVNode("view", { class: "text-box1" }, [
              vue.createElementVNode("text", { class: "card-title1" }, "\u63D0\u5347\u79D8\u8BC0")
            ]),
            vue.createElementVNode("view", { class: "card-content" }, [
              vue.createCommentVNode(" \u63D2\u56FE\u6216\u56FE\u6807 "),
              vue.createCommentVNode(' <image class="emoji" src="/static/emoji.png" mode="widthFix"></image> '),
              vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9 "),
              vue.createElementVNode("view", { class: "card-text-container" }, [
                vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9\u6846\u548C\u63D2\u56FE\u5728\u540C\u4E00\u884C "),
                vue.createElementVNode("view", { class: "icon-text-box" }, [
                  vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9\u6846 "),
                  vue.createElementVNode("view", { class: "text-box" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "card-title" },
                      vue.toDisplayString($data.homepageData.response.eq_scores.summary),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode(
                  "text",
                  { class: "card-description" },
                  vue.toDisplayString($data.homepageData.response.eq_scores.detail),
                  1
                  /* TEXT */
                )
              ])
            ])
          ]),
          vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u72472 "),
          vue.createElementVNode("view", { class: "card2" }, [
            vue.createElementVNode("view", { class: "text-box1" }, [
              vue.createElementVNode("text", { class: "card-title1" }, "\u8BE6\u7EC6\u62A5\u544A")
            ]),
            vue.createCommentVNode(" \u7EF4\u5EA6\u4E00 "),
            vue.createElementVNode("view", { class: "score-container1" }, [
              vue.createElementVNode("text", { class: "score-title1" }, "\u60C5\u7EEA\u4FA6\u67E5\u529B"),
              vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
              vue.createElementVNode("view", { class: "progress-bar1" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: "progress",
                    style: vue.normalizeStyle({ width: $options.progressWidth($data.homepageData.response.eq_scores.dimension1_score) })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ]),
              vue.createElementVNode(
                "text",
                { class: "score-title1" },
                vue.toDisplayString($data.homepageData.response.eq_scores.dimension1_score) + "%",
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "card-description" },
                vue.toDisplayString($data.homepageData.response.eq_scores.dimension1_detail),
                1
                /* TEXT */
              )
            ]),
            vue.createCommentVNode(" \u7EF4\u5EA6\u4E8C "),
            vue.createElementVNode("view", { class: "score-container1" }, [
              vue.createElementVNode("text", { class: "score-title1" }, "\u793E\u4EA4\u5F97\u4F53\u5EA6"),
              vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
              vue.createElementVNode("view", { class: "progress-bar1" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: "progress",
                    style: vue.normalizeStyle({ width: $options.progressWidth($data.homepageData.response.eq_scores.dimension2_score) })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ]),
              vue.createElementVNode(
                "text",
                { class: "score-title1" },
                vue.toDisplayString($data.homepageData.response.eq_scores.dimension2_score) + "%",
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "card-description" },
                vue.toDisplayString($data.homepageData.response.eq_scores.dimension2_detail),
                1
                /* TEXT */
              )
            ]),
            vue.createCommentVNode(' <text class="card-description">{{ homepageData.response.eq_scores.dimension2_detail }}</text> '),
            vue.createCommentVNode(" \u7EF4\u5EA6\u4E09 "),
            vue.createElementVNode("view", { class: "score-container1" }, [
              vue.createElementVNode("text", { class: "score-title1" }, "\u60C5\u7EEA\u638C\u63A7\u529B"),
              vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
              vue.createElementVNode("view", { class: "progress-bar1" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: "progress",
                    style: vue.normalizeStyle({ width: $options.progressWidth($data.homepageData.response.eq_scores.dimension3_score) })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ]),
              vue.createElementVNode(
                "text",
                { class: "score-title1" },
                vue.toDisplayString($data.homepageData.response.eq_scores.dimension3_score) + "%",
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "card-description" },
                vue.toDisplayString($data.homepageData.response.eq_scores.dimension3_detail),
                1
                /* TEXT */
              )
            ]),
            vue.createCommentVNode(' <text class="card-description">{{ homepageData.response.eq_scores.dimension3_detail }}</text> '),
            vue.createCommentVNode(" \u7EF4\u5EA6\u56DB "),
            vue.createElementVNode("view", { class: "score-container1" }, [
              vue.createElementVNode("text", { class: "score-title1" }, "\u6C9F\u901A\u8868\u8FBE\u529B"),
              vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
              vue.createElementVNode("view", { class: "progress-bar1" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: "progress",
                    style: vue.normalizeStyle({ width: $options.progressWidth($data.homepageData.response.eq_scores.dimension4_score) })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ]),
              vue.createElementVNode(
                "text",
                { class: "score-title1" },
                vue.toDisplayString($data.homepageData.response.eq_scores.dimension4_score) + "%",
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "card-description" },
                vue.toDisplayString($data.homepageData.response.eq_scores.dimension4_detail),
                1
                /* TEXT */
              )
            ]),
            vue.createCommentVNode(" \u7EF4\u5EA6\u4E94 "),
            vue.createElementVNode("view", { class: "score-container1" }, [
              vue.createElementVNode("text", { class: "score-title1" }, "\u4EBA\u9645\u5E73\u8861\u529B"),
              vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
              vue.createElementVNode("view", { class: "progress-bar1" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: "progress",
                    style: vue.normalizeStyle({ width: $options.progressWidth($data.homepageData.response.eq_scores.dimension5_score) })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ]),
              vue.createElementVNode(
                "text",
                { class: "score-title1" },
                vue.toDisplayString($data.homepageData.response.eq_scores.dimension5_score) + "%",
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "card-description" },
                vue.toDisplayString($data.homepageData.response.eq_scores.dimension5_detail),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" \u6DFB\u52A0\u84DD\u8272\u6309\u94AE "),
          vue.createElementVNode("button", {
            class: "guide-button",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToGuide && $options.navigateToGuide(...args))
          }, "\u5F00\u542F\u9AD8\u60C5\u5546\u4E4B\u65C5")
        ])
      ])
    ]);
  }
  const PagesResultResult = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["styles", [_style_0$2]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/result/result.uvue"]]);

  const _sfc_main$1 = vue.defineComponent({
      data() {
          return {
              username: '',
              backgroundImage: '/static/picture1.png', // 确保背景图片路径正确
          };
      },
      methods: {
          nextStep() {
              if (this.username.trim()) {
                  const userId = 'fixedUserId12345'; // 使用固定的用户ID
                  // 保存用户名和ID
                  uni.setStorageSync('username', this.username);
                  uni.setStorageSync('userId', userId);
                  // 导航到下一页，并传递参数
                  uni.navigateTo({
                      url: `/pages/preference/preference?userId=${userId}&username=${encodeURIComponent(this.username)}`
                  });
              }
              else {
                  // 提示用户输入名字
                  uni.showToast({ title: '请输入您的名字', icon: 'none' });
              }
          },
      },
  });

  const _style_0$1 = {"container":{"":{"display":"flex","flexDirection":"column","backgroundColor":"#1c1c1e","position":"relative"}},"background-image":{"":{"position":"absolute","top":40,"right":0,"width":"30%","zIndex":1}},"content":{"":{"flex":1,"display":"flex","flexDirection":"column","justifyContent":"flex-start","paddingTop":20,"paddingRight":20,"paddingBottom":20,"paddingLeft":20,"zIndex":1,"position":"relative"}},"text-content":{"":{"marginBottom":"180rpx","marginTop":"145rpx"}},"greeting":{"":{"fontSize":"38rpx","color":"#ffffff","marginBottom":"20rpx","fontFamily":"SF Pro Display, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif","fontWeight":"bold"}},"question":{"":{"fontSize":"38rpx","color":"#ffffff","marginBottom":"10rpx","fontWeight":"bold","fontFamily":"SF Pro Display, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif"}},"subtitle":{"":{"fontSize":"28rpx","color":"#8e8e93","fontFamily":"SF Pro Display, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif"}},"name-input":{"":{"width":"100%","backgroundColor":"#2c2c2e","borderRadius":"20rpx","paddingTop":"20rpx","paddingRight":"30rpx","paddingBottom":"20rpx","paddingLeft":"30rpx","color":"#ffffff","fontSize":"32rpx","marginBottom":"140rpx"}},"button-container":{"":{"display":"flex","flexDirection":"column","alignItems":"center","marginTop":"auto","marginBottom":"1100rpx"}},"continue-button":{"":{"width":"100rpx","height":"100rpx","backgroundColor":"#8BC34A","borderRadius":"50rpx","display":"flex","justifyContent":"center","alignItems":"center"}},"arrow":{"":{"color":"#242424","fontSize":"50rpx"}}};

  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" \u80CC\u666F\u56FE\u7247 "),
      vue.createElementVNode("image", {
        class: "background-image",
        src: $data.backgroundImage,
        mode: "widthFix"
      }, null, 8, ["src"]),
      vue.createCommentVNode(' <image class="illustration1" src="/static/img1.png" mode="widthFix"></image> '),
      vue.createCommentVNode(" \u5185\u5BB9\u533A\u57DF "),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "text-content" }, [
          vue.createElementVNode("text", { class: "greeting" }, "\u55E8\u{1F44B}"),
          vue.createElementVNode("text", { class: "question" }, "\u5F88\u5F00\u5FC3\u89C1\u5230\u4F60\uFF01\u4F60\u53EB\u4EC0\u4E48\u540D\u5B57\uFF1F"),
          vue.createElementVNode("text", { class: "subtitle" }, "\u5B8C\u5584\u4E2A\u4EBA\u4FE1\u606F")
        ]),
        vue.createCommentVNode(" \u8F93\u5165\u6846 "),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "name-input",
            placeholder: "\u8BF7\u8F93\u5165",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.username = $event)
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.username]
        ]),
        vue.createCommentVNode(" \u7EE7\u7EED\u6309\u94AE "),
        vue.createElementVNode("view", { class: "button-container" }, [
          vue.createElementVNode("view", {
            class: "continue-button",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.nextStep && $options.nextStep(...args))
          }, [
            vue.createElementVNode("text", { class: "arrow" }, "\u2192")
          ])
        ])
      ])
    ]);
  }
  const PagesExperienceExperience = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["styles", [_style_0$1]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/pages/experience/experience.uvue"]]);

  __definePage('pages/battlefield/battlefield-intro',PagesBattlefieldBattlefieldIntro);
  __definePage('pages/battlefield/battlefield-task',PagesBattlefieldBattlefieldTask);
  __definePage('pages/battlefield/battlefield-playground',PagesBattlefieldBattlefieldPlayground);
  __definePage('pages/landing/landing',PagesLandingLanding);
  __definePage('pages/preference/preference',PagesPreferencePreference);
  __definePage('pages/preference/preference1',PagesPreferencePreference1);
  __definePage('pages/preference/preference2',PagesPreferencePreference2);
  __definePage('pages/preference/preference3',PagesPreferencePreference3);
  __definePage('pages/test/test',PagesTestTest);
  __definePage('pages/test/test1',PagesTestTest1);
  __definePage('pages/test/test2',PagesTestTest2);
  __definePage('pages/test/test3',PagesTestTest3);
  __definePage('pages/test/test4',PagesTestTest4);
  __definePage('pages/test/test5',PagesTestTest5);
  __definePage('pages/dashboard/dashboard',PagesDashboardDashboard);
  __definePage('pages/dashboard/dashboar1d',PagesDashboardDashboar1d);
  __definePage('pages/details/details',PagesDetailsDetails);
  __definePage('pages/login/login',PagesLoginLogin);
  __definePage('pages/result/result',PagesResultResult);
  __definePage('pages/experience/experience',PagesExperienceExperience);

  const _sfc_main = vue.defineComponent({
      onLaunch: function () {
          uni.__log__('log', 'at App.uvue:5', 'App Launch');
      },
      onShow: function () {
          uni.__log__('log', 'at App.uvue:8', 'App Show');
      },
      onHide: function () {
          uni.__log__('log', 'at App.uvue:11', 'App Hide');
      },
      onExit: function () {
          uni.__log__('log', 'at App.uvue:32', 'App Exit');
      },
  });

  const _style_0 = {"uni-row":{"":{"flexDirection":"row"}},"uni-column":{"":{"flexDirection":"column"}}};

  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "/Users/taokai/codes/EQMaster_ios/test2/App.uvue"]]);

  const __global__ = typeof globalThis === 'undefined' ? Function('return this')() : globalThis;
  __global__.__uniX = true;
  function createApp() {
      const app = vue.createSSRApp(App);
      return {
          app
      };
  }
  createApp().app.mount("#app");

})(Vue);
