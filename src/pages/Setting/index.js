import React, { useState } from "react";
import { Box, Button, ColorBoxes, Container, Content, FormGroup, Input, Title } from "./SettingStyled";
import { useDispatch } from "react-redux";
import { addGroup } from "../../store/slice/colorSlice";
import { useNavigate } from "react-router-dom";
const SettingPage = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [color, setColor] = useState({
    colorName: "",
    colorCode: "",
  });
  const [groupName, setGroupName] = useState("");
  const [colorList, setColorList] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setColor({ ...color, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { colorName, colorCode } = color;
    let newColor = {
      colorName,
      colorCode,
    };
    if (
      colorName === "" ||
      colorName.trim() === "" ||
      colorCode === "" ||
      colorCode.trim() === ""
    ) {
      return;
    }
    if (colorList.length === 6) {
      return;
    }
    let newColorList = colorList;
    newColorList = [...newColorList, newColor];
    setColorList(newColorList);
    color.colorName=""
    color.colorCode=""
  };
  const handleGroupChange = (e) => {
    setGroupName(e.target.value);
  };
  const handleAddGroup = () => {
    if (groupName === "") {
      return;
    }
    const group = {
      name: groupName,
      colorList,
    };

    dispatch(addGroup(group));
    setColorList([]);
    navigate("/")
  };

  return (
    <Container>
     <Title>Setting page</Title>
      <form onSubmit={handleSubmit}>
      <Content>
      <FormGroup>
          <Input
            onChange={handleChange}
            name="colorName"
            value={color.colorName}
            type="text"
            placeholder="Color name"
          />
       
          <Input
            onChange={handleChange}
            name="colorCode"
            value={color.colorCode}
            type="text"
            placeholder="Color code"
          />
       
        <Button>Add color</Button>
        </FormGroup>
       <FormGroup>
       <ColorBoxes>
        {colorList?.map((item, i) => {
          const { colorName, colorCode } = item;
          return (
            <Box style={{ background: colorCode }} key={i}>
              {colorName}
            </Box>
          );
        })}
      </ColorBoxes>
      <Input
          onChange={handleGroupChange}
          value={groupName}
          name="groupName"
          type="text"
          placeholder="Group name"
        />
        <Button onClick={handleAddGroup} disabled={colorList.length < 6}>
          Save
        </Button>
       </FormGroup>
      </Content>
      </form>
    </Container>
  );
};

export default SettingPage;
