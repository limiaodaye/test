import React,{Component} from 'react'
import Option from 'COMPONENT/chooseData/Option'
import Dimension from 'COMPONENT/chooseData/Dimension'
import Attribute from 'COMPONENT/chooseData/Attribute'
import search from 'ASSET/img/icon-search.png'
import close from 'ASSET/img/close_black.png'
import ChooseEcharts from 'COMPONENT/chooseData/ChooseEcharts'

class DatasetList extends Component{
	constructor(props){
 		super(props)
 		this.showSelect   = this.showSelect.bind(this);
 		this.hideSelect   = this.hideSelect.bind(this);
 		this.getState   = this.getState.bind(this);
 		this.getData   = this.getData.bind(this);
 		this.hideData   = this.hideData.bind(this);
 		this.state={
 			putDemData:[],
 			putMeaData:[]
 		}
 	}
 	componentDidMount(){
        let getthis=this;
		$(".putDemData").droppable({drop:function(e,ui){
			const name=ui.helper.context.innerHTML;
			let getState=getthis.state.putDemData.slice(0);
			getState.push(name)
			getthis.setState({putDemData:getState})
			getthis.props.handle();
		}});
		$(".putMeaData").droppable({drop:function(e,ui){
			const name=ui.helper.context.innerHTML;
			let getState=getthis.state.putMeaData.slice(0);
			getState.push(name)
			getthis.setState({putMeaData:getState})
			getthis.props.handle();
		}});
	}
 	showSelect(){
 		$("#selectShow").show();	
 	}
	hideSelect(){
		$("#selectShow").hide();
	
	}
	getState(key){
		$(".datasetList-input-input").val(key);
		$("#tableName").html(key);
	}
	getData(e){
		$(e.target).val("");
	}
	hideData(e){
		$(e.target).parents(".dataShow").remove();
	}
	render(){
		var Nav=this.props.select.select;
		var tableDimension=this.props.select.tableList;
		var data=this.props.select.data;
		var cssurl=this.props.select.cssurl;
		var statDem=this.state.putDemData;
		var statMea=this.state.putMeaData;
		var data=this.props.select.echartsData.data;
		return(
			<div className="lm-heightDiv">
				<div className='datasetList'>
				 	<div className='lm-datasetList-div'>
				 		<div>
							<p className='datasetList-button'>数据集管理</p>	
				 		</div>
				 		<div className='datasetList-input'>
				 			<input type="button" value="请选择" className='datasetList-input-input' onFocus={this.showSelect}/>
					 		<div className='datasetList-ul' id="selectShow" onMouseLeave={this.hideSelect}>
					 			{Nav.length!=0?
								 Nav.map((item,index)=>(
									<Option key={index} item={item} getState={this.getState} hideSelect={this.hideSelect}/>
								)):null							
								}
					 		</div>
				 		</div>
				 		
				 	</div>
				 	<div className="lm-tableList">
				 			<input type="text" value="请输入表名" className="tableList-text" onFocus={this.getData}/>
				 			<img src={search}/>
				 	</div>
				 	<div className="lm-tableDimension" >
				 			{
				 				<Dimension item={tableDimension}/>
				 			}
				 	</div>
			   </div>
			   <div className="lm-workplace">
			   		<div className="dropDiv">
			   			<div className="dropDemDivPlace">
			   				<p className="Datatext">维度:</p>
			   				<div className="putDemData" onChange={this.changeData}>
			   				{statDem.map((item,index)=>(
									<div className="dataShow"><p>{item}<img src={close} onClick={this.hideData}/></p></div>
			   					))

			   				}
			   				</div>
			   			</div>
			   			<div className="dropMeaDivPlace">
			   				<p className="Datatext">度量:</p>
			   				<div className="putMeaData">
			   					{statMea.map((item,index)=>(
									<div className="dataShow"><p>{item}<img src={close} onClick={this.hideData}/></p></div>
			   					))

			   				}
			   				</div>
			   			</div>
			   		</div>
			   		<div className="lm-echartworkplace">
			   			<ChooseEcharts value={this.state} data={data}/>
			   		</div>
			   </div>
			   <div className="lm-attrShow">
			  		<Attribute cssurl={cssurl}/>
			   </div>
			 </div>  
		  
		)
	}
}
export default DatasetList
