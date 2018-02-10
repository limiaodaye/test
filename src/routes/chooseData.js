import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'
const connectComponent = createContainer(
  ({ DS  }) => ({ DS  }), // mapStateToProps
  require('ACTION/DS').default, // mapActionCreators
)
export default {
  path: '/chooseData',

  component: require('COMPONENT/App').default,

  indexRoute: {
    // component: require('COMPONENT/Welcome').default
    getComponent(nextState,cb){
      require.ensure([],(require)=>{
          injectReducer('DS', require('REDUCER/DS').default)
          cb(null,connectComponent(require('COMPONENT/chooseData/chooseData').default))
      },'www')
    }
  }
}
