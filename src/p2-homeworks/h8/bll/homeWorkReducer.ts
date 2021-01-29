export const homeWorkReducer = (state: any, action: any): any => {
    let copyState = state.map((el: any) => {
        return {_id: el._id, name: el.name, age: el.age}
    })
    switch(action.type) {
        case "sort": {
            if(action.payload === "up") {
                copyState.sort((a: any, b: any) => a.name > b.name ? 1 : -1)
                return copyState
            }
            if(action.payload === "down") {
                copyState.sort((a: any, b: any) => b.name > a.name ? 1 : -1)
                return copyState
            }
            return state
        }
        case "check": {
            const checkState = copyState.filter((el: any) => el.age > action.payload)
            return checkState
        }
        default:
            return state
    }
};