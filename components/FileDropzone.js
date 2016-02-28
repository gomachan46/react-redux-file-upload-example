import React, { PropTypes, Component } from 'react'
import Dropzone from 'react-dropzone'

class FileDropzone extends Component {
    onDropAccepted(func, files) {
        func(files)
    }
    render() {
        const { droped, files, message, dropFileAccepted, dropFileRejected } = this.props
        return (
            <div>
                <Dropzone
                    onDropAccepted={this.onDropAccepted.bind(this, dropFileAccepted)}
                    onDropRejected={dropFileRejected}
                    accept="image/gif,image/jpeg,image/png,image/jpg" >
                    <div>
                        ファイルを指定またはドラッグ&ドロップ
                        <p>形式: gif/png/jpeg/jpg</p>
                    </div>
                </Dropzone>
                <h1>{droped ? '選択済' : '未選択'}</h1>
                <h1>{message}</h1>
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
    droped: PropTypes.bool.isRequired,
    files: PropTypes.array.isRequired,
    message: PropTypes.string.isRequired,
    dropFileAccepted: PropTypes.func.isRequired,
    dropFileRejected: PropTypes.func.isRequired
}

export default FileDropzone
