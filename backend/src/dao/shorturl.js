import shortUrlSchema from "../models/shorturl.js";

export const saveShortUrl = async (shorturl, longurl, userId) => {
  const newUrl = new shortUrlSchema({
    fullurl: longurl,
    shorturl: shorturl,
  });
  if (userId) {
    newUrl.userId = userId;
  }
  newUrl.save();
};

export const getShortUrl = async (shortUrl) => {
    return await shortUrlSchema.findOneAndUpdate({shorturl: shortUrl}, { $inc: { clicks: 1 } })
}