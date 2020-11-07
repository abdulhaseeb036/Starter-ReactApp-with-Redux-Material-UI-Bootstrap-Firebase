

const INITIAL_STATE = {
        userdata: [
        {
            name: "arain",
            email: "wasiarain@gmail.com"
        },
        {
            name: "mani",
            email: "mani@gmail.com"
        },
        {
            name: "bilal",
            email: "bilal@gmail.com"
        }
    ],

}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    return (
        state
    )
}