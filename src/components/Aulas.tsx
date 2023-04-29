import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonPage,
    IonTitle,
  } from '@ionic/react';
  
import { useLocation } from 'react-router-dom';
import { calendarNumberSharp, calendarNumberOutline, saveOutline, saveSharp } from 'ionicons/icons';
import './Menu.css';

const Aulas: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Aulas</IonTitle>
            </IonHeader>
            <IonContent>
                <IonCard >
                    <img alt="Test" src="https://canacochihuahua.com/wp-content/uploads/2019/12/COMPUTO-01.jpg" />
                    <IonCardHeader>
                        <IonCardTitle>Aula 1</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Here's a small text description for the card content. Nothing more, nothing less.
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <img alt="Test" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <IonCardHeader>
                        <IonCardTitle>Aula 2</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Here's a small text description for the card content. Nothing more, nothing less.
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Aulas;