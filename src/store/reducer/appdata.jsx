

const INITIAL_STATE = {
    appname: "redux learning",
    appowner: "haseeb alam rafiq"
}

const  Appdata = (state = INITIAL_STATE, action) => {
    console.log(action)
    return (
        state
    )
}

export default Appdata