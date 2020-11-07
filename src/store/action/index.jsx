// All Functinonal Work In Action JSX File
// Firebase Database Work In Action => index.jsx
// All functional work like functions in action here
// for this you must install (npm install redux-thunk) package

// Action => index.js file
const getdata = (data) => {  
        return (
        (dispatch) => {
            dispatch = {
                type: "setdata",
                data: data
            }
            console.log(dispatch)
                   
    })
}

export {
    getdata
}

