const initial = '' ; 

export const XoaKhoaHoc =(state=initial , action)=>{
    switch (action.type) {
        case "XOA_COURSE":
            return action.payload
        case "MA_KHOA_HOC_NULL" : 
            return  null 
        default:
          return state
      }
}