import { faker } from "@faker-js/faker";
import fs from "fs";

const users = [];

const totalUsers = 10;

for (let i = 0; i < totalUsers; i++) {
  const user = {
    id: i + 1,
    name: faker.name.findName(),
    username: faker.internet.userName(),
  };
  users.push(user);
}

const data = {};

data.users = users;

fs.writeFileSync("db.json", JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log("finalizado");
});
