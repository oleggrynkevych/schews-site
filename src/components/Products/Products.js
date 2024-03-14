import './Products.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ProductItem from './ProductItem/ProductItem';
import productsData from './products-data';

function Products() {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        draggable: true,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

    return (
        <div className='products-section' id='products'>
            <div className='products-section-container'>
                <h3>THE SCHLECTION</h3>
                <div className='products'>
                    <Slider {...settings}>
                    {
                        productsData.map((product, index) => (
                            <ProductItem
                                key={index}
                                mainImage={product.mainImage}
                                shoeImage={product.shoeImage}
                                title={product.title}
                                weight={product.weight}
                                taste={product.taste}
                                addText={product.addText}
                                backColor={product.backColor}
                            />
                        ))
                    }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Products;