import React,{Component} from 'react'
import DatasetList from 'Component/'
class Welcome extends Component{
	constructor(props){
		super(props)
		this.handle=this.handle.bind(this)
	}
	handle(){
		this.props.Reset();
	}
	render(){
		return(
			<div className='bigDiv'>
			 	<div className='contain'>
			 		<div className='title'><p>模型设置</p></div>
			 		<div className='mincontain'>
			 			<DatasetList/>
			 		</div>
			 		</div>
			 	</div>
		   </div>
		)
	}
}
export default Welcome
