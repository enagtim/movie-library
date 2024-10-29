import { FormEvent } from 'react';

export interface SubmitEvent {
   onSubmit: (event: FormEvent<HTMLFormElement>) => void  
}