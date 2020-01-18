import React from "react";
import "./style.scss";
import { Flexbox, Container } from "../StyledComponents";
const process = [
  {
    title: "경제적인 솔루션",
    description:
      "값 비싼 시스템은 이제 안녕! 퓨렌스의 솔루션으로 초기 투자비에 대한 부담을 줄이세요."
  },
  {
    title: "간편한 UI",
    description:
      "복잡한 UI로 시스템 접하는게 힘들었나요? 퓨렌스의 솔루션은 직관적인 UI로 누구나 쉽게 다룰 수 있습니다."
  },
  {
    title: "국내 통신 3사 모든 회선",
    description:
      "국내 통신 3사의 모든 회선 사용이 가능합니다. 현재 사용중인 통신사 그대로 솔루션을 제공합니다."
  },
  {
    title: "고객 맞춤형 서비스",
    description:
      "더이상 솔루션에 컨텍센터 시스템을 맞추지 마세요. 퓨렌스의 솔루션은 고객의 규모, 시장 등에 맞추어 솔루션이 제공됩니다."
  }
];
const Intro = () => {
  const Process = () => {
    return process.map((process, i) => (
      //   console.log(process.title);
      <div className="process fl fadeInUp-scroll" key={i}>
        <h4>{process.title}</h4>
        <span className="short_desc">{process.description}</span>
      </div>
    ));
  };
  return (
    <section id="intro" className="se se01 main ad" data-midnight="default">
      <div className="all_con">
        <div className="feature">
          <h1>중소기업형 맞춤 컨택센터 솔루션</h1>
          <p>
            퓨렌스의 솔루션은 풍부한 해외, 국내 컨택센터 구축 및 개발 경험으로
            키운 전문성과 노하우 바탕으로 고객 감동 서비스를 제공합니다.
          </p>
        </div>
        <Container>
          <Flexbox>
            <Process />
          </Flexbox>
          {/* <div className="buttons cf">
            <button onClick="location.href='/', '_blank'" className="col3">
              홈페이지 바로가기
            </button>
            <button onClick="location.href=''" className="col3">
              견적문의
            </button>
            <button onClick="location.href='tel:02-2628-3992'" className="col3">
              전화상담: 070-4407-0507
            </button>
          </div> */}
        </Container>
      </div>
    </section>
  );
};

export default Intro;
