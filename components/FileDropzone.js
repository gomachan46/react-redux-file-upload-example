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
                <Dropzone onDrop={this.onDrop.bind(this, onDrop)}>
                    <div>
                        <p>ファイルをアップロード</p>
                    </div>
                </Dropzone>
                <h1>{uploaded ? 'アップロード済' : '未アップロード'}</h1>
                {files.map(file => {
                    console.log(file)
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
