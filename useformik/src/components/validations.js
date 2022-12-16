import { object, string, ref } from 'yup';

const validations = object({    
    email: string().email('geçerli bir email giriniz').required('zorunlu alan'),//istediğimiz hata mesajını bu şekilde yazabiliriz
    password: string().min(5, 'parolanız en az 5 karakter olmalıdır').required('zorunlu alan'),
    confirmPassword: string().oneOf([ref('password')], 'parolalar uyuşmuyor').required('zorunlu alan')
  });

  export default validations;