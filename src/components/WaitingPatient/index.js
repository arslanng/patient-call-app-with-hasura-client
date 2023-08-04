import { useEffect } from "react";
import { UPDATE_PATIENT } from "./queries";
import { useMutation } from "@apollo/client";
import { Button } from "antd";
import styles from "./styles.module.css";
import useSound from "use-sound";
import bibipSfx from "../../sound/bibip.mp3";

function WaitingPatient({ waiting_patients }) {
  const [updatePatient, { loading: update_button_loading }] =
    useMutation(UPDATE_PATIENT);
  const [play] = useSound(bibipSfx);

  useEffect(() => {
    if (waiting_patients.length > 0) {
      play();
    }
  }, [waiting_patients, play]);

  return (
    <div className={styles.list}>
      {waiting_patients &&
        waiting_patients.map((patient) => (
          <div key={patient.id} className={styles.listItem}>
            <p>{patient.registration_number} </p>
            <Button
              loading={update_button_loading}
              onClick={() =>
                updatePatient({
                  variables: {
                    updatePatientId: patient.id,
                    data: {
                      status: "gel",
                    },
                  },
                })
              }
            >
              Çağır
            </Button>
          </div>
        ))}
    </div>
  );
}

export default WaitingPatient;
