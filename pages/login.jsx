import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { userService } from '../services';
import { Alert, Button, Card, CardContent, CardHeader, CircularProgress, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';


function Login() {
    const router = useRouter();

    useEffect(() => {
        if (userService.userValue) {
            router.push('/');
        }
    }, []);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Debe ser un email valido!").required('El email es requerido'),
        password: Yup.string().required('La contraseña es requerida')
    });
    const formOptions = { 
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: '',
            password: ''
        }

    };

    const {  handleSubmit, setError, formState, control } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ email, password }) {
        
        return userService.login(email, password)
            .then(() => {
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(error => {
                if(typeof error === 'object' && error !== null){
                    setError('apiError', { message: error.message });
                }else{
                    setError('apiError', { message: error });
                }
            });
    }

    return (
        <>
            <Head>
                <title>App Reactores</title>                
            </Head>

            <Box height={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Card sx={{ width: 500, p:3,m:5}}>
                    <CardHeader title={"App Reactores"}/>                
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name="email"                                                                                     
                                control={control}
                                render={({ field }) => <TextField sx={{my:2}} {...field} label="Email" helperText={errors.email?.message} fullWidth/>}
                            />

                            <Controller
                                name="password"                                                                                     
                                control={control}
                                render={({ field }) => <TextField sx={{my:2}} {...field} label="Contraseña" type={"password"} fullWidth/>}
                            />
                    
                            <Button sx={{my:2}} type="submit" variant="contained" disabled={formState.isSubmitting} fullWidth>
                                {formState.isSubmitting && <CircularProgress/> }
                                Login
                            </Button>

                            {errors.apiError &&
                                <Alert severity='error' >{errors.apiError?.message}</Alert>                            
                            }                                
                            
                        </form>
                    </CardContent>                                
                </Card>                        
            </Box>
        </>
    );
}

export default Login;