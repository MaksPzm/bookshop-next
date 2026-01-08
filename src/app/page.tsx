import Image from "next/image";
import styles from "./page.module.css";
import {Slider} from "@/components/slider/Slider";

export default function Home() {
  return (
    <div className={styles.page}>
        <Slider className={"slider"} />
    </div>
  );
}
