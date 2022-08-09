/* Route paths, in combination with a request method, 
define the endpoints at which requests can be made. 
Route paths can be strings, string patterns, or regular expressions. */
import { Router } from 'express';
const router = Router();

router.get('/',(req,res)=>{
  res.send('index')
} );

router.get('/about',(req,res)=>{
    res.send('About')
  } );

export default router;