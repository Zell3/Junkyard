import express, { Request, Response } from 'express';
import 'dotenv/config';

//TODO 
import c_prefix_name from "./controllers/c_prefix_name";
import c_user from "./controllers/c_user";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(c_prefix_name);
app.use("/api", c_prefix_name);

app.use(c_user);
app.use("/api", c_user);

app.get('/', (req: Request, res: Response) => {
  res.send('Web Engineering and Comtemporary - Midterm Exam');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});