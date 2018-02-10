import React,{Component} from 'react'

class Attrtype extends Component{
	constructor(props){
 		super(props)
 	}
	render(){
		var attr=this.props.item;
		var type=attr.type
		switch(type){
			case '0':
				return(
					<div className="attrStyle">
						<a>{attr.valname+" : "}
							<input type="text" value={attr.val[0]}/>
						</a>
					</div>
				)
				break;
			case '1':	
				return(
					<div className="attrStyle">
						<a>{attr.valname+" : "}
							<select >
								{attr.val.map((item,index)=>(
									<option value={item.value}>{item.name}</option>
									))
								}
							</select>
						</a>
					</div>
				)
				break;
			default:
				return(
					<ul>22</ul>
				)	
		}

	}
}
export default Attrtype
