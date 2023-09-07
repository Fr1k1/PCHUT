import axiosClient from "../axios";

export function getAllGraphicCards() {
  return axiosClient.get("/gpus").then(({ data }) => {
    return data;
  });
}

export function getAllGraphicCardsPaginated(page) {
  return axiosClient
    .get(`/gpus/?paginate=true&page=${page}`)
    .then(({ data }) => {
      return data;
    });
}

export function getGraphicCardById(id) {
  return axiosClient.get(`/gpus/${id}`).then(({ data }) => {
    return data;
  });
}

export function getAllCPUs() {
  return axiosClient.get("/cpus").then(({ data }) => {
    return data;
  });
}

export function getAllCPUsPaginated(page) {
  return axiosClient
    .get(`/cpus/?paginate=true&page=${page}`)
    .then(({ data }) => {
      return data;
    });
}

export function getCPUById(id) {
  return axiosClient.get(`/cpus/${id}`).then(({ data }) => {
    return data;
  });
}

export function getMotherboardById(id) {
  return axiosClient.get(`/motherboards/${id}`).then(({ data }) => {
    return data;
  });
}

export function getAllMotherboardsPaginated(page) {
  return axiosClient
    .get(`/motherboards/?paginate=true&page=${page}`)
    .then(({ data }) => {
      return data;
    });
}

export function getAllRAMs() {
  return axiosClient.get("/rams").then(({ data }) => {
    return data;
  });
}

export function getAllRAMsPaginated(page) {
  return axiosClient
    .get(`/rams/?paginate=true&page=${page}`)
    .then(({ data }) => {
      return data;
    });
}

export function getAllStorages() {
  return axiosClient.get("/storages").then(({ data }) => {
    return data;
  });
}

export function getAllPSUs() {
  return axiosClient.get("/psus").then(({ data }) => {
    return data;
  });
}

export function getAllMotherboards() {
  return axiosClient.get("/motherboards").then(({ data }) => {
    return data;
  });
}

export function getAllCases() {
  return axiosClient.get("/pccases").then(({ data }) => {
    return data;
  });
}

export function getAllProductsOnDiscount() {
  return axiosClient.get("/discount-components").then(({ data }) => {
    return data;
  });
}

export function getComponentById(id) {
  return axiosClient.get(`/component/${id}`).then(({ data }) => {
    return data;
  });
}
