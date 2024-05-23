import RabbitmqServer from "../rabbitmq/rabbitmq-server";

export default class RabbitmqService {

    private server!: RabbitmqServer;

    constructor(){
        this.server = this.getServerRmq();
    }

    private getServerRmq() {
        return new RabbitmqServer(`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@localhost:5672`);
    }

    public async sendToMessage(data: { queue: string, msg: string }): Promise<string> {
        await this.server.start();
        await this.server.sendToQueue(data.queue, data.msg)

        return "Mensagem enviada para queue!"
    }
} 