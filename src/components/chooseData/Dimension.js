import React,{Component} from 'react'
import add from 'ASSET/img/buzuo1.png'


class Dimension extends Component{
	constructor(props){
 		super(props)
 		this.hideUL=this.hideUL.bind(this);
 	}
	componentDidMount(){
		$(".ShowStyle").draggable({ opacity: 0.7,helper: "clone" });
	}

	hideUL(e){
		if($(e.target).nextAll().css("display")=="none"){
			console.log($(this));
		}else{
		
		}
		$(e.target).nextAll().toggle();

	}

	render(){
		var child=this.props.item[0];
		console.log(child);
		return(	
			<ul  ><li className="listTitle" title={child.typeDescribe} onClick={this.hideUL}>{child.typeName}</li>
				{child.dsList.map((item,index)=>(
						<ul>
							<li className="modleStyle" onClick={this.hideUL}><span className="backgroundImg"></span>{item.dsName}</li>
							<ul className="dataShowStyle">
								
								<li className="titleShowStyle">维度</li>
								{
									item.dsFiles.dimensions.map((item,index)=>(
									<li className="ShowStyle">{item.columnName}
									</li>	
									))
								}
								<li  className="titleShowStyle">度量</li>
									{
										item.dsFiles.measures.map((item,index)=>(
										<li className="ShowStyle">{item.columnName}
										</li>	
										))
									}
							</ul>
						</ul>

					))
				}
			</ul>		
		)
	}
}
export default Dimension
