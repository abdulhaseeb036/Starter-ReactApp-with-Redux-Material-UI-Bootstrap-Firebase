

const INITIAL_STATE = {
    appname: "redux learning",
    appowner: "haseeb alam rafiq"
}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    return (
        state
    )
}