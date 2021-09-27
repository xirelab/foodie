import "./styles.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grommet, RadioButtonGroup, Select, Text } from "grommet";
import { grommet } from "grommet/themes";
import { submitOrder } from "./Actions/order.action";
import { Dishes, Types } from "./constants";

export default function App() {
  const [dish, setDish] = useState("");
  const [type, setType] = useState(0);
  const [count, setCount] = useState(() => init());

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.orderStatus);
  const onClickHandler = () => {
    dispatch(submitOrder(dish, type, count));
  };

  return (
    <Grommet full theme={grommet}>
      <Box gap="medium" align="center">
        <div className="App">
          <h1>Foodie Court</h1>
          <br />
          <h2>Pick your favourate dish!</h2>
          <RadioButtonGroup
            direction="row"
            name="radio"
            options={Dishes}
            value={dish}
            onChange={(event) => setDish(event.target.value)}
          />
          <br />
          <br />
          <Text weight="bold">Select type</Text>
          <Select
            id="select"
            name="select"
            placeholder="Select"
            value={type}
            options={Object.values(Types)}
            onChange={({ option }) => setType(option.value)}
          />
          <br />
          <br />
          <Button
            label="-"
            secondary
            onClick={() => setCount((count) => count - 1)}
          />
          <Text class="counter" weight="bold">
            {count}
          </Text>
          <Button
            label="+"
            secondary
            onClick={() => setCount((count) => count + 1)}
          />
          <br />
          <br />
          <br />
          <Button label="Give me food" primary onClick={onClickHandler} />
        </div>
        <br />
        <Box direction="row-responsive" gap="medium">
          <Text weight="bold">Order Status:</Text>
          {status && <Text>{status}</Text>}
        </Box>
      </Box>
    </Grommet>
  );
}

function init() {
  console.log("init..");
  return 0;
}
