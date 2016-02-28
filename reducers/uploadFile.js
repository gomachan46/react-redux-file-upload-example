const initialState = {
    uploaded: false
}

const uploadFile = (state = initialState, action) => {
    switch (action.type) {
        case 'UPLOAD_FILE':
            return { uploaded: true }
        default:
            return state
    }
}

export default uploadFile