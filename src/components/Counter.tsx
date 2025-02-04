import { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { increment, decrement, reset, setCount } from "../redux/counterSlice"; // Ensure this path is correct
import { animated, useSpring } from "react-spring";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state: any) => state.counter.value);
  const [bgColor, setBgColor] = useState("lightblue");

  const animatedProps = useSpring({ backgroundColor: bgColor });

  // Load count from local storage on mount
  useEffect(() => {
    const savedCount = localStorage.getItem("counterValue");
    if (savedCount) {
      dispatch(setCount(parseInt(savedCount, 10)));
    }
  }, [dispatch]);

  useEffect(() => {
    setBgColor(`hsl(${count * 10}, 80%, 70%)`);
  }, [count]);

  return (
    <animated.div style={{ ...animatedProps, padding: "20px", borderRadius: "10px" }}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Box display="flex" gap={1} mt={2}>
        <Button variant="contained" onClick={() => dispatch(increment())}>+</Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>-</Button>
        <Button variant="contained" color="secondary" onClick={() => dispatch(reset())}>Reset</Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
