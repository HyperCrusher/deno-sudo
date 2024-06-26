import { readLines } from "./deps.ts";
import { Message } from "./message.ts";

for await (const line of readLines(Deno.stdin)) {
  const message: Message = JSON.parse(line) as Message;
  switch (message.type) {
    case "ready": {
      console.log(JSON.stringify({ type: "ready" }));
      break;
    }
  }
}
