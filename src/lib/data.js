import { promises as fs } from "fs";

const file = await fs.readFile(process.cwd() + "/src/data.json", "utf8");
const data = JSON.parse(file);

export { data };
