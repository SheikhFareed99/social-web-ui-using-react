import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from"./components/Header";
import Footer from"./components/Footer";
import Slide from"./components/Sidebar";
import Forms from"./components/Forms";
import  Postlist from"./components/Postlist";
import { useState } from 'react';
import PostListProvider from "./store/Post-list-store";
function App() {

  const[currstate,newstate]=useState("Home");

  const change=(word)=>
  {
    newstate(word);
  }

  return (
    <PostListProvider>
    <div className='main'>
     <Slide currstate={currstate} change={change}></Slide>
  
    <div className="contents">

    <Header></Header>
    { currstate==="Home"? <Postlist></Postlist>: <Forms></Forms>}
    <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
 
  );
}

export default App;
