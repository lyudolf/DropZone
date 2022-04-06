import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";
import styled from "styled-components";
function dropzone() {
  return (
    <Div>
      <TextRequest>도면 업로드 후 재료와 수량을 입력해주세요</TextRequest>
      <DivNoDrawing>
        <FiAlertCircle />
        <TextNo>도면이 없다면?</TextNo>
        <IoIosArrowForward />
      </DivNoDrawing>
      <DivBottom>
        <DivList>
          <P>업로드한 도면이 없습니다. 도면 파일을 업로드 해주세요.</P>
        </DivList>
        <DivDrag>
          <Group4117>
            <Frame4084>
              <Text1>도면 파일을 이곳에 드래그</Text1>
              <Text2> 또는</Text2>
              <Group4116>
                <ButtonPc>
                  <TextPc>내 PC에서 첨부</TextPc>
                </ButtonPc>
                <Slash>/</Slash>
                <ButtonCloud>
                  <TextCloud>클라우드에서 첨부</TextCloud>
                </ButtonCloud>
              </Group4116>
              <TextSpec>파일 확장자:.dwg,.dxf,.stp,.step </TextSpec>
            </Frame4084>
            <Text4>(최대 20개 업로드, 1개당 100MB 이하)</Text4>
          </Group4117>
        </DivDrag>
      </DivBottom>
    </Div>
  );
}

export default dropzone;
const TextNo = styled.text`
  font-size: 14px;
  line-height: 143%;
  color: #4b88ff;
`;
const DivNoDrawing = styled.div`
  position: absolute;
  width: 139px;
  height: 24px;
  left: calc(50% - 139px / 2 - 5.5px);
  top: 56px;
  background: #ffffff;
`;
const TextSpec = styled.text`
  position: absolute;
  width: 179px;
  height: 100px;
  left: calc(50% - 179px / 2 + 0.5px);
  top: calc(50% - 20px / 2 + 22px);
  /* 12pt - 400 (설명용) */
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 90px;
  /* identical to box height, or 167% */
  text-align: center;
  /* Gray/900 */
  color: #343a40;
`;
const Slash = styled.text`
  position: absolute;
  width: 7px;
  height: 24px;
  left: calc(50% - 7px / 2 - 9.5px);
  top: calc(50% - 24px / 2 - 12px);

  /* 16pt - 500 (body1) */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  display: flex;
  align-items: center;
  letter-spacing: -0.1px;

  /* Gray/600 */

  color: #adb5bd;
`;
const TextCloud = styled.text`
  position: absolute;
  width: 121px;
  height: 24px;
  left: -2px;
  top: -2px;
  /* 16pt - 500 (body1) */
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.1px;
  /* Primary/500 - Main */
  color: #4b88ff;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const ButtonCloud = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  background-color: transparent;
  border: 0;
  position: absolute;
  width: 121px;
  height: 24px;
  left: calc(50% - 121px / 2 + 62.5px);
  top: calc(50% - 24px / 2 - 12px);
`;
const TextPc = styled.text`
  position: absolute;
  width: 121px;
  height: 20px;
  left: -12px;
  top: 0px;
  /* 16pt - 500 (body1) */
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.1px;
  /* Primary/500 - Main */
  color: #4b88ff;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;
const ButtonPc = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  background-color: transparent;
  border: 0;
  position: absolute;
  width: 101px;
  height: 24px;
  left: calc(50% - 101px / 2 - 71.5px);
  top: calc(50% - 24px / 2 - 12px);
`;
const Group4116 = styled.div`
  position: absolute;
  width: 245px;
  height: 24px;
  left: -22px;
  top: 40px;
`;
const Text4 = styled.text`
  position: absolute;
  width: 193px;
  height: 20px;
  left: calc(50% - 193px / 2 + 0.5px);
  top: calc(50% - 20px / 2 + 42px);

  /* 12pt - 400 (설명용) */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  text-align: center;

  /* Gray/700 */

  color: #868e96;
`;
const Frame4084 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 203px;
  height: 24px;
  left: calc(50% - 203px / 2 - 0.5px);
  top: calc(50% - 24px / 2 - 40px);
`;
const Text1 = styled.text`
  position: static;
  width: 173px;
  height: 24px;
  left: calc(50% - 173px / 2 - 15px);
  top: 0px;

  /* 16pt - 500 */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray/900 */

  color: #343a40;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 4px;
`;
const Text2 = styled.text`
  position: static;
  width: 26px;
  height: 20px;
  left: calc(50% - 26px / 2 + 88.5px);
  top: 2px;

  /* 14pt - 400 (body2) */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  /* identical to box height, or 20px */

  text-align: center;
  letter-spacing: -0.1px;

  /* Gray/900 */

  color: #343a40;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 4px;
`;

const Group4117 = styled.div`
  position: absolute;
  width: 245px;
  height: 104px;
  left: 334px;
  top: 28px;
`;
const P = styled.p`
  position: static;
  width: 323px;
  height: 100%;
  left: calc(50% - 323px / 2);
  top: calc(50% - 20px / 2);

  /* 14pt - 400 (본문용) */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;
  text-align: center;

  /* Gray/600 */

  color: #adb5bd;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;
const DivList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0px;

  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 80%;

  /* Common/White */

  background: #ffffff;
  /* Gray/400 - Stroke */

  border: 1px solid #dee2e6;
  box-sizing: border-box;
  border-radius: 4px;
`;
const DivDrag = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 22%;
  bottom: 0%;

  /* Primary/200 */

  background: #e9f1ff;
  /* Primary/500 - Main */

  border: 1px dashed #4b88ff;
  box-sizing: border-box;
`;
const DivBottom = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 35.29%;
  bottom: 0%;
`;
const TextRequest = styled.text`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 85.88%;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray/900 */

  color: #343a40;
`;
const Div = styled.div`
  position: absolute;
  width: 912px;
  height: 340px;
  left: calc(50% - 912px / 2);
  top: 40px;
`;
