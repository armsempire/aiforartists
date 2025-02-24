'use client'
import React, { useState } from 'react'
import { FiAlignRight, FiArrowLeft } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const PageHeader = ({ children }) => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const pathName = usePathname()
    let folderName = ""
    let fileName = ""
    if (pathName === "/") {
        folderName = "Dashboard"
        fileName = "Dashboard"
    } else {
        folderName = pathName.split("/")[1]
        fileName = pathName.split("/")[2]
    }
    return (
        <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
                <div className="page-header-title">
                    <h5 className="m-b-10 text-capitalize">{folderName}</h5>
                </div>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item text-capitalize">{fileName}</li>
                </ul>
            </div>
            <div className="page-header-right ms-auto">
                <div className={`page-header-right-items ${openSidebar ? "page-header-right-open" : ""}`}>
                    <div className="d-flex d-md-none">
                        <Link href="#" onClick={() => setOpenSidebar(false)} className="page-header-right-close-toggle">
                            <FiArrowLeft size={16} className="me-2" />
                            <span>Back</span>
                        </Link>
                    </div>
                    {children}
                </div>
                <div className="d-md-none d-flex align-items-center">
                    <Link href="#" onClick={() => setOpenSidebar(true)} className="page-header-right-open-toggle">
                        <FiAlignRight className="fs-20" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageHeader