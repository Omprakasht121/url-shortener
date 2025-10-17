export const error404 =(request,response,next) => {
    response.send('<h1>404! Page not found</h1>');
}
