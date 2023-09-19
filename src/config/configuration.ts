import dotenv from 'dotenv';
import { Configuration } from './configuration.interface';

dotenv.config({ path: '.development.env' });

const configuration: Configuration = {
  port: process.env.PORT,
  mongoDbUrl: process.env.MONGO_URL,
  adminSecretToken: process.env.ADMIN_SECRET_TOKEN,
  jwtSecret: process.env.JWT_SECRET,
  frontendUrl: process.env.FRONT_END_URL,
  emailService: {
    testDomain: process.env.EMAIL_SERVICE_TEST_DOMAIN,
    privateApiKey: process.env.EMAIL_SERVICE_privateApiKey,
    publicApiKey: process.env.EMAIL_SERVICE_publicApiKey,
    emailTemplates: {
      forgotPassword: 'forgot-password-template',
      verifyEmail: 'verify-email-template',
      orderSuccess: 'order-success',
    },
  },
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY_PUBLIC,
    api_secret: process.env.CLOUDINARY_API_KEY_SECRET,
    folderPath: process.env.CLOUDINARY_FOLDER_PATH,
    publicId_prefix: `e-commercial-nestjs-${Date.now()}`,
  },
  stripe: {
    publishable_key: process.env.STRIPE_PUBLIC_KEY,
    secret_key: process.env.STRIPE_SECRET_KEY,

    successUrl: '',
    cancelUrl: 'string',
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET_KEY,
  },
};

export default configuration;
