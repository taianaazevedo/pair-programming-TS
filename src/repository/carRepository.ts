import client from "../config/database.js";

async function getCars() {
  return await client.cars.findMany();
   
}

async function getCar(id: number) {
  return await client.cars.findUnique({where: {id}});
}

async function getCarWithLicensePlate(licensePlate: string) {
  return await client.cars.findUnique({where: {licensePlate}})
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return await client.cars.create({
    data: {
      model, 
      licensePlate, 
      year, 
      color
    }
  });
}

async function deleteCar(id: number) {
  return await client.cars.delete({where: {id}});
}

async function updateCar(id: number, color: string){
  return await client.cars.update({
    where: {id},
    data: {color}
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
  updateCar
}

export default carRepository;