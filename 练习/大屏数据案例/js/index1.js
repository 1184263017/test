(function () {
    // 初始化
    const myChart = echarts.init(document.querySelector('.bar .chart'));

    option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
                // type: 'line'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '4%',
            top: '10px',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: '12',
                interval: 0,
            },
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: '12'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                    // width:2
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                }
            }
        }],
        series: [{
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                borderRadius: 5,
            }

        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 让图标跟随屏幕自动去适应
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();


(function () {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

    // 初始化
    const myChart = echarts.init(document.querySelector('.bar2 .chart'));

    option = {
        grid: {
            left: '22%',
            top: '10%',
            bottom: '10%',
            // containLabel: true,
        },
        xAxis: {
            show: false,
        },
        yAxis: [{
                type: 'category',
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: '#fff',
                }
            },
            {
                type: 'category',
                inverse: true,
                data: [702, 350, 610, 793, 664],
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    fontSize: 12,
                    color: '#fff',
                }
            }
        ],
        series: [{
                name: '条',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 10,
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,
                itemStyle: {
                    borderRadius: 20,
                    color: function (params) {
                        return myColor[params.dataIndex];
                    }
                },
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                }
            },
            {
                name: "框",
                type: "bar",
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100],
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 让图标跟随屏幕自动去适应
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();



(function () {
    // 初始化
    const myChart = echarts.init(document.querySelector('.line2 .chart'));

    option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            testStyle: {
                top: '0%',
                color: 'rgba(255,255,255,.5)',
                fontSize: 12,
            }
            // data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
            top: '30',
            left: '10',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
            axisLabel: {
                testStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12,
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.2)',
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                }
            },
            axisLabel: {
                testStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                }
            }
        }],
        series: [{
                name: 'Email',
                type: 'line',
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                smooth: true,
                symbol: 'circle',
                symbolSize: 10,
                showSymbol: false,
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                emphasis: {
                    focus: 'series'
                },
                lineStyle: {
                    color: '#0184d5',
                },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
            },
            {
                name: 'Union Ads',
                type: 'line',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                smooth: true,
                symbol: 'circle',
                symbolSize: 10,
                showSymbol: false,
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                emphasis: {
                    focus: 'series'
                },
                lineStyle: {
                    color: '#00d887',
                },
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
            },
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 让图标跟随屏幕自动去适应
    window.addEventListener('resize', function () {
        myChart.resize()
    });
})();

(function () {
    // 初始化
    const myChart = echarts.init(document.querySelector('.pie .chart'));

    option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [{
            name: '年龄发布',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '43%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                // position: 'center'
            },
            labelLine: {
                show: false
            },
            data: [{
                    value: 1,
                    name: "0岁以下"
                },
                {
                    value: 4,
                    name: "20-29岁"
                },
                {
                    value: 2,
                    name: "30-39岁"
                },
                {
                    value: 2,
                    name: "40-49岁"
                },
                {
                    value: 1,
                    name: "50岁以上"
                }
            ],
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 让图标跟随屏幕自动去适应
    window.addEventListener('resize', function () {
        myChart.resize()
    });
})();

(function () {
    // 初始化
    const myChart = echarts.init(document.querySelector('.pie2 .chart'));

    option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom: '0%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [{
            name: '地区分布',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['10%', '70%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                fontSize: 10
            },
            labelLine: {
                length: 6,
                length2: 8,
            },
            data: [{
                    value: 20,
                    name: '云南'
                },
                {
                    value: 26,
                    name: '北京'
                },
                {
                    value: 24,
                    name: '山东'
                },
                {
                    value: 25,
                    name: '河北'
                },
                {
                    value: 20,
                    name: '江苏'
                },
                {
                    value: 25,
                    name: '浙江'
                },
                {
                    value: 30,
                    name: '四川'
                },
                {
                    value: 42,
                    name: '湖北'
                }
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 让图标跟随屏幕自动去适应
    window.addEventListener('resize', function () {
        myChart.resize()
    });
})();

(function () {
    var yearData = [{
            year: '2020', // 年份
            data: [ // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021', // 年份
            data: [ // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];

    // 初始化
    const myChart = echarts.init(document.querySelector('.line .chart'));

    option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            testStyle: {
                color: '#4c9bfd',
            },
            right: '10%',
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            borderColor: '#012f4a',
            show: true,
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#4c9bfd',
                interval: 0,
            },
            axisLine: {
                show: false,
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [{
            name: '新增粉丝',
            data: yearData[0].data[0],
            type: 'line',
            smooth: true
        }, {
            name: '新增游客',
            data: yearData[0].data[1],
            type: 'line',
            smooth: true
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 让图标跟随屏幕自动去适应
    window.addEventListener('resize', function () {
        myChart.resize()
    });

    document.getElementById('a1').onclick = function () {
        // console.log(option.series);
        option.series[0].data = yearData[0].data[0];
        option.series[1].data = yearData[0].data[1];
        myChart.setOption(option);
    }

    document.getElementById('a2').onclick = function () {
        // console.log(option.series);
        option.series[0].data = yearData[1].data[0];
        option.series[1].data = yearData[1].data[1];
        myChart.setOption(option);
    }
})();