import patientsData from '../../data/patients.json';
import { NonSensitivePatientEntry, PatientEntry, NewPatientEntry } from '../types';
import { v1 as uuid } from 'uuid';

const patients: PatientEntry[] = patientsData as PatientEntry[];

const getEntries = (): PatientEntry[] => {
  return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const findById = (id: string): PatientEntry | undefined => {
  const patient = patients.find((p) => p.id === id);
  return patient;
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const id = uuid();
  const newPatientEntry = {
    id,
    ...entry,
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  findById,
  addPatient,
};
