export const uploadFile = (files) => {

}

export const dropFileAccepted = (files) => {
    return {
        type: 'DROP_FILE_ACCEPTED',
        files: files
    }
}

export const dropFileRejected = () => {
    return {
        type: 'DROP_FILE_REJECTED'
    }
}
