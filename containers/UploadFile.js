import { connect } from 'react-redux'
import { uploadFile } from '../actions'
import FileDropzone from '../components/FileDropzone'

const mapStateToProps = (state) => {
    return {
        uploaded: state.uploadFile.uploaded,
        files: state.uploadFile.files
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDrop: (files) => {
            dispatch(uploadFile(files))
        }
    }
}

const UploadFile = connect(
    mapStateToProps,
    mapDispatchToProps
)(FileDropzone)

export default UploadFile