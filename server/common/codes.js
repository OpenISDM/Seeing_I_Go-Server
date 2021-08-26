export default {
    getMetaDataSuccess: (data) => ({
        error_code: '100',
        error_message: 'Get meta data success',
        data
    }),

    getMetaDataByAreaSuccess : (country, data)=>({
        error_code : '100',
        error_message : 'Get meta data success',
        country,
        data
    }),

    getFileSuccess: (filename, file) => ({
        error_code: '100',
        error_message: 'Get file success.',
        file_name: filename,
        file,
    }),

    getPictureSuccess: (filename, file) => ({
        error_code: '100',
        error_message: ' Get picture success',
        file_name: filename,
        file  //TODO I'not sure if it will  work or not.
    }),

    getMetaDataFailed:()=>({
        error_code: '101',
        error_message: 'meta data parse error.',
    }),

    getMetaDataByCountryFailed:(country)=>({
        error_code: '101',
        error_message: 'cannot find the meta of the country, please check name.',
        country
    }),

    getFileFailed: (filename) => ({
        error_code: '102',
        error_message: 'cannot find the file in server, please check name.',
        file_name: filename,
    }),   

    getPictureFailed: (filename) => ({
        error_code: '103',
        error_message: 'cannot find the picture in server, please check name',
        file_name: filename,
    })
}