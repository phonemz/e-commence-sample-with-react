import image1 from '../assets/images/image-product-1.jpg'
import image2 from '../assets/images/image-product-2.jpg'
import image3 from '../assets/images/image-product-3.jpg'
import image4 from '../assets/images/image-product-4.jpg'

import imagesmall1 from '../assets/images/image-product-1-thumbnail.jpg'
import imagesmall2 from '../assets/images/image-product-2-thumbnail.jpg'
import imagesmall3 from '../assets/images/image-product-3-thumbnail.jpg'
import imagesmall4 from '../assets/images/image-product-4-thumbnail.jpg'

const imageList = [image1, image2, image3, image4]
const imageSmallList = [imagesmall1, imagesmall2, imagesmall3, imagesmall4]
function ImageSlider() {
        return (
                <div className="image-slider">
                        <div className="large-image">
                                {
                                        imageList.map(image => (
                                                <img src={image}></img>
                                        ))
                                }
                        </div>
                        <div className='small-image'>
                                {
                                        imageSmallList.map(imagesmall => (
                                                <img src={imagesmall}></img>
                                        ))
                                }
                        </div>
                </div>
        );
}

export default ImageSlider