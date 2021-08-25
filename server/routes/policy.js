import policy from '../controller/policy'
export default (app)=>{
    app.get('/Policy', policy.getPolicy());
}