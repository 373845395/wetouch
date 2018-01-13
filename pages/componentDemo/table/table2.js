export default {

  data () {
    return {
      countnum: 0,
      thisHeader1: [{
        name: 'moviename',
        display: '片名',
        sort: false,
        width: '150',
        headerAlign: 'left',
        render: (h, params) => {
          return h('div', {}
          , [
            h('span', {
              style: {
                backgroundColor: this.thisData1.rows[params].bgcolor,
                width: '10px',
                height: '10px',
                borderRadius: '5px',
                display: 'inline-block',
                marginRight: '5px'
                // display:'block',
              }
            }),
            h('div', {
              style: {
                lineHeight: '100%',
                display: 'inline-block'
              }
            }, this.thisData1.rows[params].moviename)
          ])
        }
      }, {
        name: 'percent',
        display: '场次占比',
        headerAlign: 'right',
        align: 'right',
        sort: false
      }, {
        name: 'bout',
        display: '场次',
        headerAlign: 'right',
        align: 'right',
        sort: false
      }],
      thisData1: {
        rows: [{
          moviename: '猩球崛起',
          percent: '29.1%',
          bout: '67,091场',
          bgcolor: '#ff574d'
        }, {
          moviename: '王牌保镖',
          percent: '27.1%',
          bout: '62,569场',
          bgcolor: '#3e8ff1'
        }, {
          moviename: '看不见的客人',
          percent: '13.1%',
          bout: '30,126场',
          bgcolor: '#2bc7ff'
        }, {
          moviename: '蜘蛛侠：英雄归来',
          percent: '11.1%',
          bout: '26,482场',
          bgcolor: '#20d8dc'
        }]
      },
      thisHeader2: [{
        name: 'moviename',
        display: '影片',
        sort: false,
        width: '100%',
        headerAlign: 'left',
        render: (h, params) => {
          return h('div', {
            style: {
              margin: '20px 0'
            }
          }
          , [
            h('span', {
              style: {
                fontWeight: 'bold',
                display: 'block'

              }
            }, this.thisData2.rows[params].moviename),
            h('span', {
              style: {
                color: '#666'
              }
            }, this.thisData2.rows[params].movienmsg)
          ])
        }
      }, {
        name: 'piaofangmoney',
        display: '综合票房（万元）',
        sort: false,
        width: '70',
        headerAlign: 'right',
        align: 'right',
        render: (h, params) => {
          return h('span', {
            style: {
              color: '#e60012'
            }
          }, parseFloat(parseFloat(('' + this.thisData2.rows[params].piaofangmoney)) / 100 * this.countnum).toFixed(2))
        },
        headerRender: (h) => {
          return h('div', {
            style: {
              lineHeight: '150%',
              marginTop: '25px'
            }
          }, [
            h('span', {
              style: {
                color: '#e60012'
              }
            }, '综合'),
            h('span', {}, '票房'),
            h('span', {
              style: {
                display: 'block'
              }
            }, '(万元)')
          ])
        }
      }, {
        name: 'piaofangpercent',
        display: '综合票房（占比）',
        sort: false,
        width: '64',
        headerAlign: 'right',
        align: 'right',
        headerRender: (h) => {
          return h('div', {
            style: {
              lineHeight: '150%',
              marginTop: '25px'
            }
          }, [
            h('span', {
              style: {
                color: '#e60012'
              }
            }, '综合'),
            h('span', {}, '票房'),
            h('span', {
              style: {
                display: 'block'
              }
            }, '占比')
          ])
        }
      }, {
        name: 'schedulepercent',
        display: '排片占比',
        sort: false,
        headerAlign: 'right',
        width: '64',
        align: 'right'
      }, {
        name: 'attendance',
        display: '上座率',
        sort: false,
        width: '64',
        headerAlign: 'right',
        align: 'right'
      }],
      thisData2: {
        rows: [{
          moviename: '猩球崛起3：终极之战',
          movienmsg: '上映14天 7.00 亿',
          piaofangmoney: '61286.06',
          piaofangpercent: '30.6%',
          schedulepercent: '29.1%',
          attendance: '3.5%',
          bgcolor: '#ff574d'
        }, {
          moviename: '王牌保镖',
          movienmsg: '上映7天 1.28 亿',
          piaofangmoney: '23510.45',
          piaofangpercent: '23.4%',
          schedulepercent: '27.1%',
          attendance: '3.5%',
          bgcolor: '#ff574d'
        }, {
          moviename: '看不见的客人',
          movienmsg: '上映14天 1.29 亿',
          piaofangmoney: '425.93',
          piaofangpercent: '19.5%',
          schedulepercent: '13.1%',
          attendance: '5.0%',
          bgcolor: '#ff574d'
        } ]
      },
      thisHeader3: [{
        name: 'ranking',
        display: '排名',
        sort: false,
        align: 'center',
        width: '40'
      }, {
        name: 'cinemaname',
        display: '影院名',
        sort: false,
        width: '100%',
        headerAlign: 'left',
        render: (h, params) => {
          return h('div', {
            style: {
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              boxOrient: 'vertical',
              lineClamp: '2',
              overflow: 'hidden'
            }
          }, this.thisData3.rows[params].cinemaname)
        }
      }, {
        name: 'rtboxoffice',
        display: '实时票房',
        sort: false,
        headerAlign: 'center',
        align: 'center',
        width: '64'
      }, {
        name: 'mantime',
        display: '人次',
        sort: false,
        headerAlign: 'center',
        align: 'center',
        width: '40'
      }, {
        name: 'averagesession',
        display: '场均人次',
        sort: false,
        headerAlign: 'center',
        align: 'center',
        width: '64'
      }, {
        name: 'averagefares',
        display: '平均票价',
        sort: false,
        headerAlign: 'center',
        align: 'center',
        width: '64'
      }],
      thisData3: {
        rows: [{
          ranking: '1',
          cinemaname: '广州飞扬影城（乐峰店）',
          rtboxoffice: '11.8万',
          mantime: '1057',
          averagesession: '18',
          averagefares: '111.3'
        }, {
          ranking: '2',
          cinemaname: '上海金逸影城（龙之梦）上海金逸影城（龙之梦）',
          rtboxoffice: '7.9万',
          mantime: '1091',
          averagesession: '19',
          averagefares: '72.2'
        }, {
          ranking: '3',
          cinemaname: '北京UME国际影城北京UME国际影城',
          rtboxoffice: '7.9万',
          mantime: '1091',
          averagesession: '19',
          averagefares: '72.2'
        }, {
          ranking: '4',
          cinemaname: '苏州苏艺影城（艺术中心店）',
          rtboxoffice: '7.9万',
          mantime: '1091',
          averagesession: '19',
          averagefares: '72.2'
        }, {
          ranking: '5',
          cinemaname: '无锡万达国际影城（冰河世纪城店）',
          rtboxoffice: '7.9万',
          mantime: '1091',
          averagesession: '19',
          averagefares: '72.2'
        }, {
          ranking: '6',
          cinemaname: '上海金逸影城（龙之梦）',
          rtboxoffice: '7.9万',
          mantime: '1091',
          averagesession: '19',
          averagefares: '72.2'
        }, {
          ranking: '7',
          cinemaname: '上海金逸影城（龙之梦）',
          rtboxoffice: '7.9万',
          mantime: '1091',
          averagesession: '19',
          averagefares: '72.2'
        }]
      },
      thisHeader4: [{
        name: 'site',
        display: '全国',
        sort: true
      }, {
        name: 'attendance',
        display: '上座率',
        sort: true,
        render: (h, params) => {
          return h('div', {
            style: {
              lineHeight: '150%',
              marginTop: '17px'
            }
          }, [
            h('span', {}, this.thisData4.rows[params].attendance + '%'),
            h('span', {
              style: {
                display: 'block',
                width: this.thisData4.rows[params].attendance * 10 + '%',
                height: '8px',
                backgroundColor: '#ff6f5d'
              }
            })
          ])
        }
      }, {
        name: 'averagesession',
        display: '场均人次',
        sort: true,
        sortType: 'int',
        render: (h, params) => {
          return h('div', {
            style: {
              lineHeight: '150%',
              marginTop: '17px'
            }
          }, [
            h('span', {}, this.thisData4.rows[params].averagesession),
            h('span', {
              style: {
                display: 'block',
                width: this.thisData4.rows[params].averagesession * 10 + '%',
                height: '8px',
                backgroundColor: '#77b3f1'
              }
            })
          ])
        }
      }],
      thisData4: {
        rows: [{
          site: '猩球崛起3：终极之战',
          attendance: '3.5',
          averagesession: '6'
        }, {
          site: '王牌保镖',
          attendance: '5.5',
          averagesession: '8'
        }, {
          site: '我是特种兵',
          attendance: '7',
          averagesession: '3'
        }, {
          site: '战狼',
          attendance: '9',
          averagesession: '9'
        }, {
          site: '惊天揭秘',
          attendance: '2.6',
          averagesession: '1'
        }, {
          site: '捍卫者',
          attendance: '5.6',
          averagesession: '5'
        }, {
          site: '战狼2',
          attendance: '7.5',
          averagesession: '10'
        }, {
          site: '蜘蛛侠：英雄归来',
          attendance: '1.5',
          averagesession: '6'
        }]
      },
      thisHeader5: [{
        name: 'ranking',
        display: '播放量排名',
        width: '160px',
        render: (h, params) => {
          let spancolor, upformatting
          if (params < 3) {
            spancolor = '#E60012'
          } else {
            spancolor = '#666'
          }
          if (this.thisData5.rows[params].up === 'true') {
            // upformatting = '+'
            upformatting = require('#/images/table/up.png')
          } else if (this.thisData5.rows[params].up === 'false') {
            upformatting = require('#/images/table/null.png')
          } else if (this.thisData5.rows[params].up === 'down') {
            upformatting = require('#/images/table/down.png')
          }
          return h('div', {
            style: {
              lineHeight: '150%',
              marginTop: '16px'
            }
          }, [
            h('div', {
              style: {
                display: 'inline-block',
                width: '10px'
              }
            }, [
              h('span', {
                style: {
                  display: 'block',
                  color: spancolor,
                  fontSize: '18px'
                }
              }, this.thisData5.rows[params].id),
              h('img', {
                style: {
                  verticalAlign: 'middle'
                },
                domProps: {
                  src: upformatting
                }
              }),
              h('span', {
                style: {
                  color: '#666',
                  verticalAlign: 'top',
                  fontSize: '10px',
                  display: 'inline-block'
                }
              }, this.thisData5.rows[params].num)

            ]),
            h('div', {
              style: {
                display: 'inline-block',
                marginLeft: '10px',
                position: 'relative'
              }
            }, [
              h('span', {
                style: {
                  display: 'block',
                  marginLeft: '5px',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }
              }, this.thisData5.rows[params].ranking),

              h('span', {
                style: {
                  display: 'block',
                  marginLeft: '5px',
                  color: '#666',
                  paddingTop: '5px'
                }
              }, this.thisData5.rows[params].msg)
            ])
          ])
        }
      }, {
        name: 'realtimepaly',
        display: '实时播放量（万）',
        headerAlign: 'right',
        align: 'right',
        render: (h, params) => {
          return h('span', {
            style: {
              color: '#e60012',
              fontWeight: 'bold'
            }
          }, this.thisData5.rows[params].realtimepaly)
        }
      }, {
        name: 'terrace',
        display: '播放平台',
        headerAlign: 'right',
        align: 'right'
      }],
      thisData5: {
        rows: [{
          id: '1',
          ranking: '那年花开月正圆',
          realtimepaly: '18921',
          terrace: '腾讯视频',
          up: 'false',
          num: '',
          msg: '上映30天，累计70亿'
        }, {
          id: '2',
          ranking: '那年花开月正圆',
          realtimepaly: '10633',
          terrace: '腾讯视频',
          up: 'false',
          num: '',
          msg: '上映30天，累计70亿'
        }, {
          id: '3',
          ranking: '那年花开月正圆',
          realtimepaly: '5985',
          terrace: '腾讯视频',
          up: 'true',
          num: '1',
          msg: '上映30天，累计70亿'
        }, {
          id: '4',
          ranking: '那年花开月正圆',
          realtimepaly: '2515',
          terrace: '爱奇艺',
          up: 'down',
          num: '1',
          msg: '上映30天，累计70亿'
        }, {
          id: '5',
          ranking: '那年花开月正圆',
          realtimepaly: '2314',
          terrace: '多平台',
          up: 'false',
          num: '',
          msg: '上映30天，累计70亿'
        }, {
          id: '6',
          ranking: '那年花开月正圆',
          realtimepaly: '4543',
          terrace: '多平台',
          up: 'false',
          num: '',
          msg: '上映30天，累计70亿'
        }, {
          id: '7',
          ranking: '那年花开月正圆',
          realtimepaly: '3212',
          terrace: '优酷',
          up: 'false',
          num: '',
          msg: '上映30天，累计70亿'
        }]
      }
    }
  },
  methods: {
    add: function () {
      this.inter = setInterval(() => {
        this.countnum = parseInt(this.countnum) + 1
        if (this.countnum >= 100) {
          clearInterval(this.inter)
        }
      }, 16)
    }
  },
  mounted () {
    this.add()
  }
}
