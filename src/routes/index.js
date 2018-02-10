import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'
const connectComponent = createContainer(
  ({ work  }) => ({ work  }), // mapStateToProps
  require('ACTION/DS').default, // mapActionCreators
)
export default {
  path: '/',

  component: require('COMPONENT/App').default,

  indexRoute: {
    // component: require('COMPONENT/Welcome').default
    getComponent(nextState,cb){
      require.ensure([],(require)=>{
          injectReducer('work', require('REDUCER/DS').default),
          cb(null,connectComponent(require('COMPONENT/Welcome').default))
      },'Welcome')
    }
  },
  childRoutes: [
     require("./chooseData").default,
     //require("./theme").default
    //  require("./addEle").default,  
    //  // { path: 'addds', component: connectComponent(require('COMPONENT/popUp/AddDs').default) }, 
    //  require("./dataSourceMsg").default,
    //  require("./AddNewDatasrc").default,
    // 强制“刷新”页面
    { path: 'redirect', component: require('COMPONENT/Redirect').default },
    
    // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
    { path: '*', component: require('COMPONENT/404').default }
  ]
}
