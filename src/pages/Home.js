import React from 'react'
import HelpYou from '../components/HelpYou'
import Banner from '../components/Banner'
import BannerContent from '../components/BannerContent'
import BannerModalForm from '../components/BannerModalForm'
import BannerLogos from '../components/BannerLogos'

export default function Home() {
    return (
        <>
            <Banner heroclass="home_banner banner_same">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 col-md-12">
                            <BannerContent forclass="banner_content" title="Learn From The Best In The World" subtitle="The Wiki Admins">
                                <div className="geta">
                                    <BannerModalForm />
                                </div>
                            </BannerContent>
                        </div>
                    </div>
                </div>
                <BannerLogos />
            </Banner>
            <HelpYou />
        </>
    )
}
