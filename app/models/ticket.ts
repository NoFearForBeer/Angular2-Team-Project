export class Ticket {
    Id: string;
    BoughtAt: Date;
    Cost: number;
    Expired: boolean;
    Activated: boolean;
    DateActivated: Date; // ! it can be null
    ExpiresOn: Date;  // ! it can be null
    Duration: number;
    QRCode: string;
}
