//====================================================================================================
// 初始化数据
//===================================================================================================

export default {
	
	"chooseSouce":{
		"select":[{"key":"城市管理","child":[]},
		          {"key":"人口管理","child":[{"key":"人口信息","child":[]},{"key":"车辆信息","child":[{"key":"车辆价格信息","child":[]}]}]}
		          ],
	  "tableList":[
	  				{"dataSetTypeid":"123","typeName":"人口信息","typeDescribe":"水电费大","createTime":"2017-02-03",
 					"dsList":[
								{"dsid":"12","dsName":"车产信息","dsFiles":{"dimensions":[{"columnName":"车辆价格信息","columnFeilds":"price"
			                  }],"measures":[{"columnName":"车子数量","columnFeilds":"carNum"}]}},
			                  {"dsid":"122","dsName":"房产信息","dsFiles":{"dimensions":[{"columnName":"房子价格信息","columnFeilds":"homePrice"
			                  }],"measures":[{"columnName":"房子数量","columnFeilds":"homeNum"},{"columnName":"房子数量2","columnFeilds":"homeNum2"}]}}
							]
					 }
	                ],
	   "cssurl":{
	   		"attr":[{"descr":null,"id":"54","lable":"legend","name":"图例","type":"1","uipz01000":"ZJ001","setts":[{
	   			"id":"234","lable":"排列方式","type":"1","val":[{"name":"水平排列","value":"horizontal"},{"name":"垂直排列","value":"vertical"}],
	   			"valname":"排列方式","whereattr":"legend.orient"

	   			},{
	   				"id":"258","lable":"文本样式","type":"0","val":[""],"valname":"字体大小","whereattr":"legend.textStyle.fontsize"
	   			}
	   			]},{"descr":null,"id":"54","lable":"legend","name":"标题","type":"1","uipz01000":"ZJ001","setts":[{
	   			"id":"234","lable":"排列方式","type":"1","val":[{"name":"水平排列","value":"horizontal"},{"name":"垂直排列","value":"vertical"}],
	   			"valname":"排列方式","whereattr":"legend.orient"

	   			},{
	   				"id":"258","lable":"文本样式","type":"0","val":[""],"valname":"字体大小","whereattr":"legend.textStyle.fontsize"
	   			}
	   			]}
	   		],
	   		"cssurl":null,
	   		"html":null,
	   		"id":"ZJ001",
	   		"jsurl":"",
	   		"lable":"line",
	   		"name":"折线图",
	   		"type":"1"
	   },
	   "echartsData":{
	   		"data":['周一','周二','周三','周四','周五','周六','周日']
	   }           
	} ,
	"gg":{}     
}