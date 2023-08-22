import styled, { css } from "styled-components";
export const Container = styled.h2`
  padding: 0 10px;
`;
export const Title = styled.h2`
  font-size: 35px;
  color: #333;
  margin: 20px 0;
`;
export const Form = styled.form`
  display: flex;
  max-width: 1200px;
  margin: 20px auto;
  background-color: #ccc;
  padding: 30px;
  gap: 40px;
`;
export const Content = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  background-color: #eee;
  padding: 20px;
`;

export const Input = styled.input`
  height: 40px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 400px;
  padding: 0 10px;
  border: 1px solid #ccc;
  outline: none;
`;
export const AddForm = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
export const ColorGroupBoxes = styled.div`
  margin-bottom: 20px;
`;
export const ColorBoxes = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  max-width: 500px;
  flex-wrap: wrap;
`;
export const Box = styled.div`
  width: 150px;
  height: 70px;
  border: 1px solid #333;
`;
export const Button = styled.button`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #11862f;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  outline: none;
  text-align: center;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #aaa; 
      cursor: not-allowed;
    `}
`;
