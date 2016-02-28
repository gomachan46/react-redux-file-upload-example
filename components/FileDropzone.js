import React, { PropTypes, Component } from 'react'
import Dropzone from 'react-dropzone'

class FileDropzone extends Component {
    onDrop(onDrop, files) {
        onDrop(files)
    }
    render() {
        const { uploaded, files, onDrop } = this.props
        return (
            <div>
                <Dropzone
                    onDropAccepted={this.onDrop.bind(this, onDrop)}
                    accept="image/gif,image/jpeg,image/png,image/jpg" >
                    <div>
                        ファイルを指定またはドラッグ&ドロップ
                        <p>形式: gif/png/jpeg/jpg</p>
                    </div>
                </Dropzone>
                <h1>{uploaded ? 'アップロード済' : '未アップロード'}</h1>
                {files.map(file => {
                    return (
                        <div key={file.preview}>
                            <h1>{file.name}</h1>
                            <img src={file.preview} />
                        </div>
                            )
                })}
            </div>
        )
    }
}

FileDropzone.propTypes = {
    uploaded: PropTypes.bool.isRequired,
    files: PropTypes.array.isRequired,
    onDrop: PropTypes.func.isRequired
}

export default FileDropzone
