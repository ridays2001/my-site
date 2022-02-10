import { MongoClient } from 'mongodb';

class MongoDB extends MongoClient {
	public constructor() {
		super(process.env.DB_URI as string);
	}

	public connect() {
		return super.connect();
	}
}

const db = new MongoDB();

export default db;
