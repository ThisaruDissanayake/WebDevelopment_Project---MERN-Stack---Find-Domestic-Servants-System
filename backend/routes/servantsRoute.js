import express from "express";
import { Servant } from "../models/servantModel.js";

const router = express.Router();

//route for save new servant
router.post("/", async (request, response) => {
  try {
    // {
    //   firstName: 'asdsa',
    //   lastName: 'sadasd',
    //   jobTitle: 'sadmk',
    //   experienceYears: '23',
    //   address: 'sdasd',
    //   city: 'sdsad',
    //   worktype: 'BOTH',
    //   contactNo: 'fdsff',
    //   price: '2323',
    //   image: 'sdads'
    // }
    console.log(request.body);
    if (
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.jobTitle ||
      !request.body.address ||
      !request.body.city ||
      !request.body.worktype ||
      !request.body.contactNo ||
      !request.body.price ||
      !request.body.image ||
      !request.body.experienceYears
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: firstName,lastName,jobTitle,address,city,worktype,contactNo,price,experinceYears",
      });
    }

    const newServant = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      jobTitle: request.body.jobTitle,
      address: request.body.address,
      city: request.body.city,
      worktype: request.body.worktype,
      contactNo: request.body.contactNo,
      price: request.body.price,
      image: request.body.image,
      experinceYears: request.body.experienceYears,
    };

    const servant = await Servant.create(newServant);
    return response.status(201).send(servant);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Get All servants from database

router.get("/", async (request, response) => {
  try {
    const servants = await Servant.find({});
    return response.status(200).json({
      count: servants.length,
      data: servants,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Get one  servants from database by id

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const servant = await Servant.findById(id);

    return response.status(200).json(servant);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const servant = await Servant.find();

    return response.status(200).json(servant);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for update a sevants
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.jobTitle ||
      !request.body.address ||
      !request.body.city ||
      !request.body.worktype ||
      !request.body.contactNo ||
      !request.body.image ||
      !request.body.price ||
      // !request.body.image||
      !request.body.experinceYears
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: firstName,lastName,jobTitle,address,city,worktype,contactNo,price,experinceYears",
      });
    }

    const { id } = request.params;
    const result = await Servant.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Servant not found" });
    }
    return response
      .status(200)
      .send({ message: "Servant updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for deletea servants
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Servant.findByIdAndDelete(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Servant not found" });
    }
    return response
      .status(200)
      .send({ message: "Servant deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
