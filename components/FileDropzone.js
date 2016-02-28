import React, { PropTypes } from 'react'
import Dropzone from 'react-dropzone'

const FileDropzone = ({ uploaded, onDrop }) => (
    <div>
        <Dropzone onDrop={onDrop}>
            <div>
                <p>ファイルをアップロード</p>
            </div>
        </Dropzone>
        <h1>{uploaded ? 'アップロード済' : '未アップロード'}</h1>
    </div>
)

FileDropzone.propTypes = {
    uploaded: PropTypes.bool.isRequired,
    onDrop: PropTypes.func.isRequired
}

export default FileDropzone
