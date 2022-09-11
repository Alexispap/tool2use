import Image from 'next/image';
import Card from '../ui/Card';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
  IonSearchbar
} from '@ionic/react';

import Notifications from './Notifications';
import { useState, useEffect } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import moment from 'moment';

moment.locale('de');


const FeedCard = ({ tool, author, date, price, authorAvatar, image }) => (
    <Card className="my-4 mx-auto">
      <div className="h-80 w-full relative">
        <Image className="rounded-t-xl" objectFit="cover" src={image} alt="" layout='fill' />
      </div>
      <div className="px-6 py-6 bg-green-100 rounded-b-xl dark:bg-gray-900">
        <h2 className="font-bold text-2xl text-green-900 dark:text-gray-100 mb-4">
          {tool}
        </h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-10 h-10 relative">
            <Image layout='fill' src={authorAvatar} className="rounded-full" alt="" />
          </div>
          <h3 className="text-green-900 dark:text-gray-200 m-l-8 text-lg font-medium">
            {author}
          </h3>
        </div>
        <div className='flex flex-row justify-between'>
          <div className="text-green-900 dark:text-gray-200 text-lg font-bold">
            {moment(date).fromNow()}
          </div>
          <h2 className="text-green-900 dark:text-white text-lg font-bold">
            ab {price} € / Tag
          </h2>
        </div>
      </div>
    </Card>
);

const Feed = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchText, setSearchText] = useState('');

  homeItems.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  let filteredItems = homeItems.filter((item) => {
    if (searchText == '') {
      return item;
    } else if (item.tool.toLowerCase().includes(searchText.toLowerCase())) {
      return item;
    }
  });




  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSearchbar
            placeholder="Werkzeug oder Bastelprojekt finden?"
            class='border-10 border-green-100'
            onIonChange={e => setSearchText(e.detail.value)}
          />
          {/*     <IonTitle>Feed</IonTitle> */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">

          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        {filteredItems.map((i, index) => (
          <FeedCard {...i} key={index} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feed;
