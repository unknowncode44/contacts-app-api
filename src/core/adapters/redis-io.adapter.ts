import { IoAdapter } from '@nestjs/platform-socket.io'
import * as redisIoAdapter from '@socket.io/redis-adapter'
import { INestApplicationContext } from '@nestjs/common'

export class RedisIoAdapter extends IoAdapter {
    constructor(
        private readonly redisConfig: {host: string, port: number},
        appOrHttpServer?: INestApplicationContext | any
    ){
        super(appOrHttpServer)
    }

    createIOServer(port: number, options?: any): any {
        const redisAdapter = redisIoAdapter.createAdapter(this.redisConfig, this.redisConfig);
        const server = super.createIOServer(port, options);
        server.adapter(redisAdapter);
        return server
        
    }
}