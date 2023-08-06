import { gql } from "@apollo/client";

export const UPDATE_PATIENT = gql`
  mutation MyMutation($data: patients_set_input, $updatePatientId: Int!) {
    update_patients_by_pk(pk_columns: { id: $updatePatientId }, _set: $data) {
      id
    }
  }
`;