import { connect } from 'react-redux'
import { uploadFile } from '../actions'
import FileDropzone from '../components/FileDropzone'

const mapStateToProps = (state) => {
    return {
        uploaded: state.uploadFile.uploaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDrop: () => {
            dispatch(uploadFile())
        }
    }
}

const UploadFile = connect(
    mapStateToProps,
    mapDispatchToProps
)(FileDropzone)

export default UploadFile