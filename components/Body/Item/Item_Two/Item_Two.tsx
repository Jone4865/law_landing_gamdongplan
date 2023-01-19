import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Item_Two.module.scss";
import className from "classnames/bind";
import Image from "next/image";

const cx = className.bind(styles);

export default function Item_Two() {
  const [pc, setPc] = useState(false);
  const isPc = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1920px)",
  });

  useEffect(() => {
    if (isPc) {
      setPc(true);
    } else {
      setPc(false);
    }
  }, [isPc]);
  return (
    <div className={cx("container")}>
      <div>
        <h1 className={cx("top_container")}>
          <span className={cx("emphasis")}>
            고객 만족<span className={cx("title")}>을 </span>
          </span>
          <span className={cx("title")}>최상의 가치로 여깁니다.</span>
        </h1>
        <div className={cx("sub_title")}>
          <p>감동기획은 고객사의 성공적인 비즈니스를 위하여</p>
          <p>
            불필요한 비용과 과정은 줄이고, 맞춤 마케팅 솔루션을 제공해드립니다.
          </p>
        </div>
      </div>
      <div className={cx("bottom_container")}>
        <div className={cx("bottom_wrap")}>
          <div className={cx("image")}>
            <Image
              fill
              src={pc ? "/img/Item_Two/left.png" : "/img/Item_Two/left_m.png"}
              alt="아이템 두번째 왼쪽 이미지"
              quality={100}
            />
          </div>
          <span className={cx("bottom_title_right")}>
            최근 트렌드에 따라 맞춤 홍보 가능
          </span>
          <span className={cx("bottom_content_right")}>
            홍보 대상 서비스와 최근 트렌드를 비교해,
            <br />
            최적의 마케팅 솔루션을 제공합니다.
          </span>
        </div>
        <div className={cx("bottom_wrap")}>
          <div className={cx("image")}>
            <Image
              fill
              src={
                pc ? "/img/Item_Two/center.png" : "/img/Item_Two/center_m.png"
              }
              alt="아이템 두번째 왼쪽 이미지"
              quality={100}
            />
          </div>
          <span className={cx("bottom_title_center")}>
            마케터 전담제 서비스
          </span>
          <span className={cx("bottom_content_center")}>
            서비스 이해도가 높은 마케터일 경우,
            <br /> 정해진 마케터가 해당 서비스에만 전문적으로 투입되어
            고객만족도를 높이는 서비스입니다.
          </span>
        </div>
        <div className={cx("bottom_wrap")}>
          <div className={cx("image")}>
            <Image
              fill
              src={pc ? "/img/Item_Two/right.png" : "/img/Item_Two/right_m.png"}
              alt="아이템 두번째 왼쪽 이미지"
              quality={100}
            />
          </div>
          <span className={cx("bottom_title_left")}>CS 통계 데이터 제공</span>
          <span className={cx("bottom_content_left")}>
            고객의 요구 사항을 서비스 운영에 반영할 수 있도록 문의 유형 등
            다양한 통계 데이터를 리포트 해드립니다.
          </span>
        </div>
      </div>
    </div>
  );
}
