import React from "react";
import {
  Box,
  ColorBoxes,
  ColorGroup,
  Container,
  Content,
  GroupName,
  Title,
} from "./HomeStyled";
import { useSelector } from "react-redux";
import { selcolorGroup } from "../../store/slice/colorSlice";

const Home = () => {
  const colorGroup = useSelector(selcolorGroup);
  return (
    <Container>
      <Title>Home page</Title>
      <Content>
        {colorGroup.map((item, i) => {
          return (
            <ColorGroup key={i}>
              <GroupName>{item.name}</GroupName>
              <ColorBoxes key={i}>
                {item.colorList?.map((color, i) => {
                  const { colorName, colorCode } = color;
                  return <Box bg={colorCode}>{colorName}</Box>;
                })}
              </ColorBoxes>
            </ColorGroup>
          );
        })}
      </Content>
    </Container>
  );
};

export default Home;
