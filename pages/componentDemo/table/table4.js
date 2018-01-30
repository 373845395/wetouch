export default {
  data () {
    return {
      thisHeader: [{
        name: 'date',
        display: '日期',
        sort: false,
        headerAlign: 'left',
        fixed: 'left',
        width: '120',
        render: (h, params) => {
          let weekcolor, showstatecolor
          if (this.thisData.rows[params].weekflag === 'true') {
            weekcolor = '#e60012'
            showstatecolor = '#333'
          } else {
            weekcolor = '#333'
            showstatecolor = '#ffac2f'
          }
          return h('div', {
            style: {
              width: '100px'
            }
          },
            [h('span', {
              style: {
                display: 'block',
                fontWeight: 'bold',
                fontSize: '14px',
                color: weekcolor
              }
            }, this.thisData.rows[params].date),
              h('span', {
                style: {
                  display: 'inline-block',
                  color: weekcolor
                }
              }, this.thisData.rows[params].week),
              h('span', {
                style: {
                  display: 'inline-block',
                  marginLeft: '5px',
                  color: showstatecolor
                }
              }, this.thisData.rows[params].showstate)
            ]
          )
        },
        headerRender: (h) => {
          return h('div', {
            style: {
              lineHeight: '150%',
              marginTop: '19px'
            }
          }, '日期')
        }
      }, {
        name: 'boxofficermb',
        display: '分账票房（万元）',
        sort: true,
        headerAlign: 'center',
        align: 'center',
        headerRender: (h) => {
          return h('div', {
            style: {
              width: '50px',
              display: 'inline-block',
              lineHeight: '150%',
              marginTop: '19px'
            }
          }, [
            h('span', {}, '分账票房'),
            h('span', {
              style: {
                display: 'block'
              }
            }, '(万元)')
          ])
        }
      }, {
        name: 'boxofficepercent',
        display: '分账票房（占比）',
        sort: true,
        headerAlign: 'left',
        headerRender: (h) => {
          return h('div', {
            style: {
              width: '100px',
              lineHeight: '150%',
              marginTop: '19px'
            }
          }, [
            h('span', {}, '分账票房'),
            h('span', {
              style: {
                display: 'block'
              }
            }, '占比')
          ])
        }
      }, {
        name: 'fares',
        display: '分账票价',
        sort: false,
        headerAlign: 'left',
        headerRender: (h) => {
          return h('div', {
            style: {
              width: '100px',
              lineHeight: '150%',
              marginTop: '19px'
            }
          }, '分账票价')
        }

      }, {
        name: 'filmpercent',
        display: '排片占比',
        sort: false,
        headerAlign: 'left',
        width: '100',
        headerRender: (h) => {
          return h('div', {
            style: {
              width: '100px',
              lineHeight: '150%',
              marginTop: '19px'
            }
          }, '排片占比')
        }
      }],
      thisData: {
        rows: [{
          date: '2017-09-04',
          week: '周二',
          weekflag: 'false',
          showstate: '点映',
          boxofficermb: '-',
          boxofficepercent: '0.0%',
          fares: '32.9',
          filmpercent: '22.5%'
        }, {
          date: '2017-09-05',
          week: '周三',
          weekflag: 'false',
          showstate: '点映',
          boxofficermb: '-',
          boxofficepercent: '0.0%',
          fares: '-',
          filmpercent: '48.1%'
        }, {
          date: '2017-09-11',
          week: '周一',
          weekflag: 'false',
          showstate: '点映',
          boxofficermb: '852.3',
          boxofficepercent: '12.2%',
          fares: '',
          filmpercent: '98.5%'
        }, {
          date: '2017-09-13',
          week: '周二',
          weekflag: 'false',
          showstate: '点映',
          boxofficermb: '-',
          boxofficepercent: '4.5%',
          fares: '32.6',
          filmpercent: '0.0%'
        }, {
          date: '2017-09-14',
          week: '周六',
          weekflag: 'true',
          showstate: '零点场',
          boxofficermb: '12468',
          boxofficepercent: '52.5%',
          fares: '65',
          filmpercent: '0.0%'
        }, {
          date: '2017-09-15',
          week: '周日',
          weekflag: 'true',
          showstate: '上映首日',
          boxofficermb: '23451',
          boxofficepercent: '23.0%',
          fares: '342',
          filmpercent: '44.6%'
        }, {
          date: '2017-09-18',
          week: '周二',
          weekflag: 'false',
          showstate: '点映',
          boxofficermb: '-',
          boxofficepercent: '0.0%',
          fares: '32.9',
          filmpercent: '22.5%'
        }, {
          date: '2017-09-20',
          week: '周三',
          weekflag: 'false',
          showstate: '点映',
          boxofficermb: '-',
          boxofficepercent: '0.0%',
          fares: '-',
          filmpercent: '48.1%'
        }, {
          date: '2017-09-25',
          week: '周一',
          weekflag: 'false',
          showstate: '点映',
          boxofficermb: '852.3',
          boxofficepercent: '12.2%',
          fares: '',
          filmpercent: '98.5%'
        }, {
          date: '2017-09-28',
          week: '周二',
          weekflag: 'false',
          showstate: '点映',
          boxofficermb: '-',
          boxofficepercent: '4.5%',
          fares: '32.6',
          filmpercent: '0.0%'
        }, {
          date: '2017-09-30',
          week: '周六',
          weekflag: 'true',
          showstate: '零点场',
          boxofficermb: '12468',
          boxofficepercent: '52.5%',
          fares: '65',
          filmpercent: '0.0%'
        }, {
          date: '2017-10-1',
          week: '周日',
          weekflag: 'true',
          showstate: '上映首日',
          boxofficermb: '23451',
          boxofficepercent: '23.0%',
          fares: '342',
          filmpercent: '44.6%'
        }]
      }
    }
  },
  methods: {}
}
