import { useState, useEffect } from "react";
import router from "next/router";
import styles from "./Footer.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import Modal from "./Modal/Modal";

const cx = className.bind(styles);

export default function Footer() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const htmlEle = document?.getElementsByTagName("html").item(0);
    if (modal) {
      if (htmlEle) {
        htmlEle.style.overflow = "hidden";
      }
    } else {
      if (htmlEle) {
        htmlEle.style.overflow = "unset";
      }
    }
  }, [modal]);
  return (
    <div>
      <div
        onClick={() => setModal(false)}
        className={cx(modal ? "modal" : "none")}
      >
        <div className={cx("modal_wrap")} onClick={(e) => e.stopPropagation()}>
          <div className={cx("terms_wrap")}>
            <div className={cx("terms_modal")}>
              <Image src="/img/logo/logo_on.png" alt="약관로고" fill />
            </div>
            <div></div>
          </div>
          <Modal />
          <button onClick={() => setModal(false)}>확인</button>
        </div>
      </div>
      <div className={cx("container")}>
        <div className={cx("wrap")}>
          <div className={cx("top_container")}>
            <div className={cx("top_wrap")}>
              <div className={cx("image")} onClick={() => router.push("/")}>
                <Image fill src="/img/logo/logo_on.png" alt="푸터 로고" />
              </div>
              <span className={cx("content")}>
                10년 이상의 마케팅 전문가들이
              </span>
              <span className={cx("content")}>
                마케팅 운용 및 운영을 대행해 고객님의
              </span>
              <span className={cx("content")}>시간을 절약해드립니다.</span>
            </div>
            <div className={cx("top_wrap")}>
              <span className={cx("title")}>고객센터</span>
              <span className={cx("content")}>전화 : 1833-8604</span>
              <span className={cx("content")}>
                이메일 : kamdongplan@naver.com
              </span>
            </div>
            <div className={cx("top_wrap")}>
              <span className={cx("title")}>약관</span>
              <span
                onClick={() => {
                  setModal(true);
                }}
                className={cx("content", "terms")}
              >
                서비스 이용약관
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("bottom_container")}>
        <div className={cx("bottom_wrap")}>
          <div className={cx("text_wrap")}>
            <span className={cx("bottom_content")}>
              {"(주)감동기획 | 대표이사 김창섭 | "}
            </span>
            <span className={cx("bottom_content")}>
              {"서울특별시 서초구 서초대로25길 55, 2층 202호 | "}
            </span>
            <span className={cx("bottom_content")}>
              사업자번호 670-87-02545
            </span>
          </div>
          <span className={cx("reserved")}>
            ⓒGAMDONGPLAN All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
