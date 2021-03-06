import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPipeline } from '../../../actions/pipeline_actions'
import { importProperties } from '../../../actions/property_actions'

function ImportLeads() {
    
    const [ fileName, setFileName ] = useState('no file selected')
    const dispatch = useDispatch()
    const fileRef = useRef(null)

    const handeUpload = () => {
        const data = new FormData()
        
        data.append('csv', fileRef.current.files[0])

        
        dispatch(importProperties(data))
            .then(res => {
                if (res.type === "RECEIVE_CSV"){
                    const UNCONTATED = 'Uncontacted'
                    dispatch(fetchPipeline(UNCONTATED))
                    console.log('success')
                }
            })
    }

    const onFileLoad = e => {
        let newFileName = e.target.files[0].name
        setFileName(newFileName)        
    }

    return  <div className='file-upload-container'>
                <div className='file-upload-container-header'>
                    <h3>Mass create leads from CSV</h3>
                </div>
                <div className='file-upload-bar'>
                    <div className='file-container-left'>
                        <form className='file-upload-form'>
                            <label className='file-select-button'>
                                <h5>select csv</h5>
                                <input name="csv" type="file" onChange={onFileLoad}ref={fileRef}/>
                            </label>
                            <div className='file-preview'>
                                {`${fileName}`}
                            </div>
                        </form>
                    </div>

                    <div className='file-container-right'>
                        <div className='file-upload-submit' type="submit" onClick={handeUpload}><h5>upload</h5></div>
                    </div>
                </div>
            </div>
}

export default ImportLeads
