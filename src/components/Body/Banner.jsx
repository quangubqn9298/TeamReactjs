import React from 'react';
import { Carousel, Image } from 'antd';
const contentStyle = {
    height: '660px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


function Banner(props) {
    return (
        <Carousel autoplay={true} >
            <div>
                <Image
                    height={660}
                    src="https://photographer.com.vn/wp-content/uploads/2020/11/Tong-hop-cac-mau-background-thien-nhien-dep-nhat.jpg"
                    preview={false}
                />
            </div>
            <div>
                <Image
                    height={660}
                    src="https://photographer.com.vn/wp-content/uploads/2020/11/Tong-hop-cac-mau-background-thien-nhien-dep-nhat.jpg"
                    preview={false}
                />
            </div>
            <div>
                <Image
                    height={660}
                    src="https://photographer.com.vn/wp-content/uploads/2020/11/Tong-hop-cac-mau-background-thien-nhien-dep-nhat.jpg"
                    preview={false}
                />
            </div>
            <div>
                <Image
                    height={660}
                    src="https://photographer.com.vn/wp-content/uploads/2020/11/Tong-hop-cac-mau-background-thien-nhien-dep-nhat.jpg"
                    preview={false}
                />
            </div>
        </Carousel>
    );
}

export default Banner;