// showAlert.js
export default {
  data () {
    return {}
  },
  methods: {
    showAlert1 () {
      ui.showAlert({
        title: '开票须知',
        content:  '国家税务总局规定：7月1日起，开具增值税普通发票，需提供单位抬头与税号，否者无法用于单位报销；开具增值税专用发票，需提供单位完整信息。请咨询单位财务部门获取相关信息。'
      })
    },
    showAlert2 () {
      ui.showAlert({
        content: '我们团队重视用户隐私并严格遵守相关法律法规的要求。我们对《隐私保护指引》进行了更新，请先阅读内容后再继续使用。',
        buttonText: '了解更多',
        success () {
          ui.showToast({
            title: '触发了解更多'
          })
        }
      })
    },
    showAlert3 () {
      ui.showAlert({
        title: '邀请奖励规则',
        content: `
          <div>
            <ul style="list-style:none">
              <li>1.注册成功后获得注册红包，每个用户仅限领一次。</li>
              <li>2.红包领取后有效期为30天，请尽快使用。</li>
              <li>3.红包可以在投资特定理财项目中使用。</li>
              <li>4.平台杜绝违规操作及作弊行为，若判定为违规操作及作弊行为，国美金融有权取消所获奖励。</li>
              <li>5.本活动的最终解释权归国美金融所有，如有问题，欢迎致电4008-133-233。</li>
            </ul>
        </div>
        `,
        buttonText: '知道了',
        buttonStyle: { color: '#f97d0e' }
      })
    }
    
  }
}
