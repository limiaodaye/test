import createReducer from 'UTIL/createReducer'
import { getData } from 'ACTION/DS'
import initState from 'STORE/initState'

export default createReducer(initState.chooseSouce,getData) 