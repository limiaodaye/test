// const DRAG='DRAG'
import axios from "axios";
var qs = require('qs');
const RE='RE'
const Reset=()=>{
	return dispatch=>{
		dispatch({
			type : RE,
			payload: {"data":["ss","ssd","eee","dd","gg","sss","ee"]}
		})
	}
}

export default {
	Reset
	
}
export const getData = {
	//启动
	[RE]:(previewDtata, { payload })=>{
		return Object.assign({},previewDtata,{
			echartsData:payload
		})
	}

	
}

