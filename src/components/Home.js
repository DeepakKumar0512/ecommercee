import React from 'react';
import '../style/Home.css';
import Product from './Product';
import Header from './Header';
function Home() {
    return (
        <div className="home">
            <div className="home__row">
                <Product
                    id={12001}
                    title="Tata Sampann Unpolished Masoor Dal, Whole, 1kg"
                    price={199}
                    special_price={234}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71anyGuENLL._AC_UL480_FMwebp_QL65_.jpg"
                />
                </div>
                <div className="home__row">
                <Product
                    id={12002}
                    title="Vedaka Amazon Brand Popular Red Masoor Dal Split, 500g"
                    price={401}
                    special_price={535}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
                />
                </div>
                <div className="home__row">
                <Product
                    id={12003}
                    title="Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)"
                    price={83}
                    special_price={124}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
                />
                </div>
                <div className="home__row">
                <Product
                    id={12004}
                    title="Natureland Organics Kabuli Chana / White Chana / Chole"
                    price={95}
                    special_price={104}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81zCAlLsufL._AC_UL480_FMwebp_QL65_.jpg"
                />
                </div>
                <div className="home__row">
                <Product
                    id={12005}
                    title="Tata Sampann Unpolished Moong Dal Chilka, 500g"
                    price={14}
                    special_price={34}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71RqUKLblZL._AC_UL480_FMwebp_QL65_.jpg"
                />
                </div>
                <div className="home__row">
                <Product
                    id={12006}
                    title="Natureland Organics Chana Whole 1 Kg - Organic Healthy Pulses"
                    price={71}
                    special_price={94}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81RWKzXonUL._AC_UL480_FMwebp_QL65_.jpg"
                />
                </div>
                <div className="home__row">
                 <Product
                    id={12007}
                    title="Natureland Organics Chana Whole 1 Kg - Organic Healthy Pulses"
                    price={40}
                    special_price={74}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/814nq8ZFNHL._AC_UL480_FMwebp_QL65_.jpg"
                />
                </div>
                <div className="home__row">
                 <Product
                    id={12008}
                    title="Natureland Organics Chana Whole 1 Kg - Organic Healthy Pulses"
                    price={56}
                    special_price={84}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81RWKzXonUL._AC_UL480_FMwebp_QL65_.jpg"
                />
                </div>
                <div className="home__row">
                <Product
                    id={12009}
                    title="Ajit Singh Om Parkash Private Limited Kabuli Chana Economy 1Kg"
                    price={91}
                    special_price={118}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71HPwoLB7dL._AC_UL480_FMwebp_QL65_.jpg"
                />
                </div>
                 <div className="home__row">
                 <Product
                    id={12010}
                    title="Vedaka Amazon Brand Premium Red Rajma, 500g"
                    price={63}
                    special_price={74}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
                />
                </div>
                 <div className="home__row">
                 <Product
                    id={12011}
                    title="Organic Tattva, Organic Kala (Black) Chana, 1Kg | 100% Vegan, Unpolished and Glut"
                    price={54}
                    special_price={64}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71WAUmgjF9L._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <Header/>
        </div>
    )
}

export default Home
