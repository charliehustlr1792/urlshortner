import shortUrlSchema from "../models/shorturl.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (shorturl, longurl, userId) => {
  try {
    const newUrl = new shortUrlSchema({
      fullurl: longurl,
      shorturl: shorturl,
    });
    if (userId) {
      newUrl.userId = userId;
    }
    await newUrl.save();
  } catch (err) {
    if (err.code === 11000) {
      throw new ConflictError("Short URL already exists");
    }
    throw new Error(err);
  }
};

export const getShortUrl = async (shortUrl) => {
  return await shortUrlSchema.findOneAndUpdate(
    { shorturl: shortUrl },
    { $inc: { clicks: 1 } }
  );
};
