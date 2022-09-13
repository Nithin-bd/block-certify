// import React, { Component } from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { FolderUpload } from 'react-ipfs-uploader'

const YourComponent = () => {
    const [folderUrl, setFolderUrl] = useState('')

    return (
        <div>
            <FolderUpload setUrl={setFolderUrl} />
            FolderUrl : <a
                href={folderUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {folderUrl}
            </a>
        </div>
    )
}

export default YourComponent;