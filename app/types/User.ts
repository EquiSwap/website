export interface IUser {
    id: string;
    username: string;
    email: string;
    profilePicture?: string;
    displayName?: string;
    dateOfBirth?: Date;
    postcode?: string;
    street?: string;
    county?: string;
    country?: string;
}

export class User implements IUser {
    readonly id: string;
    readonly username: string;
    readonly email: string;
    profilePicture?: string;
    displayName?: string;
    dateOfBirth?: Date;
    postcode?: string;
    street?: string;
    county?: string;
    country?: string;

    constructor(props: IUser) {
        this.id = props.id;
        this.username = props.username;
        this.email = props.email;
        this.profilePicture = props.profilePicture;
        this.displayName = props.displayName;
        this.dateOfBirth = props.dateOfBirth;
        this.postcode = props.postcode;
        this.street = props.street;
        this.county = props.county;
        this.country = props.country;
    }

    public equals(other: IUser) : boolean {
        return this.id === other.id;
    }

    public toJSON() {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            profilePicture: this.profilePicture,
            displayName: this.displayName,
            dateOfBirth: this.dateOfBirth,
            postcode: this.postcode,
            street: this.street,
            county: this.county,
            country: this.country,
        }
    }
}

export const GuestUser: IUser = {
    id: "$guest",
    username: "guest",
    email: "guest@equiswap.xyz",
    profilePicture: undefined,
    displayName: "Guest User",
    dateOfBirth: undefined,
    postcode: undefined,
    street: undefined,
    county: undefined,
    country: undefined,
};
