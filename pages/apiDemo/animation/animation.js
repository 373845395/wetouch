// animation.js
export default {
  
    data () {
      return {
        value: null,
        animated: 'animated',
        animateClass: '',
        departments: [{
          name: '警告类:',
          value: 'DP_01',
          children: [
            { name: 'bounce', value: 'bounce' },
            { name: 'flash', value: 'flash' },
            { name: 'pulse', value: 'pulse' },
            { name: 'rubberBand', value: 'rubberBand' },
            { name: 'shake', value: 'shake' },
            { name: 'swing', value: 'swing' },
            { name: 'tada', value: 'tada' },
            { name: 'wobble', value: 'wobble' }
          ]
        }, {
          name: '弹跳进入类:',
          value: 'DP_02',
          children: [
            { name: 'bounceIn', value: 'bounceIn' },
            { name: 'bounceInDown', value: 'bounceInDown' },
            { name: 'bounceInLeft', value: 'bounceInLeft' },
            { name: 'bounceInRight', value: 'bounceInRight' },
            { name: 'bounceInUp', value: 'bounceInUp' }
          ]
        }, {
          name: '弹跳退出类:',
          value: 'DP_03',
          children: [
            { name: 'bounceOut', value: 'bounceOut' },
            { name: 'bounceOutDown', value: 'bounceOutDown' },
            { name: 'bounceOutLeft', value: 'bounceOutLeft' },
            { name: 'bounceOutRight', value: 'bounceOutRight' },
            { name: 'bounceOutUp', value: 'bounceOutUp' }
          ]
        }, {
          name: '渐显类:',
          value: 'DP_04',
          children: [
            { name: 'fadeIn', value: 'fadeIn' },
            { name: 'fadeInDown', value: 'fadeInDown' },
            { name: 'fadeInDownBig', value: 'fadeInDownBig' },
            { name: 'fadeInLeft', value: 'fadeInLeft' },
            { name: 'fadeInLeftBig', value: 'fadeInLeftBig' },
            { name: 'fadeInRight', value: 'fadeInRight' },
            { name: 'fadeInRightBig', value: 'fadeInRightBig' },
            { name: 'fadeInUp', value: 'fadeInUp' },
            { name: 'fadeInUpBig', value: 'fadeInUpBig' }
          ]
        }, {
          name: '渐隐类:',
          value: 'DP_05',
          children: [
            { name: 'fadeOut', value: 'fadeOut' },
            { name: 'fadeOutDown', value: 'fadeOutDown' },
            { name: 'fadeOutDownBig', value: 'fadeOutDownBig' },
            { name: 'fadeOutLeft', value: 'fadeOutLeft' },
            { name: 'fadeOutLeftBig', value: 'fadeOutLeftBig' },
            { name: 'fadeOutRight', value: 'fadeOutRight' },
            { name: 'fadeOutRightBig', value: 'fadeOutRightBig' },
            { name: 'fadeOutUp', value: 'fadeOutUp' },
            { name: 'fadeOutUpBig', value: 'fadeOutUpBig' }
          ]
        }, {
          name: '翻转类:',
          value: 'DP_06',
          children: [
            { name: 'flip', value: 'flip' },
            { name: 'flipInX', value: 'flipInX' },
            { name: 'flipInY', value: 'flipInY' },
            { name: 'flipOutX', value: 'flipOutX' },
            { name: 'flipOutY', value: 'flipOutY' }
          ]
        }, {
          name: '瞬移类:',
          value: 'DP_07',
          children: [
            { name: 'lightSpeedIn', value: 'lightSpeedIn' },
            { name: 'lightSpeedOut', value: 'lightSpeedOut' }
          ]
        }, {
          name: '旋转进入类:',
          value: 'DP_08',
          children: [
            { name: 'rotateIn', value: 'rotateIn' },
            { name: 'rotateInDownLeft', value: 'rotateInDownLeft' },
            { name: 'rotateInDownRight', value: 'rotateInDownRight' },
            { name: 'rotateInUpLeft', value: 'rotateInUpLeft' },
            { name: 'rotateInUpRight', value: 'rotateInUpRight' }
          ]
        }, {
          name: '旋转退出类:',
          value: 'DP_09',
          children: [
            { name: 'rotateOut', value: 'rotateOut' },
            { name: 'rotateOutDownLeft', value: 'rotateOutDownLeft' },
            { name: 'rotateOutDownRight', value: 'rotateOutDownRight' },
            { name: 'rotateOutUpLeft', value: 'rotateOutUpLeft' },
            { name: 'rotateOutUpRight', value: 'rotateOutUpRight' }
          ]
        }, {
          name: '滑入滑出类:',
          value: 'DP_10',
          children: [
            { name: 'slideInDown', value: 'slideInDown' },
            { name: 'slideInLeft', value: 'slideInLeft' },
            { name: 'slideInRight', value: 'slideInRight' },
            { name: 'slideOutLeft', value: 'slideOutLeft' },
            { name: 'slideOutRight', value: 'slideOutRight' },
            { name: 'slideOutUp', value: 'slideOutUp' }
          ]
        }, {
          name: '特殊类:',
          value: 'DP_11',
          children: [
            { name: 'hinge', value: 'hinge' },
            { name: 'rollIn', value: 'rollIn' },
            { name: 'rollOut', value: 'rollOut' }
          ]
        } ]
      }
    },
    methods: {
      handleChange (val) {
        this.animateClass = val[1]
        this.animateClass2 = this.animateClass
        this.resetAnimate()
      },
      againAnimate () {
        this.animateClass = this.animateClass2
        this.resetAnimate()
      },
      resetAnimate () {
        var that = this
        setTimeout(function () {
          that.animateClass = ''
        }, 1000)
      }
  
    }
  }