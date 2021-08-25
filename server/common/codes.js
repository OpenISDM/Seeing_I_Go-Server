export default {
    getFileSuccess :(filename, file)=>({
        error_code : '100',
        error_message: 'Get file success.',
        file_name : filename,
        file,
    }),

    getFileFailed : (filename)=>({
        error_code : '101',
        error_message : 'cannot find the file in server, please check name.',
        file_name : filename,
    })
}