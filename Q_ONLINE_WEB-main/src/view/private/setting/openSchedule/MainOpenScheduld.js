import React, { Fragment, useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { TextSelect } from '../../../../components/TextSelect';
import ShowData from './ShowData';


function MainOpenSchdule() {
  const [dataTreatment, setDataTreatment] = useState([]);
  const [data, setData] = useState([]);
  const [pagin, setPagin] = useState({
    totalRow: 1,
    pageSize: 10,
    currentPage: 1,
    totalPage: 1,
  });

  return (
    <Fragment>
      <div className="w-full">
        <div className="d-flex justify-content-end">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
             
              <li className="breadcrumb-item text-black fw-semibold" aria-current="page">
           ข้อมูลการเปิดจองคิว
              </li>
            </ol>
          </nav>
        </div>
        <div className="w-full mb-5">
          <h2 className="title-content">  ข้อมูลการเปิดจองคิว</h2>
        </div>
        <Formik
          enableReinitialize={true}
          // validationSchema={Schema}
          initialValues={{
            search: '',
            treatment: '',
            status: '',
          }}
          onSubmit={(value) => {
            console.log('submit :', value);
           //fetchData(pagin.pageSize, 1, value.search, value.treatment, value.status);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <div className="row">
                <div className="col-12 col-md-7 col-lg-3">
                  <label>ค้นหา</label>
                  <input
                    value={values.search}
                    type="text"
                    className="form-input"
                    onChange={(e) => {
                      setFieldValue('search', e.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-7 col-lg-3">
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
                <div className="col-12 col-md-7 col-lg-3">
                  <label>วันที่เปิดจองคิว</label>
                  <input
                    // value={values.search}
                    type="date"
                    className="form-input"
                    onChange={(e) => {
                    //   setFieldValue('search', e.target.value);
                    }}
                  />
                 
                </div>
                <div className="col-12 col-md-7 col-lg-3">
                  <label>ถึงวันที่</label>
                  <input
                    // value={values.search}
                    type="date"
                    className="form-input"
                    onChange={(e) => {
                    //   setFieldValue('search', e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-success mx-1">
                  <i className="fa-solid fa-magnifying-glass mx-1"></i>
                  ค้นหา
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary mx-1"
                  onClick={() => {
                    //fetchData(10, 1, '', '', '');
                  }}
                >
                  <i className="fa-solid fa-rotate-left mx-1"></i>
                  ล้างค่า
                </button>
              </div>
              <div className="w-full mt-5">
                <ShowData
                  data={data}
                  pagin={pagin}
                 // updateStatus={updateStatus}
                  //deleteData={deleteData}
                 // changePage={(page) => {
                   /* fetchData(pagin.pageSize, page, values.search, values.treatment, values.status);
                  }}*/
                 /* changePageSize={(pagesize) => {
                    fetchData(pagesize, 1, values.search, values.treatment, values.status);
                  }}*/
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}


export default MainOpenSchdule
