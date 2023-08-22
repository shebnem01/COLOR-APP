import styled from "styled-components";
export const Container = styled.div`
  padding: 0 10px;
`;
export const Title = styled.h2`
  font-size: 35px;
  color: #333;
  margin-bottom: 20px;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;
export const ColorGroup = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #f3f4f7;
  padding: 30px;
  max-width: 500px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ColorBoxes = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
`;
export const Box = styled.div`
  width: 140px;
  height: 70px;
  border: 1px solid #333;
  background-color: ${(props) => props.bg};
`;
export const GroupName = styled.div`
  font-size: 25px;
  color: #0099e5;
  margin-bottom: 20px;
`;
