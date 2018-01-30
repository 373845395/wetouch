var dataUrl = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
var backgroundAudioManager
export default {
  data () {
    return {
      state: '',
      info: ''
    }
  },
  methods: {
    onLoad: function (options) {
      // 监听音乐播放
      ui.onBackgroundAudioPlay(e => {
        console.log('onBackgroundAudioPlay:', e)
      })
      // 监听音乐暂停
      ui.onBackgroundAudioPause(e => {
        console.log('onBackgroundAudioPause:', e)
      })
      // 监听音乐停止
      ui.onBackgroundAudioStop(e => {
        console.log('onBackgroundAudioStop:', e)
      })
      // 获取全局唯一的背景音频管理器
      backgroundAudioManager = ui.getBackgroundAudioManager()
      // 背景音频进入可以播放状态
      backgroundAudioManager.onCanplay(function (e) {
        console.log('onCanplay:', e)
      })
      // 背景音频播放事件
      backgroundAudioManager.onPlay(function (e) {
        console.log('onPlay:', e)
      })
      // 背景音频暂停事件
      backgroundAudioManager.onPause(function (e) {
        console.log('onPause:', e)
      })
      // 背景音频停止事件
      backgroundAudioManager.onStop(function (e) {
        console.log('onStop:', e)
      })
      // 背景音频自然播放结束事件
      backgroundAudioManager.onEnded(function (e) {
        console.log('onEnded:', e)
      })
      // 背景音频播放进度更新事件
      backgroundAudioManager.onTimeUpdate(function (e) {
        console.log('onTimeUpdate:', e)
      })
      // 用户在系统音乐播放面板点击上一曲事件（iOS only）
      backgroundAudioManager.onPrev(function (e) {
        console.log('onPrev:', e)
      })
      // 用户在系统音乐播放面板点击下一曲事件（iOS only）
      backgroundAudioManager.onNext(function (e) {
        console.log('onNext:', e)
      })
      // 背景音频播放错误事件
      backgroundAudioManager.onError(function (e) {
        console.log('onError:', e)
      })
      // 音频加载中事件
      backgroundAudioManager.onWaiting(function (e) {
        console.log('onWaiting:', e)
      })
    },
    // 获取后台音乐播放状态
    getBackgroundAudioPlayerState: function () {
      var that = this
      ui.getBackgroundAudioPlayerState({
        success: res => {
          console.log(res)
          that.state = res
          setTimeout(function () {
            that.$refs.page.refreshSize()
          }, 500)
        },
        fail: e => {
          console.error(e)
        }
      })
    },
    // 使用后台播放器播放音乐
    playBackgroundAudio: function () {
      ui.playBackgroundAudio({
        dataUrl: dataUrl,
        title: '此时此刻',
        coverImgUrl: 'http://images.uileader.com/20170927/a6b0087b-36ba-461f-8271-26cedfa00a10.jpg',
        success: res => {
          console.log(res)
        },
        fail: e => {
          console.error(e)
        }
      })
    },
    // 暂停播放音乐
    pauseBackgroundAudio: function () {
      ui.pauseBackgroundAudio()
    },
    // 控制音乐播放进度
    seekBackgroundAudio: function () {
      ui.seekBackgroundAudio({
        position: 0,
        success: res => {
          console.log(res)
        },
        fail: e => {
          console.error(e)
        }
      })
    },
    // 停止播放音乐
    stopBackgroundAudio: function () {
      ui.stopBackgroundAudio()
    },
    // 打印播放信息
    getBackgroundAudioManager: function () {
      var propertys = ['duration', 'currentTime', 'paused', 'src', 'startTime', 'buffered', 'title', 'epname', 'singer', 'coverImgUrl', 'webUrl']
      propertys.forEach(property => {
        console.log(property + ':' + backgroundAudioManager[property])
        this.info = property + ':' + backgroundAudioManager[property]
      })
    },
    play: function () {
      backgroundAudioManager.play()
    },
    pause: function () {
      backgroundAudioManager.pause()
    },
    stop: function () {
      backgroundAudioManager.stop()
    },
    seek: function () {
      backgroundAudioManager.seek(0)
    },
    setInfo: function () {
      backgroundAudioManager.src = 'http://h6apptest.duapp.com/xjl.mp3'
      backgroundAudioManager.startTime = 0
      backgroundAudioManager.title = '小精灵'
      backgroundAudioManager.coverImgUrl = 'http://images.uileader.com/20170927/ca859f0e-68ab-416a-a4d7-7324a98c7479.jpg'
      backgroundAudioManager.epname = '小精灵'
      backgroundAudioManager.singer = 'TFBOYS'
      backgroundAudioManager.webUrl = 'http://uileader.com'
    }
  },
  mounted () {
    this.onLoad()
  }
}
