import React,{Component} from 'react'
import DatasetList from 'COMPONENT/chooseData/DatasetList'
class Welcome extends Component{
	constructor(props){
		super(props)
		this.handle=this.handle.bind(this)
	}
	handle(){
		this.props.Reset();
	}
	render(){
	
		var select=this.props.DS;
		return(
			
			 	<div className='lm-contain'>
			 		<div className='lm-title'><p>模型设置</p></div>
			 		<div className='mincontain'>
			 		<DatasetList select={select} handle={this.handle}/>
			 		</div>
			 	</div>
		
		)
	}
}
export default Welcome
