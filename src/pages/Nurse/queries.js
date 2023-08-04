import { gql } from "@apollo/client";

export const ADD_PATIENT = gql`
  mutation insertPatient($data: patients_insert_input!) {
  insert_patients_one(object: $data) {
    company
    id
    status
    registration_number
  }
}
`;
