import {Client,ID,Databases,Storage,Query} from 'appwrite';
import config from '../config/config';

export class Service{
client = new Client();
databases ;
bucket ;
constructor(){
    this.client
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectID)

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client)
}
async createPost(title,slug,content,featuredImage,status,userId){
    try {
        return await this.databases.createDocument(config.appwriteDatabaseID,config.appwriteCollectionID,slug,{title,content,featuredImage,status})
    } catch (error) {
        
    }
}

async updatePost(slug,{title,content,featuredImage,status,userId}){
    try {
        return await this.databases.updateDocument(config.appwriteDatabaseID,config.appwriteCollectionID,slug,{title,content,featuredImage,status})
    } catch (error) {
        
    }
}
async deletePost(slug)
{
 try {
    await this.databases.deleteDocument(config.appwriteDatabaseID,config.appwriteCollectionID,slug);
    return true
 } catch (error) {
    return false
 }
}

async getPost(slug){
    try {
        return await this.databases.getDocument(config.appwriteDatabaseID,config.appwriteCollectionID,slug);
    } catch (error) {
        
    }
}

async getAllPost(queries=[Query.equal("status","Active")]){
    try {
        return await this.databases.listDocuments(config.appwriteDatabaseID,config.appwriteCollectionID,queries)
    } catch (error) {
        
    }
}

//file upload methods

async uploadFile(file){
try {
    return await this.bucket.createFile(config.appwriteBucketID,ID.unique(),file)
} catch (error) {
    
}
}

async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(config.appwriteBucketID,fileId)
    } catch (error) {
        
    }
}

getFilePreview(fileId){
return this.bucket.getFilePreview(config.appwriteBucketID,fileId)
}

}


const service = new Service();
export default service