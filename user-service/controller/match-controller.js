// file: user-service/controller/match-controller.js
import amqp from "amqplib";

const sendMatchRequest = async (req, res) => {
  const { topic, difficulty, userId } = req.body;

  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    const queue = "match_requests";

    await channel.assertQueue(queue, { durable: true });

    const message = { topic, difficulty, userId };
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });

    console.log(`[📤] Match request sent:`, message);

    res.status(200).json({ message: "Match request sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send match request" });
  }
};

// ✅ Export it as ES Module
export default { sendMatchRequest };