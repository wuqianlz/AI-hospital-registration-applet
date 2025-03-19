# 智能问诊小程序开发文档
### 核心技术

* 微信小程序 (小程序前端)
* Vant Weapp (小程序组件)
* Tdesign (小程序组件)
* ChatGpt等 (AI内核)

### 开发环境
* Windows
* NPM 10.2.3
* VueJs 5.0.8
* Vant Weapp 1.11.7
* element-plus 2.7.5
* Tdesign 1.7.0
* vfonts 0.0.3
* Git

### 微信小程序
* 总Page数量为13个,小程序主要分为以下四大页面:
  1. Shop页面 首页页面，其中包含挂号功能（registered）页面，通过Springboot接口进行处理。以下为所使用的接口:
        `port:8066`
        `/work/getGoods(图片) `
        `/work/addRegistered(挂号) `

  2. Classify页面，此页面主要是展示门诊科室列表
  3. Ai页面，此页面是Ai智能对话页面，目前已经接入AI api ，用户可以在上面进行智能问答，如挂号科室推荐，用药推荐，病情诊断等。以下为所使用的接口:
         `'https://api.chatanywhere.com.cn/v1/chat/completions'`
         `'Authorization':'Bearer sk-OKPZ0LZ4CTvRE0IfYfPd94Z5ul3zpGSbKdzadr7U5SPTg8jX'`
         `'Content-Type':'application/json'`
  
  4. mine页面，此页面是用户个人界面，包含map（院内导航），settings（设置页面），index（登录页面），register（注册页面），diagnosticCard（添加就诊卡页面）展示用户个人信息和设置类，用户可以在这里进行登录注册，设置，院内导航，分享小程序，复诊提醒等功能。以下为所使用的接口:
     `port:8066`
         `/work/map(院内导航)`
         `/work/register(注册)`
         `/work/tologin(登录)`
         `/work/patientCard(就诊卡查询)`
         `/work/addPatientCard(就诊卡添加)`


### 数据库设计
* 数据库主要是由以下表完成，registered表用来存储患者挂号数据，user表用来存储用户数据，doctor表用来存储医生数据，patientcard表用来存储就诊卡数据。
#### registered表结构如下:
        id         |  int           |  主键自增   |    
        name       |  varchar(255)  |  患者名称   |
        sex        |  varchar(255)  |  患者姓名   |
        department |  int           |  挂号科室   |
        phone      |  varchar(255)  |  患者号码   |
        date       |  date          |  挂号时间   |

#### user表结构如下:
        id        |  int           |  主键自增  |
        userName  |  varchar(255)  |  用户名称  |
        userPwd   |  varchar(255)  |  用户密码  |
        status    |  int           |  用户状态  |

#### doctor表结构如下:
        id        |  int           |  主键自增  |
        name      |  varchar(255)  |  医生名称  |
        deparment |  varchar(255)  |  医生科室  |
        introduce |  varchar(255)  |  医生称号  |
        image     |  varchar(255)  |  医生图片  |

#### patientcard表结构如下:
        id             |  int           |  主键自增  |
        name           |  varchar(255)  |  用户名称  |
        gener          |  varchar(255)  |  用户性别  |
        phoneNumber    |  varchar(255)  |  用户号码  |
        identification |  varchar(255)  |  身份证号  |

### AI调用关键性代码
    `    const response = await wx.request({
      url: 'https://api.chatanywhere.com.cn/v1/chat/completions',
      method: 'POST',
      data: {
        "model": "gpt-3.5-turbo",
        "messages": [{
          "role": "user",
          "content": message
        }]
      },
      header: {
        'Authorization': 'Bearer sk-OKPZ0LZ4CTvRE0IfYfPd94Z5ul3zpGSbKdzadr7U5SPTg8jX',
        'Content-Type': 'application/json'
      },
      success: (res) => {
        const reply = res.data.choices[0].message.content;

        this.setData({
          inputMessage: '',
          messages: [...this.data.messages, 
          { content: message, type: 'user', alignment: 'right'},
          { content: reply, type: 'bot', alignment: 'left' },],
          scrollIntoView: 'msg-' + (this.data.messages.length - 1)
        });
      },
      fail: (error) => {
        console.error(error);
      }
    });`





