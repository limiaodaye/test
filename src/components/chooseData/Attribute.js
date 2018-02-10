import React,{Component} from 'react'
import Attrtype from 'COMPONENT/chooseData/Attrtype'
class Attribute extends Component{
	constructor(props){
 		super(props)
 		this.showType=this.showType.bind(this);
 	}
 	
 	showType(e){
 		
 		$(e.target).parent().nextAll().toggle();
 	}
	render(){
		var cssurl=this.props.cssurl;
		console.log(cssurl);
		return(
			<div>{cssurl.attr.map((item,index)=>(
				<div key={index}>
				  <div className="attrName" ><p onClick={this.showType}>{item.name}</p></div>
				  <div >{
				  	item.setts.map((item,index)=>(
				  		<Attrtype item={item}/>
				  	))
				  }</div>
				</div> 
				  ))
				}
			</div>
		)
	}
}
export default Attribute
