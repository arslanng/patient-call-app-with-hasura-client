import React from "react";
import { useMutation, useSubscription } from "@apollo/client";
import { DELETE_PATIENT, ALL_PATIENTS_SUB } from "./queries";
import { Button, Row, Col } from "antd";
import WaitingPatient from "../../components/WaitingPatient";
import styles from "./styles.module.css";

import { useParams } from "react-router-dom";

function Doctor() {
  const { company } = useParams();

  const { data, loading } = useSubscription(ALL_PATIENTS_SUB, {
    variables: {
      company: company,
    },
  });

  const [deletePatient, { loading: delete_button_loading }] =
    useMutation(DELETE_PATIENT);

  if (loading) {
    return <>Loading...</>;
  }

  const patients = data.patients;
  const waiting_patients = data.patients.filter(
    (patient) => patient.status === "bekle"
  );

  return (
    <Row gutter={24}>
      <Col xl={8} md={10}>
        <h1 className={styles.header}>Bekleyen Hastalar</h1>
        <WaitingPatient waiting_patients={waiting_patients} />
      </Col>
      <Col xl={8} md={10}>
        <h1 className={styles.header}>Çağrılan Hasta</h1>
        <div className={styles.list}>
          {patients &&
            patients.map(
              (patient) =>
                patient.status === "gel" && (
                  <div key={patient.id} className={styles.listItem}>
                    <p>{patient.registration_number} </p>
                    <Button
                      loading={delete_button_loading}
                      onClick={() =>
                        deletePatient({
                          variables: {
                            deletePatientId: patient.id,
                          },
                        })
                      }
                    >
                      Sil
                    </Button>
                  </div>
                )
            )}
        </div>
      </Col>
    </Row>
  );
}

export default Doctor;
