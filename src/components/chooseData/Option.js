import React,{Component} from 'react'

class Option extends Component{
	constructor(props){
 		super(props)
 		this.getState   = this.getState.bind(this);
 	}
	getState(e){
		var name=e.target;
		var key=$(name).text();
		this.props.getState(key);
		this.props.hideSelect();
	}
	
	render(){
		var name=this.props.item;
		return(
			<ul>
			 <li onClick={this.getState}>{name.key}</li>
			 <ul>
			 	{name.child.length!=0?
						 name.child.map((item,index)=>(
						 <ul className="ulStyle">
						 	<li onClick={this.getState}>{item.key}</li>
						 	<ul className="ulStyle">
						 		{item.child.map((item,index)=>(
									<li onClick={this.getState}>{item.key}</li>
						 			))}
						 	</ul>
						 </ul>
					)):null							
			    }
			 </ul>
			</ul>
		)
	}
}
export default Option
