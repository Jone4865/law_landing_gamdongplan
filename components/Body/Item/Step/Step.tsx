import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./Step.module.scss";
import className from "classnames/bind";
import Image from "next/image";

const cx = className.bind(styles);

export default function Step() {
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
      <h1 className={cx("title")}>진행절차</h1>
      <span className={cx("content")}>
        성공적인 비즈니스를 위하여 불필요한 비용과 과정은 줄이고, <br /> 맞춤
        솔루션을 통해 작업이 이루어집니다.
      </span>
      <div className={cx("bottom_wrap")}>
        <div className={cx("image")}>
          <Image
            src={pc ? "/img/step/bookmark.png" : "/img/step/bookmark_m.png"}
            fill
            alt="북마크"
          />
        </div>
        <div className={cx("text_wrap")}>
          <span className={cx("text")}>
            서비스 선택
            <br />
            일정협의
          </span>
          <span className={cx("text")}>
            소비자 트렌드 분석
            <br />
            시장환경 분석
            <br />
            서비스 기획
          </span>
          <span className={cx("text")}>브랜드 마케팅 목표 설정</span>
          <span className={cx("text")}>수립된 마케팅 시작</span>
          <span className={cx("text")}>
            매월 정기적인 컨설팅 진행
            <br />
            브랜드 마케팅 목표 재설정
            <br />
            전략 보완 및 수정
          </span>
        </div>
      </div>
    </div>
  );
}
