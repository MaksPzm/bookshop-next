"use client"
import { imagesSliderArray} from "@/constants/imagesSliderArray";
import {StaticImageData} from "next/image";
import styles from "@/components/bannerSelectionBtn/bannerSelectionBtn.module.scss";
import {BannerSelectionBtnComponentProps} from "@/shared/interfaice/interfaice";

export const BannerSelectionBtn = ( props: BannerSelectionBtnComponentProps ) => {
    const { className, indexImg, setIndexImg } = props;
    return (
        <div className={`${className} ${styles.blockBtn}`}>
            {imagesSliderArray.map((item: StaticImageData, i: number) => (
                <div key={`blockSl-${i}`}
                     id={`blockSl-${i}`}
                     className={`${styles.blockBtn__btn} ${i === indexImg && styles.blockBtn__btn_active}`}
                     onClick={() => {setIndexImg(i)}}>
                </div>
            ))}
        </div>
    );
};