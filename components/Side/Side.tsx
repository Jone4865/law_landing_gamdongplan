import { useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Side.module.scss";

type Props = {
  modal: boolean;
  setModalState: (modal: boolean) => void;
};

function Side({ modal, setModalState }: Props) {
  const Buttons = [
    "홈",
    "역량",
    "블로그",
    "인스타",
    "페이스북",
    "유튜브",
    "IMC마케팅",
    "진행절차",
    "문의하기",
  ];

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
    <div
      className={`${!modal ? styles.side_none : ""} ${styles.side_contain}`}
      onClick={() => {
        setModalState(false);
      }}
    >
      <div
        className={`${styles.side_slideout} ${styles.side_wrap}`}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h1>
          <img />
          <span onClick={() => setModalState(false)}>X</span>
        </h1>
        {Buttons.map((button, index) => (
          <div key={button} className={styles.side_hover}>
            <Link
              to={button}
              spy={true}
              smooth={true}
              offset={
                button === "역량" ? -55 : button === "문의하기" ? -70 : -50
              }
              onClick={() => {
                setModalState(false);
              }}
            >
              <span>{button}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Side;
