import * as winston from 'winston';
import { LoggerService } from '@nestjs/common';

export class Logger implements LoggerService {
  logger: winston.Logger;

  constructor() {
    const fileFormat = winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.errors({ stack: true }),
      winston.format.cli(), // ログレベルのカラー表示
      winston.format.printf((info) => `[${info.timestamp}] ${info.level} ${info.message}`) // jSON形式ではなくCLIログフォーマット化
    );

    const logger = winston.createLogger({
      transports: [
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
          format: fileFormat,
        }),
        new winston.transports.File({
          filename: 'logs/application.log',
          level: 'debug',
          format: fileFormat,
        }),
        // debugレベル以上のログをコンソールにも出力する設定
        new winston.transports.Console({
          level: 'debug',
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
          ),
        })
      ]
    });

    this.logger = logger;
  }

  log(message: string) {
    this.logger.log({
      level: 'info',
      message: `${message}`,
    });
  }

  error(message: string, trace: string) {
    this.logger.log({
      level: 'error',
      message: `${message}:${trace}`,
    });
  }

  warn(message: string) {
    this.logger.log({
      level: 'warn',
      message: `WARNING: ${message}`,
    });
  }

  debug(message: string) {
    this.logger.log({
      level: 'debug',
      message: `${message}`,
    });
  }

  verbose(message: string) {
    this.logger.log({
      level: 'verbose',
      message: `${message}`,
    });
  }
}