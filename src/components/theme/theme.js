import React,{Component} from 'react'
class Themes extends Component{
	constructor(props){
		super(props)
		this.handle=this.handle.bind(this)
	}
	handle(){
		this.props.Reset();
	}
	render(){
		return(
			<div className='lm-big-box'>
				<div className='lm-middle-box'>
					<div className="lm-title-box">
						<div className="lm-title-theme"><span>图标主题</span></div>
						<div className="lm-title-desgin-theme"><span>设计器主题</span></div>
					</div>
					<div className="lm-body-box">
						<div className="lm-body-panet">
							<div className="lm-body-panet-title">
								<span>全部主题</span>
							</div>
							<div className="lm-body-panet-body"></div>
							<div className="lm-body-panet-button">
								<input type="button" value="新增类型"/>
							</div>
						</div>
						<div></div>
					</div>
				</div>
		   </div>
		)
	}
}
export default Themes
