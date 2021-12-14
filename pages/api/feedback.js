import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";
import moment from "moment";

function getFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function getData(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

const handler = (req, res) => {
  if (req.method === "POST") {
    const { customerName, customerEmail, customerComment, customerRating } =
      req.body;

    const newCustomerFeedback = {
      id: uuidv4(),
      customerName,
      customerEmail,
      customerComment,
      customerRating,
      dateCreated: moment().toISOString(),
    };

    const filePath = getFilePath();
    const data = getData(filePath);
    data.push(newCustomerFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json(newCustomerFeedback);
  }

  if (req.method === "GET") {
    const filePath = getFilePath();
    const data = getData(filePath);
    res.status(200).json(data);
  }
};

export default handler;
