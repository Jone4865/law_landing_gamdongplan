import styles from "./Body.module.scss";

import Item_Top from "./Item/Item_Top/Item_Top";
import Item_Two from "./Item/Item_Two/Item_Two";
import Items from "./Item/Items/Items";
import PostQuestion from "./Item/PostQuestion/PostQuestion";
import Step from "./Item/Step/Step";

export default function Body() {
  const IDs = ["블로그", "인스타", "페이스북", "유튜브", "IMC마케팅"];
  const titles = [
    "블로그 관리",
    "인스타 관리",
    "페이스북 관리",
    "유튜브 관리",
    "IMC 마케팅",
  ];

  const contents_top = [
    <p key="1">
      직접하는 블로그 운영에 어려움을 느끼시는 분
      <br />
      블로그 관리를 위해 직원을 고용하기 부담스러운 분
      <br />
      상업적인 홍보수단으로 사용하기 원하시는 분
      <br />
      방문자와 노출빈도를 높이고 싶으신 분
    </p>,
    <p key="2">
      팔로우, 좋아요, 댓글의 변화가 없는 분<br />
      콘텐츠 기획과 제작의 어려움을 겪으시는 분<br />
      개인 또는 비즈니스계정 광고효과를 높이고 싶으신 분<br />
      정확한 타겟을 잡고 싶으신 분
    </p>,
    <p key="3">
      페이지 게시물 좋아요, 공유, 댓글을 늘리고 싶으신 분
      <br />
      개인 또는 비즈니스계정 광고효과를 높이고 싶으신 분
      <br />
      콘텐츠 기획과 제작의 어려움을 겪으시는 분
      <br />
      정확한 타겟을 잡고 싶으신 분
      <br />
    </p>,
    <p key="4">
      직접하는 블로그 운영에 어려움을 느끼시는 분<br />
      블로그 관리를 위해 직원을 고용하기 부담스러운 분<br />
      상업적인 홍보수단으로 사용하기 원하시는 분<br />
      방문자와 노출빈도를 높이고 싶으신 분
    </p>,
    <p key="5">
      업종에 맞는 트렌디한 광고가 필요하신 분<br />
      내 브랜드에 맞는 마케팅이 필요하신 분<br />
      여러가지 시도 해봤지만 효율이 낮은 분<br />
      불필요한 광고로 손해보신 분
    </p>,
  ];

  const contents_bottom = [
    <p key="1">
      전문적인 관리를 통해 소비자들에게 입소문과
      <br />
      노출되는 효과를 경험하실 수 있습니다.
    </p>,
    <p key="2">
      전문적인 기획을 통해 영향력 있는 콘텐츠를
      <br />
      받아 보실 수 있습니다.
    </p>,
    <p key="3">
      전문적인 기획을 통해 영향력 있는 콘텐츠를
      <br />
      받아 보실 수 있습니다.
    </p>,
    <p key="4">
      전문적인 관리를 통해 소비자들에게 입소문과
      <br />
      노출되는 효과를 경험하실 수 있습니다.
    </p>,
    <p key="5">
      풍부한 경험을 바탕으로 브랜드에 맞는
      <br />
      마케팅을 제시하여 효율을 극대화 시켜드립니다.
    </p>,
  ];

  return (
    <div className={styles.item_container}>
      <div className={styles.item_wrap}>
        <div id="홈">
          <Item_Top />
        </div>
        <div id="역량">
          <Item_Two />
        </div>
        {IDs.map((id, index) => (
          <div key={id} id={id}>
            <Items
              index={index}
              name={index % 2 !== 0 ? "_reverse" : ""}
              title={titles[index]}
              sub_title="이런 분들에게 추천합니다!"
              content_top={contents_top[index]}
              content_bottom={contents_bottom[index]}
            />
          </div>
        ))}
        <div id="진행절차">
          <Step />
        </div>
        <div id="문의하기">
          <PostQuestion />
        </div>
      </div>
    </div>
  );
}
