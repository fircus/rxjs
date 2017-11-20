function getUserById(id) {
    const params = {
        access_token: '',
        user_ids: id
    };

    return $.ajax({
        url: '' + $.param(params),
        type: 'GET',
        dataType: 'JSONP'
    }).promise();
}