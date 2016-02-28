const initialState = {
    droped: false,
    files: [],
    message: ''
}

const uploadFile = (state = initialState, action) => {
    switch (action.type) {
        case 'DROP_FILE_ACCEPTED':
            return { droped: true, files: action.files, message: 'ファイルが選択されました。内容が正しければ「アップロード」ボタンを押して画像アップロードを完了してください。' }
        case 'DROP_FILE_REJECTED':
            return { droped: false, files: [], message: 'gif/png/jpeg/jpg形式のファイルのみ選択してください' }
        default:
            return state
    }
}

export default uploadFile
