// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  retries:1, //this will run the failed tests for one more time
  workers:2, //this means we want to run 2 test files in parallel

  timeout: 30 * 1000,

  expect: {
    timeout: 5000
  },

  reporter: 'html',
  projects: [
    {
      name: 'chrome',
      use: {

        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure', //To record the logs
        ignoreHTTPSErrors:true, //this accept 'ssl certification error'
        permissions:["geolocation"],
        video:'off' //to record videos
        // viewport:{width:720,height:720}  //--> to run the test in the custom defined resolution
        // ...devices['Galaxy Tab S4 landscape'] //--> runs test in device screen size.
      }

    }
    // {
    //   name: 'safari',
    //   use: {

    //     browserName: 'webkit',
    //     headless: true,
    //     screenshot: 'off',
    //     trace: 'off',
    //     viewport:{width:720,height:720}
    //   }

    // }
  ]

});

