const dev = {
  YOUTUBE_API_KEY: "YOUR_STRIPE_DEV_PUBLIC_KEY"
};

const prod = {
  YOUTUBE_API_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
