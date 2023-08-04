import React from "react";
import { useSubscription } from "@apollo/client";
import { ALL_PATIENTS_SUB } from "./queries";
import { Row, Col } from "antd";
import styles from "./styles.module.css";

function Patient() {
  const { data, loading } = useSubscription(ALL_PATIENTS_SUB);

  if (loading) {
    return <>Loading...</>;
  }

  const horse_patient = data.patients.filter(
    (patient) => patient.company === "Horse"
  );
  const renault_patient = data.patients.filter(
    (patient) => patient.company === "Renault"
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Sağlık Servisine Hoşgeldiniz</h1>
      <div className={styles.content}>
        <h2>HASTA BEKLEME LİSTESİ</h2>
        <Row gutter={3}>
          <Col span={12}>
            <Row gutter={24}>
              <Col span={11} className={styles.list}>
                <h2 style={{textAlign: "start"}}>Renault</h2>

                {renault_patient &&
                  renault_patient.map(
                    (patient) =>
                      patient.status === "bekle" && (
                        <p className={styles.listItems} key={patient.id}>
                          {patient.registration_number}
                        </p>
                      )
                  )}
              </Col>
              <Col span={11} className={styles.list}>
                <h2 style={{textAlign: "start"}}>Horse</h2>

                {horse_patient &&
                  horse_patient.map(
                    (patient) =>
                      patient.status === "bekle" && (
                        <p className={styles.listItems} key={patient.id}>
                          {patient.registration_number}
                        </p>
                      )
                  )}
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24} className={styles.call}>
                <h2>ÇAĞRILAN HASTA/Poliklinik - 1: Renault</h2>
                <h2>
                  {renault_patient &&
                    renault_patient.map(
                      (patient) =>
                        patient.status === "gel" && (
                          <p className={styles.callItem} key={patient.id}>
                            {patient.registration_number}
                          </p>
                        )
                    )}
                </h2>
              </Col>
              <Col span={24} className={styles.call}>
                <h2>ÇAĞRILAN HASTA/Poliklinik - 4: Horse</h2>
                <h2>
                  {horse_patient &&
                    horse_patient.map(
                      (patient) =>
                        patient.status === "gel" && (
                          <p className={styles.callItem} key={patient.id}>
                            {patient.registration_number}
                          </p>
                        )
                    )}
                </h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Patient;
