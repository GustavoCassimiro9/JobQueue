import { Channel, Connection } from "amqplib";

export default interface StartServer {
    connection: Connection,
    channel: Channel
}