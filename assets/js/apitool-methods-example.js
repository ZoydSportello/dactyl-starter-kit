//---------- List of requests ------------------------//
// Must be loaded after apitool-rest.js

// Optionally, define some example values here to reuse in your sample requests
const DEFAULT_HASH = "9D591B18EDDD34F0B6CF4223A2940AEA2C3CC778925BABF289E0011CD8FA056E";
const DEFAULT_LEDGER = "3170DA37CE2B7F045F889594CBC323D88686D2E90E8FFD2BBCD9BAD12E416DB5";

// general methods -----------------------------------//

Request("SECTION DIVIDER NAME");

Request('List Users', {
    method: GET,
    path: "/api/users/?{:query_params}",
    description: "List (fake) users.",
    link: "#list-users",
    params: {
        "{:query_params}": "page=2"
    }
});

Request('Get Color', {
    method: GET,
    path: "/api/stuff/{:color_id}",
    description: "Get a color by its numeric ID.",
    link: "#get-color",
    params: {
        "{:color_id}": 6
    }
});

// account methods -----------------------------------//

Request("ANOTHER SECTION DIVIDER");

// This request shows how to use a request body. You can use POST as well.
Request("Update User", {
    method: PUT,
    path: "/api/orders/{:id}",
    description: "Modify an order in the database.",
    link: "#update-order",
    params: {
        "{:id}": 2
    },
    body: {
        "order": {
            "type": "sell",
            "taker_pays": {
                "currency": "JPY",
                "value": "4000",
                "counterparty": "rMAz5ZnK73nyNUL4foAvaxdreczCkG3vA6"
            },
            "taker_gets": {
                "currency": "USD",
                "value": ".25",
                "counterparty": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"
            },
            "immediate_or_cancel": true
        }
    }
});

//---------- End req. List ---------------------------//
