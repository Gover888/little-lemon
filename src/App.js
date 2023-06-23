import {useEffect} from "react";
import {useDispatch} from "react-redux";

import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Navigation/NavigationBar";
import RouterPage from "./pages/RouterPage";
import {fetchProductList} from "./store/actions/productAction";

import "./App.scss"

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductList())
    }, [dispatch])

    return (
        <div className="App">
            <NavigationBar/>
            <RouterPage/>
            <Footer/>
        </div>
    );
}

export default App;
