import Instance from '../helper/Axios';

// ดึงข้อมูลแบบแบ่งหน้า
export async function getDoctor(pageSize, currentPage, search, treatment, status) {
  try {
    const response = await Instance.get(`doctor/getDoctor?pageSize=${pageSize}&currentPage=${currentPage}&search=${search}&treatment=${treatment}&status=${status}`);
    return await response.data;
  } catch (error) {
    console.log('error', error);
  }
}

export async function getDetailDoctor(id){
  try {
    const response = await Instance.get(`doctor/getDetailDoctor/${id}`);
    return await response.data;
  }catch (error){
    console.log('error',error)
}
}

export async function createDoctor(data){
  try{
    const response = await Instance.post('doctor/createDoctor', data);
    return await response.data;
  } catch (error){
    console.log('error',error)
  }
}


 export async function updateDoctor(id, data){
  try{
    const response = await Instance.put(`doctor/updateDoctor/${id}`, data);
    return await response.data;
  }catch (error){
    console.log('error',error)
 }
}



 export async function updateStatusDoctor(id, data) {
  try {
    const response = await Instance.put(`doctor/updateStatusDoctor/${id}`, data);
    return await response.data;
  }catch (error){
    console.log('error',error)
 }
}

 export async function deleteDoctor(id){
  try {
    const response = await Instance.delete(`doctor/deleteDoctor/${id}`);
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}