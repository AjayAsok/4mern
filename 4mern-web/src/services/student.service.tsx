import React from 'react';


export function getStudent() {
    return async (): Promise<any> => {
        const url = "http://127.0.0.1:3100/students"
        return new Promise(resolve => {
            fetch(url, { method: 'GET' }).then((response) => {
                return response.json()
            }).then((responseData) => {
                return (responseData)
            })
                .catch((err) => {
                    console.error(err)
                })
        })
    }
};