/** get data use fetch
* @param {String} url
 */

const getDataUseFetch =async(url: string) => {
    return fetch(url)
}

/** post data use fetch
* @param {String} url
* @param {String} method
* @param {Object} data
 */

const postDataUseFetch =async(url: string,method: string,data: any) => {
    return fetch(url, {
            method: method,
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
}

export {
   getDataUseFetch,
   postDataUseFetch 
}