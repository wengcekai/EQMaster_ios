(function (vue) {
  'use strict';

  const _sfc_main$g = vue.defineComponent({
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

  const _imports_1$6 = "/static/landingB.png";

  const _style_0$g = {"container":{"":{"width":"100%","height":"100%","overflow":"hidden"}},"splash-screen":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%","backgroundColor":"#ffffff","display":"flex","alignItems":"center","justifyContent":"center","zIndex":1000}},"splash-image":{"":{"width":"100%","height":"100%","objectFit":"cover"}},"welcome-box":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","width":"100%","height":"100%"}},"button":{"":{"width":"600rpx","height":"80rpx","borderWidth":"medium","borderStyle":"none","borderColor":"#ffffff","position":"absolute","left":"50%","transform":"translateX(-50%)","transitionProperty":"transform","transitionDuration":"0.2s","backgroundColor":"#ffffff"}},"button1":{"":{"backgroundColor":"#9EE44D","borderRadius":"45rpx","display":"flex","alignItems":"center","justifyContent":"center","bottom":"265rpx","transform":"translateX(-50%)"}},"login-text":{"":{"color":"#9EE44D","fontSize":"32rpx","textDecoration":"underline","position":"absolute","bottom":"190rpx","left":"50%","transform":"translateX(-50%)"}},"button-text":{"":{"color":"#252529","fontSize":"32rpx","fontWeight":"bold"}},"@TRANSITION":{"button":{"property":"transform","duration":"0.2s"}}};

  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
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
          src: _imports_1$6,
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
  const PagesLandingLanding = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["styles", [_style_0$g]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/landing/landing.uvue"]]);

  const _sfc_main$f = vue.defineComponent({
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

  const _imports_1$5 = "/static/male.png";

  const _imports_2$4 = "/static/4.png";

  const _style_0$f = {"container":{"":{"display":"flex","flexDirection":"column","backgroundColor":"#1c1c1e","paddingTop":40,"paddingRight":20,"paddingBottom":40,"paddingLeft":20}},"background-image":{"":{"position":"absolute","top":40,"right":0,"width":"30%","zIndex":1}},"text-content":{"":{"marginTop":60,"marginBottom":70}},"question":{"":{"fontSize":20,"color":"#ffffff","marginBottom":8}},"subtitle":{"":{"fontSize":14,"color":"#8e8e93"}},"gender-options":{"":{"display":"flex","flexDirection":"row","justifyContent":"space-around","marginTop":160,"gap":"10px"}},"gender-options1":{"":{"display":"flex","flexDirection":"row","justifyContent":"space-around","marginTop":10,"gap":"10px"}},"gender-option":{"":{"width":80,"height":80,"backgroundColor":"#2c2c2e","borderRadius":"100rpx","display":"flex","justifyContent":"center","alignItems":"center","borderWidth":2,"borderStyle":"solid","borderColor":"rgba(0,0,0,0)"},".selected":{"borderColor":"#30d158"}},"gender-icon":{"":{"width":66,"height":60,"marginBottom":5}},"gender-label":{"":{"fontSize":14,"color":"#ffffff","marginBottom":500}},"continue-button":{"":{"width":50,"height":50,"position":"absolute","backgroundColor":"#8BC34A","borderRadius":25,"display":"flex","justifyContent":"center","alignItems":"center","alignSelf":"center","marginTop":700}},"arrow":{"":{"color":"#242424","fontSize":20}}};

  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
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
                  src: _imports_1$5
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
                  src: _imports_2$4
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
  const PagesPreferencePreference = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["styles", [_style_0$f]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/preference/preference.uvue"]]);

  const _sfc_main$e = vue.defineComponent({
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

  const _style_0$e = {"container":{"":{"display":"flex","flexDirection":"column","backgroundColor":"#1c1c1e","paddingTop":40,"paddingRight":20,"paddingBottom":40,"paddingLeft":20}},"text-content":{"":{"marginTop":60,"marginBottom":40}},"question":{"":{"fontSize":20,"color":"#ffffff","marginBottom":8}},"subtitle":{"":{"fontSize":14,"color":"#8e8e93"}},"date-picker-container":{"":{"position":"relative","width":"100%","height":250,"marginTop":10,"backgroundColor":"#1c1c1e","marginBottom":500}},"picker-view":{"":{"width":"100%","height":250,"position":"relative","zIndex":1,"backgroundColor":"#1c1c1e"}},"item":{"":{"height":50}},"text":{"":{"lineHeight":"50px","textAlign":"center","color":"#ffffff"}},"mask":{"":{"position":"absolute","left":0,"right":0,"height":100,"backgroundColor":"rgba(28,28,30,1)","zIndex":2},".top":{"top":0},".bottom":{"bottom":0}},"continue-button":{"":{"width":50,"height":50,"position":"absolute","backgroundColor":"#8BC34A","borderRadius":25,"display":"flex","justifyContent":"center","alignItems":"center","alignSelf":"center","marginTop":700}},"arrow":{"":{"color":"#242424","fontSize":20}}};

  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesPreferencePreference1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["styles", [_style_0$e]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/preference/preference1.uvue"]]);

  const _sfc_main$d = vue.defineComponent({
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

  const _imports_1$4 = "/static/relationshipicon.png";

  const _style_0$d = {"container":{"":{"display":"flex","flexDirection":"column","backgroundColor":"#1c1c1e","paddingTop":40,"paddingRight":20,"paddingBottom":80,"paddingLeft":20}},"text-content":{"":{"marginTop":60,"marginBottom":0}},"question":{"":{"fontSize":20,"color":"#ffffff","marginBottom":8}},"subtitle":{"":{"fontSize":14,"color":"#8e8e93"}},"options-container":{"":{"width":"100%","marginBottom":20}},"option-group":{"":{"display":"flex","alignItems":"flex-start","marginBottom":50}},"option-group1":{"":{"top":-140,"display":"flex","alignItems":"flex-start","marginBottom":15}},"group-icon":{"":{"marginTop":60,"marginRight":15,"flexShrink":0,"marginBottom":0}},"option-buttons":{"":{"display":"flex","flexDirection":"column","alignItems":"flex-start","gap":"5px","left":50,"top":-45,"width":"100%"}},"option-button":{"":{"backgroundColor":"#2c2c2e","color":"#ffffff","borderRadius":25,"paddingTop":5,"paddingRight":15,"paddingBottom":5,"paddingLeft":15,"fontSize":14,"textAlign":"left","whiteSpace":"nowrap","marginBottom":5,"lineHeight":"40px"},".active":{"backgroundColor":"#8BC34A"}},"button-1":{"":{"position":"relative","left":0,"top":0}},"button-2":{"":{"position":"relative","left":140,"top":-55}},"button-3":{"":{"position":"relative","left":0,"top":-55}},"button-4":{"":{"position":"relative","left":160,"top":-110}},"button-5":{"":{"position":"relative","left":0,"top":-110}},"button-6":{"":{"position":"relative","left":0,"top":-110}},"continue-button":{"":{"width":50,"height":50,"position":"absolute","backgroundColor":"#8BC34A","borderRadius":25,"display":"flex","justifyContent":"center","alignItems":"center","alignSelf":"center","marginTop":700}},"arrow":{"":{"color":"#242424","fontSize":20}},"colleague-button":{"":{"position":"relative","left":140,"top":-55}},"button-7":{"":{"position":"relative","left":0,"top":0}},"button-8":{"":{"position":"relative","left":150,"top":-55}},"button-9":{"":{"position":"relative","top":-55}},"button-10":{"":{"position":"relative","left":150,"top":-110}},"button-11":{"":{"position":"relative","left":10,"top":0}},"button-12":{"":{"position":"relative","left":60,"top":0}}};

  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
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
              src: _imports_1$4,
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
  const PagesPreferencePreference2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["styles", [_style_0$d]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/preference/preference2.uvue"]]);

  const _sfc_main$c = vue.defineComponent({
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

  const _style_0$c = {"container":{"":{"display":"flex","flexDirection":"column","backgroundColor":"#1c1c1e","paddingTop":40,"paddingRight":20,"paddingBottom":80,"paddingLeft":20}},"text-content":{"":{"marginTop":60,"marginBottom":0}},"question":{"":{"fontSize":20,"color":"#ffffff","marginBottom":8}},"subtitle":{"":{"fontSize":14,"color":"#8e8e93"}},"card":{"":{"backgroundColor":"#1c1c1e","borderRadius":20,"top":120,"overflow":"hidden","marginBottom":400}},"card-image":{"":{"width":"100%","height":280}},"start-button":{"":{"position":"absolute","left":"50%","top":490,"transform":"translateX(-50%)","backgroundColor":"#1c1c1e","color":"#ffffff","borderWidth":"medium","borderStyle":"none","borderColor":"#000000","borderRadius":20,"paddingTop":3,"paddingRight":20,"paddingBottom":3,"paddingLeft":20,"fontSize":14}},"arrow":{"":{"marginLeft":2}},"welcome":{"":{"fontSize":18,"color":"#ffffff","marginBottom":8}},"debug-info":{"":{"marginTop":20,"paddingTop":10,"paddingRight":10,"paddingBottom":10,"paddingLeft":10,"backgroundColor":"#2c2c2e","borderRadius":10}}};

  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesPreferencePreference3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["styles", [_style_0$c]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/preference/preference3.uvue"]]);

  const _sfc_main$b = vue.defineComponent({
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
                  url: 'https://eqmaster.azurewebsites.net/start_scenario/${this.jobId}',
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

  const _imports_1$3 = "/static/sign.png";

  const _imports_4$3 = "/static/icon3.png";

  const _style_0$b = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":"80rpx","left":"50%","transform":"translateX(-50%)","backgroundColor":"rgba(55,55,66,0.4)","borderRadius":"40rpx","paddingTop":"24rpx","paddingRight":"20rpx","paddingBottom":"24rpx","paddingLeft":"20rpx","width":"280rpx","boxSizing":"border-box"}},"room-text":{"":{"color":"#ffffff","fontSize":"32rpx","textAlign":"center","top":"10.5%"}},"logo":{"":{"width":"300rpx","height":"300rpx","position":"absolute","top":"11%","left":"50%","transform":"translate(-50%, -50%)"}},"text-box":{"":{"position":"absolute","bottom":"80rpx","left":"40rpx","right":"40rpx","backgroundColor":"rgba(55,55,66,0.8)","borderRadius":"50rpx","paddingTop":"50rpx","paddingBottom":"50rpx","paddingLeft":"50rpx","paddingRight":"50rpx","zIndex":1,"minHeight":"100rpx","maxHeight":"400rpx","borderWidth":"6rpx","borderStyle":"solid","borderColor":"#F2BC74"}},"text-content":{"":{"color":"#FFFFFF","fontSize":"28rpx","lineHeight":1.4}},"expand-icon":{"":{"textAlign":"center","color":"#FFFFFF","fontSize":"24rpx","marginTop":"10rpx"}},"icon-image":{"":{"width":20,"height":20}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":"10rpx","paddingRight":"10rpx","paddingBottom":"10rpx","paddingLeft":"10rpx","fontSize":"20rpx","zIndex":100,"overflowY":"auto"}}};

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
      vue.createCommentVNode(" \u623F\u95F4\u4FE1\u606F "),
      vue.createCommentVNode('    <view class="room-info">\n      <text class="room-text">\u4E09\u697C\u7535\u68AF\u95F4</text>\n    </view> '),
      vue.createElementVNode("image", {
        class: "logo",
        src: _imports_1$3,
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
            src: _imports_4$3,
            mode: "aspectFit"
          })
        ])
      ])
    ]);
  }
  const PagesTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["styles", [_style_0$b]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/test/test.uvue"]]);

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
              jobId: '',
              baseURL: 'https://eqmaster.azurewebsites.net' // 请替换为您的实际后端地址
          };
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/test/test1.uvue:60', 'Received options:', option);
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
                  uni.__log__('error', 'at pages/test/test1.uvue:72', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test1.uvue:81', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/test/test1.uvue:86', 'Parsed data:', {
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
                  url: 'https://eqmaster.azurewebsites.net/start_scenario/${this.jobId}',
                  method: 'POST',
                  success: (res) => {
                      uni.__log__('log', 'at pages/test/test1.uvue:116', 'Scenario data:', res.data);
                      this.scenarioData = res.data; // 修改为直接获取 res.data
                      this.handleScenarioData();
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test1.uvue:121', 'Error getting scenario data:', err);
                  }
              });
          },
          handleScenarioData() {
              if (this.scenarioData) {
                  // 假设 scenarioData 包含一个 description 字段
                  this.description = this.scenarioData.scenes.description || '无法获取背景信息';
              }
              else {
                  uni.__log__('warn', 'at pages/test/test1.uvue:130', 'Background information not found in scenario data');
                  this.description = '无法获取背景信息';
              }
          }
      }
  });

  const _imports_2$3 = "/static/npc2.png";

  const _imports_3$3 = "/static/Rectangle.png";

  const _style_0$a = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":"80rpx","left":"50%","transform":"translateX(-50%)","backgroundColor":"rgba(55,55,66,0.4)","borderRadius":"40rpx","paddingTop":"24rpx","paddingRight":"20rpx","paddingBottom":"24rpx","paddingLeft":"20rpx","width":"280rpx","boxSizing":"border-box"}},"room-text":{"":{"color":"#ffffff","fontSize":"32rpx","textAlign":"center","top":"10.5%"}},"logo":{"":{"width":"300rpx","height":"300rpx","position":"absolute","top":"11%","left":"50%","transform":"translate(-50%, -50%)"}},"text-box1":{"":{"position":"absolute","bottom":"80rpx","left":"40rpx","right":"40rpx","paddingTop":"50rpx","paddingBottom":"50rpx","paddingLeft":"50rpx","paddingRight":"50rpx","zIndex":1,"height":"800rpx"}},"text-box":{"":{"position":"absolute","bottom":"60rpx","left":"40rpx","right":"40rpx","backgroundColor":"rgba(55,55,66,0.8)","borderRadius":"50rpx","paddingTop":"50rpx","paddingBottom":"50rpx","paddingLeft":"50rpx","paddingRight":"50rpx","zIndex":1,"minHeight":"200rpx","maxHeight":"200rpx","borderWidth":"6rpx","borderStyle":"solid","borderColor":"#F2BC74"}},"text-content":{"":{"color":"#FFFFFF","fontSize":"28rpx","lineHeight":1.4}},"expand-icon":{"":{"textAlign":"center","color":"#FFFFFF","fontSize":"24rpx","marginTop":"10rpx"}},"icon-image":{"":{"width":20,"height":20}},"icon-image1":{"":{"width":20,"height":20}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":"10rpx","paddingRight":"10rpx","paddingBottom":"10rpx","paddingLeft":"10rpx","fontSize":"20rpx","zIndex":100,"overflowY":"auto"}},"user-avatar":{"":{"width":60,"height":60,"position":"absolute","bottom":185,"left":"90%","top":"60%","marginLeft":-63,"borderRadius":"50rpx","marginRight":10,"zIndex":3,"borderWidth":"6rpx","borderStyle":"none","borderColor":"#F2BC74"}},"user-info":{"":{"position":"absolute","clipPath":"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)","backgroundColor":"#F2BC74","left":"45%","top":"63%","paddingTop":0,"paddingRight":15,"paddingBottom":0,"paddingLeft":15,"display":"flex","alignItems":"center","width":130,"zIndex":2}},"user-name":{"":{"top":"56%","left":"45%","color":"#000000","fontSize":16,"paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":25,"zIndex":3}}};

  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
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
        src: _imports_1$3,
        mode: "aspectFit"
      }),
      vue.createElementVNode("text", { class: "room-text" }, "\u4E09\u697C\u7535\u68AF\u95F4"),
      vue.createCommentVNode(" \u7070\u8272\u5706\u5708\u548C\u56FE\u6807 "),
      vue.createCommentVNode('    <view class="gray-circle">\n      <image class="logo" src="/static/sign.png" mode="aspectFit" />\n    </view> '),
      vue.createCommentVNode(" \u6587\u5B57\u6846 "),
      vue.createElementVNode("view", { class: "text-box1" }, [
        vue.createElementVNode("image", {
          class: "user-avatar",
          src: _imports_2$3,
          mode: "aspectFill"
        }),
        vue.createElementVNode("text", { class: "user-name" }, "\u5C0F\u674E"),
        vue.createElementVNode("image", {
          class: "logo1",
          src: _imports_3$3,
          mode: "aspectFill",
          style: { "width": "100px", "height": "auto", "top": "200px", "left": "150px" }
        }),
        vue.createCommentVNode(' <image class="logo" src="/static/sign.png" mode="aspectFit" style="width: 100px; height: auto;" /> '),
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
              src: _imports_4$3,
              mode: "aspectFit"
            })
          ])
        ])
      ])
    ]);
  }
  const PagesTestTest1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["styles", [_style_0$a]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/test/test1.uvue"]]);

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
              description: '',
              selectedOptionIndex: null,
              num: null,
              jobId: null,
              baseURL: 'https://eqmaster.azurewebsites.net' // 请替换为您的实际后端地址
          };
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/test/test2.uvue:55', 'Received options:', option);
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
                  uni.__log__('error', 'at pages/test/test2.uvue:67', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test2.uvue:76', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/test/test2.uvue:81', 'Parsed data:', {
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
              uni.__log__('log', 'at pages/test/test2.uvue:102', 'Selected option:', this.num, this.scenarioData.options[index].text);
              // 更新选项文本颜色为黑色
              this.scenarioData.options.forEach((option = null, i = null) => {
                  option.textColor = (i === index) ? 'black' : 'white'; // 设置选中的文本颜色为黑色
              });
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
              uni.__log__('log', 'at pages/test/test2.uvue:125', 'Sending data to backend:', {
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
                      uni.__log__('log', 'at pages/test/test2.uvue:138', 'Full response:', response);
                      if (response.statusCode === 200) {
                          const result = response.data;
                          uni.__log__('log', 'at pages/test/test2.uvue:142', 'Response data:', result);
                          let nextPageUrl = null;
                          if (result.message === "Final choice made. Processing data in background.") {
                              nextPageUrl = `/pages/result/result?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}&num=${this.num}`;
                          }
                          else {
                              nextPageUrl = `/pages/test/test3?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}&num=${this.num}`;
                          }
                          uni.__log__('log', 'at pages/test/test2.uvue:151', 'Navigating to:', nextPageUrl);
                          uni.navigateTo({
                              url: nextPageUrl,
                              fail: (err) => {
                                  uni.__log__('error', 'at pages/test/test2.uvue:156', 'Navigation failed:', err);
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
                      uni.__log__('error', 'at pages/test/test2.uvue:171', 'Detailed error:', error);
                      uni.showToast({
                          title: `发生错误：${error.errMsg}`,
                          icon: 'none'
                      });
                  }
              });
          },
          getScenarioData() {
              uni.request({
                  url: `${this.baseURL}/get_current_scenario/${this.jobId}`,
                  method: 'POST',
                  success: (res) => {
                      uni.__log__('log', 'at pages/test/test2.uvue:184', 'Scenario data:', res.data);
                      // 根据返回的数据结构调整
                      this.scenarioData = res.data.scenes || res.data;
                      this.handleScenarioData();
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test2.uvue:190', 'Error getting scenario data:', err);
                  }
              });
          },
          handleScenarioData() {
              if (this.scenarioData) {
                  this.description = this.scenarioData.description || '无法获取背景信息';
              }
              else {
                  uni.__log__('warn', 'at pages/test/test2.uvue:198', 'Background information not found in scenario data');
                  this.description = '无法获取背景信息';
              }
          }
      }
  });

  const _style_0$9 = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":40,"left":"50%","marginLeft":-70,"backgroundColor":"rgba(55,55,66,0.4)","borderRadius":20,"paddingTop":12,"paddingRight":10,"paddingBottom":12,"paddingLeft":10,"width":140,"boxSizing":"border-box"}},"room-text":{"":{"color":"#ffffff","fontSize":"32rpx","textAlign":"center","top":"10.5%"}},"gray-circle":{"":{"position":"absolute","width":35,"height":35,"backgroundColor":"#373742","top":61,"left":130,"display":"flex","justifyContent":"center","alignItems":"center"}},"logo":{"":{"width":"300rpx","height":"300rpx","position":"absolute","top":"11%","left":"50%","transform":"translate(-50%, -50%)"}},"options-container":{"":{"position":"absolute","top":500,"left":0,"right":0,"display":"flex","flexDirection":"column","alignItems":"center","gap":"30px"}},"text-box":{"":{"width":"80%","backgroundColor":"rgba(55,55,66,0.8)","borderRadius":50,"paddingTop":15,"paddingRight":25,"paddingBottom":15,"paddingLeft":25,"minHeight":50,"maxHeight":200,"transitionProperty":"backgroundColor","transitionDuration":"0.3s","marginBottom":20},".selected":{"backgroundColor":"#F6ECC9"}},"text-content":{"":{"color":"#FFFFFF","fontSize":14,"lineHeight":1.4},".text-box.selected ":{"!color":"#373742"}},"continue-button":{"":{"position":"absolute","bottom":20,"left":"50%","marginLeft":-30,"backgroundColor":"#F2BC74","borderRadius":30,"WebkitBorderRadius":"30px","width":60,"height":60,"display":"flex","justifyContent":"center","alignItems":"center","color":"#FFFFFF","fontSize":24,"textAlign":"center","zIndex":1,"boxSizing":"border-box"}},"arrow":{"":{"color":"#ffffff"}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5,"fontSize":10,"zIndex":100,"overflowY":"auto"}},"@TRANSITION":{"text-box":{"property":"backgroundColor","duration":"0.3s"}}};

  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
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
      vue.createElementVNode("image", {
        class: "logo",
        src: _imports_1$3,
        mode: "aspectFit"
      }),
      vue.createElementVNode("text", { class: "room-text" }, "\u4E09\u697C\u7535\u68AF\u95F4"),
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
                {
                  class: "text-content",
                  style: vue.normalizeStyle({ color: option.textColor || "white" })
                },
                vue.toDisplayString(option.text),
                5
                /* TEXT, STYLE */
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
  const PagesTestTest2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["styles", [_style_0$9]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/test/test2.uvue"]]);

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
              jobId: '',
              roundCount: 0,
              num: null,
              baseURL: 'https://eqmaster.azurewebsites.net' // 请替换为您的实际后端地址
          };
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/test/test3.uvue:59', 'Received options:', option);
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
                  uni.__log__('error', 'at pages/test/test3.uvue:71', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test3.uvue:80', 'Error parsing birthday:', e);
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
          uni.__log__('log', 'at pages/test/test3.uvue:93', 'Parsed data:', {
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
                  url: `${this.baseURL}/get_current_scenario/${this.jobId}`,
                  method: 'POST',
                  success: (res) => {
                      uni.__log__('log', 'at pages/test/test3.uvue:120', 'Scenario data:', res.data);
                      // 根据返回的数据结构调整
                      this.scenarioData = res.data;
                      this.handleScenarioData();
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test3.uvue:126', 'Error getting scenario data:', err);
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

  const _style_0$8 = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":"80rpx","left":"50%","transform":"translateX(-50%)","backgroundColor":"rgba(55,55,66,0.4)","borderRadius":"40rpx","paddingTop":"24rpx","paddingRight":"20rpx","paddingBottom":"24rpx","paddingLeft":"20rpx","width":"280rpx","boxSizing":"border-box"}},"room-text":{"":{"color":"#ffffff","fontSize":"32rpx","textAlign":"center","top":"10.5%"}},"logo":{"":{"width":"300rpx","height":"300rpx","position":"absolute","top":"11%","left":"50%","transform":"translate(-50%, -50%)"}},"text-box":{"":{"position":"absolute","bottom":"80rpx","left":"40rpx","right":"40rpx","backgroundColor":"rgba(55,55,66,0.8)","borderRadius":"50rpx","paddingTop":"50rpx","paddingBottom":"50rpx","paddingLeft":"50rpx","paddingRight":"50rpx","zIndex":1,"minHeight":"100rpx","maxHeight":"400rpx","borderWidth":"6rpx","borderStyle":"solid","borderColor":"#F2BC74"}},"text-content":{"":{"color":"#FFFFFF","fontSize":"28rpx","lineHeight":1.4}},"expand-icon":{"":{"textAlign":"center","color":"#FFFFFF","fontSize":"24rpx","marginTop":"10rpx"}},"icon-image":{"":{"width":20,"height":20}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":"10rpx","paddingRight":"10rpx","paddingBottom":"10rpx","paddingLeft":"10rpx","fontSize":"20rpx","zIndex":100,"overflowY":"auto"}}};

  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
        src: _imports_1$3,
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
            src: _imports_4$3,
            mode: "aspectFit"
          })
        ])
      ])
    ]);
  }
  const PagesTestTest3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["styles", [_style_0$8]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/test/test3.uvue"]]);

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
              jobId: '',
              baseURL: 'https://eqmaster.azurewebsites.net' // 请替换为您的实际后端地址
          };
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/test/test4.uvue:64', 'Received options:', option);
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
                  uni.__log__('error', 'at pages/test/test4.uvue:76', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test4.uvue:85', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/test/test4.uvue:90', 'Parsed data:', {
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
                  url: `${this.baseURL}/get_current_scenario/${this.jobId}`,
                  method: 'POST',
                  success: (res) => {
                      uni.__log__('log', 'at pages/test/test4.uvue:119', 'Scenario data:', res.data);
                      this.scenarioData = res.data; // 修改为直接获取 res.data
                      this.handleScenarioData();
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test4.uvue:124', 'Error getting scenario data:', err);
                  }
              });
          },
          handleScenarioData() {
              if (this.scenarioData) {
                  // 假设 scenarioData 包含一个 description 字段
                  this.description = this.scenarioData.scenes.description || '无法获取背景信息';
              }
              else {
                  uni.__log__('warn', 'at pages/test/test4.uvue:133', 'Background information not found in scenario data');
                  this.description = '无法获取背景信息';
              }
          }
      }
  });

  const _style_0$7 = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":"80rpx","left":"50%","transform":"translateX(-50%)","backgroundColor":"rgba(55,55,66,0.4)","borderRadius":"40rpx","paddingTop":"24rpx","paddingRight":"20rpx","paddingBottom":"24rpx","paddingLeft":"20rpx","width":"280rpx","boxSizing":"border-box"}},"room-text":{"":{"color":"#ffffff","fontSize":"32rpx","textAlign":"center","top":"10.5%"}},"logo":{"":{"width":"300rpx","height":"300rpx","position":"absolute","top":"11%","left":"50%","transform":"translate(-50%, -50%)"}},"text-box1":{"":{"position":"absolute","bottom":"80rpx","left":"40rpx","right":"40rpx","paddingTop":"50rpx","paddingBottom":"50rpx","paddingLeft":"50rpx","paddingRight":"50rpx","zIndex":1,"height":"800rpx"}},"text-box":{"":{"position":"absolute","bottom":"80rpx","left":"40rpx","right":"40rpx","backgroundColor":"rgba(55,55,66,0.8)","borderRadius":"50rpx","paddingTop":"50rpx","paddingBottom":"50rpx","paddingLeft":"50rpx","paddingRight":"50rpx","zIndex":1,"minHeight":"230rpx","maxHeight":"230rpx","borderWidth":"6rpx","borderStyle":"solid","borderColor":"#F2BC74"}},"text-content":{"":{"color":"#FFFFFF","fontSize":"28rpx","lineHeight":1.4}},"expand-icon":{"":{"textAlign":"center","color":"#FFFFFF","fontSize":"24rpx","marginTop":"10rpx"}},"icon-image":{"":{"width":20,"height":20}},"icon-image1":{"":{"width":20,"height":20}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":"10rpx","paddingRight":"10rpx","paddingBottom":"10rpx","paddingLeft":"10rpx","fontSize":"20rpx","zIndex":100,"overflowY":"auto"}},"user-avatar":{"":{"width":60,"height":60,"position":"absolute","bottom":185,"left":"90%","top":"51%","marginLeft":-63,"borderRadius":"50rpx","marginRight":10,"zIndex":3,"borderWidth":"6rpx","borderStyle":"none","borderColor":"#F2BC74"}},"user-info":{"":{"position":"absolute","clipPath":"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)","backgroundColor":"#F2BC74","left":"45%","top":"63%","paddingTop":0,"paddingRight":15,"paddingBottom":0,"paddingLeft":15,"display":"flex","alignItems":"center","width":130,"zIndex":2}},"user-name":{"":{"top":"47%","left":"45%","color":"#000000","fontSize":16,"paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":25,"zIndex":3}}};

  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
        src: _imports_1$3,
        mode: "aspectFit"
      }),
      vue.createElementVNode("text", { class: "room-text" }, "\u4E09\u697C\u7535\u68AF\u95F4"),
      vue.createCommentVNode(" \u7070\u8272\u5706\u5708\u548C\u56FE\u6807 "),
      vue.createCommentVNode('    <view class="gray-circle">\n      <image class="logo" src="/static/sign.png" mode="aspectFit" />\n    </view> '),
      vue.createCommentVNode(" \u6587\u5B57\u6846 "),
      vue.createElementVNode("view", { class: "text-box1" }, [
        vue.createElementVNode("image", {
          class: "user-avatar",
          src: _imports_2$3,
          mode: "aspectFill"
        }),
        vue.createCommentVNode(" \u8C03\u6574\u7528\u6237x\u4FE1\u606F\u6A21\u5757\u7684\u4F4D\u7F6E "),
        vue.createElementVNode("text", { class: "user-name" }, "\u5C0F\u674E"),
        vue.createElementVNode("image", {
          class: "logo1",
          src: _imports_3$3,
          mode: "aspectFill",
          style: { "width": "100px", "height": "auto", "top": "168px", "left": "150px" }
        }),
        vue.createCommentVNode(' <image class="logo" src="/static/sign.png" mode="aspectFit" style="width: 100px; height: auto;" /> '),
        vue.createCommentVNode(' <view class="user-info" >\n		  <text class="user-name">\u5C0F\u674E</text>\n		</view> '),
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
              src: _imports_4$3,
              mode: "aspectFit"
            })
          ])
        ])
      ])
    ]);
  }
  const PagesTestTest4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["styles", [_style_0$7]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/test/test4.uvue"]]);

  const _sfc_main$6 = vue.defineComponent({
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
          uni.__log__('log', 'at pages/test/test5.uvue:56', 'Received options:', option);
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
                  uni.__log__('error', 'at pages/test/test5.uvue:68', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/test/test5.uvue:77', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/test/test5.uvue:82', 'Parsed data:', {
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
              uni.__log__('log', 'at pages/test/test5.uvue:104', 'Selected option:', this.num, this.scenarioData.options[index].text);
              // 更新选项文本颜色为黑色
              this.scenarioData.options.forEach((option = null, i = null) => {
                  option.textColor = (i === index) ? 'black' : 'white'; // 设置选中的文本颜色为黑色
              });
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
              uni.__log__('log', 'at pages/test/test5.uvue:127', 'Sending data to backend:', {
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
                      uni.__log__('log', 'at pages/test/test5.uvue:140', 'Full response:', response);
                      if (response.statusCode === 200) {
                          const result = response.data;
                          uni.__log__('log', 'at pages/test/test5.uvue:144', 'Response data:', result);
                          let nextPageUrl = null;
                          if (result.message === "Final choice made. Processing data in background.") {
                              nextPageUrl = `/pages/result/result?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}&num=${this.num}`;
                          }
                          else {
                              nextPageUrl = `/pages/test/test3?jobId=${this.jobId}&userId=${this.userId}&username=${encodeURIComponent(this.username)}&gender=${this.gender}&birthday=${encodeURIComponent(UTS.JSON.stringify(this.birthday))}&options=${encodeURIComponent(UTS.JSON.stringify(this.selectedOptions))}&num=${this.num}`;
                          }
                          uni.__log__('log', 'at pages/test/test5.uvue:153', 'Navigating to:', nextPageUrl);
                          uni.navigateTo({
                              url: nextPageUrl,
                              fail: (err) => {
                                  uni.__log__('error', 'at pages/test/test5.uvue:158', 'Navigation failed:', err);
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
                      uni.__log__('error', 'at pages/test/test5.uvue:173', 'Detailed error:', error);
                      uni.showToast({
                          title: `发生错误：${error.errMsg}`,
                          icon: 'none'
                      });
                  }
              });
          },
          getScenarioData() {
              uni.request({
                  url: `${this.baseURL}/get_current_scenario/${this.jobId}`,
                  method: 'POST',
                  success: (res) => {
                      uni.__log__('log', 'at pages/test/test5.uvue:186', 'Scenario data:', res.data);
                      // 根据返回的数据结构调整
                      this.scenarioData = res.data.scenes || res.data;
                      this.handleScenarioData();
                  },
                  fail: (err) => {
                      uni.__log__('error', 'at pages/test/test5.uvue:192', 'Error getting scenario data:', err);
                  }
              });
          },
          handleScenarioData() {
              if (this.scenarioData) {
                  this.description = this.scenarioData.description || '无法获取背景信息';
              }
              else {
                  uni.__log__('warn', 'at pages/test/test5.uvue:200', 'Background information not found in scenario data');
                  this.description = '无法获取背景信息';
              }
          }
      }
  });

  const _style_0$6 = {"container":{"":{"position":"relative","width":"100%","height":"100%"}},"background-image":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%"}},"room-info":{"":{"position":"absolute","top":40,"left":"50%","marginLeft":-70,"backgroundColor":"rgba(55,55,66,0.4)","borderRadius":20,"paddingTop":12,"paddingRight":10,"paddingBottom":12,"paddingLeft":10,"width":140,"boxSizing":"border-box"}},"room-text":{"":{"color":"#ffffff","fontSize":"32rpx","textAlign":"center","top":"10.5%"}},"gray-circle":{"":{"position":"absolute","width":35,"height":35,"backgroundColor":"#373742","top":61,"left":130,"display":"flex","justifyContent":"center","alignItems":"center"}},"logo":{"":{"width":"300rpx","height":"300rpx","position":"absolute","top":"11%","left":"50%","transform":"translate(-50%, -50%)"}},"options-container":{"":{"position":"absolute","top":500,"left":0,"right":0,"display":"flex","flexDirection":"column","alignItems":"center","gap":"30px"}},"text-box":{"":{"width":"80%","backgroundColor":"rgba(55,55,66,0.8)","borderRadius":50,"paddingTop":15,"paddingRight":25,"paddingBottom":15,"paddingLeft":25,"minHeight":50,"maxHeight":200,"transitionProperty":"backgroundColor","transitionDuration":"0.3s","marginBottom":20},".selected":{"backgroundColor":"#F6ECC9"}},"text-content":{"":{"color":"#FFFFFF","fontSize":14,"lineHeight":1.4},".selected ":{"color":"#000000"}},"continue-button":{"":{"position":"absolute","bottom":20,"left":"50%","marginLeft":-30,"backgroundColor":"#F2BC74","borderRadius":30,"WebkitBorderRadius":"30px","width":60,"height":60,"display":"flex","justifyContent":"center","alignItems":"center","color":"#FFFFFF","fontSize":24,"textAlign":"center","zIndex":1,"boxSizing":"border-box"}},"arrow":{"":{"color":"#ffffff"}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5,"fontSize":10,"zIndex":100,"overflowY":"auto"}},"@TRANSITION":{"text-box":{"property":"backgroundColor","duration":"0.3s"}}};

  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
      vue.createElementVNode("image", {
        class: "logo",
        src: _imports_1$3,
        mode: "aspectFit"
      }),
      vue.createElementVNode("text", { class: "room-text" }, "\u4E09\u697C\u7535\u68AF\u95F4"),
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
                {
                  class: "text-content",
                  style: vue.normalizeStyle({ color: option.textColor || "white" })
                },
                vue.toDisplayString(option.text),
                5
                /* TEXT, STYLE */
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
  const PagesTestTest5 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["styles", [_style_0$6]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/test/test5.uvue"]]);

  const _sfc_main$5 = vue.defineComponent({
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
                  response: {
                      personal_info: {
                          name: '',
                          tag: '',
                          tag_description: '',
                          job_id: ''
                      },
                      eq_scores: {
                          score: 0,
                          dimension1_score: 0,
                          dimension1_detail: '',
                          dimension2_score: 0,
                          dimension2_detail: '',
                          dimension3_score: 0,
                          dimension3_detail: '',
                          dimension4_score: 0,
                          dimension4_detail: '',
                          dimension5_score: 0,
                          dimension5_detail: '',
                          summary: '',
                          detail: '',
                          overall_suggestion: '',
                          detail_summary: ''
                      },
                      contacts: []
                  }
              },
              intervalId: null,
              showSplash: false,
              progress: 0,
              progressInterval: null,
              isExpanded: false,
              showPopup: false,
              selectedOption: 'subordinate',
              // 添加同类型的标签表
              colleagueTags: ['摸鱼高手', '时间管理大师', '潜力股', '马屁精', '靠谱伙伴'],
              bossSubordinateTags: ['完美主义者', 'PUA大', '加班狂魔', '甩锅侠', '独裁者'],
              selectedTags: [],
              isProfileComplete: false,
              profileName: '',
              roleCards: [
                  { title: '角色卡1' },
                  { title: '角色卡2' },
                  { title: '角色卡3' },
                  { title: '角色卡4' },
                  { title: '角色卡5' },
                  // 可以根据需要添加更多卡片
              ],
              showNewPopup: false,
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
          currentMonth() {
              const options = new UTSJSONObject({ month: 'long' }); // 'long' for full month name
              return new Intl.DateTimeFormat('zh-CN', options).format(new Date());
          },
          currentDate() {
              return new Date().getDate(); // Get only the day of the month
          },
          currentTags() {
              if (this.selectedOption === 'subordinate') {
                  return this.colleagueTags;
              }
              else if (this.selectedOption === 'supervisor' || this.selectedOption === '下属') {
                  return this.bossSubordinateTags;
              }
              else {
                  return [];
              }
          },
          canNavigateToProfile() {
              return this.profileName.trim() !== '' && this.selectedTags.length > 0;
          }
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/dashboard/dashboard.uvue:254', 'Received options:', option);
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
                  uni.__log__('error', 'at pages/dashboard/dashboard.uvue:267', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/dashboard/dashboard.uvue:276', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/dashboard/dashboard.uvue:281', 'Parsed data:', {
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
          if (this.progressInterval) {
              clearInterval(this.progressInterval);
          }
      },
      methods: {
          progressWidth(value = null) {
              // 算进度条宽度百分比
              const percentage = (value / this.maxScore) * 100;
              // uni.__log__('log','at pages/dashboard/dashboard.uvue:312','${percentage}%：', `${percentage}%`)
              return `${percentage}%`;
          },
          circleLeftPosition(value = null) {
              // 获取进度条实际宽度
              const percentage1 = (value / this.maxScore) * 100;
              const progressBarWidth = uni.getSystemInfoSync().windowWidth * 0.8; // 80%的屏幕宽度作为进度条的际宽度
              uni.__log__('log', 'at pages/dashboard/dashboard.uvue:319', percentage1);
              return (percentage1 / 100) * progressBarWidth;
          },
          navigateToGuide() {
              uni.navigateTo({
                  url: `/pages/dashboard/dashboard?userId=${this.userId}&username=${encodeURIComponent(this.username)}&jobId=${this.jobId}` // 添加查询参数
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
                          // uni.__log__('log','at pages/dashboard/dashboard.uvue:335','Homepage data received:', that.homepageData);
                          that.$nextTick(() => {
                              that.drawRadar();
                          });
                      }
                      else {
                          uni.__log__('error', 'at pages/dashboard/dashboard.uvue:340', 'Failed to fetch homepage data:', response.statusCode);
                      }
                  },
                  fail(error) {
                      uni.__log__('error', 'at pages/dashboard/dashboard.uvue:344', 'Error fetching homepage data:', error);
                  }
              });
          },
          expand() {
              this.isExpanded = true; // 只展开，不再收起
          },
          openPopup() {
              this.showPopup = true;
          },
          closePopup() {
              this.showPopup = false;
          },
          selectOption(option = null) {
              this.selectedOption = option;
              this.selectedTags = []; // 切换选项时重置已选择的标签
          },
          toggleTag(tag = null) {
              const index = this.selectedTags.indexOf(tag);
              if (index > -1) {
                  this.selectedTags.splice(index, 1);
              }
              else {
                  this.selectedTags.push(tag);
              }
          },
          createProfile() {
              uni.__log__('log', 'at pages/dashboard/dashboard.uvue:370', '创建档案', {
                  name: this.profileName,
                  option: this.selectedOption,
                  tags: this.selectedTags
              });
              this.closePopup();
          },
          toProfilePage() {
              if (this.canNavigateToProfile) {
                  // 准备要发送的数据
                  const requestData = new UTSJSONObject({
                      personal_name: this.username,
                      name: this.profileName,
                      tag: this.selectedTags.join(','),
                      contact_relationship: this.selectedOption
                  });
                  // 在发送请求之前打印数据
                  uni.__log__('log', 'at pages/dashboard/dashboard.uvue:388', 'Sending data to create contact profile:', requestData);
                  // 发送请求创建联系人档案
                  uni.request({
                      url: 'https://eqmaster.azurewebsites.net/create_contact_profile',
                      method: 'POST',
                      data: requestData,
                      success: (res) => {
                          if (res.statusCode === 200) {
                              uni.__log__('log', 'at pages/dashboard/dashboard.uvue:397', 'Contact profile created successfully:', res.data);
                              // 创建成功后，导航到档案页面
                              uni.navigateTo({
                                  url: `/pages/profile/profile?personal_name=${encodeURIComponent(this.username)}&name=${encodeURIComponent(this.profileName)}&jobId=${this.jobId}&relation=${encodeURIComponent(this.selectedOption)}&tags=${encodeURIComponent(UTS.JSON.stringify(this.selectedTags))}&contactId=${res.data.contact_id}`
                              });
                          }
                          else {
                              uni.__log__('error', 'at pages/dashboard/dashboard.uvue:403', 'Failed to create contact profile:', res.statusCode, res.data);
                              uni.showToast({
                                  title: `创建档案失败: ${res.statusCode}`,
                                  icon: 'none'
                              });
                          }
                      },
                      fail: (err) => {
                          uni.__log__('error', 'at pages/dashboard/dashboard.uvue:411', 'Error creating contact profile:', err);
                          uni.showToast({
                              title: '网络错误，请稍后重试',
                              icon: 'none'
                          });
                      }
                  });
              }
          },
          navigateToResult() {
              uni.navigateTo({
                  url: `/pages/result/result?jobId=${this.jobId}`
              });
          },
          openNewPopup() {
              this.showNewPopup = true;
          },
          closeNewPopup() {
              this.showNewPopup = false;
          },
      },
      mounted() {
          this.startProgress(); // 开始进度条
          this.animateImage(); // 开始图片动画
          // 如果需要在弹窗打开时设置默认选项，可以在此处调用
          // this.selectedOption = '同事'; // 已在 data 中设置，不需要额外操作
      },
      beforeDestroy() {
          // 页面销毁前清除定时器
          if (this.intervalId) {
              clearInterval(this.intervalId);
          }
          if (this.progressInterval) {
              clearInterval(this.progressInterval);
          }
      }
  });

  const _imports_0$2 = "/static/usercard.png";

  const _imports_1$2 = "/static/diamond.png";

  const _imports_2$2 = "/static/fullbutton.png";

  const _imports_3$2 = "/static/tip.png";

  const _imports_4$2 = "/static/add.png";

  const _imports_5$2 = "/static/x.png";

  const _imports_6$2 = "/static/CTA1.png";

  const _imports_2$1 = "/static/head.png";

  const _imports_6$1 = "/static/expand.png";

  const _imports_9 = "/static/Frame1.png";

  const _imports_10 = "/static/Frame2.png";

  const _imports_11 = "/static/Frame3.png";

  const _imports_12 = "/static/QRcode.jpg";

  const _style_0$5 = {"container":{"":{"position":"relative","backgroundColor":"#2F2F38","flexDirection":"column","alignItems":"center","paddingTop":"100rpx","width":"100%","height":"100%","overflowY":"auto","WebkitOverflowScrolling":"touch"}},"content":{"":{"flexDirection":"column"}},"illustration1":{"":{"width":"300rpx","height":"auto","position":"relative","zIndex":10,"top":-5,"left":0,"marginTop":"30rpx","marginBottom":"50rpx"}},"illustration-qr":{"":{"width":"570rpx","height":"auto","position":"relative","zIndex":10,"top":-5,"left":0,"marginTop":"30rpx","marginBottom":"50rpx"}},"illustration2":{"":{"width":"130rpx","height":"auto","position":"absolute","top":"1030rpx","left":"290rpx"}},"illustration3":{"":{"width":"100rpx","height":"auto","position":"relative","top":"0rpx","left":"0rpx"}},"illustration31":{"":{"width":"250rpx","height":"auto","position":"absolute","top":"340rpx","left":"60rpx","marginTop":3}},"illustration32":{"":{"width":"690rpx","height":"auto","position":"relative","top":"0rpx","left":"0rpx","marginBottom":10}},"illustration33":{"":{"width":"130rpx","height":"auto","position":"absolute","top":"0rpx","left":"500rpx","marginBottom":10}},"illustration34":{"":{"width":"60rpx","height":"auto","position":"absolute","top":"15rpx","left":"620rpx","marginBottom":10}},"illustration35":{"":{"width":"320rpx","height":"auto","position":"absolute","top":"1200rpx","left":"350rpx","marginBottom":10,"zIndex":40}},"illustration36":{"":{"width":"60rpx","height":"auto","position":"absolute","top":"30rpx","left":"100rpx"}},"illustration37":{"":{"width":"60rpx","height":"auto","position":"absolute","top":"30rpx","left":"340rpx"}},"illustration38":{"":{"width":"60rpx","height":"auto","position":"absolute","top":"30rpx","left":"570rpx"}},"illustration39":{"":{"width":300,"height":"auto","position":"absolute","top":"30rpx"}},"illustration4":{"":{"width":"70rpx","height":"auto","position":"absolute","marginTop":"-20rpx","left":"390rpx"}},"illustration5":{"":{"width":"150rpx","height":"auto","position":"absolute","marginTop":"-20rpx","left":"520rpx"}},"illustration6":{"":{"width":"400rpx","height":"auto","position":"absolute","bottom":"-20rpx","left":"250rpx"}},"illustrationhead":{"":{"width":"100rpx","height":"auto","position":"relative","zIndex":10,"left":0,"marginTop":"30rpx","marginBottom":"0rpx"}},"card":{"":{"width":190,"height":225,"backgroundColor":"#373742","borderRadius":"20rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"absolute","top":58,"left":170,"textAlign":"left","display":"flex","flexDirection":"column","paddingTop":"30rpx","paddingRight":"30rpx","paddingBottom":"0rpx","paddingLeft":"30rpx","marginBottom":"10rpx"}},"card1":{"":{"width":360,"backgroundColor":"#373742","borderRadius":"50rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","paddingTop":"20rpx","paddingRight":"30rpx","paddingBottom":"20rpx","paddingLeft":"30rpx","marginBottom":"30rpx"}},"cardjuese":{"":{"width":170,"height":"auto","backgroundColor":"#373742","borderRadius":"50rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","paddingTop":"20rpx","paddingRight":"30rpx","paddingBottom":"20rpx","paddingLeft":"30rpx"}},"cardjuese1":{"":{"width":170,"height":60,"backgroundColor":"#373742","borderRadius":"50rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","paddingTop":"20rpx","paddingRight":"30rpx","paddingBottom":"20rpx","paddingLeft":"30rpx"}},"card3":{"":{"width":"100%","height":"150rpx","backgroundColor":"#252529","color":"#252529","fontSize":"36rpx","textAlign":"center","lineHeight":"100rpx","display":"flex","justifyContent":"center","alignItems":"center","zIndex":1000,"position":"fixed","bottom":0,"transform":"translateX(-50%)","left":"50%"}},"peoplecontain":{"":{"width":360,"backgroundColor":"#2F2F38","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"row","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-start","paddingTop":"0rpx","paddingRight":"0rpx","paddingBottom":"0rpx","paddingLeft":"0rpx","marginBottom":"200rpx"}},"lower-card":{"":{"top":70,"marginLeft":10,"marginRight":10,"marginTop":5,"marginBottom":5}},"score-title-head":{"":{"fontSize":"50rpx","fontWeight":"bold","color":"#FFFFFF","marginTop":"30rpx","position":"relative","zIndex":30}},"score-title":{"":{"fontSize":"40rpx","fontWeight":"bold","color":"#9EE44D","marginBottom":"5rpx"}},"score-title1":{"":{"fontSize":"36rpx","color":"#FFFFFF","marginBottom":"5rpx"}},"score-title2":{"":{"fontSize":"30rpx","color":"#FFFFFF","left":300,"top":-23,"fontWeight":"bold"}},"score-container":{"":{"width":"100%","display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":"80rpx"}},"score-container1":{"":{"width":"100%","display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":"80rpx"}},"score-details":{"":{"display":"flex","marginBottom":"20rpx","marginTop":"20rpx","width":"100%"}},"score-value-large":{"":{"fontSize":"50rpx","fontWeight":"bold","color":"#FFFFFF","marginLeft":"60rpx","left":30,"top":26,"position":"absolute"}},"score-value-small":{"":{"fontSize":"40rpx","fontWeight":"normal","color":"#9EE44D","position":"absolute","top":"40rpx","left":"120rpx"}},"progress-bar":{"":{"width":"95%","height":"10rpx","backgroundColor":"rgba(125,123,126,0.5)","borderRadius":"25rpx","overflow":"hidden","marginTop":"5rpx","marginBottom":"15rpx"}},"status-text":{"":{"top":190,"fontSize":"40rpx","color":"#9EE44D","marginTop":"20rpx"}},"progress-bar1":{"":{"width":"85%","height":"15rpx","backgroundColor":"#7d7b7e","borderRadius":"15rpx","overflow":"hidden","marginTop":"15rpx","marginBottom":"15rpx"}},"progress":{"":{"height":"100%","backgroundColor":"#9EE44D"}},"radar-canvas":{"":{"width":"700rpx","height":"500rpx","marginTop":50,"top":-50,"backgroundColor":"rgba(0,0,0,0)"}},"card-content":{"":{"display":"flex","alignItems":"center","justifyContent":"flex-start","marginBottom":"40rpx"}},"emoji":{"":{"width":"60rpx","height":"auto","marginRight":"10rpx"}},"card-text-container":{"":{"display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":30}},"icon-text-box":{"":{"display":"flex","alignItems":"center"}},"text-box":{"":{"alignItems":"center","borderWidth":"1rpx","borderStyle":"solid","borderColor":"#373742","paddingTop":"5rpx","paddingRight":"10rpx","paddingBottom":"5rpx","paddingLeft":"10rpx","borderRadius":"10rpx","backgroundColor":"#373742","boxShadow":"0 0 12rpx 0rpx rgba(0, 0, 0, 0.3)"}},"text-box1":{"":{"alignItems":"center","borderWidth":"1rpx","borderStyle":"solid","borderColor":"#373742","paddingTop":"10rpx","paddingRight":"10rpx","paddingBottom":"10rpx","paddingLeft":"10rpx","borderRadius":"10rpx","backgroundColor":"#373742","boxShadow":"none","marginTop":"0rpx","marginRight":"10rpx","marginBottom":"10rpx","marginLeft":"10rpx"}},"card-title":{"":{"fontSize":"28rpx","backgroundColor":"#EDFB8B","marginBottom":"10rpx","paddingTop":10,"paddingRight":10,"paddingBottom":10,"paddingLeft":10,"borderTopLeftRadius":"20rpx","borderTopRightRadius":"20rpx","borderBottomRightRadius":"20rpx","borderBottomLeftRadius":"0rpx"}},"card-title2":{"":{"fontSize":"28rpx","backgroundColor":"#9EE44D","marginBottom":"10rpx","marginTop":"20rpx","paddingTop":10,"paddingRight":10,"paddingBottom":10,"paddingLeft":10,"borderTopLeftRadius":"20rpx","borderTopRightRadius":"20rpx","borderBottomRightRadius":"20rpx","borderBottomLeftRadius":"0rpx"}},"card-title1":{"":{"fontSize":"45rpx","color":"#FFFFFF","fontWeight":"bold","marginBottom":"10rpx"}},"card-title12":{"":{"position":"absolute","top":400,"left":32,"fontSize":"26rpx","color":"#FFFFFF","fontWeight":"bold","marginBottom":"10rpx"}},"card-title13":{"":{"position":"absolute","top":415,"left":30,"fontSize":"50rpx","color":"#FFFFFF","fontWeight":"bold","marginBottom":"10rpx"}},"card-title14":{"":{"fontSize":"25rpx","color":"#FFFFFF","marginBottom":"10rpx","marginTop":"10rpx","marginLeft":"20rpx"}},"card-title15":{"":{"fontSize":"25rpx","color":"#bbbbbb","marginBottom":"10rpx","marginTop":"10rpx"}},"logo":{"":{"width":"300rpx","height":"300rpx","position":"absolute","top":"11%","left":"50%","transform":"translate(-50%, -50%)"}},"card-description":{"":{"fontSize":"20rpx","color":"#FFFFFF","lineHeight":1.5,"marginTop":"0rpx"}},"card-description1":{"":{"fontSize":"24rpx","color":"#FFFFFF","lineHeight":1.5,"marginTop":"10rpx"}},"guide-button":{"":{"width":"100%","height":"150rpx","backgroundColor":"#252529","color":"#252529","fontSize":"36rpx","textAlign":"center","lineHeight":"100rpx","display":"flex","justifyContent":"center","alignItems":"center","zIndex":1000,"position":"fixed","bottom":0,"transform":"translateX(-50%)","left":"50%"}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5,"fontSize":10,"zIndex":100,"overflowY":"auto"}},"emotion-detection-box1":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"350rpx"}},"emotion-detection-box2":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"450rpx","left":"35%"}},"emotion-detection-box3":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"450rpx","right":"35%"}},"emotion-detection-box4":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"800rpx","right":"35%"}},"emotion-detection-box5":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"800rpx","left":"35%"}},"emotion-detection-title":{"":{"fontSize":"22rpx","color":"#FFFFFF","fontWeight":"bold","backgroundColor":"#4A4A57","paddingTop":"10rpx","paddingRight":"20rpx","paddingBottom":"10rpx","paddingLeft":"20rpx","borderRadius":"10rpx"}},"green-circle":{"":{"position":"absolute","width":"45rpx","height":"45rpx","backgroundColor":"#9EE44D","borderRadius":50,"top":95,"zIndex":30,"borderWidth":"3rpx","borderStyle":"solid","borderColor":"#FFFFFF"}},"green-circle1":{"":{"position":"absolute","width":"22rpx","height":"22rpx","backgroundColor":"#b3bec1","borderRadius":50,"top":102}},"expand-button":{"":{"color":"#9EE44D","borderWidth":"medium","borderStyle":"none","borderColor":"#000000","paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"textAlign":"center","textDecoration":"underline","fontSize":16,"marginTop":0,"marginRight":0,"marginBottom":0,"marginLeft":0,"cursor":"pointer","backgroundColor":"#373742","color:hover":"#9EE44D","textDecoration:hover":"underline"}},"expand-image":{"":{"width":"150rpx","height":"55rpx","cursor":"pointer","marginTop":0,"marginRight":"auto","marginBottom":0,"marginLeft":"auto"}},"popup-overlay":{"":{"position":"fixed","top":0,"left":0,"width":"100%","height":"100%","backgroundColor":"rgba(0,0,0,0.5)","display":"flex","justifyContent":"center","alignItems":"center","zIndex":1000}},"popup-content":{"":{"width":"90%","backgroundColor":"#3C3C47","borderRadius":"50rpx","paddingTop":"50rpx","paddingRight":"50rpx","paddingBottom":"50rpx","paddingLeft":"50rpx"}},"popup-header":{"":{"display":"flex","justifyContent":"space-between","marginBottom":"20rpx"}},"popup-title":{"":{"color":"#FFFFFF","fontSize":"40rpx","fontWeight":"bold","marginBottom":20}},"popup-close":{"":{"color":"#FFFFFF","fontSize":"40rpx","position":"absolute","right":5}},"popup-input":{"":{"backgroundColor":"#2F2F38","color":"#FFFFFF","paddingTop":"20rpx","paddingRight":"20rpx","paddingBottom":"20rpx","paddingLeft":"20rpx","borderRadius":"30rpx","marginBottom":"20rpx","width":"80%"}},"popup-section":{"":{"marginBottom":"20rpx"}},"popup-question":{"":{"color":"#FFFFFF","fontSize":"30rpx","fontWeight":"bold","marginTop":10,"marginBottom":10}},"popup-options":{"":{"display":"flex","flexDirection":"row","flexWrap":"wrap","alignItems":"flex-start"}},"popup-option":{"":{"backgroundColor":"#2F2F38","color":"#FFFFFF","borderTopLeftRadius":"50rpx","borderTopRightRadius":"0rpx","borderBottomRightRadius":"0rpx","borderBottomLeftRadius":"50rpx","paddingTop":"20rpx","paddingRight":"60rpx","paddingBottom":"20rpx","paddingLeft":"60rpx","marginRight":"10rpx","marginBottom":"10rpx","width":"auto","fontSize":14},".active":{"backgroundColor":"#9EE44D","color":"#2F2F38"}},"popup-option1":{"":{"backgroundColor":"#2F2F38","color":"#FFFFFF","borderRadius":"0rpx","paddingTop":"20rpx","paddingRight":"60rpx","paddingBottom":"20rpx","paddingLeft":"60rpx","marginRight":"10rpx","marginBottom":"10rpx","width":"auto","fontSize":14},".active":{"backgroundColor":"#9EE44D","color":"#2F2F38"}},"popup-option2":{"":{"backgroundColor":"#2F2F38","color":"#FFFFFF","borderTopLeftRadius":"0rpx","borderTopRightRadius":"30rpx","borderBottomRightRadius":"30rpx","borderBottomLeftRadius":"0rpx","paddingTop":"20rpx","paddingRight":"60rpx","paddingBottom":"20rpx","paddingLeft":"60rpx","marginRight":"10rpx","marginBottom":"10rpx","width":"auto","fontSize":14},".active":{"backgroundColor":"#9EE44D","color":"#2F2F38"}},"popup-tags":{"":{"display":"flex","flexDirection":"row","flexWrap":"wrap","alignItems":"flex-start","width":"100%","marginBottom":10}},"popup-tag":{"":{"backgroundColor":"#2F2F38","color":"#FFFFFF","paddingTop":"20rpx","paddingRight":"40rpx","paddingBottom":"20rpx","paddingLeft":"40rpx","borderRadius":"30rpx","marginTop":5,"marginRight":5,"marginBottom":5,"marginLeft":5,"whiteSpace":"nowrap","cursor":"pointer","fontSize":14},".active":{"backgroundColor":"#9EE44D","color":"#2F2F38"}},"custom-tag":{"":{"borderWidth":"1rpx","borderStyle":"dashed","borderColor":"#FFFFFF"}},"popup-button":{"":{"backgroundImage":"linear-gradient(-30deg, #EDFB8B -20%, #9EE44D 120%)","color":"#2F2F38","width":"100%","paddingTop":"5rpx","paddingRight":"5rpx","paddingBottom":"5rpx","paddingLeft":"5rpx","borderRadius":"50rpx","textAlign":"center","marginTop":10}},"new-profile-button":{"":{"backgroundImage":"linear-gradient(-30deg, #8BE1FB -20%, #4D9EE4 120%)","marginTop":20}},"card1inner":{"":{"flexDirection":"row","marginLeft":"20rpx"}},"card2inner":{"":{"flexDirection":"column","marginLeft":"20rpx","top":20}},"white-line":{"":{"width":"100%","height":"1rpx","backgroundColor":"#acacac","marginTop":"30rpx","marginRight":0,"marginBottom":"30rpx","marginLeft":0}},"usercard-title1":{"":{"fontSize":"26rpx","color":"#FFFFFF"}},"usercard-title2":{"":{"fontSize":"32rpx","color":"#FFFFFF","fontWeight":"bold"}},"usercard-title3":{"":{"fontSize":"26rpx","color":"#FFFFFF","marginBottom":"10rpx"}}};

  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-y": "",
        style: { "height": "100%" }
      }, [
        vue.createElementVNode("view", { class: "content" }, [
          vue.createCommentVNode(" \u4FDD\u6301\u539F\u6709\u7684\u4E3B\u5185\u5BB9 "),
          vue.createElementVNode(
            "text",
            { class: "score-title-head" },
            "\u65E9\uFF0C" + vue.toDisplayString($data.username) + "\uFF01",
            1
            /* TEXT */
          ),
          vue.createCommentVNode(" \u6DFB\u52A0\u63D2\u56FE "),
          vue.createElementVNode("image", {
            class: "illustration1",
            src: _imports_0$2,
            mode: "widthFix"
          }),
          vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u7247 "),
          vue.createElementVNode("view", { class: "card" }, [
            vue.createElementVNode("image", {
              class: "illustration3",
              src: _imports_1$2,
              mode: "widthFix"
            }),
            vue.createElementVNode(
              "text",
              { class: "score-value-large" },
              vue.toDisplayString(Math.round(120)),
              1
              /* TEXT */
            ),
            vue.createCommentVNode(' <text class="score-value-large">{{ Math.round(homepageData.response.eq_scores.score) }}</text> '),
            vue.createElementVNode("view", { class: "progress-bar" }, [
              vue.createCommentVNode(' <view class="progress" :style="{ width: progressWidth(42) }"></view> '),
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
            ]),
            vue.createElementVNode(
              "text",
              { class: "card-description" },
              vue.toDisplayString($data.homepageData.response.eq_scores.overall_suggestion),
              1
              /* TEXT */
            ),
            vue.createElementVNode("image", {
              class: "illustration31",
              src: _imports_2$2,
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToResult && $options.navigateToResult(...args))
            })
          ]),
          vue.createElementVNode("text", { class: "card-title1" }, "\u4ECA\u65E5\u9526\u56CA"),
          vue.createElementVNode("image", {
            class: "illustration32",
            src: _imports_3$2,
            mode: "widthFix"
          }),
          vue.createElementVNode("text", { class: "card-title1" }, "\u6211\u7684\u4EBA\u8109\u7F51"),
          vue.createElementVNode("text", { class: "card-title15" }, "AI \u6218\u7565\u5BB6\u901A\u8FC7\u5206\u6790\u591A\u7EF4\u5173\u7CFB\uFF0C\u5E2E\u52A9\u60A8\u5EFA\u7ACB\u804C\u573A\u8054\u7CFB"),
          vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u72471 "),
          vue.createElementVNode("view", { class: "card1" }, [
            vue.createElementVNode("text", { class: "card-title14" }, "\u6DFB\u52A0\u5FAE\u4FE1\u52A9\u624B\uFF0C\u83B7\u53D6\u6DF1\u5EA6\u804C\u573A\u5206\u6790\uFF01"),
            vue.createElementVNode("image", {
              class: "illustration33",
              src: _imports_4$2,
              mode: "widthFix",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.openNewPopup && $options.openNewPopup(...args))
            }),
            vue.createElementVNode("image", {
              class: "illustration34",
              src: _imports_5$2,
              mode: "widthFix"
            })
          ]),
          vue.createElementVNode("image", {
            class: "illustration35",
            src: _imports_6$2,
            mode: "widthFix",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.openPopup && $options.openPopup(...args))
          }),
          vue.createElementVNode("view", { class: "peoplecontain" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.roleCards, (card, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: index,
                    class: vue.normalizeClass(["cardjuese", index % 2 === 1 ? "lower-card" : ""])
                  },
                  [
                    vue.createCommentVNode(' <text class="card-title14">{{ card.title }}</text> '),
                    vue.createCommentVNode(' <image class="illustrationhead" src="/static/head.png" mode="widthFix"></image> '),
                    vue.createCommentVNode(' <image class="illustrationhead" src="/static/head.png" mode="widthFix"></image> '),
                    vue.createElementVNode("view", { class: "card-a" }, [
                      vue.createElementVNode("view", { class: "card1inner" }, [
                        vue.createElementVNode("image", {
                          class: "illustrationhead",
                          src: _imports_2$1,
                          mode: "widthFix"
                        }),
                        vue.createElementVNode("view", { class: "card2inner" }, [
                          vue.createElementVNode(
                            "text",
                            { class: "usercard-title1" },
                            vue.toDisplayString(card.title),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "text",
                            { class: "usercard-title2" },
                            "\u8BBE\u8BA1\u5E08" + vue.toDisplayString(_ctx.name),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "white-line" }),
                      vue.createElementVNode("text", { class: "usercard-title3" }, "\u540C\u4E8B\u5BF9\u4F60\u5370\u8C61\u5982\u4F55\uFF1F\u5BFC\u5165\u804A\u5929\u8BB0\u5F55\u622A\u56FE\u4E00\u63A2\u7A76\u7ADF\u5427\uFF01")
                    ]),
                    vue.createCommentVNode(" \u5982\u679C\u5361\u7247\u6709\u66F4\u591A\u5185\u5BB9\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u6DFB\u52A0 ")
                  ],
                  2
                  /* CLASS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createCommentVNode(" \u6DFB\u52A0\u4E00\u4E2A\u7A7A\u7684\u5360\u4F4D\u5361\u7247 "),
            vue.createElementVNode("view", {
              class: "cardjuese1",
              style: { "visibility": "hidden" }
            })
          ]),
          $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "popup-overlay"
          }, [
            vue.createElementVNode("view", {
              class: "popup-content",
              onClick: _cache[10] || (_cache[10] = vue.withModifiers(() => {
              }, ["stop"]))
            }, [
              vue.createElementVNode("view", { class: "popup-header" }, [
                vue.createElementVNode("text", { class: "popup-title" }, "\u521B\u5EFA\u4EBA\u8109\u6863\u6848"),
                vue.createElementVNode("text", {
                  class: "popup-close",
                  onClick: _cache[3] || (_cache[3] = (...args) => $options.closePopup && $options.closePopup(...args))
                }, "\xD7")
              ]),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "popup-input",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.profileName = $event),
                  placeholder: "\u8BF7\u8F93\u5165\u540D\u5B57"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.profileName]
              ]),
              vue.createElementVNode("view", { class: "popup-section" }, [
                vue.createElementVNode("text", { class: "popup-question" }, "TA\u662F\u4F60\u7684\uFF1F")
              ]),
              vue.createElementVNode("view", { class: "popup-options" }, [
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["popup-option", { active: $data.selectedOption === "subordinate" }]),
                    onClick: _cache[5] || (_cache[5] = ($event) => $options.selectOption("subordinate"))
                  },
                  "\u540C\u4E8B",
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["popup-option1", { active: $data.selectedOption === "supervisor" }]),
                    onClick: _cache[6] || (_cache[6] = ($event) => $options.selectOption("supervisor"))
                  },
                  "\u8001\u677F",
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["popup-option2", { active: $data.selectedOption === "\u4E0B\u5C5E" }]),
                    onClick: _cache[7] || (_cache[7] = ($event) => $options.selectOption("\u4E0B\u5C5E"))
                  },
                  "\u4E0B\u5C5E",
                  2
                  /* CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "popup-section" }, [
                vue.createElementVNode("text", { class: "popup-question" }, "\u54EA\u4E9B\u6807\u7B7E\u53EF\u4EE5\u7528\u6765\u5F62\u5BB9TA\uFF1F"),
                vue.createCommentVNode(' <text class="popup-tag custom-tag">\u81EA\u5B9A\u4E49\u6807\u7B7E</text> ')
              ]),
              vue.createElementVNode("view", { class: "popup-tags" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.currentTags, (tag) => {
                    return vue.openBlock(), vue.createElementBlock("text", {
                      key: tag,
                      class: vue.normalizeClass(["popup-tag", { active: $data.selectedTags.includes(tag) }]),
                      onClick: ($event) => $options.toggleTag(tag)
                    }, vue.toDisplayString(tag), 11, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              !$data.isExpanded ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                onClick: _cache[8] || (_cache[8] = (...args) => $options.expand && $options.expand(...args)),
                src: _imports_6$1,
                class: "expand-image"
              })) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(' <button class="popup-button" @click="createProfile">\u521B\u5EFA\u6863\u6848</button> '),
              vue.createCommentVNode(" Updated button with simplified disabled style "),
              vue.createElementVNode(
                "button",
                {
                  class: "popup-button",
                  onClick: _cache[9] || (_cache[9] = (...args) => $options.toProfilePage && $options.toProfilePage(...args)),
                  style: vue.normalizeStyle({ opacity: $options.canNavigateToProfile ? 1 : 0.5 })
                },
                " \u521B\u5EFA\u6863\u6848 ",
                4
                /* STYLE */
              ),
              vue.createCommentVNode(" New button "),
              vue.createCommentVNode(' <image class="illustration39" src="/static/createperson.png" mode="widthFix" @click="openPopup"></image> ')
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u72472 "),
          vue.createCommentVNode(" \u6DFB\u52A0\u84DD\u8272\u6309\u94AE "),
          vue.createCommentVNode(' <button class="guide-button" @click="navigateToGuide">\u5F00\u542F\u9AD8\u60C5\u5546\u4E4B\u65C5</button> '),
          vue.createElementVNode("view", { class: "card3" }, [
            vue.createElementVNode("image", {
              class: "illustration36",
              src: _imports_9,
              mode: "widthFix"
            }),
            vue.createElementVNode("image", {
              class: "illustration37",
              src: _imports_10,
              mode: "widthFix"
            }),
            vue.createElementVNode("image", {
              class: "illustration38",
              src: _imports_11,
              mode: "widthFix"
            })
          ]),
          vue.createCommentVNode(" New Popup "),
          $data.showNewPopup ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "popup-overlay"
          }, [
            vue.createElementVNode("view", {
              class: "popup-content",
              onClick: _cache[12] || (_cache[12] = vue.withModifiers(() => {
              }, ["stop"]))
            }, [
              vue.createElementVNode("view", { class: "popup-header" }, [
                vue.createElementVNode("text", { class: "popup-title" }),
                vue.createElementVNode("text", {
                  class: "popup-close",
                  onClick: _cache[11] || (_cache[11] = (...args) => $options.closeNewPopup && $options.closeNewPopup(...args))
                }, "\xD7")
              ]),
              vue.createCommentVNode(" Add your new popup content here "),
              vue.createCommentVNode(" <text>\u8FD9\u662F\u65B0\u5F39\u7A97\u7684\u5185\u5BB9</text> "),
              vue.createElementVNode("image", {
                class: "illustration-qr",
                src: _imports_12,
                mode: "widthFix"
              }),
              vue.createCommentVNode(" Add more elements as needed ")
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ])
    ]);
  }
  const PagesDashboardDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["styles", [_style_0$5]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/dashboard/dashboard.uvue"]]);

  const _sfc_main$4 = vue.defineComponent({
      data() {
          return {
              name: '',
              jobId: '',
              relation: '',
              tags: [],
              contactId: '',
              score: 28,
              maxScore: 100,
              userId: '',
              username: '',
              gender: '',
              birthday: null,
              selectedOptions: [],
              num: null,
              homepageData: {
                  response: {
                      personal_info: {
                          name: '',
                          tag: '',
                          tag_description: '',
                          job_id: ''
                      },
                      eq_scores: {
                          score: 0,
                          dimension1_score: 0,
                          dimension1_detail: '',
                          dimension2_score: 0,
                          dimension2_detail: '',
                          dimension3_score: 0,
                          dimension3_detail: '',
                          dimension4_score: 0,
                          dimension4_detail: '',
                          dimension5_score: 0,
                          dimension5_detail: '',
                          summary: '',
                          detail: '',
                          overall_suggestion: '',
                          detail_summary: ''
                      },
                      contacts: []
                  }
              },
              intervalId: null,
              showSplash: false,
              progress: 0,
              progressInterval: null,
              isExpanded: false,
              showPopup: false,
              selectedOption: '同事',
              // 添同类型的标签列表
              colleagueTags: ['摸鱼高手', '潜力股', '马屁精', '靠谱伙伴'],
              bossSubordinateTags: ['完美主义者', 'PUA大师', '加班狂魔', '甩锅侠', '独裁者'],
              selectedTags: [],
              isProfileComplete: false,
              profileName: '',
              cards: {
                  intimacy: {
                      unlocked: false,
                      score: 0,
                      description: ''
                  },
                  opinion: {
                      unlocked: false,
                      description: ''
                  },
                  // Add similar objects for other cards
              },
              personalName: '',
              editName: '',
              editRelation: '',
              editTags: [],
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
          currentMonth() {
              const options = new UTSJSONObject({ month: 'long' }); // 'long' for full month name
              return new Intl.DateTimeFormat('zh-CN', options).format(new Date());
          },
          currentDate() {
              return new Date().getDate(); // Get only the day of the month
          },
          currentTags() {
              if (this.editRelation === '同事') {
                  return this.colleagueTags;
              }
              else if (this.editRelation === '老板' || this.editRelation === '下属') {
                  return this.bossSubordinateTags;
              }
              else {
                  return [];
              }
          },
          canConfirmEdit() {
              return this.editName.trim() !== '' && this.editTags.length > 0;
          }
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/profile/profile.uvue:266', 'Received options:', option);
          // 接收上一个页面传递的数据
          this.userId = option.userId || '';
          this.username = decodeURIComponent(option.username || '');
          this.gender = option.gender || '';
          this.jobId = option.jobId || '';
          this.num = option.num || '';
          // 新增：接收个人名称
          this.personalName = decodeURIComponent(option.personal_name || '');
          // 接收联系人相关信息
          this.name = decodeURIComponent(option.name || '');
          this.relation = decodeURIComponent(option.relation || '');
          this.contactId = option.contactId || '';
          // 解析标签
          if (option.tags) {
              try {
                  this.tags = UTS.JSON.parse(decodeURIComponent(option.tags));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/profile/profile.uvue:288', 'Error parsing tags:', e);
                  this.tags = [];
              }
          }
          // 如果有其他需要的字段，可以继续添加
          uni.__log__('log', 'at pages/profile/profile.uvue:295', 'Parsed data:', {
              userId: this.userId,
              username: this.username,
              gender: this.gender,
              jobId: this.jobId,
              num: this.num,
              personalName: this.personalName,
              name: this.name,
              relation: this.relation,
              tags: this.tags,
              contactId: this.contactId
          });
          // 在这里可以使用接收到的数据进行进一步的操作
          // 例如，加载联系人的详细信息
          // this.loadContactDetails();
          // 立即调用一次
          this.loadContactDetails();
          // 设置定时调用
          this.intervalId = setInterval(() => {
              this.loadContactDetails();
          }, 50000); // 每50秒调用一次
      },
      onUnload() {
          // 页面卸载时清除定时器
          if (this.intervalId) {
              clearInterval(this.intervalId);
          }
          if (this.progressInterval) {
              clearInterval(this.progressInterval);
          }
      },
      methods: {
          progressWidth(value = null) {
              // 计算进度条宽度百分比
              const percentage = (value / this.maxScore) * 100;
              // uni.__log__('log','at pages/profile/profile.uvue:333','${percentage}%：', `${percentage}%`)
              return `${percentage}%`;
          },
          circleLeftPosition(value = null) {
              // 获取进度条实际宽度
              const percentage1 = (value / this.maxScore) * 100;
              const progressBarWidth = uni.getSystemInfoSync().windowWidth * 0.8; // 80%的屏幕宽度作为进度条的实际宽度
              uni.__log__('log', 'at pages/profile/profile.uvue:340', percentage1);
              return (percentage1 / 100) * progressBarWidth;
          },
          navigateToGuide() {
              uni.navigateTo({
                  url: `/pages/dashboard/dashboard?userId=${this.userId}&username=${encodeURIComponent(this.username)}&jobId=${this.jobId}` // 添加查询参数
              });
          },
          loadContactDetails() {
              const that = this;
              // 首先检查contactId是否有效
              if (!this.contactId) {
                  uni.__log__('error', 'at pages/profile/profile.uvue:352', 'Contact ID is missing or invalid');
                  return null;
              }
              const url = `https://eqmaster.azurewebsites.net/get_contact_profile/${this.contactId}`;
              // uni.__log__('log','at pages/profile/profile.uvue:357','Requesting URL:', url); // 添加日志
              uni.request({
                  url: url,
                  method: 'GET',
                  success(response) {
                      if (response.statusCode === 200) {
                          that.contactDetails = response.data;
                          uni.__log__('log', 'at pages/profile/profile.uvue:365', 'Homepage data received:', that.contactDetails);
                          that.$nextTick(() => {
                              that.drawRadar();
                          });
                      }
                      else {
                          uni.__log__('error', 'at pages/profile/profile.uvue:370', 'Failed to fetch data:', response.statusCode, response.data);
                      }
                  },
                  fail(error) {
                      uni.__log__('error', 'at pages/profile/profile.uvue:374', 'Error fetching homepage data:', error);
                  }
              });
          },
          expand() {
              this.isExpanded = true; // 只展开，不再收起
          },
          openPopup() {
              this.editName = this.name;
              this.editRelation = this.relation;
              this.editTags = [...this.tags];
              this.showPopup = true;
          },
          closePopup() {
              this.showPopup = false;
          },
          selectOption(option = null) {
              this.editRelation = option;
          },
          toggleTag(tag = null) {
              const index = this.editTags.indexOf(tag);
              if (index > -1) {
                  this.editTags.splice(index, 1);
              }
              else {
                  this.editTags.push(tag);
              }
          },
          confirmEdit() {
              if (this.canConfirmEdit) {
                  this.name = this.editName;
                  this.relation = this.editRelation;
                  this.tags = [...this.editTags];
                  this.closePopup();
                  // 这里可以添加保存更改到后端的逻辑
              }
          },
          toProfilePage() {
              if (this.canConfirmEdit) {
                  uni.navigateTo({
                      url: `/pages/profile/profile?name=${encodeURIComponent(this.profileName)}&jobId=${this.jobId}&relation=${encodeURIComponent(this.selectedOption)}&tags=${encodeURIComponent(UTS.JSON.stringify(this.selectedTags))}`
                  });
              }
          },
          toHomePage() {
              if (this.canConfirmEdit) {
                  uni.navigateTo({
                      url: `/pages/dashboard/dashboard`
                  });
              }
          },
          // Add new method to handle navigation
          goToDashboard() {
              uni.navigateTo({
                  url: `/pages/dashboard/dashboard?personalName=${encodeURIComponent(this.personalName)}&jobId=${this.jobId}`
              });
          },
          unlockCard(cardType = null) {
              if (!this.cards[cardType].unlocked) {
                  this.cards[cardType].unlocked = true;
                  if (cardType === 'opinion') {
                      // Here you would typically make an API call to get the description
                      // For demonstration, we'll use a placeholder value
                      this.cards[cardType].description = "这是TA对你的看法。";
                  }
                  else {
                      // Handle other card types as before
                      this.cards[cardType].score = Math.floor(Math.random() * 100);
                      this.cards[cardType].description = "这是解锁后的描述文字。";
                  }
              }
          },
          chooseImage() {
              uni.chooseImage({
                  count: 1,
                  sizeType: ['original', 'compressed'],
                  sourceType: ['album', 'camera'],
                  success: (res) => {
                      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                      const tempFilePaths = res.tempFilePaths;
                      uni.__log__('log', 'at pages/profile/profile.uvue:453', tempFilePaths);
                      // 这里可以添加上传图片到服务器的逻辑
                      this.uploadImage(tempFilePaths[0]);
                  }
              });
          },
          uploadImage(filePath = null) {
              uni.uploadFile({
                  url: 'https://eqmaster.azurewebsites.net/upload_image',
                  filePath: filePath,
                  name: 'file',
                  success: (uploadFileRes) => {
                      uni.__log__('log', 'at pages/profile/profile.uvue:466', uploadFileRes.data);
                      // 处理上传成功后的逻辑
                  },
                  fail: (error) => {
                      uni.__log__('error', 'at pages/profile/profile.uvue:470', 'Upload failed', error);
                      // 处理上传失败的情况
                  }
              });
          }
      },
      mounted() {
          // this.startProgress(); // 开始进度条
          // this.animateImage(); // 开始图片动画
          // 如果需要在弹窗打开时设置默认选项，可以在此处调用
          // this.selectedOption = '同事'; // 已在 data 中设置，不需要额外操作
      },
      beforeDestroy() {
          // 页面销毁前清除定时器
          if (this.intervalId) {
              clearInterval(this.intervalId);
          }
          if (this.progressInterval) {
              clearInterval(this.progressInterval);
          }
      }
  });

  const _imports_0$1 = "/static/back.png";

  const _imports_1$1 = "/static/renew.png";

  const _imports_3$1 = "/static/edit.png";

  const _imports_4$1 = "/static/lock.png";

  const _imports_5$1 = "/static/tip1.png";

  const _imports_6 = "/static/Placeholder.png";

  const _style_0$4 = {"container":{"":{"position":"relative","backgroundColor":"#2F2F38","flexDirection":"column","alignItems":"center","paddingTop":"100rpx","width":"100%","height":"100%","overflowY":"auto","WebkitOverflowScrolling":"touch"}},"content":{"":{"display":"flex","flexDirection":"column","width":360}},"iconback":{"":{"width":"60rpx","height":"auto","position":"relative","top":"0rpx","left":"0rpx"}},"iconrenew":{"":{"width":"60rpx","height":"auto","position":"absolute","top":"0rpx","right":"0rpx"}},"illustrationhead":{"":{"width":"200rpx","height":"auto","position":"relative","zIndex":10,"left":0,"marginTop":"30rpx","marginBottom":"30rpx"}},"illustrationlock":{"":{"width":"90rpx","height":"auto","position":"relative","zIndex":10,"left":30,"top":10,"marginTop":"30rpx"}},"illustration2":{"":{"width":"130rpx","height":"auto","position":"absolute","top":"1030rpx","left":"290rpx"}},"illustration3":{"":{"width":"100rpx","height":"auto","position":"relative","top":"0rpx","left":"0rpx"}},"illustration31":{"":{"width":"250rpx","height":"auto","position":"absolute","top":"340rpx","left":"60rpx","marginTop":3}},"illustration32":{"":{"width":"690rpx","height":"auto","position":"relative","top":"0rpx","left":"0rpx","marginBottom":10}},"illustration33":{"":{"width":"130rpx","height":"auto","position":"absolute","top":"0rpx","left":"500rpx","marginBottom":10}},"illustration34":{"":{"width":"60rpx","height":"auto","position":"absolute","top":"15rpx","left":"620rpx","marginBottom":10}},"editillustration":{"":{"width":"40rpx","height":"auto","position":"relative","left":"140rpx","marginTop":10}},"uploadillustration":{"":{"width":"50rpx","height":"auto","position":"relative","zIndex":10,"left":120}},"illustration36":{"":{"width":"60rpx","height":"auto","position":"absolute","top":"30rpx","left":"100rpx"}},"illustration37":{"":{"width":"60rpx","height":"auto","position":"absolute","top":"30rpx","left":"340rpx"}},"illustration38":{"":{"width":"60rpx","height":"auto","position":"absolute","top":"30rpx","left":"570rpx"}},"illustration39":{"":{"width":300,"height":"auto","position":"absolute","top":"30rpx"}},"illustration4":{"":{"width":"70rpx","height":"auto","position":"absolute","marginTop":"-20rpx","left":"390rpx"}},"illustration5":{"":{"width":"150rpx","height":"auto","position":"absolute","marginTop":"-20rpx","left":"520rpx"}},"illustration6":{"":{"width":"400rpx","height":"auto","position":"absolute","bottom":"-20rpx","left":"250rpx"}},"innercard":{"":{"width":280,"height":225,"backgroundColor":"#373742","borderRadius":"20rpx","position":"relative","textAlign":"left","display":"flex","flexDirection":"column","paddingTop":"30rpx","paddingRight":"30rpx","paddingBottom":"0rpx","paddingLeft":"30rpx","marginBottom":"10rpx"}},"small-card-container":{"":{"width":"100%","marginBottom":"30rpx"}},"card-wrapper":{"":{"display":"flex","flexDirection":"row"}},"card-a":{"":{"width":360,"backgroundColor":"#373742","borderRadius":"50rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"row","paddingTop":"20rpx","paddingRight":"50rpx","paddingBottom":"20rpx","paddingLeft":"50rpx","marginBottom":"30rpx"}},"card-b":{"":{"flex":"0 0 auto","width":140,"height":180,"backgroundColor":"#EDED68","borderRadius":"50rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","marginRight":10,"paddingTop":"30rpx","paddingRight":"30rpx","paddingBottom":"30rpx","paddingLeft":"30rpx"}},"card-b1":{"":{"flex":"0 0 auto","width":140,"height":180,"backgroundColor":"#89E3C9","borderRadius":"50rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","marginRight":10,"paddingTop":"30rpx","paddingRight":"30rpx","paddingBottom":"30rpx","paddingLeft":"30rpx"}},"card-b2":{"":{"flex":"0 0 auto","width":140,"height":180,"backgroundColor":"#F0EBE5","borderRadius":"50rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","marginRight":10,"paddingTop":"30rpx","paddingRight":"30rpx","paddingBottom":"30rpx","paddingLeft":"30rpx"}},"card1inner":{"":{"flexDirection":"column","marginLeft":"20rpx"}},"card2inner":{"":{"flexDirection":"row"}},"card3":{"":{"width":"100%","height":"150rpx","backgroundColor":"#252529","color":"#252529","fontSize":"36rpx","textAlign":"center","lineHeight":"100rpx","display":"flex","justifyContent":"center","alignItems":"center","zIndex":1000,"position":"fixed","bottom":0,"transform":"translateX(-50%)","left":"50%"}},"peoplecontain":{"":{"width":360,"backgroundColor":"#2F2F38","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"60rpx","paddingRight":"30rpx","paddingBottom":"0rpx","paddingLeft":"30rpx","marginBottom":"200rpx"}},"score-title-head":{"":{"fontSize":"50rpx","fontWeight":"bold","color":"#FFFFFF","marginTop":"30rpx","position":"relative","zIndex":30}},"score-title":{"":{"fontSize":"40rpx","fontWeight":"bold","color":"#9EE44D","marginBottom":"5rpx"}},"score-title1":{"":{"fontSize":"36rpx","color":"#FFFFFF","marginBottom":"5rpx"}},"score-title2":{"":{"fontSize":"30rpx","color":"#FFFFFF","left":300,"top":-23,"fontWeight":"bold"}},"score-container":{"":{"width":"100%","display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":"80rpx"}},"score-container1":{"":{"width":"100%","display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":"80rpx"}},"score-details":{"":{"display":"flex","marginBottom":"20rpx","marginTop":"20rpx","width":"100%"}},"score-value-large":{"":{"fontSize":"50rpx","fontWeight":"bold","color":"#FFFFFF","marginLeft":"60rpx","left":30,"top":26,"position":"absolute"}},"score-value-small":{"":{"fontSize":"40rpx","fontWeight":"normal","color":"#9EE44D","position":"absolute","top":"40rpx","left":"120rpx"}},"progress-bar":{"":{"width":"95%","height":"10rpx","backgroundColor":"rgba(125,123,126,0.5)","borderRadius":"25rpx","overflow":"hidden","marginTop":"5rpx","marginBottom":"15rpx"}},"status-text":{"":{"top":190,"fontSize":"40rpx","color":"#9EE44D","marginTop":"20rpx"}},"progress-bar1":{"":{"width":"85%","height":"15rpx","backgroundColor":"#7d7b7e","borderRadius":"15rpx","overflow":"hidden","marginTop":"15rpx","marginBottom":"15rpx"}},"progress":{"":{"height":"100%","backgroundColor":"#9EE44D"}},"radar-canvas":{"":{"width":"700rpx","height":"500rpx","marginTop":50,"top":-50,"backgroundColor":"rgba(0,0,0,0)"}},"card-content":{"":{"display":"flex","alignItems":"center","justifyContent":"flex-start","marginBottom":"40rpx"}},"emoji":{"":{"width":"60rpx","height":"auto","marginRight":"10rpx"}},"card-text-container":{"":{"display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":30}},"icon-text-box":{"":{"display":"flex","alignItems":"center"}},"text-box":{"":{"alignItems":"center","borderWidth":"1rpx","borderStyle":"solid","borderColor":"#373742","paddingTop":"5rpx","paddingRight":"10rpx","paddingBottom":"5rpx","paddingLeft":"10rpx","borderRadius":"10rpx","backgroundColor":"#373742","boxShadow":"0 0 12rpx 0rpx rgba(0, 0, 0, 0.3)"}},"text-box1":{"":{"alignItems":"center","borderWidth":"1rpx","borderStyle":"solid","borderColor":"#373742","paddingTop":"10rpx","paddingRight":"10rpx","paddingBottom":"10rpx","paddingLeft":"10rpx","borderRadius":"10rpx","backgroundColor":"#373742","boxShadow":"none","marginTop":"0rpx","marginRight":"10rpx","marginBottom":"10rpx","marginLeft":"10rpx"}},"card-title":{"":{"fontSize":"28rpx","backgroundColor":"#EDFB8B","marginBottom":"10rpx","paddingTop":10,"paddingRight":10,"paddingBottom":10,"paddingLeft":10,"borderTopLeftRadius":"20rpx","borderTopRightRadius":"20rpx","borderBottomRightRadius":"20rpx","borderBottomLeftRadius":"0rpx"}},"card-title2":{"":{"fontSize":"28rpx","backgroundColor":"#9EE44D","marginBottom":"10rpx","marginTop":"20rpx","paddingTop":10,"paddingRight":10,"paddingBottom":10,"paddingLeft":10,"borderTopLeftRadius":"20rpx","borderTopRightRadius":"20rpx","borderBottomRightRadius":"20rpx","borderBottomLeftRadius":"0rpx"}},"card-title1":{"":{"fontSize":"45rpx","color":"#FFFFFF","fontWeight":"bold","marginBottom":"10rpx"}},"card-titleaa":{"":{"fontSize":"25rpx","color":"#000000","backgroundColor":"#FFFFFF","opacity":0.6,"marginBottom":"10rpx","width":37,"alignItems":"center","paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5}},"card-titleab":{"":{"fontSize":"30rpx","color":"#000000","fontWeight":"bold","marginBottom":"10rpx"}},"usercard-title1":{"":{"fontSize":"36rpx","color":"#FFFFFF","fontWeight":"bold","marginTop":"20rpx","marginBottom":"20rpx"}},"upload-title":{"":{"fontSize":"36rpx","color":"#000000","fontWeight":"bold","left":140}},"card-title12":{"":{"position":"absolute","top":400,"left":32,"fontSize":"26rpx","color":"#FFFFFF","fontWeight":"bold","marginBottom":"10rpx"}},"card-title13":{"":{"position":"absolute","top":415,"left":30,"fontSize":"50rpx","color":"#FFFFFF","fontWeight":"bold","marginBottom":"10rpx"}},"card-title14":{"":{"fontSize":"25rpx","color":"#FFFFFF","marginBottom":"10rpx","marginTop":"10rpx","marginLeft":"20rpx"}},"card-title15":{"":{"fontSize":"25rpx","color":"#bbbbbb","marginBottom":"10rpx","marginTop":"10rpx"}},"card-title16":{"":{"fontSize":"25rpx","color":"#bbbbbb","marginBottom":"10rpx","marginTop":"10rpx","left":70}},"logo":{"":{"width":"300rpx","height":"300rpx","position":"absolute","top":"11%","left":"50%","transform":"translate(-50%, -50%)"}},"card-description":{"":{"fontSize":"24rpx","color":"#000000","lineHeight":1.5,"marginTop":"10rpx","textAlign":"left","top":-20}},"guide-button":{"":{"width":"100%","height":"150rpx","backgroundColor":"#252529","color":"#252529","fontSize":"36rpx","textAlign":"center","lineHeight":"100rpx","display":"flex","justifyContent":"center","alignItems":"center","zIndex":1000,"position":"fixed","bottom":0,"transform":"translateX(-50%)","left":"50%"}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5,"fontSize":10,"zIndex":100,"overflowY":"auto"}},"emotion-detection-box1":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"350rpx"}},"emotion-detection-box2":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"450rpx","left":"35%"}},"emotion-detection-box3":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"450rpx","right":"35%"}},"emotion-detection-box4":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"800rpx","right":"35%"}},"emotion-detection-box5":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"800rpx","left":"35%"}},"emotion-detection-title":{"":{"fontSize":"22rpx","color":"#FFFFFF","fontWeight":"bold","backgroundColor":"#4A4A57","paddingTop":"10rpx","paddingRight":"20rpx","paddingBottom":"10rpx","paddingLeft":"20rpx","borderRadius":"10rpx"}},"green-circle":{"":{"position":"absolute","width":"45rpx","height":"45rpx","backgroundColor":"#9EE44D","borderRadius":50,"top":95,"zIndex":30,"borderWidth":"3rpx","borderStyle":"solid","borderColor":"#FFFFFF"}},"green-circle1":{"":{"position":"absolute","width":"22rpx","height":"22rpx","backgroundColor":"#b3bec1","borderRadius":50,"top":102}},"expand-button":{"":{"color":"#9EE44D","borderWidth":"medium","borderStyle":"none","borderColor":"#000000","paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"textAlign":"center","textDecoration":"underline","fontSize":16,"marginTop":0,"marginRight":0,"marginBottom":0,"marginLeft":0,"cursor":"pointer","backgroundColor":"#373742","color:hover":"#9EE44D","textDecoration:hover":"underline"}},"expand-image":{"":{"width":"150rpx","height":"55rpx","cursor":"pointer","marginTop":0,"marginRight":"auto","marginBottom":0,"marginLeft":"auto"}},"popup-overlay":{"":{"position":"fixed","top":0,"left":0,"width":"100%","height":"100%","backgroundColor":"rgba(0,0,0,0.5)","display":"flex","justifyContent":"center","alignItems":"center","zIndex":1000}},"popup-content":{"":{"width":"90%","backgroundColor":"#3C3C47","borderRadius":"50rpx","paddingTop":"50rpx","paddingRight":"50rpx","paddingBottom":"50rpx","paddingLeft":"50rpx"}},"popup-header":{"":{"display":"flex","justifyContent":"space-between","marginBottom":"20rpx"}},"popup-title":{"":{"color":"#FFFFFF","fontSize":"40rpx","fontWeight":"bold","marginBottom":20}},"popup-close":{"":{"color":"#FFFFFF","fontSize":"40rpx","position":"absolute","right":5}},"popup-input":{"":{"backgroundColor":"#2F2F38","color":"#FFFFFF","paddingTop":"20rpx","paddingRight":"20rpx","paddingBottom":"20rpx","paddingLeft":"20rpx","borderRadius":"30rpx","marginBottom":"20rpx","width":"80%"}},"popup-section":{"":{"marginBottom":"20rpx"}},"popup-question":{"":{"color":"#FFFFFF","fontSize":"30rpx","fontWeight":"bold","marginTop":10,"marginBottom":10}},"popup-options":{"":{"display":"flex","flexDirection":"row","flexWrap":"wrap","alignItems":"flex-start"}},"popup-option":{"":{"backgroundColor":"#2F2F38","color":"#FFFFFF","borderTopLeftRadius":"50rpx","borderTopRightRadius":"0rpx","borderBottomRightRadius":"0rpx","borderBottomLeftRadius":"50rpx","paddingTop":"20rpx","paddingRight":"60rpx","paddingBottom":"20rpx","paddingLeft":"60rpx","marginRight":"10rpx","marginBottom":"10rpx","width":"auto","fontSize":14},".active":{"backgroundColor":"#9EE44D","color":"#2F2F38"}},"popup-option1":{"":{"backgroundColor":"#2F2F38","color":"#FFFFFF","borderRadius":"0rpx","paddingTop":"20rpx","paddingRight":"60rpx","paddingBottom":"20rpx","paddingLeft":"60rpx","marginRight":"10rpx","marginBottom":"10rpx","width":"auto","fontSize":14},".active":{"backgroundColor":"#9EE44D","color":"#2F2F38"}},"popup-option2":{"":{"backgroundColor":"#2F2F38","color":"#FFFFFF","borderTopLeftRadius":"0rpx","borderTopRightRadius":"30rpx","borderBottomRightRadius":"30rpx","borderBottomLeftRadius":"0rpx","paddingTop":"20rpx","paddingRight":"60rpx","paddingBottom":"20rpx","paddingLeft":"60rpx","marginRight":"10rpx","marginBottom":"10rpx","width":"auto","fontSize":14},".active":{"backgroundColor":"#9EE44D","color":"#2F2F38"}},"popup-tags":{"":{"display":"flex","flexDirection":"row","flexWrap":"wrap","alignItems":"flex-start","width":"100%","marginBottom":10}},"popup-tags-outside":{"":{"display":"flex","flexDirection":"row","flexWrap":"wrap","alignItems":"flex-start","marginBottom":10}},"popup-tag-outside":{"":{"backgroundColor":"#9EE44D","color":"#000000","paddingTop":"15rpx","paddingRight":"30rpx","paddingBottom":"15rpx","paddingLeft":"30rpx","borderRadius":"30rpx","marginTop":5,"marginRight":5,"marginBottom":5,"marginLeft":5,"whiteSpace":"nowrap","cursor":"pointer","fontSize":14}},"popup-tag":{"":{"backgroundColor":"#2F2F38","color":"#FFFFFF","paddingTop":"20rpx","paddingRight":"40rpx","paddingBottom":"20rpx","paddingLeft":"40rpx","borderRadius":"30rpx","marginTop":5,"marginRight":5,"marginBottom":5,"marginLeft":5,"whiteSpace":"nowrap","cursor":"pointer","fontSize":14},".active":{"backgroundColor":"#9EE44D","color":"#2F2F38"}},"custom-tag":{"":{"borderWidth":"1rpx","borderStyle":"dashed","borderColor":"#FFFFFF"}},"popup-button":{"":{"backgroundImage":"linear-gradient(-30deg, #EDFB8B -20%, #9EE44D 120%)","color":"#2F2F38","width":"100%","paddingTop":"5rpx","paddingRight":"5rpx","paddingBottom":"5rpx","paddingLeft":"5rpx","borderRadius":"50rpx","textAlign":"center","marginTop":10}},"upload-button":{"":{"width":"100%","backgroundImage":"linear-gradient(-30deg, #EDFB8B -20%, #9EE44D 120%)","borderRadius":"50rpx","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"row","paddingTop":"20rpx","paddingRight":"20rpx","paddingBottom":"20rpx","paddingLeft":"20rpx","marginBottom":"30rpx"}},"back-button":{"":{"backgroundColor":"#2F2F38","color":"#ffffff","width":40,"paddingTop":"5rpx","paddingRight":"5rpx","paddingBottom":"5rpx","paddingLeft":"5rpx","textAlign":"left","marginTop":10,"fontSize":30}},"unlocked-content":{"":{"display":"flex","justifyContent":"center","alignItems":"center","height":"100%","paddingTop":"0rpx","paddingRight":"0rpx","paddingBottom":"0rpx","paddingLeft":"0rpx","position":"absolute","top":45}},"card-score":{"":{"fontSize":"36rpx","fontWeight":"bold","position":"absolute","top":0,"left":"70%","color":"#000000","marginBottom":"10rpx"}}};

  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-y": "",
        style: { "height": "100%" }
      }, [
        vue.createElementVNode("view", { class: "content" }, [
          vue.createElementVNode("image", {
            class: "iconback",
            src: _imports_0$1,
            mode: "widthFix",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goToDashboard && $options.goToDashboard(...args))
          }),
          vue.createElementVNode("image", {
            class: "iconrenew",
            src: _imports_1$1,
            mode: "widthFix"
          }),
          vue.createCommentVNode(' <view class="debug-info"> '),
          vue.createCommentVNode(" \u663E\u793A\u4ECE\u4E0A\u4E00\u4E2A\u9875\u9762\u63A5\u6536\u5230\u7684\u6570\u636E  \u8FD9\u4E2A\u662F\u4FEE\u6539\u4FE1\u606F\u7684\u529F\u80FD\uFF0C\u80FD\u4E0D\u80FD\u70B9\u5F00\u7684\u65F6\u5019\uFF0C\u5F39\u51FA\u6765\u7684\u7A97\u53E3\u548C\u5916\u9762\u7684\u662F\u4E00\u81F4\u7684"),
          vue.createCommentVNode(" <text>this.contactDetails\uFF1A{{ this.contactDetails }}</text> "),
          vue.createCommentVNode(" <text>personalName: {{ personalName }}</text> "),
          vue.createCommentVNode(" <text>profileName: {{ name }}</text> "),
          vue.createCommentVNode(" <text>name: {{ name }}</text> "),
          vue.createCommentVNode(" <text>relation: {{ relation }}</text> "),
          vue.createCommentVNode(" <text>tags: {{ JSON.stringify(tags) }}</text> "),
          vue.createCommentVNode(" <text>contactId: {{ contactId }}</text> "),
          vue.createCommentVNode(" </view> "),
          vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u72471 "),
          vue.createElementVNode("view", { class: "card-a" }, [
            vue.createElementVNode("image", {
              class: "illustrationhead",
              src: _imports_2$1,
              mode: "widthFix"
            }),
            vue.createElementVNode("view", { class: "card1inner" }, [
              vue.createElementVNode("view", { class: "card2inner" }, [
                vue.createElementVNode(
                  "text",
                  { class: "usercard-title1" },
                  vue.toDisplayString($data.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("image", {
                  class: "editillustration",
                  src: _imports_3$1,
                  mode: "widthFix",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.openPopup && $options.openPopup(...args))
                })
              ]),
              vue.createElementVNode("view", { class: "popup-tags-outside" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.tags, (tag) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: tag,
                        class: "popup-tag-outside"
                      },
                      vue.toDisplayString(tag),
                      1
                      /* TEXT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "card-title1" }, "\u5173\u7CFB\u89E3\u7801\u5668"),
          vue.createElementVNode("text", { class: "card-title15" }, "\u4E00\u8D77\u5206\u6790\u804A\u5929\u8BB0\u5F55"),
          vue.createCommentVNode(' 		<view class="card-container">\n		  <view class="card-b">\n			<text class="card-titleaa">\u57FA\u7840</text>\n			<text class="card-titleab">\u4EB2\u5BC6\u6307\u6570</text>\n			<image class="illustrationlock" src="/static/lock.png" mode="widthFix"></image>\n		  </view>\n		  <view class="card-b">\n			<text class="card-titleaa">\u57FA\u7840</text>\n			<text class="card-titleab">\u4EB2\u5BC6\u6307\u6570</text>\n			<image class="illustrationlock" src="/static/lock.png" mode="widthFix"></image>\n		  </view>\n		  <view class="card-b">\n			<text class="card-titleaa">\u57FA\u7840</text>\n			<text class="card-titleab">\u4EB2\u5BC6\u6307\u6570</text>\n			<image class="illustrationlock" src="/static/lock.png" mode="widthFix"></image>\n		  </view>\n		</view> '),
          vue.createElementVNode("view", { class: "small-card-container" }, [
            vue.createElementVNode("scroll-view", {
              "scroll-x": "",
              style: { "width": "100%" }
            }, [
              vue.createCommentVNode(" New wrapper to arrange cards horizontally "),
              vue.createElementVNode("view", { class: "card-wrapper" }, [
                vue.createElementVNode("view", {
                  class: "card-b",
                  onClick: _cache[2] || (_cache[2] = ($event) => $options.unlockCard("intimacy"))
                }, [
                  vue.createElementVNode("text", { class: "card-titleaa" }, "\u57FA\u7840"),
                  vue.createElementVNode("text", { class: "card-titleab" }, "\u4EB2\u5BC6\u6307\u6570"),
                  !$data.cards.intimacy.unlocked ? (vue.openBlock(), vue.createElementBlock("image", {
                    key: 0,
                    class: "illustrationlock",
                    src: _imports_4$1,
                    mode: "widthFix"
                  })) : (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "unlocked-content"
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "card-score" },
                      vue.toDisplayString($data.cards.intimacy.score),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "card-description" },
                      vue.toDisplayString(this.contactDetails.message),
                      1
                      /* TEXT */
                    )
                  ]))
                ]),
                vue.createElementVNode("view", {
                  class: "card-b1",
                  onClick: _cache[3] || (_cache[3] = ($event) => $options.unlockCard("opinion"))
                }, [
                  vue.createElementVNode("text", { class: "card-titleaa" }, "\u57FA\u7840"),
                  vue.createElementVNode("text", { class: "card-titleab" }, "TA\u5BF9\u4F60\u7684\u770B\u6CD5"),
                  !$data.cards.opinion.unlocked ? (vue.openBlock(), vue.createElementBlock("image", {
                    key: 0,
                    class: "illustrationlock",
                    src: _imports_4$1,
                    mode: "widthFix"
                  })) : (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "unlocked-content"
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "card-description" },
                      vue.toDisplayString(this.contactDetails.message),
                      1
                      /* TEXT */
                    )
                  ]))
                ]),
                vue.createElementVNode("view", { class: "card-b2" }, [
                  vue.createElementVNode("text", { class: "card-titleaa" }, "\u57FA\u7840"),
                  vue.createElementVNode("text", { class: "card-titleab" }, "PUA\u9274\u522B"),
                  vue.createElementVNode("image", {
                    class: "illustrationlock",
                    src: _imports_4$1,
                    mode: "widthFix"
                  })
                ])
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "card-title1" }, "\u5999\u8BA1\u56CA"),
          vue.createElementVNode("text", { class: "card-title15" }, "\u6839\u636E\u5173\u7CFB\u5DE7\u5999\u5EFA\u8BAE\uFF0C\u795D\u4F60\u5E94\u5BF9\u804C\u573A\u96BE\u9898"),
          vue.createElementVNode("image", {
            class: "illustration32",
            src: _imports_5$1,
            mode: "widthFix"
          }),
          vue.createElementVNode("view", {
            class: "upload-button",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.chooseImage && $options.chooseImage(...args))
          }, [
            vue.createElementVNode("image", {
              class: "uploadillustration",
              src: _imports_6,
              mode: "widthFix"
            }),
            vue.createElementVNode("text", { class: "upload-title" }, "\u4E0A\u4F20")
          ]),
          vue.createElementVNode("text", { class: "card-title16" }, "\u66F4\u591A\u804A\u5929\u622A\u56FE\u6709\u52A9\u4E8E\u83B7\u53D6\u66F4\u51C6\u786E\u7684\u5206\u6790"),
          $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "popup-overlay"
          }, [
            vue.createElementVNode("view", {
              class: "popup-content",
              onClick: _cache[11] || (_cache[11] = vue.withModifiers(() => {
              }, ["stop"]))
            }, [
              vue.createElementVNode("view", { class: "popup-header" }, [
                vue.createElementVNode("text", { class: "popup-title" }, "\u7F16\u8F91\u4EBA\u8109\u6863\u6848"),
                vue.createElementVNode("text", { class: "popup-question" }, "\u5148\u7ED9TA\u8D77\u4E2A\u6635\u79F0\u5427\uFF01"),
                vue.createElementVNode("text", {
                  class: "popup-close",
                  onClick: _cache[5] || (_cache[5] = (...args) => $options.closePopup && $options.closePopup(...args))
                }, "\xD7")
              ]),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "popup-input",
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.editName = $event),
                  placeholder: "\u8BF7\u8F93\u5165\u540D\u5B57"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.editName]
              ]),
              vue.createElementVNode("view", { class: "popup-section" }, [
                vue.createElementVNode("text", { class: "popup-question" }, "TA\u662F\u4F60\u7684\uFF1F")
              ]),
              vue.createElementVNode("view", { class: "popup-options" }, [
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["popup-option", { active: $data.editRelation === "\u540C\u4E8B" }]),
                    onClick: _cache[7] || (_cache[7] = ($event) => $options.selectOption("\u540C\u4E8B"))
                  },
                  "\u540C\u4E8B",
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["popup-option1", { active: $data.editRelation === "\u8001\u677F" }]),
                    onClick: _cache[8] || (_cache[8] = ($event) => $options.selectOption("\u8001\u677F"))
                  },
                  "\u8001\u677F",
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass(["popup-option2", { active: $data.editRelation === "\u4E0B\u5C5E" }]),
                    onClick: _cache[9] || (_cache[9] = ($event) => $options.selectOption("\u4E0B\u5C5E"))
                  },
                  "\u4E0B\u5C5E",
                  2
                  /* CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "popup-section" }, [
                vue.createElementVNode("text", { class: "popup-question" }, "\u54EA\u4E9B\u6807\u7B7E\u53EF\u4EE5\u7528\u6765\u5F62\u5BB9TA\uFF1F")
              ]),
              vue.createElementVNode("view", { class: "popup-tags" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.currentTags, (tag) => {
                    return vue.openBlock(), vue.createElementBlock("text", {
                      key: tag,
                      class: vue.normalizeClass(["popup-tag", { active: $data.editTags.includes(tag) }]),
                      onClick: ($event) => $options.toggleTag(tag)
                    }, vue.toDisplayString(tag), 11, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode(
                "button",
                {
                  class: "popup-button",
                  onClick: _cache[10] || (_cache[10] = (...args) => $options.confirmEdit && $options.confirmEdit(...args)),
                  style: vue.normalizeStyle({ opacity: $options.canConfirmEdit ? 1 : 0.5 })
                },
                " \u786E\u8BA4\u66F4\u6539 ",
                4
                /* STYLE */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u6DFB\u52A0\u8272\u5361\u72472 ")
        ])
      ])
    ]);
  }
  const PagesProfileProfile = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["styles", [_style_0$4]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/profile/profile.uvue"]]);

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
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["styles", [_style_0$3]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/login/login.uvue"]]);

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
                  response: {
                      personal_info: {
                          name: '',
                          tag: '',
                          tag_description: '',
                          job_id: ''
                      },
                      eq_scores: {
                          score: 0,
                          dimension1_score: 0,
                          dimension1_detail: '',
                          dimension2_score: 0,
                          dimension2_detail: '',
                          dimension3_score: 0,
                          dimension3_detail: '',
                          dimension4_score: 0,
                          dimension4_detail: '',
                          dimension5_score: 0,
                          dimension5_detail: '',
                          summary: '',
                          detail: '',
                          overall_suggestion: '',
                          detail_summary: ''
                      },
                      contacts: []
                  }
              },
              intervalId: null,
              showSplash: true,
              progress: 0,
              progressInterval: null,
              // 新增的闪屏相关数据
              splashImageLeft1: 0,
              splashImageLeft2: 2000,
              imageWidth: 2000,
              interval: null,
              isExpanded: false, // 默认收起状态
          };
      },
      computed: {
          formattedBirthday() {
              if (this.birthday) {
                  const date = new Date(this.birthday.year, this.birthday.month - 1, this.birthday.day);
                  return date.toLocaleDateString();
              }
              return '未设置';
          }
      },
      onLoad(option = null) {
          uni.__log__('log', 'at pages/result/result.uvue:269', 'Received options:', option);
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
                  uni.__log__('error', 'at pages/result/result.uvue:282', 'Error parsing options:', e);
                  this.selectedOptions = [];
              }
          }
          if (option.birthday) {
              try {
                  this.birthday = UTS.JSON.parse(decodeURIComponent(option.birthday));
              }
              catch (e) {
                  uni.__log__('error', 'at pages/result/result.uvue:291', 'Error parsing birthday:', e);
                  this.birthday = null;
              }
          }
          uni.__log__('log', 'at pages/result/result.uvue:296', 'Parsed data:', {
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
          if (this.progressInterval) {
              clearInterval(this.progressInterval);
          }
          if (this.interval) {
              clearInterval(this.interval);
          }
      },
      methods: {
          progressWidth(value = null) {
              // 计算进度条宽度百分比
              const percentage = (value / this.maxScore) * 100;
              // uni.__log__('log','at pages/result/result.uvue:330','${percentage}%：', `${percentage}%`)
              return `${percentage}%`;
          },
          circleLeftPosition(value = null) {
              // 获取进度条实际宽度
              const percentage1 = (value / this.maxScore) * 100;
              const progressBarWidth = uni.getSystemInfoSync().windowWidth * 0.8; // 80%的屏幕宽度作为进度条的实际宽度
              uni.__log__('log', 'at pages/result/result.uvue:337', percentage1);
              return (percentage1 / 100) * progressBarWidth;
          },
          drawRadar() {
              // 保持原有的雷达图绘制逻辑
              const query = uni.createSelectorQuery().in(this);
              query.select('#radarCanvas')
                  .fields({ node: true, size: true, context: true })
                  .exec((res) => {
                  if (!res[0]) {
                      uni.__log__('error', 'at pages/result/result.uvue:347', 'Canvas element not found');
                      return null;
                  }
                  const canvas = res[0].node;
                  const radarCtx = canvas.getContext('2d');
                  if (!radarCtx) {
                      uni.__log__('error', 'at pages/result/result.uvue:353', 'Unable to get 2D context');
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
                      uni.__log__('error', 'at pages/result/result.uvue:375', 'Invalid homepage data');
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
              // 保持原有的雷达图绘制逻辑
              const numSides = data.length;
              const angleSlice = (Math.PI * 2) / numSides;
              // 设置起始角度为 -Math.PI / 2 确保第一个点从顶部开始绘制，这样整个图就会变成水平的
              const startAngle = -Math.PI / 2;
              // 绘制网格
              ctx.strokeStyle = '#aaa8ac';
              ctx.lineWidth = 1;
              for (let i = 1; i <= 2; i++) {
                  ctx.beginPath();
                  for (let j = 0; j <= numSides; j++) {
                      const angle = startAngle + j * angleSlice;
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
                  const angle = startAngle + i * angleSlice;
                  const x = center.x + radius * Math.cos(angle);
                  const y = center.y + radius * Math.sin(angle);
                  ctx.beginPath();
                  ctx.moveTo(center.x, center.y);
                  ctx.lineTo(x, y);
                  ctx.stroke();
              }
              // 绘制数据区域
              ctx.beginPath();
              ctx.fillStyle = 'rgba(164, 163, 171, 0.3)';
              ctx.strokeStyle = 'rgba(158, 228, 77, 0.8)';
              ctx.lineWidth = 4; // 设置绿线（数据区域）的粗细
              for (let i = 0; i <= numSides; i++) {
                  const angle = startAngle + i * angleSlice;
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
                  const angle = startAngle + i * angleSlice;
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
                  url: `/pages/dashboard/dashboard?userId=${this.userId}&username=${encodeURIComponent(this.username)}&jobId=${this.jobId}` // 添加查询参数
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
                          uni.__log__('log', 'at pages/result/result.uvue:476', 'Homepage data received:', that.homepageData);
                          that.$nextTick(() => {
                              that.drawRadar();
                          });
                          // 当后端数据接收成功，立即结束闪屏
                          that.showSplash = false;
                          if (that.interval) {
                              clearInterval(that.interval);
                          }
                          if (that.progressInterval) {
                              clearInterval(that.progressInterval);
                          }
                      }
                      else {
                          uni.__log__('error', 'at pages/result/result.uvue:490', 'Failed to fetch homepage data:', response.statusCode);
                      }
                  },
                  fail(error) {
                      uni.__log__('error', 'at pages/result/result.uvue:494', 'Error fetching homepage data:', error);
                  }
              });
          },
          startProgress() {
              // 10秒内将进度增加到100%
              const totalDuration = 30000; // 10秒
              const intervalDuration = totalDuration / 100; // 每次更新的间隔时间
              this.progressInterval = setInterval(() => {
                  if (this.progress < 100) {
                      this.progress += 1;
                  }
                  else {
                      clearInterval(this.progressInterval);
                  }
              }, intervalDuration);
          },
          animateImage() {
              this.interval = setInterval(() => {
                  // 更新两张图片的位置
                  this.splashImageLeft1 -= 10; // 每次移动10rpx
                  this.splashImageLeft2 -= 10;
                  // 如果第一张图片完全离开屏幕，则将它的位置重置到第二张图片的后面
                  if (this.splashImageLeft1 <= -this.imageWidth) {
                      this.splashImageLeft1 = this.splashImageLeft2 + this.imageWidth;
                  }
                  // 如果第二张图片完全离开屏幕，则将它的位置重置到第一张图片的后面
                  if (this.splashImageLeft2 <= -this.imageWidth) {
                      this.splashImageLeft2 = this.splashImageLeft1 + this.imageWidth;
                  }
              }, 30); // 每30毫秒更新一次位置
          },
          expand() {
              this.isExpanded = true; // 只展开，不再收起
          },
      },
      mounted() {
          this.startProgress(); // 开始进度条
          this.animateImage(); // 开始图片动画
          // 在设定的持续时间后隐藏闪屏（例如，10秒）
          setTimeout(() => {
              this.showSplash = false;
              clearInterval(this.interval); // 停止动画
          }, 30000);
      },
      beforeDestroy() {
          // 页面销毁前清除定时器
          if (this.intervalId) {
              clearInterval(this.intervalId);
          }
          if (this.progressInterval) {
              clearInterval(this.progressInterval);
          }
          if (this.interval) {
              clearInterval(this.interval);
          }
      }
  });

  const _imports_0 = "/static/cta.png";

  const _imports_1 = "/static/img1.png";

  const _imports_2 = "/static/green.png";

  const _imports_3 = "/static/star.png";

  const _imports_4 = "/static/up.png";

  const _imports_5 = "/static/up3.png";

  const _style_0$2 = {"container":{"":{"position":"relative","backgroundColor":"#2F2F38","flexDirection":"column","alignItems":"center","paddingTop":"100rpx","width":"100%","height":"100%","overflowY":"auto","WebkitOverflowScrolling":"touch"}},"splash-screen":{"":{"position":"absolute","top":0,"left":0,"width":"100%","height":"100%","backgroundColor":"#000000","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","zIndex":1000}},"splash-text":{"":{"color":"#FFFFFF","fontSize":"40rpx","textAlign":"left","top":"20%","position":"absolute","marginBottom":"20rpx","lineHeight":"40rpx","fontWeight":"bold"}},"splash-progress-text":{"":{"top":200,"fontSize":"40rpx","color":"#9EE44D","fontWeight":"bold","marginTop":"100rpx"}},"splash-progress-bar":{"":{"width":"20%","height":"20rpx","top":200,"backgroundColor":"#3d3d3d","borderRadius":"15rpx","marginTop":"20rpx","marginRight":0,"marginBottom":"20rpx","marginLeft":0,"overflow":"hidden"}},"splash-progress-fill":{"":{"height":"100%","backgroundColor":"#9EE44D","borderRadius":"15rpx"}},"splash-image":{"":{"width":"2000rpx","height":"auto","marginTop":"20rpx","position":"absolute"}},"content":{"":{"flexDirection":"column","alignItems":"center"}},"background-curve":{"":{"width":"200%","height":"500rpx","backgroundColor":"#2F2F38","position":"absolute","top":"-100rpx","left":"-300rpx","transform":"rotate(35deg)","zIndex":5}},"illustration1":{"":{"width":"800rpx","height":"auto","position":"relative","zIndex":10,"top":-5,"left":0,"marginTop":"80rpx","marginBottom":"0rpx"}},"illustration2":{"":{"width":"130rpx","height":"auto","position":"absolute","top":"1030rpx","left":"290rpx"}},"illustration3":{"":{"width":"130rpx","height":"auto","position":"absolute","top":"100rpx","left":"290rpx"}},"illustration4":{"":{"width":"70rpx","height":"auto","position":"absolute","marginTop":"-20rpx","left":"390rpx"}},"illustration5":{"":{"width":"150rpx","height":"auto","position":"absolute","marginTop":"-20rpx","left":"520rpx"}},"illustration6":{"":{"width":"400rpx","height":"auto","position":"absolute","bottom":"-20rpx","left":"250rpx"}},"card":{"":{"width":370,"backgroundColor":"#373742","borderRadius":"20rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"60rpx","paddingRight":"30rpx","paddingBottom":"0rpx","paddingLeft":"30rpx","marginBottom":"30rpx"}},"card1":{"":{"width":370,"backgroundColor":"#373742","borderRadius":"20rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"60rpx","paddingRight":"30rpx","paddingBottom":"0rpx","paddingLeft":"30rpx","marginBottom":"30rpx"}},"card2":{"":{"width":370,"backgroundColor":"#373742","borderRadius":"20rpx","boxShadow":"0 4rpx 8rpx rgba(0, 0, 0, 0.1)","position":"relative","zIndex":20,"textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","paddingTop":"60rpx","paddingRight":"30rpx","paddingBottom":"0rpx","paddingLeft":"30rpx","marginBottom":"200rpx"}},"score-title-head":{"":{"fontSize":"40rpx","fontWeight":"bold","color":"#FFFFFF","marginTop":"30rpx","marginBottom":"5rpx","position":"relative","zIndex":30}},"score-title":{"":{"fontSize":"40rpx","fontWeight":"bold","color":"#9EE44D","marginBottom":"5rpx"}},"score-title1":{"":{"fontSize":"36rpx","color":"#FFFFFF","marginBottom":"5rpx"}},"score-title2":{"":{"fontSize":"30rpx","color":"#FFFFFF","left":300,"top":-23,"fontWeight":"bold"}},"score-container":{"":{"width":"100%","display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":"80rpx"}},"score-container1":{"":{"width":"100%","display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":"80rpx"}},"score-details":{"":{"display":"flex","marginBottom":"20rpx","marginTop":"20rpx","width":"100%"}},"score-value-large":{"":{"fontSize":"80rpx","fontWeight":"bold","color":"#9EE44D","marginRight":"5rpx"}},"score-value-small":{"":{"fontSize":"40rpx","fontWeight":"normal","color":"#9EE44D","position":"absolute","top":"40rpx","left":"120rpx"}},"progress-bar":{"":{"width":"100%","height":"25rpx","backgroundColor":"rgba(125,123,126,0.5)","borderRadius":"25rpx","overflow":"hidden","marginTop":"5rpx"}},"status-text":{"":{"top":190,"fontSize":"40rpx","color":"#9EE44D","marginTop":"20rpx"}},"progress-bar1":{"":{"width":"85%","height":"15rpx","backgroundColor":"#7d7b7e","borderRadius":"15rpx","overflow":"hidden","marginTop":"15rpx","marginBottom":"15rpx"}},"progress":{"":{"height":"100%","backgroundColor":"#9EE44D"}},"radar-canvas":{"":{"width":"700rpx","height":"500rpx","marginTop":50,"top":-50,"backgroundColor":"rgba(0,0,0,0)"}},"card-content":{"":{"display":"flex","alignItems":"center","justifyContent":"flex-start","marginBottom":"40rpx"}},"emoji":{"":{"width":"60rpx","height":"auto","marginRight":"10rpx"}},"card-text-container":{"":{"display":"flex","flexDirection":"column","alignItems":"flex-start","marginBottom":30}},"icon-text-box":{"":{"display":"flex","alignItems":"center"}},"text-box":{"":{"alignItems":"center","borderWidth":"1rpx","borderStyle":"solid","borderColor":"#373742","paddingTop":"5rpx","paddingRight":"10rpx","paddingBottom":"5rpx","paddingLeft":"10rpx","borderRadius":"10rpx","backgroundColor":"#373742","boxShadow":"0 0 12rpx 0rpx rgba(0, 0, 0, 0.3)"}},"text-box1":{"":{"alignItems":"center","borderWidth":"1rpx","borderStyle":"solid","borderColor":"#373742","paddingTop":"10rpx","paddingRight":"10rpx","paddingBottom":"10rpx","paddingLeft":"10rpx","borderRadius":"10rpx","backgroundColor":"#373742","boxShadow":"none","marginTop":"0rpx","marginRight":"10rpx","marginBottom":"10rpx","marginLeft":"10rpx"}},"card-title":{"":{"fontSize":"28rpx","backgroundColor":"#EDFB8B","marginBottom":"10rpx","paddingTop":10,"paddingRight":10,"paddingBottom":10,"paddingLeft":10,"borderTopLeftRadius":"20rpx","borderTopRightRadius":"20rpx","borderBottomRightRadius":"20rpx","borderBottomLeftRadius":"0rpx"}},"card-title2":{"":{"fontSize":"28rpx","backgroundColor":"#9EE44D","marginBottom":"10rpx","marginTop":"20rpx","paddingTop":10,"paddingRight":10,"paddingBottom":10,"paddingLeft":10,"borderTopLeftRadius":"20rpx","borderTopRightRadius":"20rpx","borderBottomRightRadius":"20rpx","borderBottomLeftRadius":"0rpx"}},"card-title1":{"":{"fontSize":"32rpx","color":"#FFFFFF","fontWeight":"bold","marginBottom":"10rpx"}},"logo":{"":{"width":"300rpx","height":"300rpx","position":"absolute","top":"11%","left":"50%","transform":"translate(-50%, -50%)"}},"card-description":{"":{"fontSize":"32rpx","color":"#FFFFFF","lineHeight":1.5,"marginTop":"10rpx"}},"guide-button":{"":{"width":"80%","height":"100rpx","backgroundColor":"#9EE44D","color":"#252529","fontSize":"36rpx","borderRadius":"50rpx","textAlign":"center","lineHeight":"100rpx","display":"flex","justifyContent":"center","alignItems":"center","zIndex":1000,"position":"fixed","bottom":40,"transform":"translateX(-50%)","left":"50%"}},"debug-info":{"":{"position":"absolute","top":0,"left":0,"right":0,"backgroundColor":"rgba(0,0,0,0.5)","color":"#FFFFFF","paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5,"fontSize":10,"zIndex":100,"overflowY":"auto"}},"emotion-detection-box1":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"350rpx"}},"emotion-detection-box2":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"450rpx","left":"35%"}},"emotion-detection-box3":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"450rpx","right":"35%"}},"emotion-detection-box4":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"800rpx","right":"35%"}},"emotion-detection-box5":{"":{"width":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"absolute","top":"800rpx","left":"35%"}},"emotion-detection-title":{"":{"fontSize":"22rpx","color":"#FFFFFF","fontWeight":"bold","backgroundColor":"#4A4A57","paddingTop":"10rpx","paddingRight":"20rpx","paddingBottom":"10rpx","paddingLeft":"20rpx","borderRadius":"10rpx"}},"green-circle":{"":{"position":"absolute","width":"45rpx","height":"45rpx","backgroundColor":"#9EE44D","borderRadius":50,"top":95,"zIndex":30,"borderWidth":"3rpx","borderStyle":"solid","borderColor":"#FFFFFF"}},"green-circle1":{"":{"position":"absolute","width":"22rpx","height":"22rpx","backgroundColor":"#b3bec1","borderRadius":50,"top":102}},"expand-button":{"":{"color":"#9EE44D","borderWidth":"medium","borderStyle":"none","borderColor":"#000000","paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"textAlign":"center","textDecoration":"underline","fontSize":16,"marginTop":0,"marginRight":0,"marginBottom":0,"marginLeft":0,"cursor":"pointer","backgroundColor":"#373742","color:hover":"#9EE44D","textDecoration:hover":"underline"}},"expand-image":{"":{"width":"150rpx","height":"60rpx","cursor":"pointer","marginTop":0,"marginRight":"auto","marginBottom":0,"marginLeft":"auto","bottom":30}}};

  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      $data.showSplash ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "splash-screen"
      }, [
        vue.createCommentVNode(" Text on the splash screen "),
        vue.createElementVNode("text", { class: "splash-text" }, "\u63A5\u4E0B\u6765\uFF0C\n\u4E00\u8D77\u6765\u770B\u770B\u4F60\u7684\u804C\u573A\u4EBA\u683C\u7C7B\u578B\u5427\uFF01"),
        vue.createCommentVNode(" Display two images for continuous scrolling "),
        vue.createElementVNode(
          "image",
          {
            class: "splash-image",
            src: _imports_0,
            mode: "widthFix",
            style: vue.normalizeStyle({ left: $data.splashImageLeft1 + "rpx" })
          },
          null,
          4
          /* STYLE */
        ),
        vue.createElementVNode(
          "image",
          {
            class: "splash-image",
            src: _imports_0,
            mode: "widthFix",
            style: vue.normalizeStyle({ left: $data.splashImageLeft2 + "rpx" })
          },
          null,
          4
          /* STYLE */
        ),
        vue.createCommentVNode(" Progress percentage "),
        vue.createElementVNode(
          "text",
          { class: "splash-progress-text" },
          vue.toDisplayString($data.progress) + "%",
          1
          /* TEXT */
        ),
        vue.createCommentVNode(" Progress bar container "),
        vue.createElementVNode("view", { class: "splash-progress-bar" }, [
          vue.createCommentVNode(" Dynamic progress bar fill "),
          vue.createElementVNode(
            "view",
            {
              class: "splash-progress-fill",
              style: vue.normalizeStyle({ width: $data.progress + "%" })
            },
            null,
            4
            /* STYLE */
          )
        ]),
        vue.createCommentVNode(" \u72B6\u6001\u6587\u5B57 "),
        vue.createElementVNode("text", { class: "status-text" }, "\u5408\u6210\u4E2D...")
      ])) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        [
          vue.createCommentVNode(" \u4E3B\u5185\u5BB9\u5728 showSplash \u4E3A false \u65F6\u624D\u6E32\u67D3 "),
          vue.createElementVNode("scroll-view", {
            "scroll-y": "",
            style: { "height": "100%" }
          }, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createCommentVNode(" \u4FDD\u6301\u539F\u6709\u7684\u4E3B\u5185\u5BB9 "),
              vue.createElementVNode("text", { class: "score-title-head" }, "\u6211\u7684\u68C0\u6D4B\u7ED3\u679C"),
              vue.createCommentVNode(" \u80CC\u666F\u548C\u5F27\u7EBF "),
              vue.createElementVNode("view", { class: "background-curve" }),
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
                      vue.toDisplayString(Math.round($data.homepageData.response.eq_scores.score)),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("text", { class: "score-value-small" }, "\u5206")
                  ]),
                  vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "green-circle1",
                      style: vue.normalizeStyle({ left: $options.circleLeftPosition(25) + "px" })
                    },
                    null,
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "green-circle1",
                      style: vue.normalizeStyle({ left: $options.circleLeftPosition(50) + "px" })
                    },
                    null,
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "green-circle1",
                      style: vue.normalizeStyle({ left: $options.circleLeftPosition(75) + "px" })
                    },
                    null,
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode("view", { class: "progress-bar" }, [
                    vue.createCommentVNode(' <view class="progress" :style="{ width: progressWidth(42) }"></view> '),
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
                  ]),
                  vue.createTextVNode(" . "),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "green-circle",
                      style: vue.normalizeStyle({ left: $options.circleLeftPosition($data.homepageData.response.eq_scores.score) + "px" })
                    },
                    null,
                    4
                    /* STYLE */
                  )
                ]),
                vue.createCommentVNode(" \u4E94\u7EF4\u96F7\u8FBE\u56FE "),
                vue.createElementVNode("canvas", {
                  id: "radarCanvas",
                  class: "radar-canvas",
                  width: "500",
                  height: "500"
                }),
                vue.createCommentVNode(` <view class="green-circle1" :style="{ left: circleLeftPosition(100) + 'px' }" ></view> `),
                vue.createCommentVNode(" \u60C5\u7EEA\u4FA6\u67E5\u529B\u7B49\u6807\u7B7E "),
                vue.createCommentVNode(" \u4FDD\u6301\u539F\u6709\u7684\u6807\u7B7E\u548C\u5E03\u5C40 "),
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
                vue.createElementVNode("image", {
                  class: "illustration2",
                  src: _imports_2,
                  mode: "widthFix"
                }),
                vue.createElementVNode("view", { class: "card-text-container" }, [
                  vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9\u6846\u548C\u63D2\u56FE\u5728\u540C\u4E00\u884C "),
                  vue.createElementVNode(
                    "text",
                    { class: "card-title" },
                    vue.toDisplayString($data.homepageData.response.eq_scores.summary),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "card-description" },
                    vue.toDisplayString($data.homepageData.response.eq_scores.overall_suggestion),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u72471 "),
              vue.createElementVNode("view", { class: "card1" }, [
                vue.createElementVNode("view", { class: "text-box1" }, [
                  vue.createElementVNode("text", { class: "card-title1" }, "\u63D0\u5347\u79D8\u8BC0")
                ]),
                vue.createElementVNode("image", {
                  class: "illustration3",
                  src: _imports_2,
                  mode: "widthFix"
                }),
                vue.createElementVNode("image", {
                  class: "illustration4",
                  src: _imports_3,
                  mode: "widthFix"
                }),
                vue.createElementVNode("image", {
                  class: "illustration5",
                  src: _imports_4,
                  mode: "widthFix"
                }),
                vue.createElementVNode("image", {
                  class: "illustration6",
                  src: _imports_5,
                  mode: "widthFix"
                }),
                vue.createElementVNode("view", { class: "card-text-container" }, [
                  vue.createCommentVNode(" \u6587\u5B57\u5185\u5BB9\u6846\u548C\u63D2\u56FE\u5728\u540C\u4E00\u884C "),
                  vue.createElementVNode(
                    "text",
                    { class: "card-title2" },
                    vue.toDisplayString($data.homepageData.response.eq_scores.detail_summary),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "card-description" },
                    vue.toDisplayString($data.homepageData.response.eq_scores.detail),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createCommentVNode(" \u6DFB\u52A0\u767D\u8272\u5361\u72472 "),
              vue.createElementVNode("view", { class: "card2" }, [
                vue.createElementVNode("view", { class: "text-box1" }, [
                  vue.createElementVNode("text", { class: "card-title1" }, "\u8BE6\u7EC6\u62A5\u544A")
                ]),
                vue.createElementVNode("image", {
                  class: "illustration3",
                  src: _imports_2,
                  mode: "widthFix"
                }),
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
                    { class: "score-title2" },
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
                    { class: "score-title2" },
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
                vue.createCommentVNode(" \u65B0\u589E\u7684\u5C55\u5F00\u6309\u94AE "),
                !$data.isExpanded ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.expand && $options.expand(...args)),
                  src: _imports_6$1,
                  class: "expand-image"
                })) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode(" \u7EF4\u5EA6\u4E09\u5230\u4E94 "),
                $data.isExpanded ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
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
                        { class: "score-title2" },
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
                        { class: "score-title2" },
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
                        { class: "score-title2" },
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
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : vue.createCommentVNode("v-if", true)
              ]),
              vue.createCommentVNode(" \u6DFB\u52A0\u84DD\u8272\u6309\u94AE "),
              vue.createElementVNode("button", {
                class: "guide-button",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.navigateToGuide && $options.navigateToGuide(...args))
              }, "\u5F00\u542F\u9AD8\u60C5\u5546\u4E4B\u65C5")
            ])
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      ))
    ]);
  }
  const PagesResultResult = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["styles", [_style_0$2]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/result/result.uvue"]]);

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
  const PagesExperienceExperience = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["styles", [_style_0$1]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/pages/experience/experience.uvue"]]);

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
  __definePage('pages/profile/profile',PagesProfileProfile);
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

  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "/Users/wengcekai/Downloads/EQMaster_ios/test2/App.uvue"]]);

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
//# sourceMappingURL=../../../cache/.app-ios/sourcemap/app-service.js.map
