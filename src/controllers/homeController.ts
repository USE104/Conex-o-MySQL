import { Request, Response } from 'express';

import { Product } from '../models/Product';

import { sequelize } from '../instances/mysql'

import { User} from '../models/User';

export const home = async (req: Request, res: Response)=>{
    
    let usuarios = await User.findAll()

    /*
    -- teste de conexão
    try{
        await sequelize.authenticate()
        console.log("Conexão OK!")
    }catch(error){
    console.log("Deu Ruim",error)
    }

    */

    res.render('pages/home', {
        usuarios
    });
};