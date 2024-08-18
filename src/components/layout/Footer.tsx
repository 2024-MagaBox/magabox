const Footer = () => {
  return (
    <div className="w-full h-52 bg-stone-100 flex items-center justify-center">
      <div className="flex w-[1200px]">
        <div className="w-1/6 m-3">
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/ci/logo-opacity_new2.png"
            alt="로고"
          />
        </div>
        <div className="w-5/6 text-base">
          서울특별시 성동구 왕십리로 50, 6층 (성수동1가, 메가박스 스퀘어) ARS
          1544-0070 대표이메일 m.dreamcenter@partner.megabox.co.kr
          <br />
          대표자명 홍정인 · 개인정보보호책임자 강병철 · 사업자등록번호
          211-86-59478 · 통신판매업신고번호 2023-서울성동-0177
          <br />
          COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
