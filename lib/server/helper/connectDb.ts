import mongoose from "mongoose";
declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}

const MONGODB_URI = `mongodb+srv://USER_NAZ:AiUOSt0hUz17re0F@cluster0.loat0zb.mongodb.net/Nex-Bridge?retryWrites=true&w=majority&appName=Cluster0`;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function _dbConnect(): Promise<{ type: "cache" | "new"; conn: any }> {
  if (cached.conn) {
    return { type: "cache", conn: cached.conn };
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return { type: "new", conn: cached.conn };
}

export default async function dbConnect() {
  try {
    const r = await _dbConnect();
    if (r.type === "cache") {
      console.log("Cache Database Connection");
    } else {
      console.log("New Database Connection");
    }
  } catch (e) {
    console.log("Failed to connect Database");
  }
}
