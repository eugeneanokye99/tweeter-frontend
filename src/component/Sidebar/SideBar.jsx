import React, { useEffect } from "react";
import { useState } from "react";
import "./Sidebar.css";
import home from "../Assets/home.svg"
import notify from "../Assets/notifications.svg"
import bookmark from "../Assets/bookmarks.svg"
import message from "../Assets/comment.svg"
import profile from "../Assets/account_box.svg"
import SearchComp from "./SearchComp";
import { useDispatch, useSelector } from "react-redux";
import SearchUser from "../../react-redux/actions/SearchApi";
import { Spinner } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CreateTweet from "../Home Page/createTweet";

function Sidebar (){
    var title="Home";
    function showTitle (n){
        document.getElementsByClassName("sbListItem")[n].style.color="#63DF76";
        document.getElementsByClassName("sbListIcon")[n].style.color="#63DF76";
        for(var i=0;i<5;i++){
            if(i!=n)
            document.getElementsByClassName("sbListItem")[i].style.color="rgba(255, 255, 255, 0.9)";
            document.getElementsByClassName("sbListIcon")[i].style.color="rgba(255, 255, 255, 0.9)";
        }  
    }
    function handleTitle(n){
        switch(n){
            case 0: return title="Home";
            case 1: return title="Notifications";
            case 2: return title="Bookmarks";
            case 3: return title="Messages";
            case 4: return title="Profile";
            default: return title=="Home";
        }
    }

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const {list, tomap, loading} = useSelector((S)=>S.SearchReducer)
    const [searchListArray, setSearchListArray] = useState([]);
    function handleSearch(e){
        setSearch(e.target.value)
        dispatch(SearchUser(e.target.value));
        }
   
    useEffect(()=>{
        if(tomap){
            if(list.result.length>0){
            setSearchListArray(list.result)
            }
            else{
                setSearchListArray([])
            }
        }
       
    },[tomap, list])

    useEffect(()=>{
        if(loading===true){
            document.body.style.opacity = 0.5;
        }
        else{
            document.body.style.opacity = 1;
        }
    },[loading])
    const navigate = useNavigate();
  
function xyz(){
    document.getElementById("CREATETWEET").style.display="block"
    document.getElementsByClassName("poopupbg1")[0].style.opacity=0.2;
    document.getElementsByClassName("poopupbg2")[0].style.opacity=0.2;
    document.getElementsByClassName("poopupbg3")[0].style.opacity=0.2;
    document.getElementById("CREATETWEET").style.opacity=1;
}
    return <>
    <div className="navbar poopupbg1">
        <img src={home} className="navbarIcon"/>
        <p className="navbarHead">{title}</p>
        <span id="navbarLine" />
    </div>
    <div className="sidebar poopupbg2">
        <p className="logoHead">Tweeter</p>
        <ul className="sbList">
            <li className="sbListItem" onClick={()=>{showTitle(0)}}><span className="sbListIcon"><img src={home} /></span>Home</li>
            <li className="sbListItem" onClick={()=>{showTitle(1)}}><span className="sbListIcon"><img src={notify} /></span>Notifications</li>
            <li className="sbListItem" onClick={()=>{showTitle(2)}}><span className="sbListIcon"><img src={bookmark} /></span>Bookmarks</li>
            <li className="sbListItem" onClick={()=>{showTitle(3)}}><span className="sbListIcon"><img src={message} /></span>Messages</li>
            <li className="sbListItem" onClick={()=>{showTitle(4)}}><span className="sbListIcon"><img src={profile} /></span>Profile</li>
        </ul>
        {/* <AnchorLink href="#CREATETWEET"><button className="sideBarTweetBtn" >Create Tweet</button></AnchorLink> */}
        {/* <HashLink to="#CREATETWEET"><button className="sideBarTweetBtn" onClick={()=>{document.getElementById("CREATETWEET").style.display="block"}}>Create Tweet</button></HashLink> */}
        <button className="sideBarTweetBtn" onClick={()=>{xyz()}}>Create Tweet</button>
    </div>
    <div><input className="searchbar" type="text" value={search} onChange={handleSearch} placeholder="Search" /></div>
    <div className="searchFlexBox">
         {(searchListArray.length>0)?(searchListArray.map((searchh)=>{
            return <SearchComp name={searchh.name} username={searchh.user_name} />
        })):<p className="searchAlter">No search found</p>}
    </div>
    <CreateTweet />
    {(loading===true)?<Spinner animation="border" variant="light" id="loadSpinner" />:null}
    </>
}
export default Sidebar