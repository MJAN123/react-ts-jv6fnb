import {connect} from 'react-redux'
import HelloWorld from './HelloWorld'
import {setMessage} from './../store/action/helloWorld.actions'

mapStateToProps=(state)=>{
  // get data from state here
}

mapDispatchToPRops{
  setMessage,
}




export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)