import React,{Component} from 'react'

class Option extends Component{
	constructor(props){
 		super(props);
 		this.constructorLine=this.constructorLine.bind(this);
 	}
 	componentDidMount(){
 		this.constructorLine();
 	}
 	constructorLine(){

 		     var myChart = echarts.init(document.getElementById('lm-line'));

		 		var option = {
				    title: {
				        text: '折线图堆叠'
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    toolbox: {
				        feature: {
				            saveAsImage: {}
				        }
				    },
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        data: this.props.data
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [
				        {
				            name:'邮件营销',
				            type:'line',
				            stack: '总量',
				            data:[120, 132, 101, 134, 90, 230, 210]
				        },
				        {
				            name:'联盟广告',
				            type:'line',
				            stack: '总量',
				            data:[220, 182, 191, 234, 290, 330, 310]
				        },
				        {
				            name:'视频广告',
				            type:'line',
				            stack: '总量',
				            data:[150, 232, 201, 154, 190, 330, 410]
				        },
				        {
				            name:'直接访问',
				            type:'line',
				            stack: '总量',
				            data:[320, 332, 301, 334, 390, 330, 320]
				        },
				        {
				            name:'搜索引擎',
				            type:'line',
				            stack: '总量',
				            data:[820, 932, 901, 934, 1290, 1330, 1320]
				        }
				    ]
				};
		  myChart.setOption(option);
 	}
	componentDidUpdate(){
		this.constructorLine();
	}
	render(){
		console.log("render me ");
		return(
			<div id="lm-line" className="sss">
			</div>
		)
	}
}
export default Option
