Page({
  data: {
    mainActiveIndex: 0,
    activeId: null,
    items:[
      {
        // 导航名称
        text: '名医门诊',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        // badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: false,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '名医门诊',
            // id，作为匹配选中状态的标识
            id: 1,
          },
        ],
      },
      {  
        text: '内科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部门诊内科',
                id: 1,
          },
          {
            text: '院本部门诊神经内科',
            id: 2,
          },
          {
            text: '院本部门诊心血管内科',
            id: 3,
          },
          {
            text: '院本部心衰门诊',
            id: 4,
          },
          {
            text: '院本部门诊心血管内科二',
            id: 5,
          },
          {
            text: '院本部心律失常门诊',
            id: 6,
          },
          {
            text: '院本部门诊呼吸与危重症医学科',
            id: 7,
          },
          {
            text: '院本部门诊消化内科',
            id: 8,
          },
          {
            text: '院本部肾内科',
            id: 9,
          },
          {
            text: '院本部腹膜透析专病门诊',
            id: 10,
          },
          {
            text: '院本部门诊内分泌科',
            id: 11,
          },
          {
            text: '院本部糖尿病专病门诊',
            id: 12,
          },
          {
            text: '院本部高尿酸血症专病门诊',
            id: 13,
          },
          {
            text: '院本部甲状腺专病门诊',
            id: 14,
          },
          {
            text: '院本部骨质疏松专病门诊',
            id: 15,
          },
          {
            text: '院本部门诊脑血管',
            id: 16,
          },
          {
            text: '院本部门诊血液科',
            id: 17,
          },
          {
            text: '院本部门诊肿瘤科',
            id: 18,
          },
          {
            text: '院本部肥胖症门诊',
            id: 19,
          },
          {
            text: '院本部健康管理门诊',
            id: 20,
          },
          {
            text: '院本部门诊结核专科',
            id: 21,
          },
          {
            text: '院本部门诊超声医学科',
            id: 22,
          },
          {
            text: '院本部风湿通风门诊',
            id: 23,
          },
          {
            text: '院本部冠心病高血压门诊',
            id: 24,
          },
          {
            text: '院本部帕金森病门诊',
            id: 25,
          },
          {
            text: '院本部甲亢突眼门诊',
            id: 26,
          },
          {
            text: '院本部门诊肠道门诊',
            id: 27,
          },
          {
            text: '院本部幽门螺旋杆菌门诊',
            id: 28,
          },
          {
            text: '院本部神经疑难病',
            id: 29,
          },
          {
            text: '院本部门诊病理科',
            id: 30,
          },
        ],
      },
      {  
        text: '外科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '中医肛肠外科门诊',
                id: 1,
          },
          {
            text: '院本部门诊骨肿瘤创伤骨科',
            id: 2,
          },
          {
            text: '院本部门诊关节骨科病与运动损伤',
            id: 3,
          },
          {
            text: '院本部门诊脊柱外科',
            id: 4,
          },
          {
            text: '院本部门诊胸心外科',
            id: 5,
          },
          {
            text: '院本部肺结节专病门诊',
            id: 6,
          },
          {
            text: '院本部门诊泌尿外科',
            id: 7,
          },
          {
            text: '院本部男性生殖科',
            id: 8,
          },
          {
            text: '院本部接入血管外科门诊',
            id: 9,
          },
          {
            text: '院本部静脉血栓专科门诊',
            id: 10,
          },
          {
            text: '院本部腹痛专家门诊',
            id: 11,
          },
          {
            text: '院本部门诊神经外科',
            id: 12,
          },
          {
            text: '院本部门诊肝胆外科',
            id: 13,
          },
          {
            text: '院本部门诊伤口造口护理专科',
            id: 14,
          },
          {
            text: '院本部皮肤血管瘤专科门诊',
            id: 15,
          },
          {
            text: '院本部肝胆外科教学门诊',
            id: 16,
          },
          {
            text: '院本部老年骨科及足踝外科门诊',
            id: 17,
          },
          {
            text: '院本部门诊小儿外科',
            id: 18,
          },
        ],
      },
      {  
        text: '肿瘤放疗科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部肿瘤放疗门诊',
                id: 1,
          },
        ],
      },
      {  
        text: '妇产科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部产科特需门诊',
                id: 1,
          },
          {
            text: '院本部门诊妇科',
            id: 2,
          },
          {
            text: '院本部中西医结合妇科门诊',
            id: 3,
          },
          {
            text: '院本部不孕不育专科门诊',
            id: 4,
          },
          {
            text: '院本部更年期门诊',
            id: 5,
          },
          {
            text: '院本部中医特色更年期门诊',
            id: 6,
          },
          {
            text: '院本部门诊产科',
            id: 7,
          },
          {
            text: '院本部助产，母乳喂养咨询门诊',
            id: 8,
          },
          {
            text: '院本部产前咨询门诊',
            id: 9,
          },
          {
            text: '院本部整体产后康复中心',
            id: 10,
          },
          {
            text: '院本部产后42天门诊',
            id: 11,
          },
        ],
      },
      {  
        text: '儿科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部门诊儿科',
                id: 1,
          },
          {
            text: '院本部门诊儿童保健科',
            id: 2,
          },
          {
            text: '院本部门诊中医儿科',
            id: 3,
          },
          {
            text: '新生儿科门诊',
            id: 4,
          },
          {
            text: '名医门诊儿童保健科',
            id: 5,
          },
        ],
      },
      {  
        text: '老年医学科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部门诊老年医学科',
                id: 1,
          },
        ],
      },
      {  
        text: '院本部乳腺科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部门诊乳腺科',
                id: 1,
          },
        ],
      },
      {  
        text: '全科医学科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部全科医学门诊',
                id: 1,
          },
          {
            text: '2型糖尿病逆转门诊',
            id: 2,
          },
        ],
      },

      {  
        text: '中医医学中心',
        dot: false,
        disabled: false,
        children: [
          {
            text: '中医体质测评',
                id: 1,
          },
          {
            text: '院本部门诊中医科',
            id: 2,
          },
        ],
      },
      {  
        text: '耳鼻喉科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部门诊耳鼻喉科',
                id: 1,
          },
          {
            text: '院本部新生儿听力筛查门诊',
            id: 2,
          },
        ],
      },
      {  
        text: '口腔医学中心',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部口腔内科',
                id: 1,
          },
          {
            text: '院本部口腔外科及种植专科',
            id: 2,
          },
          {
            text: '院本部口腔正畸科',
            id: 3,
          },
          {
            text: '院本部儿童牙科',
            id: 4,
          },
          {
            text: '院本部口腔综合门诊',
            id: 5,
          },
          {
            text: '院本部口腔专家门诊',
            id: 6,
          },
        ],
      },
      {  
        text: '眼科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部门诊眼科',
                id: 1,
          },
          {
            text: '院本部白内障门诊',
            id: 2,
          },
          {
            text: '院本部眼底病门诊',
            id: 3,
          },
          {
            text: '院本部早产儿视网膜筛查门诊',
            id: 4,
          },
        ],
      },
      {  
        text: '皮肤科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部中西医结合皮肤门诊',
                id: 1,
          },
          {
            text: '院本部门诊皮肤科',
            id: 2,
          },
          {
            text: '院本部痤疮门诊',
            id: 3,
          },
          {
            text: '院本部创面修复门诊',
            id: 4,
          },
        ],
      },
      {  
        text: '疼痛专科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部门诊疼痛专科（介入）',
                id: 1,
          },
          {
            text: '院本部疼痛麻醉专科门诊',
            id: 2,
          },
          {
            text: '院本部痤疮门诊',
            id: 3,
          },
          {
            text: '院本部创面修复门诊',
            id: 4,
          },
        ],
      },
      {  
        text: '康复医学科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '康复科（颈肩腰腿痛）门诊1',
                id: 1,
          },
          {
            text: '康复科（颈肩腰腿痛）门诊2',
            id: 2,
          },
          {
            text: '院本部儿童康复门诊',
            id: 3,
          },
          {
            text: '院本部产后康复门诊',
            id: 4,
          },
        ],
      },
      {  
        text: '营养科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部门诊营养科',
                id: 1,
          },
          {
            text: '院本部非药物体重管理门诊',
            id: 2,
          },
        ],
      },
      {  
        text: '精神心理睡眠科',
        dot: false,
        disabled: false,
        children: [
          {
            text: '精神心理睡眠科',
                id: 1,
          },
        ],
      },
      {  
        text: '院本部便民门诊',
        dot: false,
        disabled: false,
        children: [
          {
            text: '院本部便民门诊',
                id: 1,
          },
        ],
      },
      {  
        text: '核算检查门诊',
        dot: false,
        disabled: false,
        children: [
          {
            text: '核算检查门诊',
                id: 1,
          },
        ],
      },
    ]
  },

  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({ detail = {} }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;

    this.setData({ activeId });
  },
});
