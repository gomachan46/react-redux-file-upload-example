import { connect } from 'react-redux'
import { dropFileAccepted, dropFileRejected } from '../actions'
import FileDropzone from '../components/FileDropzone'

const mapStateToProps = (state) => {
    return {
        droped: state.uploadFile.droped,
        files: state.uploadFile.files,
        message: state.uploadFile.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dropFileAccepted: (files) => {
            dispatch(dropFileAccepted(files))
        },
        dropFileRejected: () => {
            dispatch(dropFileRejected())
        }
    }
}

const UploadFile = connect(
    mapStateToProps,
    mapDispatchToProps
)(FileDropzone)

export default UploadFile