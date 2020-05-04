import React from 'react'
import Banner from '../components/Banner'
import BannerContent from '../components/BannerContent'
import BannerModalForm from '../components/BannerModalForm'

export default function About() {
    return (
        <>
            <Banner heroclass="innerbanner service_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <BannerContent forclass="service_content" title="Efficiently Created Wikipedia Pages" subtitle="Serving high quality services including page creation, management and revision.">
                                <div className="geta">
                                    <BannerModalForm/>
                                </div>
                            </BannerContent>
                        </div>
                    </div>
                </div>
            </Banner>
        </>
    )
}
