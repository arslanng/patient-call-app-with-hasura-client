import React, { useEffect } from "react";
import { useSubscription } from "@apollo/client";
import { ALL_PATIENTS_SUB } from "./queries";
import { Row, Col } from "antd";
import styles from "./styles.module.css";
import useSound from "use-sound";
import bibipSfx from "../../sound/bibip.mp3";

function Patient() {
  const { data, loading } = useSubscription(ALL_PATIENTS_SUB);
  const [play] = useSound(bibipSfx);

  useEffect(() => {
    play();
  }, [data, play]);

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
      <h1 className={styles.header}>SAĞLIK SERVİSİNE HOŞGELDİNİZ</h1>
      <div className={styles.content}>
        <h2>BEKLEME LİSTESİ</h2>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <div className={styles.listLeft}>
                  <h2 style={{ textAlign: "start" }}>Renault</h2>

                  {renault_patient &&
                    renault_patient.map(
                      (patient) =>
                        patient.status === "bekle" && (
                          <p className={styles.listItems} key={patient.id}>
                            {patient.registration_number}
                          </p>
                        )
                    )}
                </div>
              </Col>
              <Col span={12} >
                <div className={styles.listRight}>
                  <h2 style={{ textAlign: "start" }}>Horse</h2>

                  {horse_patient &&
                    horse_patient.map(
                      (patient) =>
                        patient.status === "bekle" && (
                          <p className={styles.listItems} key={patient.id}>
                            {patient.registration_number}
                          </p>
                        )
                    )}
                </div>
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
