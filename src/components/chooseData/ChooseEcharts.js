import React,{Component} from 'react'
import Line from 'COMPONENT/component/Line'

class ChooseEcharts extends Component{
	constructor(props){
 		super(props)
 	
 	}
	
	
	render(){
		var name="line";
		var value=this.props.value;
		switch(name){
			case "line":
				return(
					<Line value={value} data={this.props.data}/>
				)

			break;
			default:
				return(
				<div>
				</div>
				)

		}
		
	}
}
export default ChooseEcharts
