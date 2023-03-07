import Instance from '../helper/Axios';

// ดึงข้อมูลแบบแบ่งหน้า
export async function getTreatmentType(pageSize, currentPage, search, status) {
  try {
    const response = await Instance.get(`treatment/getTreatment?pageSize=${pageSize}&currentPage=${currentPage}&search=${search}&status=${status}`);
    return await response.data;
  } catch (error) {
    console.log('error', error);
  }
}

// ดึงข้อมูลตาม id
export async function getDetalTreatmentType(id) {
  try {
    const response = await Instance.get(`treatment/getDetailTreatment/${id}`);
    return await response.data;
  } catch (error) {
    console.log('error', error);
  }
}

// ดึงข้อมูลประเภทการรักษาทั้งหมด
export async function getTreatmentTypeAll() {
  try {
    const response = await Instance.get('treatment/getTreatmentAll');
    return await response.data;
  } catch (error) {
    console.log('error', error);
  }
}

// เพิ่มข้อมูล
export async function createTreatmentType(data) {
  try {
    const response = await Instance.post(`treatment/createTreatment`, data);
    return await response.data;
  } catch (error) {
    console.log('error', error);
  }
}

// แก้ไขข้อมูล
export async function updateTreatmentType(id, data) {
  try {
    const response = await Instance.put(`treatment/updateTreatment/${id}`, data);
    return await response.data;
  } catch (error) {
    console.log('error', error);
  }
}

// อัพเดทสถานะข้อมูล
export async function updateStstusTreatmentType(id, data) {
  try {
    const response = await Instance.put(`treatment/updateStatusTreatment/${id}`, data);
    return await response.data;
  } catch (error) {
    console.log('error', error);
  }
}

// ลบข้อมูล
export async function deleteTreatmentType(id) {
  try {
    const response = await Instance.delete(`treatment/deleteTreatment/${id}`);
    return await response.data;
  } catch (error) {
    console.log('error', error);
  }
}
