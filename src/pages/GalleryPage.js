import React from 'react'
import { Header } from '../components/common/Header'
import { SubPageBanner } from '../components/common/SubPageBanner'
import Gallery from '../components/gallery/Gallery'
import { Footer } from '../components/common/Footer'

export const GalleryPage = () => {
    return (
        <div>
            <Header />
            <SubPageBanner title='Gallery'/>
            <Gallery />
            <Footer/>
        </div>
    )
}