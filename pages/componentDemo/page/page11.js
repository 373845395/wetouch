// page7.js
export default {
  data () {
    return {
      items: [],
      top: 0,
      bottom: 30,
      proportion: 0,
      // 下拉刷新（初始状态）
      state: 1,
      showLoading: false,
      className: '',
      rotate: 0,
      pullDown: {
        distance: 60,
        onBegin: this.handleBegin,
        onActive: this.handleActive,
        onAfter: this.handleAfter,
        disableContentMove: ['android', 'ios', 'web']
      }
    }
  },
  methods: {
    handleBegin ({ distance, direction }) {
      this.proportion = distance / 60
      // 拉满60px
      if (this.proportion >= 1) {
        if (this.state === 1 && direction === 'down') {
          // 释放刷新
          this.state = 2

          // 300ms下拉动画时间
          // window.setTimeout(() => {
          //   // 下拉过程...
          //   this.state = 3
          // }, 300)
        }
      } else {
        this.state = 1
      }
      this.rotate = parseInt(distance * 5)
    },

    handleActive () {
      // 刷新中
      this.state = 4
      this.className = 'after'
      // 将返回的请求接管，实现让请求结果来控制下拉刷新的状态
      return ui.request({
        // promise设置为true，让请求返回promise，这样就可以接管请求
        // 请求结束后页面自动回弹
        promise: true,
        url: '/touchui-backstage/listInfo.do?state=1',
        success: (response) => {
        },
        fail: (err) => {
        }
      })

      // this.config.refresh = true
    },
    handleAfter (flag) {
      this.proportion = 0
      this.state = 1
      if (flag) {
        for (let i = this.top - 1; i >= this.top - 10; i--) {
          this.items.unshift(`列表项目${i}`)
        }
        this.top -= 10
      }
      this.className = ''
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
