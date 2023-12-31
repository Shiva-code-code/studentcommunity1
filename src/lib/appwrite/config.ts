import {Client, Account, Databases, Storage, Avatars} from 'appwrite';

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    usercollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
}


export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

// appwrite
//   .account.createSession('email@example.com', 'password')
//   .then(response => {
//     console.log('Authentication successful:', response);

//     // Make an API call (example: list documents in a collection)
//     const collectionId = 'your_collection_id'; // Replace with your actual collection ID

//     appwrite
//       .database.listDocuments(collectionId)
//       .then(documents => {
//         console.log('Documents:', documents);
//       })
//       .catch(error => {
//         console.error('Error listing documents:', error);
//       });
//   })
//   .catch(error => {
//     console.error('Authentication failed:', error);
//   });