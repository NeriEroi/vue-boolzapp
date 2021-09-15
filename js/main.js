Vue.config.devtools = true;

const app = new Vue (
    {
    el: ".container",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                immagine: "./img/avatar_1.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                immagine: "./img/avatar_2.jpg",
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                immagine: "./img/avatar_3.jpg",
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                immagine: "./img/avatar_4.jpg",
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            }
        ],
        newMessage: '',
        selectedChat: 0,
    },
    mounted() {   
    },
    methods: {
        getMessageClass(index) {
            let thisContact = this.contacts[this.selectedChat];
            let messageClass = 'message ' + thisContact.messages[index].status;
            return messageClass;
        },
        addNewMessage() {
            let thisContact = this.contacts[this.selectedChat];

            thisContact.messages.push({
                message: this.newMessage,
                date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
                status: 'sent',
            });
            this.newMessage = "";

            setTimeout(() => {
                thisContact.messages.push({
                    message: "ok",
                    date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
                    status: 'received',
                })
            }, 1000);
        },
        showChat(index) {
            this.selectedChat = index;
        }
    }
}
);