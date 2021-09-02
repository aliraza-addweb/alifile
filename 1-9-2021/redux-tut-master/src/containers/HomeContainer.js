import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart,RemoveToCart} from '../service/actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    RemoveToCartHandler:data=>dispatch(RemoveToCart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;