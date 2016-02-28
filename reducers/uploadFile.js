const initialState = {
    uploaded: false,
    files: []
}

const uploadFile = (state = initialState, action) => {
    switch (action.type) {
        case 'UPLOAD_FILE':
            return { uploaded: true, files: action.files }
        default:
            return state
    }
}

export default uploadFile
