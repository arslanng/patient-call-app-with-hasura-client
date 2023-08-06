import { gql } from "@apollo/client";

export const ALL_PATIENTS_SUB = gql`
  subscription AllPatientsSubwithCompany($company: String!) {
    patients(where: { company: { _eq: $company } }) {
      company
      id
      status
      registration_number
      created_at
      updated_at
    }
  }
`;

export const UPDATE_PATIENT = gql`
  mutation MyMutation($data: patients_set_input, $updatePatientId: Int!) {
    update_patients_by_pk(pk_columns: { id: $updatePatientId }, _set: $data) {
      id
    }
  }
`;

export const DELETE_PATIENT = gql`
  mutation MyMutation($deletePatientId: Int!) {
    delete_patients_by_pk(id: $deletePatientId) {
      id
    }
  }
`;
