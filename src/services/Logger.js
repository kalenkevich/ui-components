class Logger {
  constructor(env, settings) {
    this.settings = settings;
    this.isProduction = env === 'production';
  }

  info(message) {
    if (!this.isProduction) {
      // eslint-disable-next-line no-console
      console.log(message);
    }
  }

  warn(message) {
    if (!this.isProduction) {
      // eslint-disable-next-line no-console
      console.warn(message);
    }
  }

  error(message) {
    if (!this.isProduction) {
      // eslint-disable-next-line no-console
      console.error(message);
    }
  }
}

export default (env, settings) => new Logger(env, settings);
