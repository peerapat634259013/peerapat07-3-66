import React, { Fragment, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import PrefixDoctor from '../../../../../data/prefixDoctor.json';
import { TextSelect } from '../../../../../components/TextSelect';
import { getTreatmentTypeAll } from '../../../../../service/TreatmentType.Service';
import Schema from './Validation';
import { createDoctor,updateDoctor, getDetailDoctor} from '../../../../../service/Doctor.Service'

function FormDoctor() {
  const location = useLocation();
  const [dataTreatment, setDataTreatment] = useState([]);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    getTreatmentAll();
    if(location.state){
      getDetail(location.state)
    }
  }, [location.state]);


  async function getDetail(id) {
    let res = await getDetailDoctor(id);
    if (res) {
      if (res.statusCode === 200 && res.taskStatus) {
        setDetail(res.data);
      }
    }
  }

  async function getTreatmentAll() {
    let res = await getTreatmentTypeAll();
    if (res) {
      if (res.statusCode === 200 && res.taskStatus) {
        setDataTreatment(res.data);
      }
    }
  }
  async function save(data){
    let res = await createDoctor(data)
    if(res)
    if(res.statusCode === 200 && res.taskStatus){
      alert('Success');
    }
  }

  async function save(data){
    let res =location.state ? await updateDoctor(location.state,data):await createDoctor(data);
    if(res)
    if(res.statusCode === 200 && res.taskStatus){
      alert(location.state ? 'Update Success' : 'Create Success');
    }
  }


  // console.log('location', location);

  return (
    <Fragment>
      <div className="w-full">
        <div className="d-flex justify-content-end">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/doctor" className="nav-breadcrumb">
                  ข้อมูลรายชื่อแพทย์
                </Link>
              </li>
              <li className="breadcrumb-item text-black fw-semibold" aria-current="page">
                {location.state ? 'แก้ไข' : 'เพิ่ม'}ข้อมูลรายชื่อแพทย์
              </li>
            </ol>
          </nav>
        </div>
        <div className="w-full mb-5">
          <h2 className="title-content">{location.state ? 'แก้ไข' : 'เพิ่ม'}ข้อมูลรายชื่อแพทย์</h2>
        </div>
        <Formik
          enableReinitialize={true}
          validationSchema={Schema}
          initialValues={{
            prefixId: detail ? detail.prefix_id:'',
            name: detail ? detail.name:'',
            lastname: detail ? detail.lastname:'',
            treatment: detail ? detail.treatment_type_id:'',
          }}
          onSubmit={(value) => {
            console.log('submit :', value);
            save(value);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <div className="row">
                    <div className="col-12 px-1 mt-2">
                      <label>คำนำหน้า</label>
                      <TextSelect
                        id="prefixId"
                        name="prefixId"
                        options={PrefixDoctor}
                        value={PrefixDoctor.filter((a) => a.id === values.prefixId)}
                        onChange={(item) => {
                          setFieldValue('prefixId', item.id);
                        }}
                        getOptionLabel={(z) => z.name}
                        getOptionValue={(x) => x.id}
                      />
                    </div>
                    <div className="col-12 px-1 mt-2">
                      <label>ชื่อ</label>
                      <input
                        name="name"
                        type="text"
                        value={values.name}
                        className={`form-input ${touched.name ? (errors.name ? 'invalid' : 'valid') : ''}`}
                        onChange={(e) => {
                          setFieldValue('name', e.target.value);
                        }}
                      />
                      <ErrorMessage component="div" name="name" className="text-invalid" />
                    </div>
                    <div className="col-12 px-1 mt-2">
                      <label>นามสกุล</label>
                      <input
                        name="lastname"
                        type="text"
                        value={values.lastname}
                        className={`form-input ${touched.lastname ? (errors.lastname ? 'invalid' : 'valid') : ''}`}
                        onChange={(e) => {
                          setFieldValue('lastname', e.target.value);
                        }}
                      />
                      <ErrorMessage component="div" name="lastname" className="text-invalid" />
                    </div>
                    <div className="col-12 px-1 mt-2">
                      <label>ประเภทการรักษา</label>
                      <TextSelect
                        id="treatment"
                        name="treatment"
                        options={dataTreatment}
                        value={dataTreatment.filter((a) => a.id === values.treatment)}
                        onChange={(item) => {
                          setFieldValue('treatment', item.id);
                        }}
                        getOptionLabel={(z) => z.name}
                        getOptionValue={(x) => x.id}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-success mx-1">
                      บันทึก
                    </button>
                    <button type="reset" className="btn btn-secondary mx-1">
                      ล้างค่า
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}

export default FormDoctor;


