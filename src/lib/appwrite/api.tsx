import { ID } from 'appwrite'

import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from './config';
//import { error } from "console";
export async function createUserAccount(user:INewUser){
    try{
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        );
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl
        });
    
        return newAccount;

    } catch(error){
        console.error(error);
        return error;

    }
}


export async function saveUserTODB(user: {
    accountId: string;
    name: string;
    email: string;
    username: string;
    imageUrl?: string;
}) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user,
        );

        return newUser;
    }catch(error){
        console.error(error);
    }
}

// export async function signInAccount(user: { email: string; password: string }) {
//     try {

//     }


