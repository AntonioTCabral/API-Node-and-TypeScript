import {Request, Response} from 'express'
import{getRepository} from 'typeorm';
import Orphanage from '../models/orphaneges';

export default{
    async create(request: Request, response:Response){
        const{
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;
        try{
            const orphanagesRepository = getRepository(Orphanage);
            const objOrphanege = orphanagesRepository.create({
                name,
                latitude,
                longitude,
                about,
                instructions,
                opening_hours,
                open_on_weekends
            });
            await orphanagesRepository.save(objOrphanege);
            return response.status(201).json({message:"Cadastrado com sucesso"});
        }catch(error){
            return response.status(400).json({message: error})
        };
    }
}