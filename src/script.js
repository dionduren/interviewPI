$(document).ready(function () {

    var accessToken = window.localStorage.getItem("accessToken");
    var tokenType = window.localStorage.getItem("tokenType");

    var url="http://api-siaga-qas.pupuk-indonesia.com/api_siaga/public/salesOrders";
    var token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJlNjNmZTU1NzAwNzQ2NzEyNDc1ZGE1YTViYzg0NjA4YmZjNjA5YTlkMTJhYTYzNGQwMjU1OGYzZWFhOTY0MzUzNTlmZDQyODUzZjg2ZmYyIn0.eyJhdWQiOiIyIiwianRpIjoiYmU2M2ZlNTU3MDA3NDY3MTI0NzVkYTVhNWJjODQ2MDhiZmM2MDlhOWQxMmFhNjM0ZDAyNTU4ZjNlYWE5NjQzNTM1OWZkNDI4NTNmODZmZjIiLCJpYXQiOjE1Mzc5NDU3MDEsIm5iZiI6MTUzNzk0NTcwMSwiZXhwIjoxNTY5NDgxNzAxLCJzdWIiOiIxMzgyMyIsInNjb3BlcyI6W119.NzPbnCv0fCS9k6cqXQeojUNVqh8jYNTFiK7o5d0Y5AfSREeOS2bEwkNqP29SuYXX_SxBDkTYaSXP6lKGJHGSAXR0SNO5Jcj8GO_M3yvCBv2xrCrjvyPkvgOtWXtchFpQGF3oyxlJy1Xzf6D3VLRqWw_OzMF6_JuMyfoRuk9pInIweMxhnNlbB65iY9escMI37RMuRFtVP12EUmbOIrPyXOp6NrhXAhZMUUilcz0IIveVfbTWnXee3t8wojHCP4bM_GDyOPRYwRdQscAQIJDqAPHgTbk7gNe9d7mXOs1e0lAPdmbr8P3Kj5l-pGkLk5JCTMJAXDz9ijTks06FDeEzyjrTUOLjZYnKM69mHc0asppTtvC56210WgNXyGwh-FhTzD5JhtJji8jxRh5xjTsXC_Kwug_VbuR7ERlLQXys3DibyJjAy0o7EKGTkOAG2agnqsL0eEvahlW5kBIG2XNQoHudruuGTUX00n04szrzHuxtDTiQVmXU0XF6hC_CPRiiFgbooW4c6jwmjJVR5rDMCGAdCTx0L7lYfMDMPbLMZvcS8e60YE8Y6nsD7yf0_ivWPU2hqaQjzwvXte8EoSZOJ5brb3YMAEj7cLibktAQYwGR4qYrgnjMllAF-u7IebZHOaZfZaN19dA_H8WElHJ7Jbs-olC_xHBQbmTBYlXWdhQ';
    alert("Token Type = "+tokenType +"\nAccessToken = "+accessToken);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://api-siaga-qas.pupuk-indonesia.com/api_siaga/public/salesOrders",
        "method": "GET",
        "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJlNjNmZTU1NzAwNzQ2NzEyNDc1ZGE1YTViYzg0NjA4YmZjNjA5YTlkMTJhYTYzNGQwMjU1OGYzZWFhOTY0MzUzNTlmZDQyODUzZjg2ZmYyIn0.eyJhdWQiOiIyIiwianRpIjoiYmU2M2ZlNTU3MDA3NDY3MTI0NzVkYTVhNWJjODQ2MDhiZmM2MDlhOWQxMmFhNjM0ZDAyNTU4ZjNlYWE5NjQzNTM1OWZkNDI4NTNmODZmZjIiLCJpYXQiOjE1Mzc5NDU3MDEsIm5iZiI6MTUzNzk0NTcwMSwiZXhwIjoxNTY5NDgxNzAxLCJzdWIiOiIxMzgyMyIsInNjb3BlcyI6W119.NzPbnCv0fCS9k6cqXQeojUNVqh8jYNTFiK7o5d0Y5AfSREeOS2bEwkNqP29SuYXX_SxBDkTYaSXP6lKGJHGSAXR0SNO5Jcj8GO_M3yvCBv2xrCrjvyPkvgOtWXtchFpQGF3oyxlJy1Xzf6D3VLRqWw_OzMF6_JuMyfoRuk9pInIweMxhnNlbB65iY9escMI37RMuRFtVP12EUmbOIrPyXOp6NrhXAhZMUUilcz0IIveVfbTWnXee3t8wojHCP4bM_GDyOPRYwRdQscAQIJDqAPHgTbk7gNe9d7mXOs1e0lAPdmbr8P3Kj5l-pGkLk5JCTMJAXDz9ijTks06FDeEzyjrTUOLjZYnKM69mHc0asppTtvC56210WgNXyGwh-FhTzD5JhtJji8jxRh5xjTsXC_Kwug_VbuR7ERlLQXys3DibyJjAy0o7EKGTkOAG2agnqsL0eEvahlW5kBIG2XNQoHudruuGTUX00n04szrzHuxtDTiQVmXU0XF6hC_CPRiiFgbooW4c6jwmjJVR5rDMCGAdCTx0L7lYfMDMPbLMZvcS8e60YE8Y6nsD7yf0_ivWPU2hqaQjzwvXte8EoSZOJ5brb3YMAEj7cLibktAQYwGR4qYrgnjMllAF-u7IebZHOaZfZaN19dA_H8WElHJ7Jbs-olC_xHBQbmTBYlXWdhQ",
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

});


