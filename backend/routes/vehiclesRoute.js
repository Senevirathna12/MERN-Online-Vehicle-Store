import express from "express";
import { Vehicle } from "../models/vehicleModel.js";

const router = express.Router();

//Route for a save New Vehicle
router.post('/', async (request, response) => {
    try {
       
        const requiredFields = ['brand', 'price', 'title', 'image', 'year', 'colors', 'quantity', 'itemNo'];
        const missingFields = requiredFields.filter(field => !request.body[field]);

        if (missingFields.length > 0) {
            return response.status(400).send({
                message: `Missing required fields: ${missingFields.join(', ')}`,
            });
        }

       
        const newVehicle = {
            brand: request.body.brand,
            price: request.body.price,
            title: request.body.title,
            image: request.body.image,
            year: request.body.year,
            colors: request.body.colors,
            quantity: request.body.quantity,
            itemNo: request.body.itemNo,
        };

        const vehicle = await Vehicle.create(newVehicle);

        return response.status(201).send(vehicle);
    } catch (error) {
        console.error(error.message);
        return response.status(500).send({ message: error.message });
    }
});


//Route for Get all Vehicles from database 
router.get('/', async(request, response)=>{

    try{ 
        const vehicles = await Vehicle.find();
        return response.status(200).json({
            count: vehicles.length,
            data: vehicles

        });

    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }

});

//Route for Get One Vehicle from database by id
router.get('/:id', async(request, response)=>{

    try{ 

        const { id } = request.params;

        const vehicle = await Vehicle.findById(id);

        return response.status(200).json(vehicle);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }

});

//Route for update 
router.put('/:id', async (request, response) => {
    try {
       
        const requiredFields = ['brand', 'price', 'title', 'image', 'year', 'colors', 'quantity', 'itemNo'];
        const missingFields = requiredFields.filter(field => !request.body[field]);

        if (missingFields.length > 0) {
            return response.status(400).send({
                message: `Missing required fields: ${missingFields.join(', ')}`,
            });
        }

        const { id } = request.params;

       
        const updatedVehicle = {
            brand: request.body.brand,
            price: request.body.price,
            title: request.body.title,
            image: request.body.image,
            year: request.body.year,
            colors: request.body.colors,
            quantity: request.body.quantity,
            itemNo: request.body.itemNo,
        };

        const result = await Vehicle.findByIdAndUpdate(id, updatedVehicle);

        if (!result) {
            return response.status(404).json({ message: 'Vehicle not Found' });
        }

        return response.status(200).json({ message: 'Vehicle Updated Successfully' });
    } catch (error) {
        console.error(error.message);
        response.status(500).send({ message: error.message });
    }
});


//Route for Delete
router.delete('/:id', async(request, response)=>{

    try{ 

        const { id } = request.params;

        const result =await Vehicle.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message:'Vehicle not Found'});
        }
        return response.status(200).json({message:'Vehicle Updated Successfully'});

    }catch(error){

        console.log(error.message);
        response.status(500).send({message:error.message});
    }

});

export default router;