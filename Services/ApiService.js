import axios from 'axios';

const url = "https://api.thecatapi.com/v1/";
const apikey = "live_fJh3SZkLL0zb8RVCxERztWeLJH8TFd4huOzN0gpuBrUGr1AaRFJlLuGB8n7zGy9d"

export const ApiService = {
    async get(key) {
        try {
            const response = await axios.get(url + key, {
                headers: {
                    'x-api-key': apikey
                }
            });
            return response.data;
        } catch (error) {
            console.error('error', error);
        }
    },
    update(key, id, item) {
        axios.put(url + key + '/' + id, item, {
            headers: {
                'x-api-key': apikey
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    async create(key, item) {
        try {
            const response = await axios.post(url + key, item, {
                headers: {
                    'x-api-key': apikey
                }
            });

            return response.data;

        } catch (error) {
            // console.log(error);
            throw error;
        }
    },
    delete(key, id) {
        axios.delete(url + key + '/' + id, {
            headers: {
                'x-api-key': apikey
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export default { ApiService };