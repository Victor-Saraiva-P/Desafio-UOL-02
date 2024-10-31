class AppError extends Error {
  public statusCode: number;
  public status: string;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    // Define o status como 'fail' se o statusCode começar com '4' (erros do cliente), caso contrário, define como 'error' (erros do servidor)
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    // Captura a stack trace excluindo a função construtora, para facilitar a depuração
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
