import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'yarn generate && yarn start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI
  }
}

export default config;
