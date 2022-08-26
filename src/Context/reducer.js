// import React from 'react';
import{ ACTIONTYPES } from './actiontypes';
export const initState = {
      isLoading:true,
      isDataLoading:false,
      isSuccess:false,
      isError:false,
      isAuth:true,
      token:null,
      data:[],
      singleData:{},
      query:"",
      searchData:{}
}

export const reducer = (state, {type, payLoad}) => {

  switch(type){
    case ACTIONTYPES.LOADING:
      return {...state, isLoading:payLoad}
    case ACTIONTYPES.GET_DATA_REQUESTED:
      return {...state, isDataLoading:true, isSuccess:false}
    case ACTIONTYPES.GET_DATA_SUCCESS:
      return {...state, isDataLoading:false, isSuccess:true,data:payLoad, isError:false}
    case ACTIONTYPES.LOGIN_REQ:
      return {...state, isDataLoading:true}
    case ACTIONTYPES.LOGIN_SUCCESS:
      return {...state, token:payLoad, isAuth:true, isDataLoading:false}
    case ACTIONTYPES.LOGIN_FAILURE:
      return {...state, isError:true, isAuth:false, isDataLoading:false}
    case ACTIONTYPES.GET_SINGLE_DATA_GET_DATA_SUCESS:
      return {...state, isDataLoading:false, isSuccess:true,singleData:payLoad, isError:false }
    case ACTIONTYPES.SEARCH_QUERY_UPDATE:
      return {...state, query:payLoad};
    case ACTIONTYPES.SEARCH_DATA_SUCCESS:
      state.searchData[payLoad.key]=payLoad.data;
      return state;
    default :
    return state;
  }
}
