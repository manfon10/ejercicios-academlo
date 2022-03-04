import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './beginning-styles.css';

const Beginning = () => {

    const navigate = useNavigate();

    return (
        <main>
            <section className="ContainerIntro">
                <article className="ImageIntro">
                    <img 
                        src="https://images.squarespace-cdn.com/content/v1/5eebde62f03f7c1058825d91/1596753428919-CX156M1U73VSQ6HW4UXT/Jewelry_Lifestyle_3_7943-1.jpg" 
                        alt="" 
                    />
                    <div>
                        <button onClick={ () => navigate("/shop")}><strong>Shop Now</strong></button>
                    </div>
                </article>
            </section>
            <section>
                <article className="ContainerHistory">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint at rem, amet doloremque deserunt explicabo fugit illo commodi alias ea.</p>
                    <button onClick={ () => navigate("/about")}>Out History</button>
                </article>
            </section>
            <section>
                <article className="ContainerProductsIntro">
                    <img 
                        src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/19744/original/Wishbone_ring_yg_pair_larger.jpg?1618248029"
                        alt="" 
                    />
                    <img 
                        src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/20134/original/0_Stone_Curb_Bracelet_Garnet_V_HERO.jpg?1621435587" 
                        alt="" 
                    />
                    <div>
                        <h3>Essential Luxury</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque.</p>
                        <button onClick={ () => navigate("/shop")}>Shop</button>
                    </div>
                </article>
            </section>
            <section>
                <article className="ContainerFinishInfo">
                    <img src="https://images.squarespace-cdn.com/content/v1/5eebde62f03f7c1058825d91/1593106154739-75R2FVYNC0FTJAPQ2CPG/Stocksy_comp_2507616.jpg" alt="" />
                </article>
            </section>
        </main>
    );
};

export default Beginning;