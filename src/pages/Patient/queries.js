import { gql } from "@apollo/client";

export const ALL_PATIENTS_SUB = gql`
  subscription AllPatientsSub {
    patients {
      company
      id
      status
      registration_number
      created_at
      updated_at
    }
  }
`;
