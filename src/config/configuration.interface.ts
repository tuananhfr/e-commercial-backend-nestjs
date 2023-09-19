export interface Configuration {
  port: string;
  mongoDbUrl: string;
  adminSecretToken: string;
  jwtSecret: string;
  frontendUrl: string;
  emailService: {
    testDomain: string;
    privateApiKey: string;
    publicApiKey: string;
    emailTemplates: {
      forgotPassword: string;
      verifyEmail: string;
      orderSuccess: string;
    };
  };
  cloudinary: {
    cloud_name: string;
    api_key: string;
    api_secret: string;
    folderPath: string;
    publicId_prefix: string;
  };
  stripe: {
    publishable_key: string;
    secret_key: string;
    successUrl: string;
    cancelUrl: string;
    webhookSecret: string;
  };
}
