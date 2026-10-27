const express = require("express");
const app = express();
const studentRoutes = require("./routes/student_route");

app.use(express.json());
app.use("/studentapi", studentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port   ${PORT}`);
});
