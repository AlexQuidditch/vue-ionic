// переменные окружения
// определены в .env-файлах

class Environment {
  protected readonly DEVELOPMENT: string;

  protected readonly PRODUCTION: string;

  protected readonly STAGING: string;

  protected readonly NODE_ENV: string;

  protected readonly VUE_APP_API_URL: string;

  protected readonly VUE_APP_PROJECT: string;

  protected readonly BASE_URL: string;

  protected readonly DOCKER: string;

  public constructor() {
    this.DEVELOPMENT = 'development';
    this.PRODUCTION = 'production';
    this.STAGING = 'staging';
    this.BASE_URL = process.env.BASE_URL || '';
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.VUE_APP_API_URL = process.env.VUE_APP_API_URL || '';
    this.VUE_APP_PROJECT = process.env.VUE_APP_PROJECT || '';
    this.DOCKER = process.env.DOCKER || 'false';
  }

  public get CurrentProject() {
    return this.VUE_APP_PROJECT || '';
  }

  public get isDevelopment() {
    return [this.DEVELOPMENT, this.STAGING].includes(this.NODE_ENV);
  }

  public get isStaging() {
    return this.NODE_ENV === this.STAGING;
  }

  public get isProduction() {
    return this.NODE_ENV === this.PRODUCTION;
  }

  public get inDocker() {
    return this.DOCKER === 'true';
  }

  public get baseUrl() {
    return this.BASE_URL;
  }

  public get CurrentAPI() {
    return this.CurrentEnvironmentAPI;
  }

  /**
   * getFromEnvByKey
   * @param key
   */
  // eslint-disable-next-line class-methods-use-this
  public getFromEnvByKey(key: string) {
    return process.env[`VUE_APP_${key}`];
  }

  protected get CurrentEnvironmentAPI() {
    return this.VUE_APP_API_URL;
  }
}

export const EnvironmentService = new Environment();

export default EnvironmentService;
