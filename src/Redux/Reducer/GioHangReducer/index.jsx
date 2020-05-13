const initial = [] ; 

export const GioHangReducer =(state=initial , action)=>{
    switch (action.type) {
        case "GET_GIOHANG":
            return [...state,action.payload] ;
        case "XOA_COURSE" : 
        const StateNew = [...state] ; 
        const mangXoa = StateNew.filter((item)=>{
            return item.maKhoaHoc !== action.payload
        })  
        return mangXoa ;
        default:
          return state
      }
}