import React from 'react'
import "./styles.scss"
import { gallery_andaman, gallery_silk } from '../../data/pagesdata'

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className="hero-gallery">
                <div className="intro">
                    <span>KUNDU TRAVELS</span>
                    <h1>OUR GALLERY</h1>
                </div>
            </div>
            <div className="gallery-section">
                <h2>Explore Tour Images</h2>
                <div className="places">
                    <div className="andaman">
                        <h3>Andaman Tour Photos</h3>
                        <div className="pics">
                            {
                                gallery_andaman.map((e) => (
                                    <img key={e.id} src={e.img} alt="" />
                                ))
                            }
                        </div>
                    </div>
                    <div className="silkroute">
                        <h3>Silk Route Tour Photos</h3>
                        <div className="pics">
                            {
                                gallery_silk.map((e) => (
                                    <img key={e.id} src={e.img} alt="" />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="coming-soon">
                    <h2>More Gallery Contents Coming Soon .....</h2>
                </div>
            </div>
        </div>
    )
}

export default Gallery
