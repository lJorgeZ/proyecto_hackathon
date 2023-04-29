import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRow,
    IonTitle,
  } from '@ionic/react';
  
import { useLocation, useParams } from 'react-router-dom';
import { calendarNumberSharp, calendarNumberOutline, saveOutline, saveSharp } from 'ionicons/icons';

const Login: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonList>
                    <IonTitle>Login</IonTitle>
                </IonList>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel>Correo institucional</IonLabel>
                        <IonInput value="correo@universidad-une.com"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Contraseña</IonLabel>
                        <IonInput type="password"></IonInput>
                    </IonItem>
                    <IonButton>Login</IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Login;