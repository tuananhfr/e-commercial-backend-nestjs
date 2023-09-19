import * as jwt from 'jsonwebtoken';
import configuration from 'src/config/configuration';

export const generateAuthToken = (id: string | object) => {
  return jwt.sign({ id }, configuration.jwtSecret, {
    expiresIn: '30d',
  });
};

export const decodeAuthToken = (token: string) => {
  return jwt.verify(token, configuration.jwtSecret);
};
