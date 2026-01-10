"use client"
import { imagesSliderArray} from "@/constants/imagesSliderArray";
import Image, {StaticImageData} from "next/image";
import {useEffect, useState} from "react";
import {ClassProps} from "@/shared/interfaice/interfaice";
import styles from "./slider.module.scss";
import {BannerSelectionBtn} from "@/components/bannerSelectionBtn/BannerSelectionBtn";
import {Promo} from "@/components/promo/Promo";

export const Slider = ( { className }: ClassProps ) => {
    const [indexImg, setIndexImg] = useState<number>(0);
    const [activeBanner, setActiveBanner] = useState<StaticImageData>(imagesSliderArray[indexImg]);
    useEffect(() => {
        const interval = setInterval(() => {
            (indexImg === imagesSliderArray.length - 1) ? setIndexImg(0) : setIndexImg(prev => ++prev);
        }, 4000)
        setActiveBanner(imagesSliderArray[indexImg]);
        return () => clearInterval(interval);
    }, [indexImg]);
    return (
        <div className={`${className} ${styles.slider}`}>
            <Image src={activeBanner} alt={"banner"} width={1120} height={702} loading={"eager"} className={styles.slider__img} />
            <BannerSelectionBtn className={"blockBtn"} indexImg={indexImg} setIndexImg={setIndexImg} />
            <Promo />
        </div>
    );
};