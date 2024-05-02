import {Account, Client, ID } from 'react-native-appwrite';

export const config ={
    endpoint: "https://cloud.appwrite.io/v1",
    platform: 'com.aadi.auro',
    projectId: '6633bf640016952f5722',
    databaseId:'6633c5cf000de627cb4c',
    userCollectionId: '6633c5fb002524630d46',
    videoCollectionId:'6633c68b00228ed52bca',
    storageId: '6633c8240008432d7b95'
    
}

// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
    const account = new Account(client);

  export  const createUser= ()=>{
        account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
            .then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });

    }

;