const text = "This is a test ";

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile("message.txt", data).then(() => {
  console.log("wrote to file");
});

//deno run --allow-write app.ts
//Deno Features

//deno Namespace APIs /maintained by Deno team - we dont need imports
//Standard Library /maintained by Deno team - need to import
//3rd Party libraries / maintained by community
