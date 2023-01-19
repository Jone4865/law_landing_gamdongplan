import styles from "./Item_Top.module.scss";
import className from "classnames/bind";
import Image from "next/image";

const cx = className.bind(styles);

export default function Item_Top() {
  return (
    <div>
      <div className={cx("bg")}>
        <div className={cx("mask")} />
        <video className={cx("video")} muted autoPlay loop>
          <source src="/video/감동기획메인배너영상.mp4" type="video/mp4" />
        </video>
        <div className={cx("text_wrap")}>
          <div className={cx("title_wrap")}>
            <span>고객이 감동할때까지, </span>
            <span className={cx("emphasis")}>감동기획</span>
          </div>
          <span className={cx("content")}>
            10년 이상의 마케팅 전문가들이 마케팅 운용 및
            <br /> 운영을 대행해 고객님의 시간을 절약해드립니다.
          </span>
          <div className={cx("icon_wrap")}>
            <div className={cx("icon")}>
              <Image fill src="/img/icon/scroll.png" alt="스크롤 아이콘" />
            </div>
            <p>SCROLL DOWN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
