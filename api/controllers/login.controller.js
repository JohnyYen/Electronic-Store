

export function validateLogin(req, res){
   const {password, user} = req.body;
   if(password && user)
    if(password === '0403' && user === 'hello')
        res.send(true);
    
   res.send(false);
}