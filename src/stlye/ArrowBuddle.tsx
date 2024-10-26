import styled from "@emotion/styled";

export const ArrowBubble = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 0 5px;
  background: #f1f9ff;
  border-radius: 10px;
  border: #17334a solid 3px;
  text-align: center;
  margin-top: 20px;

  // @media screen and (max-width: 650px) {
  //   bottom: -4px;
  //   width: 30px;
  //   height: 20px;
  // }

  ::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 10px 15px 0;
    border-color: #f1f9ff transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -4px;
    left: 15px;

    // @media screen and (max-width: 650px) {
    //   bottom: -4px;
    //   left: 5px;
    // }
  }

  ::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 12px 0;
    border-color: #17334a transparent;
    display: block;
    width: 0;
    z-index: 0;
    bottom: -8px;
    left: 18px;

    @media screen and (max-width: 650px) {
      left: 8px;
    }
  }
`;
