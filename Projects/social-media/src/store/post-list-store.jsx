import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: ()=>{},
  deletePost: ()=>{}
});
const postListReducer = (currPostList, action) =>{
  let newPostList = currPostList;
if(action.type === "DELETE_POST"){
  newPostList = currPostList.filter((post)=>post.id !== action.payload.postId);
}
  return newPostList;
}
const PostListProvider = ({children}) =>{
const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);
const addPost = ()=>{}

const deletePost = (postId)=>{
 dispatchPostList({
  type:"DELETE_POST",
  payload:{
    postId,
  }
 })
}

return ( <PostList.Provider value ={{postList,addPost,deletePost}}>
    {children}
  </PostList.Provider>
  )
}
const DEFAULT_POST_LIST = [{
id:'1',
title:'Going to Mumbai',
body:'Hi friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
reactions:2,
userId:'user-9',
tags:['Vacation','Mumbai','Enjoying']
},
{
  id:'2',
  title:'Pass ho gaye bhai',
  body:'4 saal ke masti ke baad bhi ho gaye hai pass. Hard to beleave.',
  reactions:15,
  userId:'user-12',
  tags:['Graduating','Unbelievable']
  }];
export default PostListProvider;