import React,{Component} from 'react'
class Welcome extends Component{
	constructor(props){
		super(props)
		this.handle=this.handle.bind(this)
	}
	handle(){
		this.props.Reset();
	}
	render(){
		console.log(this.props)
		return <div>1111</div>
	}
}
export default Welcome
