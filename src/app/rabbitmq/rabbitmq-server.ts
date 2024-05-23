import { Channel, connect, Connection } from "amqplib";
import StartServer from "../interfaces/startChannel";


export default class RabbitmqServer {
    private connection!: Connection;
    private channel!: Channel;

    constructor(private uri: string){}
    
    async start() {
        this.connection = await connect(this.uri);
        this.channel = await this.connection.createChannel();
    }

    async close() {
        await this.connection.close()
    }

    async sendToQueue(queue: string, msg: string) {
        if (!this.channel) {
            throw new Error("Channel is not initialized. Did you forget to call start()?");
        }
        this.channel.sendToQueue(queue, Buffer.from(msg));
        console.log(`Message sent to queue ${queue}: ${msg}`);
    }


}