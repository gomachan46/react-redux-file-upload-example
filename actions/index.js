export const uploadFile = (files) => {
    return {
        type: 'UPLOAD_FILE',
        files: files
    }
}