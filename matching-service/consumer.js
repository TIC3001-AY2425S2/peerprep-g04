const amqp = require("amqplib");

let waitingQueue = []; // in-memory for now

async function startConsumer() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = "match_requests";

  await channel.assertQueue(queue, { durable: true });
  console.log("[✔] Waiting for match requests in queue:", queue);

  channel.consume(queue, async (msg) => {
    const data = JSON.parse(msg.content.toString());
    console.log("[📥] Received request:", data);

    const matchIndex = waitingQueue.findIndex(
      (entry) =>
        entry.topic === data.topic &&
        entry.difficulty === data.difficulty &&
        entry.userId !== data.userId // prevent self-matching
    );

    if (matchIndex !== -1) {
      const matchedUser = waitingQueue.splice(matchIndex, 1)[0];

      console.log(`✅ Match found between '${data.userId}' and '${matchedUser.userId}' on topic '${data.topic}'`);

      // Simulate result processing or notification
    } else {
      console.log("[⌛] No match found. Adding to queue.");
      waitingQueue.push(data);
    }

    channel.ack(msg);
  });
}

startConsumer();
