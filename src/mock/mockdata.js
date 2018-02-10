/**
 * @author: huangteng
 * @description: create a mock server with faker
 * @time: 2017-6-30
 * @modifiedTime:
 * @modifiedBy:
 */
// 所有分页都会传pageSize和pageNo的哈 我json有些没加  
import Mock from 'mockjs'


// only use in development env
if(__DEV__){
	const Random = Mock.Random
	Random.word();
	Random.csentence();
	Random.date();
	// 新增数据集
	Mock.mock('/a/base/addNewDataSet','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param){
			return Mock.mock({
				elementthing:{
					"dsid|1-10000":10000,
					"dsname":param.dsname,
					"dsdescribe":param.dsdescribe
				},
				success:true,
				messages:'新增数据集成功'
			})
		}else{
			return{
				elementthing:{},
				success:false,
				messages:'新增数据集失败'
			}
		}
	})

	// 数据集名称列表查询
	Mock.mock('/a/base/getDataSetNameList','get',function(options){
		return Mock.mock({
			elementthing:
			[
				Mock.mock({
					"dsname":'@word()',
					"dsid|1-10000":10000
				}),
				Mock.mock({
					"dsname":'@word()',
					"dsid|1-10000":10000
				}),
				Mock.mock({
					"dsname":'@word()',
					"dsid|1-10000":10000
				}),
				Mock.mock({
					"dsname":'@word()',
					"dsid|1-10000":10000
				}),
				Mock.mock({
					"dsname":'@word()',
					"dsid|1-10000":10000
				}),
				{
					"dsname":'测试',
					"dsid":10000
				}
			],
			success:true,
			messages:'获取数据集列表成功'
		})
	})

	// 数据集列表详情查询
	Mock.mock('/a/base/getAllDetailDataSetInfo','get',function(options){
		return Mock.mock({
			"elementthing":[
				Mock.mock({
					"dsid|1-10000":10000,
					"dsname":'@word()',
					"dsdataprovenance":["@word(3, 5)","@word(3, 5)","@word(3, 5)"],
					"dsdatacontent":["@csentence(3, 5)","@csentence(3, 5)","@csentence(3, 5)","@word(3, 6)","@word(3, 6)"],
					"dsamount|10000-1000000":1000000,
					"dsdescribe":'@word(15)',
					"GMTMODIFIED":'@date("yyyy-MM-dd")',
					"istiming|0-1":1,
					"timingtime|0-100":100,
					"timeunit|0-4":4
				}),
				Mock.mock({
					"dsid|1-10000":10000,
					"dsname":'@word()',
					"dsdataprovenance":["@word(3, 5)","@word(3, 5)","@word(3, 5)"],
					"dsdatacontent":["@csentence(3, 5)","@csentence(3, 5)","@csentence(3, 5)","@word(3, 6)","@word(3, 6)"],
					"dsamount|10000-1000000":1000000,
					"dsdescribe":'@word(15)',
					"GMTMODIFIED":'@date("yyyy-MM-dd")',
					"istiming|0-1":1,
					"timingtime|0-100":100,
					"timeunit|0-4":4
				}),
				Mock.mock({
					"dsid|1-10000":10000,
					"dsname":'@word()',
					"dsdataprovenance":["@word(3, 5)","@word(3, 5)","@word(3, 5)"],
					"dsdatacontent":["@csentence(3, 5)","@csentence(3, 5)","@csentence(3, 5)","@word(3, 6)","@word(3, 6)"],
					"dsamount|10000-1000000":1000000,
					"dsdescribe":'@word(15)',
					"GMTMODIFIED":'@date("yyyy-MM-dd")',
					"istiming|0-1":1,
					"timingtime|0-100":100,
					"timeunit|0-4":4
				}),
				Mock.mock({
					"dsid|1-10000":10000,
					"dsname":'@word()',
					"dsdataprovenance":["@word(3, 5)","@word(3, 5)","@word(3, 5)"],
					"dsdatacontent":["@csentence(3, 5)","@csentence(3, 5)","@csentence(3, 5)","@word(3, 6)","@word(3, 6)"],
					"dsamount|10000-1000000":1000000,
					"dsdescribe":'@word(15)',
					"GMTMODIFIED":'@date("yyyy-MM-dd")',
					"istiming|0-1":1,
					"timingtime|0-100":100,
					"timeunit|0-4":4
				}),
				Mock.mock({
					"dsid|1-10000":10000,
					"dsname":'@word()',
					"dsdataprovenance":["@word(3, 5)","@word(3, 5)","@word(3, 5)"],
					"dsdatacontent":["@csentence(3, 5)","@csentence(3, 5)","@csentence(3, 5)","@word(3, 6)","@word(3, 6)"],
					"dsamount|10000-1000000":1000000,
					"dsdescribe":'@word(15)',
					"GMTMODIFIED":'@date("yyyy-MM-dd")',
					"istiming|0-1":1,
					"timingtime|0-100":100,
					"timeunit|0-4":4
				}),
				Mock.mock({
					"dsid":10000,
					"dsname":'@word()',
					"dsdataprovenance":["@word(3, 5)","@word(3, 5)","@word(3, 5)"],
					"dsdatacontent":["@csentence(3, 5)","@csentence(3, 5)","@csentence(3, 5)","@word(3, 6)","@word(3, 6)"],
					"dsamount|10000-1000000":1000000,
					"dsdescribe":'@word(15)',
					"GMTMODIFIED":'@date("yyyy-MM-dd")',
					"istiming|0-1":1,
					"timingtime|0-100":100,
					"timeunit|0-4":4
				}),
				Mock.mock({
					"dsid":9999,
					"dsname":'@word()',
					"dsdataprovenance":["@word(3, 5)","@word(3, 5)","@word(3, 5)"],
					"dsdatacontent":["@csentence(3, 5)","@csentence(3, 5)","@csentence(3, 5)","@word(3, 6)","@word(3, 6)"],
					"dsamount|10000-1000000":1000000,
					"dsdescribe":'@word(15)',
					"GMTMODIFIED":'@date("yyyy-MM-dd")',
					"istiming|0-1":1,
					"timingtime|0-100":100,
					"timeunit|0-4":4
				})
			],
			success:true,
			messages:'获取数据成功'
		})
	})

	// 数据集删除
	Mock.mock('/a/base/deleteDataSetById','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param.dsid !== "" && param.dsid !== null){
			return{
				elementthing:{},
				success:true,
				messages:'删除成功'
			}
		}else{
			return{
				elementthing:{},
				success:false,
				messages:'删除失败'
			}
		}
	})

	// 定时设置
	Mock.mock('/a/base/setTimeForDataSet','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param){
			return{
				elementthing:{},
				success:true,
				messages:'操作成功'
			}
		}else{
			return{
				elementthing:{},
				success:false,
				messages:'操作失败'
			}
		}
	})

	// 点击数据集列表的某一数据集进入该数据集的配置页面
	Mock.mock('/a/base/enterDataSetById','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param.dsid !== '' && param.dsid !== null){
			return Mock.mock({
				elementthing:{
					'dataflowid|1-1000':1000,
					dataflownodes:
					[
						Mock.mock({
							"nodeid":1,
							"nodename":'oracle数据源1',
							"nodestatus|0-4":4,
							dataflownodedetails:Mock.mock({
								"nodeid":1,
								"nodename":'oracle数据源1',
								"nodestatus|0-4":4,
								"position":Mock.mock({
									'left':128,
									'top':50
								}),
								"componentid|0-10000":10000,
								"componentname":'@word(4)',
								nodeparam:{

								}
							})
						}),
						Mock.mock({
							"nodeid":2,
							"nodename":'oracle数据源2',
							"nodestatus|0-4":4,
							dataflownodedetails:Mock.mock({
								"nodeid":2,
								"nodename":'oracle数据源2',
								"nodestatus|0-4":4,
								"position":Mock.mock({
									'left':200,
									'top':50
								}),
								"componentid|0-10000":10000,
								"componentname":'@word(4)',
								nodeparam:{
									
								}
							})
						}),
						Mock.mock({
							"nodeid":3,
							"nodename":'数据清洗',
							"nodestatus|0-4":4,
							dataflownodedetails:Mock.mock({
								"nodeid":3,
								"nodename":'数据清洗',
								"nodestatus|0-4":4,
								"position":Mock.mock({
									'left':128,
									'top':125
								}),
								"componentid|0-10000":10000,
								"componentname":'@word(4)',
								nodeparam:{
									
								}
							})
						}),
						Mock.mock({
							"nodeid":4,
							"nodename":'数据合并',
							"nodestatus|0-4":4,
							dataflownodedetails:Mock.mock({
								"nodeid":4,
								"nodename":'数据合并',
								"nodestatus|0-4":4,
								"position":Mock.mock({
									'left':170,
									'top':200
								}),
								"componentid|0-10000":10000,
								"componentname":'@word(4)',
								nodeparam:{
									
								}
							})
						}),
						Mock.mock({
							"nodeid":5,
							"nodename":'输出到文件',
							"nodestatus|0-4":4,
							dataflownodedetails:Mock.mock({
								"nodeid":5,
								"nodename":'输出到文件',
								"nodestatus|0-4":4,
								"position":Mock.mock({
									'left':170,
									'top':250
								}),
								"componentid|0-10000":10000,
								"componentname":'@word(4)',
								nodeparam:{
									
								}
							})
						})
					],
					dataflowrelations:[
						Mock.mock({
							sourcenodeid:1,
							targetnodeid:3
						}),
						Mock.mock({
							sourcenodeid:3,
							targetnodeid:4
						}),
						Mock.mock({
							sourcenodeid:2,
							targetnodeid:4
						}),
						Mock.mock({
							sourcenodeid:4,
							targetnodeid:5
						}),
					]
				},
				success:true,
				messages:'获取数据成功'
			})
		}else{
			return{
				elementthing:{},
				success:false,
				messages:'获取数据失败'
			}
		}
	})

	// 启动任务
	Mock.mock('/a/base/startTheTask','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param.dataflowid !=='' && param.dataflowid != null){
			return {
				elementthing:{},
				success:true,
				messages:'启动成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'启动失败'
			}
		}
	})
	// 暂停任务
	Mock.mock('/a/base/stopTheTask','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param.dataflowid !=='' && param.dataflowid != null){
			return {
				elementthing:{},
				success:true,
				messages:'暂停任务成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'暂停任务失败'
			}
		}
	})

	// 获取历史任务列表
	Mock.mock('/a/base/getHistoryTaskList','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param.dsid !== '' && param.dsid != null){
			return {
				elementthing:Mock.mock({
					dsname:'@word(5)',
					dataflowid:1000,
					data:
					[
						Mock.mock({
							dataflowid:1000,
							'tasklogid|0-1000':1000,
							'taskstatus|0-4':4,
							'tasksuccesscount|1000-10000':10000,
							'taskfailcount|0-100':100

						}),
						Mock.mock({
							dataflowid:1000,
							'tasklogid|0-1000':1000,
							'taskstatus|0-4':4,
							'tasksuccesscount|1000-10000':10000,
							'taskfailcount|0-100':100

						}),
						Mock.mock({
							dataflowid:1000,
							'tasklogid|0-1000':1000,
							'taskstatus|0-4':4,
							'tasksuccesscount|1000-10000':10000,
							'taskfailcount|0-100':100

						})
					]
				}),
				success:true,
				messages:'获取数据成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'获取数据失败'
			}
		}
	})

	// 历史任务详情
	Mock.mock('/a/base/getNodeHistoryTask','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param.tasklogid !== '' && param.tasklogid !=null){
			return Mock.mock({
				elementthing:{
					'dataflowid|1-1000':1000,
					dataflownodes:
					[
						Mock.mock({
							"nodeid":1,
							"nodename":'oracle数据源1',
							"nodestatus|0-4":4,
							dataflownodedetails:Mock.mock({
								"nodeid":1,
								"nodename":'oracle数据源1',
								"nodestatus|0-4":4,
								"position":Mock.mock({
									'left':128,
									'top':50
								}),
								"componentid|0-10000":10000,
								"componentname":'@word(4)',
								nodeparam:{

								}
							})
						}),
						Mock.mock({
							"nodeid":2,
							"nodename":'oracle数据源2',
							"nodestatus|0-4":4,
							dataflownodedetails:Mock.mock({
								"nodeid":2,
								"nodename":'oracle数据源2',
								"nodestatus|0-4":4,
								"position":Mock.mock({
									'left':200,
									'top':50
								}),
								"componentid|0-10000":10000,
								"componentname":'@word(4)',
								nodeparam:{
									
								}
							})
						}),
						Mock.mock({
							"nodeid":3,
							"nodename":'数据清洗',
							"nodestatus|0-4":4,
							dataflownodedetails:Mock.mock({
								"nodeid":3,
								"nodename":'数据清洗',
								"nodestatus|0-4":4,
								"position":Mock.mock({
									'left':128,
									'top':125
								}),
								"componentid|0-10000":10000,
								"componentname":'@word(4)',
								nodeparam:{
									
								}
							})
						}),
						Mock.mock({
							"nodeid":4,
							"nodename":'数据合并',
							"nodestatus|0-4":4,
							dataflownodedetails:Mock.mock({
								"nodeid":4,
								"nodename":'数据合并',
								"nodestatus|0-4":4,
								"position":Mock.mock({
									'left':170,
									'top':200
								}),
								"componentid|0-10000":10000,
								"componentname":'@word(4)',
								nodeparam:{
									
								}
							})
						}),
						Mock.mock({
							"nodeid":5,
							"nodename":'输出到文件',
							"nodestatus|0-4":4,
							dataflownodedetails:Mock.mock({
								"nodeid":5,
								"nodename":'输出到文件',
								"nodestatus|0-4":4,
								"position":Mock.mock({
									'left':170,
									'top':250
								}),
								"componentid|0-10000":10000,
								"componentname":'@word(4)',
								nodeparam:{
									
								}
							})
						})
					],
					dataflowrelations:[
						Mock.mock({
							sourcenodeid:1,
							targetnodeid:3
						}),
						Mock.mock({
							sourcenodeid:3,
							targetnodeid:4
						}),
						Mock.mock({
							sourcenodeid:2,
							targetnodeid:4
						}),
						Mock.mock({
							sourcenodeid:4,
							targetnodeid:5
						}),
					]
				},
				success:true,
				messages:'获取数据成功'
			})
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'获取数据失败'
			}
		}
	})

	//击历史任务中某一节点触发获取相关信息的事件
	Mock.mock('/a/base/getNodeHistoryTaskInfo','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param){
			return Mock.mock({
				elementthing:Mock.mock({
					executeby:'系统',
					tasklogtime:'@date("yyyy-MM-dd")',
					taskid:123,
					issuccessful:0,
					nodedatanum:10000,
					nodetaskcolumn:[
						"身份号码","车辆信息"
					]
				}),
				success:true,
				messages:'获取数据成功'
			})
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'获取数据失败'
			}
		}
	})

	// 取左侧导航table的组件列表
	Mock.mock('/a/base/getAllComponent','get',function(options){
		return Mock.mock({
			elementthing:
			[
				{
					componenttypename:'数据源',
					data:
					[
						{
							"componentid|0-10000":10000,
							componentname:'mysql',
							componentdescription:'mysql',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
						},
						{
							"componentid|0-10000":10000,
							componentname:'oracle',
							componentdescription:'oracle',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
						},
						{
							"componentid|0-10000":10000,
							componentname:'excel',
							componentdescription:'excel',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
						},
						{
							"componentid|0-10000":10000,
							componentname:'sqlserver',
							componentdescription:'sqlserver',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
						}

					]
				},
				{
					componenttypename:'输出',
					data:
					[
						{
<<<<<<< .mine
							"componentid|0-10000":10000,
							componentname:'mysql',
							componentdescription:'mysql',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
||||||| .r1514536
							"component_id|0-10000":10000,
							component_name:'mysql',
							component_description:'mysql',
							component_imgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&step_word=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401_R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219_info300X300.png&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bstq7vg_z%26e3Bv54AzdH3F63AzdH3F9daac0_z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
=======
							"componentid|0-10000":10000,
							componentname:'mysql',
							componentdescription:'mysql',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&hs=0&pn=3&spn=0&di=90846154080&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=223138572%2C2764436179&os=1209834903%2C106429489&simid=0%2C0&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZWdvRTBDrymgJueo73kgpw%3D%3D%2F449797012800471966.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fks52_z%26e3B8mn_z%26e3Bv54AzdH3F48c80d0ac0a0_dAzdH3Fks52AzdH3FfpwptvAzdH3Fd9cdn0a8cda8n9dbm9aabalAzdH3F&gsm=0'
>>>>>>> .r1533331
						},
						{
							"componentid|0-10000":10000,
							componentname:'oracle',
							componentdescription:'oracle',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
						},
						{
							"componentid|0-10000":10000,
							componentname:'excel',
							componentdescription:'excel',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
						},
						{
							"componentid|0-10000":10000,
							componentname:'sqlserver',
							componentdescription:'sqlserver',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
						}

					]
				},
				{
					componenttypename:'数据处理',
					data:
					[
						{
							"componentid|0-10000":10000,
							componentname:'数据合并',
							componentdescription:'数据合并',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
						},
						{
							"componentid|0-10000":10000,
							componentname:'数据清洗',
							componentdescription:'数据合并',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
						},
						{
							"componentid|0-10000":10000,
							componentname:'数据转换',
							componentdescription:'数据转换',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
						},
						{
							"componentid|0-10000":10000,
							componentname:'数据聚合',
							componentdescription:'数据聚合',
							componentimgurl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mysql&stepword=&hs=0&pn=1&spn=0&di=193732696850&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=478316268%2C4251234910&os=3141204532%2C3320172919&simid=4198463661%2C692251618&adpicid=0&lpn=0&ln=1917&fr=&fmq=1498793189401R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimages.liqucn.com%2Fh018%2Fh88%2Fimg201411221428360219info300X300.png&fromurl=ipprz2C%24qAzdH3FAzdH3Foooz%26e3Bstq7vgz%26e3Bv54AzdH3F63AzdH3F9daac0z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'
						}

					]
				}
			],
			success:true,
			messages:'获取列表成功'
		})
	})

	// 新增节点
	Mock.mock('/a/base/addNewNodeAndGetPropFiles','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param.dataflownodedetails){
			return Mock.mock({
				elementthing:Mock.mock({
					componentname:"sss",
					componentjsfile:"xxx.js",
					componentcssfile:'xxx.css',
					componenthtmlmodelcode:'<div></div>',
					nodeid:123
				}),
				success:true,
				messages:'添加节点成功'
			})
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'添加节点失败'
			}
		}
	})

	// 节点删除
	Mock.mock('/a/base/deleteNodeById','post',function(options){
		// get params
		let param = JSON.parse(options.body)

		if(param.nodeid !== ''&& param.nodeid !=null){
			return Mock.mock({
				elementthing:{},
				success:true,
				messages:'删除成功'
			})
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'删除失败'
			}
		}
	})

	// 节点配置保存
	Mock.mock('/a/base/saveNodePropSet','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param){
			return Mock.mock({
				elementthing:{

				},
				success:true,
				messages:'保存成功'
			})
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'保存失败'
			}
		}
	})
	//点击节点的时候获取节点配置json字符串
	Mock.mock('/a/base/getNodePropSetJson','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param.nodeid !== '' && param.nodeid != null){
			return Mock.mock({
				elementthing:Mock.mock({
					'nodeid|1-10000':10000,
					nodename:"@word(5)",
					'nodestatus|0-4':4,
					dataflownodedetails:Mock.mock({
						'nodeid|1-10000':10000,
						nodename:"@word(5)",
						'nodestatus|0-4':4,
						position:Mock.mock({
							'left|0-500':500,
							"top|0-800":800
						}),
						'componentid|1-10000':10000,
						componentname:"@word(5)",
						nodeparam:{}
					}),
					componentjsfile:"xxx.js",
					componentcssfile:"xxxx.css",
					componenthtmlcode:"<div></div>"
				}),
				success:true,
				messages:'获取数据成功'
			})
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'获取数据失败'
			}
		}
	})

	//拖动组件改变位置的时候触发保存新的位置信息
	Mock.mock('/a/base/dropNode','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param){
			return {
				elementthing:{},
				success:true,
				messages:"操作成功"
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:"操作失败"
			}
		}
	})

	// 根据流程任务id返回所有的节点关系数组
	Mock.mock('/a/base/getAllNodeRelationShips','get',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param.dataflowid !== '' && param.dataflowid != null){
			return {
				elementthing:Mock.mock({
					dataflowrelations:[
						Mock.mock({
							sourcenodeid:1,
							targetnodeid:3
						}),
						Mock.mock({
							sourcenodeid:3,
							targetnodeid:4
						}),
						Mock.mock({
							sourcenodeid:2,
							targetnodeid:4
						}),
						Mock.mock({
							sourcenodeid:4,
							targetnodeid:5
						}),
					]
				}),
				success:true,
				messages:"获取数据成功"
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:"获取数据失败"
			}
		}
	})

	// 连线触发，保存节点关系
	Mock.mock('/a/base/saveNodeRelationShip','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param.dataflowid !== '' && param.dataflowid != null){
			return {
				elementthing:{},
				success:true,
				messages:"保存成功"
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:"保存失败"
			}
		}
	})

	//获取组件管理界面列表
	Mock.mock('/a/base/getComponentList','get',function(options){
		return Mock.mock({
			elementthing:
			[
				{
<<<<<<< .mine
					componenttypesort:0,
					componenttypename:"数据源",
					componenttypeid:1,
					componenttypedescription:"数据源",
					gmtmodified:"2017-6-30",
					isdelete:1,
					show:false,//默认，用于前端渲染界面
					type:"drop",//默认，用于前端渲染界面
					dos:"do1",//写死
					children:
||||||| .r1514536
					component_type_name:"数据源",
					component_type_id:1,
					component_type_description:"数据源",
					gmt_modified:"2017-6-30",
					data:
=======
					componenttypename:"数据源",
					componenttypeid:1,
					componenttypedescription:"数据源",
					gmtmodified:"2017-6-30",
					data:
>>>>>>> .r1533331
					[
						{
<<<<<<< .mine
							dos:"do2",//写死
							type:"check",//默认，用于前端渲染界面
							ischecked:false,//默认，用于前端渲染界面
							componentid:13,
							componentname:'mysql',
							componentdescription:'mysql',
							isdelete:0,
							gmtmodified:"2017-6-30"
						},
||||||| .r1514536
							component_id:13,
							component_name:'mysql',
							component_description:'mysql',
							is_delete:0,
							gmt_modified:"2017-6-30"
						}
					]
				},
				{
					component_type_name:"数据源",
					component_type_id:1,
					component_type_description:"数据源",
					gmt_modified:"2017-6-30",
					data:
					[
=======
							componentid:13,
							componentname:'mysql',
							componentdescription:'mysql',
							isdelete:0,
							gmtmodified:"2017-6-30"
						}
					]
				},
				{
					componenttypename:"数据源",
					componenttypeid:1,
					componenttypedescription:"数据源",
					gmtmodified:"2017-6-30",
					data:
					[
>>>>>>> .r1533331
						{
<<<<<<< .mine
							dos:"do2",//写死
							type:"check",//默认，用于前端渲染界面
							ischecked:false,//默认，用于前端渲染界面
							componentid:1234,
							componentname:'oracle',
							componentdescription:'oracle',
							isdelete:0,
							gmtmodified:"2017-6-30"
||||||| .r1514536
							component_id:1234,
							component_name:'oracle',
							component_description:'oracle',
							is_delete:0,
							gmt_modified:"2017-6-30"
=======
							componentid:1234,
							componentname:'oracle',
							componentdescription:'oracle',
							isdelete:0,
							gmtmodified:"2017-6-30"
>>>>>>> .r1533331
						}
					]
				},
				{
<<<<<<< .mine
					componenttypesort:2,
					componenttypename:"数据处理",
					componenttypeid:2,
					componenttypedescription:"数据处理",
					gmtmodified:"2017-6-30",
					isdelete:1,
					show:false,//默认，用于前端渲染界面
					type:"drop",//默认，用于前端渲染界面
					dos:"do1",//写死
					children:
||||||| .r1514536
					component_type_name:"数据处理",
					component_type_id:2,
					component_type_description:"数据处理",
					gmt_modified:"2017-6-30",
					data:
=======
					componenttypename:"数据处理",
					componenttypeid:2,
					componenttypedescription:"数据处理",
					gmtmodified:"2017-6-30",
					data:
>>>>>>> .r1533331
					[
						{
<<<<<<< .mine
							dos:"do2",//写死
							type:"check",//默认，用于前端渲染界面
							ischecked:false,//默认，用于前端渲染界面
							componentid:16,
							componentname:'数据合并',
							componentdescription:'数据合并',
							isdelete:0,
							gmtmodified:"2017-6-30"
						},
						{
							dos:"do2",//写死
							type:"check",//默认，用于前端渲染界面
							ischecked:false,//默认，用于前端渲染界面
							componentid:11236,
							componentname:'数据聚合',
							componentdescription:'数据聚合',
							isdelete:0,
							gmtmodified:"2017-6-30"
||||||| .r1514536
							component_id:16,
							component_name:'数据合并',
							component_description:'数据合并',
							is_delete:0,
							gmt_modified:"2017-6-30"
=======
							componentid:16,
							componentname:'数据合并',
							componentdescription:'数据合并',
							isdelete:0,
							gmtmodified:"2017-6-30"
>>>>>>> .r1533331
						}
					]
				},
<<<<<<< .mine
||||||| .r1514536
				{
					component_type_name:"数据处理",
					component_type_id:2,
					component_type_description:"数据处理",
					gmt_modified:"2017-6-30",
					data:
					[
						{
							component_id:11236,
							component_name:'数据聚合',
							component_description:'数据聚合',
							is_delete:0,
							gmt_modified:"2017-6-30"
						}
					]
				}

=======
				{
					componenttypename:"数据处理",
					componenttypeid:2,
					componenttypedescription:"数据处理",
					gmtmodified:"2017-6-30",
					data:
					[
						{
							componentid:11236,
							componentname:'数据聚合',
							componentdescription:'数据聚合',
							isdelete:0,
							gmtmodified:"2017-6-30"
						}
					]
				}

>>>>>>> .r1533331
			],
			success:true,
			messages:'获取数据成功'
		})
	})

	//根据组件名字模糊查询
	Mock.mock('/a/base/getComponentInfoByName','post',function(options){
		// get params
		let param = JSON.parse(options.body)
<<<<<<< .mine
		if(param.componentName !== '' && param.componentName!=null){
||||||| .r1514536
		if(param.component_name !== '' && param.component_name!=null){
=======
		if(param.componentname !== '' && param.componentname!=null){
>>>>>>> .r1533331
			return{
<<<<<<< .mine
				elementthing:[{
					componenttypesort:0,
					componenttypename:"数据源",
					componenttypeid:1,
					componenttypedescription:"数据源",
					gmtmodified:"2017-6-30",
					isdelete:1,
					show:false,//默认，用于前端渲染界面
					type:"drop",//默认，用于前端渲染界面
					dos:"do1",//写死
					children:
||||||| .r1514536
				elementthing:{
					component_type_name:"数据源",
					component_type_id:1,
					component_type_description:"数据源",
					gmt_modified:"2017-6-30",
					data:
=======
				elementthing:{
					componenttypename:"数据源",
					componenttypeid:1,
					componenttypedescription:"数据源",
					gmtmodified:"2017-6-30",
					data:
>>>>>>> .r1533331
					[
						{
<<<<<<< .mine
							dos:"do2",//写死
							type:"check",//默认，用于前端渲染界面
							ischecked:false,//默认，用于前端渲染界面
							componentid:13,
							componentname:'mysql',
							componentdescription:'mysql',
							isdelete:0,
							gmtmodified:"2017-6-30"
||||||| .r1514536
							component_id:13,
							component_name:'mysql',
							component_description:'mysql',
							is_delete:0,
							gmt_modified:"2017-6-30"
=======
							componentid:13,
							componentname:'mysql',
							componentdescription:'mysql',
							isdelete:0,
							gmtmodified:"2017-6-30"
>>>>>>> .r1533331
						}
					]
				}],
				success:true,
				messages:'获取数据成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'失败了'
			}
		}
	})

	//新增组件类型
	Mock.mock('/a/base/addNewComponentType','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param){
			return {
				elementthing:{
					componenttypeid:5512,
					gmtmodified:"2017-6-30"
				},
				success:true,
				messages:'新增类型成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'新增类型失败'
			}
		}
	})

	// 组件类型编辑
	Mock.mock('/a/base/editComponentType','post',function(){
		// get params
		let param = JSON.parse(options.body)
		if(param){
			return {
				elementthing:{
				},
				success:true,
				messages:'成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'失败'
			}
		}
	})

	//新增组件
	Mock.mock('/a/base/addNewComponent','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param){
			return {
				elementthing:{
					componentid:56,
					isdelete:1,
					gmtmodified:"2017-6-30"
				},
				success:true,
				messages:'新增成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'新增失败'
			}
		}
	})

	//组件配置文件删除
	Mock.mock('/a/base/deleteFileForComponentById','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param){
			return {
				elementthing:{
				},
				success:true,
				messages:'删除成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'删除失败'
			}
		}
	})

	//组件删除
	Mock.mock('/a/base/deleteComponentById','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param.componentid!=='' && param.componentid!=null){
			return {
				elementthing:{
				},
				success:true,
				messages:'删除成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'删除失败'
			}
		}
	})

	// 组件编辑
	Mock.mock('/a/base/editComponent','post',function(options){
		// get params
		let param = JSON.parse(options.body)
		if(param){
			return {
				elementthing:{
				},
				success:true,
				messages:'编辑成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'编辑失败'
			}
		}
	})

	// 获取数据源列表
	Mock.mock('/a/base/getDataSourceList','post',function(options){
		// get params
		let param = JSON.parse(options.body)
<<<<<<< .mine
		if(param.dsstyle!==''&&param.dsstyle!=null){
||||||| .r1514536
		if(param.DS_STYLE!==''&&param.DS_STYLE!=null){
=======
		if(param.DSSTYLE!==''&&param.DSSTYLE!=null){
>>>>>>> .r1533331
			return {
				elementthing:[
					Mock.mock({
<<<<<<< .mine
						dbstyle:'mysql',
						dbtemplates:123
||||||| .r1514536
						DB_STYLE:'mysql',
						DB_TEMPLATES:123
=======
						DBSTYLE:'mysql',
						DBTEMPLATES:123
>>>>>>> .r1533331
					}),
					Mock.mock({
<<<<<<< .mine
						dbstyle:'oracle',
						dbtemplates:1235
||||||| .r1514536
						DB_STYLE:'oracle',
						DB_TEMPLATES:1235
=======
						DBSTYLE:'oracle',
						DBTEMPLATES:1235
>>>>>>> .r1533331
					})
				],
				success:true,
				messages:'操作成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'操作失败'
			}
		}
	})

	// 获取某一数据库数据源对应的json和字段
	Mock.mock('/a/base/getDataSourceList','post',function(options){
		// get params
		let param = JSON.parse(options.body)
<<<<<<< .mine
		if(param.dbtemplates!==''&&param.dbtemplates!=null){
||||||| .r1514536
		if(param.DB_TEMPLATES!==''&&param.DB_TEMPLATES!=null){
=======
		if(param.DBTEMPLATES!==''&&param.DBTEMPLATES!=null){
>>>>>>> .r1533331
			return {
				elementthing:[
<<<<<<< .mine
					templatejson:{
						jdbc_type: "mysql",
||||||| .r1514536
					template_json:{
						jdbc_type: "mysql",
=======
					templatejson:{
						jdbctype: "mysql",
>>>>>>> .r1533331
						versions:"mysql5.0",
						jdbcurl:"",
						jdbcdriver: "com.mysql.jdbc.Driver",
						ip: "192.168.22.121",
						port: "3306",
						username: "123",
						password: "123",
						database: "tt",
						testsql:""
					},
					columns:
					[
						{
			                id: 123,
			                columnname: "jaa001",
			                columncomment: "身份号码",
			                as: "jaa001",
			                selected: ""
			            },
			            {
			                id: "",
			                columnname: "jaa002",
			                columncomment: "姓名",
			                as: "jaa002",
			                selected: ""
			            }
					]
				],
				success:true,
				messages:'操作成功'
			}
		}else{
			return {
				elementthing:{},
				success:false,
				messages:'操作失败'
			}
		}
	})
}

export default Mock