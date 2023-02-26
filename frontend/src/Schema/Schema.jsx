import * as yup from 'yup';
import { string, mixed } from 'yup';
export const yupSchema = yup.object().shape({
    name: string().required({ message: "This field is riqured" }),
    title: string().required({ message: "This field is riqured" }),
    information: string().required({ message: "This field is riqured" }),
    description: string().required({ message: "This field is riqured" }),
    rate: yup.number().required({ message: "This field is riqured" }),
    price: yup.number().required({ message: "This field is riqured" }),
    percantagePrice: yup.number().required({ message: "This field is riqured" }),
    sale: yup.boolean(),
    workers: string().required({ message: "This field is riqured" }),
    catagory: string().required({ message: "This field is riqured" }),
    // artPath: mixed().required('File is required'),
    imagePath: mixed().required('File is required'),
});
