import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Content from "./Components/Home/Content/Content";
import Footer from "./Components/Footer/Footer";
import ProfileInfo from "./Components/Home/ProfileInfo/ProfileInfo";
import {addNewPost, updateNewPost} from "./Redux/Redux";



function App(props) {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header />
            </div>
            <Routes>
                <Route path='/' element={<Home account={props.state.accountPage}/>} />
                <Route path='/news' element={<ProfileInfo />} />
                <Route path='/message' element={<Content profilePage={props.state.profilePage}
                                                         addNewPost={props.addNewPost}
                                                         newPostText={props.state.profilePage.newPostText}
                                                         updateNewPost={props.updateNewPost}/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
