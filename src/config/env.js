let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
    baseUrl = '//111.231.64.142:8080';
}else if(process.env.NODE_ENV == 'production'){
	baseUrl = '//111.231.64.142:8080';
}

export {
    baseUrl,
}