import * as yup from 'yup';
import { string,mixed } from 'yup';
export const  yupSchema = yup.object().shape({
    name: string().required({ message: "This field is riqured" }),
    title:string().required({ message: "This field is riqured" }),
    information:string().required({ message: "This field is riqured" }),
    workers: string().required({ message: "This field is riqured" }),
    artPath: mixed().required('File is required'),
});
