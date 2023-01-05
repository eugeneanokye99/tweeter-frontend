import axios from "axios";
import React from "react";
import BaseUrl from "./BaseUrl";

const accessToken = sessionStorage.getItem("access token")
const config = {
    headers:{
        "Authorization" :`Bearer ${accessToken}`
    }
}

export const TweetFeedAction =()=>{
    return async function (dispatch){
        dispatch({
            type:"Tweet_Feed_Started",
            payload:""
        })
        await BaseUrl.get("/t/feed?page=0",config)
        .then((res)=>{
            dispatch({
                type:"Tweet_Feed_Succeed",
                payload:res
            })
        })
        .catch((err)=>{
            dispatch({
                type:"Tweet_Feed_Failed",
                payload:err
            })
        })
    }
}

function TweetLikeAction (tweetId){
    return async function (dispatch){
        dispatch({
            type:"TWEETLIKE_START",
        })
        await BaseUrl.post("/t/like",{tweetId},config)
        .then((res)=>{
            dispatch({
                type:"TWEETLIKE_SUCCESS",
                payload:res
            })
        })
        .catch((err)=>{
            dispatch({
                type:"TWEETLIKE_FAILED",
                payload:err
            })
        })
    }
}
export default TweetLikeAction

export const CreateTweetAct =(formData)=>{
    return async function (dispatch){
        await BaseUrl.post("/t/create",formData,config)
        .then((Res)=>{
            console.log(Res)
            dispatch({
                type:"TWEETCREATED",
                payload:Res
            })
        })
        .catch((err)=>{
            dispatch({
                type:"TWEETNOTCREATED",
                payload:err
            })
        })
    }
}

export const LikedTweetAction =(username)=>{
    return async function (dispatch){
        await BaseUrl.get(`/p/liked/${username}`,config)
        .then((Res)=>{
            console.log(Res)
            dispatch({
                type:"LIKEDTWEETLISTYES",
                payload:Res
            })
        })
        .catch((err)=>{
            dispatch({
                type:"LIKEDTWEETLISTNO",
                payload:err
            })
        })
    }

}

export const FakeTweetFeedAction =(tweeet, )=>{
   return {
    type:"TWEET_FEED_ADD_ACTION",
    payload:{
        tweeet,
    }
   }
}

const TweetListWithTag=(tag)=>{
    return async function (dispatch){
        dispatch({type:"TAG_TWEET_LIST_START"})
      console.log("hash")
          await BaseUrl.get(`/t/tagged/${tag}`, config)
          .then((res)=>dispatch({
             type:"TAG_TWEET_LIST_SUCCEDED",
             payload:res }))
          .catch((err)=>{
             dispatch({
                type:"TAG_TWEET_LIST_FAILED",
                payload:err
             })
          })   
    }
 }
  
  export { TweetListWithTag}
 