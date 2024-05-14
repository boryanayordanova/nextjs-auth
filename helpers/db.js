import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://boryanayourdanova:admin-bory@cluster0.gk9f8c2.mongodb.net/nextjs-auth?retryWrites=true&w=majority&appName=Cluster0"
  );

  return client;
}
