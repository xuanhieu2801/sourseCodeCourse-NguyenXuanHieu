const initial = [] ; 

export const CourseReducer =(state=initial , action)=>{
    switch (action.type) {
        case "GET_COURSE":
            return action.payload
        default:
          return state
      }
}