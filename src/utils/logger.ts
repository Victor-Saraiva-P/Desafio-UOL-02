import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, errors, colorize, json } = format;

// Ambiente de execução da aplicação
const env = process.env.ENV || 'development';

// Formato de log padrão
const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

// Formato de log para o console
const consoleLogFormat = combine(
  colorize(),
  timestamp(),
  printf(({ level, message, timestamp, stack }) => {
    if (env === 'development') {
      return `${timestamp} [${level}]: ${stack || message}`;
    } else {
      return `${timestamp} [${level}]: ${message}`;
    }
  }),
);

// Função para gerar transports de arquivos
const createFileTransport = (level: string, filename: string) => {
  return new transports.File({
    filename,
    level,
    format: combine(
      format((info) => (info.level === level ? info : false))(), // Filtra logs pelo nível
      timestamp(),
      level === 'error' ? errors({ stack: true }) : format.simple(),
      // logFormat
      json(),
    ),
  });
};

// Criação do logger
const logger = createLogger({
  level: env === 'development' ? 'debug' : 'info',
  transports: [
    createFileTransport('error', 'logs/error.log'),
    createFileTransport('warn', 'logs/warn.log'),
    createFileTransport('info', 'logs/info.log'),
    ...(env === 'development'
      ? [createFileTransport('debug', 'logs/debug.log')]
      : []),
    new transports.Console({
      format: consoleLogFormat,
    }),
  ],
  exceptionHandlers: [new transports.File({ filename: 'logs/exceptions.log' })],
  rejectionHandlers: [new transports.File({ filename: 'logs/rejections.log' })],
  exitOnError: false, // Não encerra a aplicação em caso de exceções não tratadas
});

export default logger;
