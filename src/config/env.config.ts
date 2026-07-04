import { BadGatewayException } from '@nestjs/common';


interface IEnvVariables {
  PORT: string;
}

const loadEnvVars = (): IEnvVariables => {
  const requireEnvVars = ['PORT'];

  requireEnvVars.forEach((KEY) => {
    if (!process.env?.[KEY]) {
      throw new BadGatewayException(`Missing env variable - ${KEY}`);
    }
  });

  console.log('Env: ', process.env.PORT);
  return {
    PORT: process.env.PORT as string,
  };
};

export default loadEnvVars();
