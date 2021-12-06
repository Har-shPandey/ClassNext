
import request from "request";

export const getModzySentiments = (messages) => {
    return new Promise((resolve, reject) => {
        request.post({
            url: `https://app.modzy.com/api/jobs`,
            headers: {
                Authorization: process.env.MODZY_API,
                "Content-Type": "application/json"
            },
            json: true,
            body: {
                "model": {
                    "identifier": "ed542963de",
                    "version": "1.0.1"
                },
                "input": {
                    "type": "text",
                    "sources": messages
                }
            }
        }, (err, response, body) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("insideGetSentimentsModzy", body);
                resolve(body)
            }
        });
    })

}

export const getModzySummary = (messages) => {
    return new Promise((resolve, reject) => {
        request.post({
            url: `https://app.modzy.com/api/jobs`,
            headers: {
                Authorization: process.env.MODZY_API,
                "Content-Type": "application/json"
            },
            json: true,
            body: {
                "model": {
                    "identifier": "rs2qqwbjwb",
                    "version": "0.0.2",
                },
                "input": {
                    "type": "text",
                    "sources": messages
                }
            }
        }, (err, response, body) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("insideGetSentimentsModzy", body);
                resolve(body)
            }
        });
    })

}

export const getResults = (jobId, inputItemName) => {
    return new Promise((resolve, reject) => {
        request.get({
            url: `https://app.modzy.com/api/results/${jobId}/datasource/${inputItemName}`,
            headers: {
                Authorization: process.env.MODZY_API,
                "Content-Type": "application/json"
            },
        }, (err, response, body) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("insideGetResultsModzy", body);
                resolve(body)
            }
        });
    })

}

export const getNamedEntities = (messages) => {
    return new Promise((resolve, reject) => {
        request.post({
            url: `https://app.modzy.com/api/jobs`,
            headers: {
                Authorization: process.env.MODZY_API,
                "Content-Type": "application/json"
            },
            json: true,
            body: {
                "model": {
                    "identifier": "a92fc413b5",
                    "version": "0.0.12"
                },
                "input": {
                    "type": "text",
                    "sources": messages
                }
            }
        }, (err, response, body) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("insideNamedEntititesModzy", body);
                resolve(body)
            }
        });
    })

}