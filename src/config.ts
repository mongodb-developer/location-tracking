interface IConfig {
  port: string;
  mongoConnString: string;
  secretKey: string;
  corsOptions: any;
}
const config: IConfig = {
  port: process.env.PORT || '5050',
  mongoConnString: process.env.MONGODB_CONNECTION_STRING || '',
  secretKey: process.env.SECRET_KEY,
  corsOptions: { origin: '*' },
};

export default config;
