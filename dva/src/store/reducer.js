export default (state={
    name:'tiutiu',
    searchInputText:'',
    Shows:true,
    TmainUrl:''
},action)=>{
        switch(action.type){
            case 'INCREMENT':
            return {
                ...state,
                age:18
            }
            case 'GETINOUT':
            return {
                ...state,
                searchInputText:action.searchInputText//获取Tserch传过来的数据
            }
            case 'GogalleryUrl':
            return {
                ...state,
                TmainUrl:action.url,
                Shows:action.Shows
              
            }
            case 'GoHome':
            return {
                ...state,
                TmainUrl:action.url,
                Shows:action.Shows
              
            }
            default:
            return  state
        }
}