const base = require('@playwright/test');

exports.customTest =base.test.extend(
    {
        testData: {
            "username": "vikasbfc@testPlay.com",
            "password": "Test@123",
            "productName": "IPHONE 13 PRO"
        }

    }
)