import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, Typography } from "@mui/material";

const UserProfileChart = () => {
  const user = useSelector((state: RootState) => state.user);

 const chartData = (user?.profileViews ?? []).map((views: any, index: number) => ({
    day: `Day ${index + 1}`,
    views,
  }));

  return (
    <Card sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h6">Profile Views Trend</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="views" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default UserProfileChart; //
